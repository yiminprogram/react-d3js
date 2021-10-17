import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  select,
  axisBottom,
  axisRight,
  csv,
  timeParse,
  timeFormat,
  max,
  min,
  scaleBand,
  scaleLinear,
  pointer,
} from 'd3';

const width = 1500;
const height = 800;
const margin = {
  top: 80,
  right: 80,
  bottom: 80,
  left: 80,
};

const chartWidth = width - margin.left - margin.right;
const chartHeight = height - margin.top - margin.bottom;

const Container = styled.section`
  padding: 2rem;
`;

const SVG = styled.svg`
  g {
    font-size: 1rem;
  }
`;

type TData = {
  date: Date;
  open: number;
  close: number;
  high: number;
  low: number;
};

// format time
const parseTime = timeParse('%Y-%m-%d');
const formatTime = timeFormat('%m/%d');

const CandleStickChart = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const xAxisRef = useRef<SVGGElement | null>(null);
  const yAxisRef = useRef<SVGGElement | null>(null);
  const lineRef = useRef<SVGGElement | null>(null);
  const blockRef = useRef<SVGGElement | null>(null);
  const auxiliaryRef = useRef<SVGGElement | null>(null);
  const eventWrapper = useRef<SVGRectElement | null>(null);

  const [data, setData] = useState<TData[]>([]);

  useEffect(() => {
    (async () => {
      const results = await csv(require('../../assets/finance-week.csv').default);

      const values: TData[] = [];

      results.forEach((ele) => {
        if (ele.Open) {
          values.push({
            date: parseTime(ele.Date!)!,
            open: Number(ele.Open),
            close: Number(ele.Close!),
            high: Number(ele.High!),
            low: Number(ele.Low!),
          });
        }
      });

      setData(values);
    })();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    // y axis max,min
    const yMax = (max(data.map((d) => d.high)) as number) + 5;
    const yMin = (min(data.map((d) => d.low)) as number) - 5;

    // x scale
    const x = scaleBand()
      .domain(data.map((d) => formatTime(d.date)))
      .range([0, chartWidth]);

    // y scale
    const y = scaleLinear().domain([yMin, yMax]).range([chartHeight, 0]).nice();

    // render x axis
    if (xAxisRef.current) {
      const xAxisGroup = select(xAxisRef.current);
      const xAxis = axisBottom(x).tickPadding(10);
      xAxisGroup.call(xAxis);
    }

    //render y axis
    if (yAxisRef.current) {
      const yAxisGroup = select(yAxisRef.current);
      const yAxis = axisRight(y).tickPadding(10);
      yAxisGroup.call(yAxis);
    }

    // render line
    if (lineRef.current) {
      const lineGroup = select(lineRef.current);
      const line = lineGroup.selectAll('line').data(data);

      line
        .enter()
        .append('line')
        .attr('x1', (d) => (x(formatTime(d.date)) as number) + x.bandwidth() / 2)
        .attr('x2', (d) => (x(formatTime(d.date)) as number) + x.bandwidth() / 2)
        .attr('y1', (d) => y(d.high))
        .attr('y2', (d) => y(d.low))
        .attr('stroke', (d) =>
          d.open === d.close ? '#666' : d.open > d.close ? '#198754' : '#dc3545',
        )
        .attr('stroke-width', 2);
    }

    // render block
    if (blockRef.current) {
      const blockGroup = select(blockRef.current);
      const block = blockGroup.selectAll('line').data(data);

      block
        .enter()
        .append('line')
        .attr('x1', (d) =>
          d.close === d.open
            ? (x(formatTime(d.date)) as number) + x.bandwidth() / 2 - 20
            : (x(formatTime(d.date)) as number) + x.bandwidth() / 2,
        )
        .attr('x2', (d) =>
          d.close === d.open
            ? (x(formatTime(d.date)) as number) + x.bandwidth() / 2 + 20
            : (x(formatTime(d.date)) as number) + x.bandwidth() / 2,
        )
        .attr('y1', (d) =>
          d.close === d.open
            ? y(d.low) + (y(d.high) - y(d.low)) / 2
            : d.close > d.open
            ? y(d.close)
            : y(d.open),
        )
        .attr('y2', (d) =>
          d.close === d.open
            ? y(d.low) + (y(d.high) - y(d.low)) / 2
            : d.close > d.open
            ? y(d.open)
            : y(d.close),
        )
        .attr('stroke', (d) =>
          d.open === d.close ? '#666' : d.open > d.close ? '#198754' : '#dc3545',
        )
        .attr('stroke-width', (d) => (d.close === d.open ? 2 : 20));
    }

    // render auxiliary line
    if (auxiliaryRef.current) {
      const event = select(eventWrapper.current);
      const auxiliary = select(auxiliaryRef.current);

      auxiliary
        .append('line')
        .attr('id', 'verticle_line')
        .attr('y1', 0)
        .attr('y2', chartHeight)
        .attr('stroke', 'transparent')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', 10);

      auxiliary
        .append('line')
        .attr('id', 'horizontal_line')
        .attr('x1', 0)
        .attr('x2', chartWidth)
        .attr('stroke', 'transparent')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', 10);

      auxiliary.append('text').attr('id', 'value').attr('fill', 'transparent');

      const verticleLine = select('#verticle_line');
      const horizontalLine = select('#horizontal_line');
      const value = select('#value');

      event
        .on('mousemove touchmove', (e) => {
          verticleLine.attr('x1', pointer(e)[0]).attr('x2', pointer(e)[0]).attr('stroke', '#aaa');
          horizontalLine.attr('y1', pointer(e)[1]).attr('y2', pointer(e)[1]).attr('stroke', '#aaa');
          value
            .attr('x', -55)
            .attr('y', pointer(e)[1] + 5)
            .attr('fill', '#333')
            .text(y.invert(pointer(e)[1]).toFixed(2));
        })
        .on('mouseleave touchend', () => {
          verticleLine.attr('stroke', 'transparent');
          horizontalLine.attr('stroke', 'transparent');
        });
    }
  }, [data]);

  return (
    <Container>
      <SVG ref={svgRef} width={width} height={height}>
        <g ref={xAxisRef} transform={`translate(${margin.left},${margin.top + chartHeight})`}></g>
        <g ref={yAxisRef} transform={`translate(${margin.left + chartWidth},${margin.top})`}></g>
        <g ref={lineRef} transform={`translate(${margin.left},${margin.top})`}></g>
        <g ref={blockRef} transform={`translate(${margin.left},${margin.top})`}></g>
        <g ref={auxiliaryRef} transform={`translate(${margin.left},${margin.top})`}></g>
        <rect
          ref={eventWrapper}
          transform={`translate(${margin.left},${margin.top})`}
          width={chartWidth}
          height={chartHeight}
          fill="transparent"
        ></rect>
      </SVG>
    </Container>
  );
};

export default CandleStickChart;
