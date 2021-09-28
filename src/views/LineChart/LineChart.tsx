import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { scaleLinear, select, axisBottom, extent } from 'd3';

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

const x = scaleLinear()
  .domain(extent(data) as [number, number])
  .range([0, chartWidth]);

const Container = styled.section`
  padding: 2rem;
`;

const SVG = styled.svg`
  background-color: #e0e0e0;
`;

const Group = styled.g`
  font-size: 1rem;
`;

const LineChart = () => {
  const xAxisRef = useRef<SVGGElement | null>(null);
  const yAxisRef = useRef<SVGGElement | null>(null);

  // const dataMax = d3.max(data);
  // const dataMin = d3.min(data);

  useEffect(() => {
    if (xAxisRef.current) {
      const xAxisGroup = select(xAxisRef.current);

      const xAxis = axisBottom(x).tickPadding(10);

      xAxisGroup.call(xAxis);
    }
  }, []);

  return (
    <Container>
      <SVG width={width} height={height}>
        <Group
          ref={xAxisRef}
          transform={`translate(${margin.left},${margin.top + chartHeight})`}
        ></Group>
        <Group ref={yAxisRef}></Group>
      </SVG>
    </Container>
  );
};

export default LineChart;
