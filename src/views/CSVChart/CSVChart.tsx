import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  line,
  scaleBand,
  csv,
  scaleLinear,
  select,
  axisBottom,
  axisRight,
  axisLeft,
  timeFormat,
  max,
} from 'd3';

const width = 1100;
const height = 800;
const margin = {
  top: 80,
  right: 80,
  bottom: 80,
  left: 80,
};

const chartWidth = width - margin.left - margin.right;
const chartHeight = height - margin.top - margin.bottom;

type TData = {
  time: Date;
  temperature: number;
  rain: number;
};

const Container = styled.section`
  padding: 1rem;
`;

const XAxisGroup = styled.g`
  font-size: 0.8rem;
`;

const YAxisTempGroup = styled.g`
  color: #ffa200;
  font-size: 1rem;
`;

const YAxisRainGroup = styled.g`
  color: #2196f3;
  font-size: 1rem;
`;

const LineChartCSV = () => {
  // data
  const [data, setData] = useState<TData[]>([]);
  // ref
  const xAxisRef = useRef<SVGGElement | null>(null);
  const yAxisTempRef = useRef<SVGGElement | null>(null);
  const yAxisRainRef = useRef<SVGGElement | null>(null);
  const temperatureRef = useRef<SVGGElement | null>(null);
  const rainRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    (async () => {
      const results = await csv(require('../../assets/weather.csv').default);
      const arr: TData[] = [];
      for (let i = 1; i <= 12; i += 1) {
        const value: TData = {
          time: new Date(2020, Number(results[i]['觀測時間(month)']) - 1),
          temperature: Number(results[i]['氣溫(℃)']),
          rain: Number(results[i]['降水量(mm)']),
        };
        arr.push(value);
      }
      setData(arr);
    })();
  }, []);

  useEffect(() => {
    // max min
    const tempMax = max(data.map((d) => d.temperature));
    const rainMax = max(data.map((ele) => ele.rain));

    if (tempMax !== undefined && rainMax !== undefined) {
      // format
      const formatTime = timeFormat('%B');

      // scale
      const x = scaleBand()
        .domain(data.map((d) => formatTime(d.time)))
        .range([0, chartWidth]);
      const yTemp = scaleLinear().domain([0, tempMax]).range([chartHeight, 0]).nice();
      const yRain = scaleLinear()
        .domain([0, rainMax * 2])
        .range([chartHeight, 0])
        .nice();

      // render x aixs
      if (xAxisRef.current) {
        const xAxisGroup = select(xAxisRef.current);
        const xAxis = axisBottom(x).tickPadding(10);
        xAxisGroup.call(xAxis);
      }

      // render y temperature axis
      if (yAxisTempRef.current) {
        const yAxisGroup = select(yAxisTempRef.current);
        const yAxis = axisLeft(yTemp)
          .tickPadding(10)
          .tickFormat((d) => (d === yTemp.domain()[1] ? `${d}℃` : d.toString()));
        yAxisGroup.call(yAxis);
      }

      // render y rain axis
      if (yAxisRainRef.current) {
        const yAxisGroup = select(yAxisRainRef.current);
        const yAxis = axisRight(yRain)
          .tickPadding(10)
          .tickFormat((d) => (d === yRain.domain()[1] ? `${d}mm` : d.toString()));
        yAxisGroup.call(yAxis);
      }

      // line
      const d3_line = line<TData>()
        .x((d) => (x(formatTime(d.time)) as number) + x.bandwidth() / 2)
        .y((d) => yTemp(d.temperature));

      const lineGroup = select(temperatureRef.current);
      if (lineGroup.select('path').empty()) {
        lineGroup
          .append('path')
          .datum(data)
          .attr('d', d3_line)
          .attr('stroke-dasharray', () =>
            lineGroup.select<SVGPathElement>('path').node()!.getTotalLength(),
          )
          .attr(
            'stroke-dashoffset',
            lineGroup.select<SVGPathElement>('path').node()!.getTotalLength(),
          )
          .transition()
          .duration(1000)
          .attr('fill', 'none')
          .attr('stroke', '#ffa200')
          .attr('stroke-width', 2)
          .attr('stroke-dashoffset', 0);
      }

      // rect
      const rainGroup = select(rainRef.current);
      const bar = rainGroup.selectAll('rect').data(data);

      bar
        .enter()
        .append('rect')
        .attr('x', (d) => (x(formatTime(d.time)) as number) + x.bandwidth() / 4)
        .attr('y', chartHeight)
        .attr('width', x.bandwidth() / 2)
        .attr('height', 0)
        .transition()
        .duration(1000)
        .attr('height', (d) => chartHeight - yRain(d.rain))
        .attr('y', (d) => yRain(d.rain))
        .attr('fill', '#2196f3');
    }
  }, [data]);

  return (
    <Container>
      <svg width={width} height={height}>
        <XAxisGroup
          ref={xAxisRef}
          transform={`translate(${margin.left},${margin.top + chartHeight})`}
        ></XAxisGroup>
        <YAxisTempGroup
          ref={yAxisTempRef}
          transform={`translate(${margin.left},${margin.top})`}
        ></YAxisTempGroup>
        <YAxisRainGroup
          ref={yAxisRainRef}
          transform={`translate(${chartWidth + margin.left},${margin.top})`}
        ></YAxisRainGroup>
        <g ref={temperatureRef} transform={`translate(${margin.left},${margin.top})`}></g>
        <g ref={rainRef} transform={`translate(${margin.left},${margin.top})`}></g>
      </svg>
    </Container>
  );
};

export default LineChartCSV;
