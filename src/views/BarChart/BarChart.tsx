import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { scaleBand, axisLeft, scaleLinear, select, axisBottom, max } from 'd3';
import data from '../../assets/products.json';

const width = 1000;
const height = 800;
const margin = {
  top: 50,
  left: 50,
  bottom: 50,
  right: 50,
};
const chartWidth = width - margin.left - margin.right;
const chartHeight = height - margin.top - margin.bottom;

// x scale
const x = scaleBand()
  .domain(data.map((ele) => ele.product))
  .range([0, chartWidth])
  .paddingInner(0.3)
  .paddingOuter(0.3);

// y scale
const y = scaleLinear()
  .domain([0, max(data.map((ele) => ele.store)) as number])
  .range([chartHeight, 0]);

// style
const Container = styled.section`
  padding: 2rem;
`;

const Group = styled.g`
  font-size: 1rem;
`;

// component
const BarChart = () => {
  const xAxisRef = useRef<SVGGElement | null>(null);
  const yAxisRef = useRef<SVGGElement | null>(null);
  const rectRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    // create x axis
    if (xAxisRef.current) {
      const xAxisGroup = select(xAxisRef.current);

      const xAxis = axisBottom(x).tickPadding(10);

      xAxisGroup.call(xAxis);
    }

    // create y axis
    if (yAxisRef.current) {
      const yAxisGroup = select(yAxisRef.current);

      const yAxis = axisLeft(y).tickPadding(10);

      yAxisGroup.call(yAxis);
    }

    // create rect
    if (rectRef.current) {
      const rectGroup = select(rectRef.current);

      const bar = rectGroup.selectAll('rect').data(data);

      bar
        .enter()
        .append('rect')
        .attr('x', (d) => x(d.product) as number)
        .attr('y', (d) => y(d.store))
        .attr('rx', 2)
        .attr('width', x.bandwidth)
        .attr('height', (d) => chartHeight - y(d.store))
        .attr('fill', (d) => `${d.color}55`)
        .attr('stroke', (d) => d.color)
        .attr('stroke-width', 3);
    }
  }, []);

  return (
    <Container>
      <svg width={width} height={height}>
        <Group
          ref={xAxisRef}
          transform={`translate(${margin.left},${margin.top + chartHeight})`}
        ></Group>
        <Group ref={yAxisRef} transform={`translate(${margin.left},${margin.top})`}></Group>
        <Group ref={rectRef} transform={`translate(${margin.left},${margin.top})`}></Group>
      </svg>
    </Container>
  );
};

export default BarChart;
