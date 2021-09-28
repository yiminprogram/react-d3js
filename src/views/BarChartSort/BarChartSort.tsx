import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { scaleBand, axisLeft, scaleLinear, select, axisBottom, max } from 'd3';
import data from '../../assets/products.json';
import { Button } from '@material-ui/core';

// chart properties
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

// style
const Container = styled.section`
  padding: 2rem;
`;

const ButtonGroup = styled.div`
  button {
    margin: 0 1rem;
    text-transform: capitalize;
  }
`;

const Group = styled.g`
  font-size: 1rem;
`;

// component
const BarChartSort = () => {
  const xAxisRef = useRef<SVGGElement | null>(null);
  const yAxisRef = useRef<SVGGElement | null>(null);
  const rectRef = useRef<SVGGElement | null>(null);
  const [productsData, setProductsData] = useState<TProduct[]>(data);

  // x scale
  const x = scaleBand()
    .domain(productsData.map((d) => d.product))
    .range([0, chartWidth])
    .paddingInner(0.3)
    .paddingOuter(0.3);

  // y scale
  const y = scaleLinear()
    .domain([0, max(productsData.map((d) => d.store))!])
    .range([chartHeight, 0]);

  useEffect(() => {
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
  }, [x, y]);

  type TProduct = {
    product: string;
    color: string;
    store: number;
  };

  useEffect(() => {
    // render rect
    if (rectRef.current) {
      const rectGroup = select(rectRef.current);

      // get all rect element, abd data bind
      const bar = rectGroup
        .selectAll<SVGRectElement, TProduct>('rect')
        .data<TProduct>(productsData, (d) => d.product);

      bar
        .enter()
        .append('rect')
        .attr('x', (d) => x(d.product) as number)
        .attr('y', chartHeight)
        .attr('rx', 2)
        .attr('width', x.bandwidth)
        .attr('height', 0)
        .transition()
        .duration(1000)
        .attr('height', (d) => chartHeight - y(d.store))
        .attr('y', (d) => y(d.store))
        .attr('fill', (d) => `${d.color}55`)
        .attr('stroke', (d) => d.color)
        .attr('stroke-width', 3);

      bar
        .transition()
        .duration(1000)
        .attr('x', (d) => x(d.product) as number)
        .attr('y', (d) => y(d.store))
        .attr('height', (d) => chartHeight - y(d.store));

      bar.exit().remove();
    }
  }, [x, y, productsData]);

  // function
  const descendingData = () => {
    const value = productsData.sort((a, b) => b.store - a.store);
    setProductsData([...value]);
  };

  const ascendingData = () => {
    const value = productsData.sort((a, b) => a.store - b.store);
    setProductsData([...value]);
  };

  const randomData = () => {
    const value = productsData.sort(() => Math.random() - 0.5);
    setProductsData([...value]);
  };

  return (
    <Container>
      <ButtonGroup>
        <Button variant="contained" size="large" color="primary" onClick={descendingData}>
          Descending Data
        </Button>
        <Button variant="contained" size="large" color="primary" onClick={ascendingData}>
          Ascending Data
        </Button>
        <Button variant="contained" size="large" color="primary" onClick={randomData}>
          Random Data
        </Button>
      </ButtonGroup>
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

export default BarChartSort;
