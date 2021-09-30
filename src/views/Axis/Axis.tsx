import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { axisLeft, scaleLinear, select, axisBottom, extent } from 'd3';

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

const data = [1, 2, 3, 4, 5, 6];

const Container = styled.section`
  padding: 2rem;
`;

const Axis = () => {
  const xAxisRef = useRef<SVGGElement | null>(null);
  const yAxisRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    // x scale
    const x = scaleLinear()
      .domain(extent(data) as [number, number])
      .range([0, chartWidth]);

    // y scale
    const y = scaleLinear()
      .domain(extent(data) as [number, number])
      .range([chartHeight, 0]);

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
  }, []);

  return (
    <Container>
      <svg width={width} height={height}>
        <g ref={xAxisRef} transform={`translate(${margin.left},${margin.top + chartHeight})`}></g>
        <g ref={yAxisRef} transform={`translate(${margin.left},${margin.top})`}></g>
      </svg>
    </Container>
  );
};

export default Axis;
