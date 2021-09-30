import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { arc, pie, select, PieArcDatum } from 'd3';

const width = 600;
const height = 600;
const margin = {
  top: 50,
  left: 50,
  right: 50,
  bottom: 50,
};

const data: TData[] = [
  {
    product: 'apple',
    store: 10,
    color: '#f44336',
  },
  {
    product: 'orange',
    store: 10,
    color: '#ff9800',
  },
  {
    product: 'banana',
    store: 10,
    color: '#fdd835',
  },
  {
    product: 'lemon',
    store: 10,
    color: '#4caf50',
  },
  {
    product: 'blueberry',
    store: 10,
    color: '#2196f3',
  },
  {
    product: 'cherry',
    store: 10,
    color: '#3f51b5',
  },
  {
    product: 'grape',
    store: 10,
    color: '#673ab7',
  },
];

type TData = {
  product: string;
  store: number;
  color: string;
};

const Container = styled.section`
  padding: 2rem;
`;

const PieChart = () => {
  const pieGroup = useRef<SVGGElement | null>(null);

  useEffect(() => {
    // arc
    const circleArc = arc<PieArcDatum<TData>>()
      .innerRadius(0)
      .outerRadius(width / 2 - margin.left);

    // pie
    const circlePie = pie<TData>().value((d) => d.store);

    // create pie chart
    const svg = select(pieGroup.current);

    svg
      .selectAll('path')
      .data(circlePie(data))
      .enter()
      .append('path')
      .attr('d', circleArc)
      .attr('fill', (d) => d.data.color);
  }, []);

  return (
    <Container>
      <svg width={width} height={height}>
        <g ref={pieGroup} transform={`translate(${width / 2},${height / 2})`}></g>
      </svg>
    </Container>
  );
};

export default PieChart;
