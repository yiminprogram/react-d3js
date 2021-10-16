import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Axis from '../assets/screenshot/axis.jpg';
import BarChart from '../assets/screenshot/bar-chart.jpg';
import BarChartSort from '../assets/screenshot/bar-chart-sort.jpg';
import LineChart from '../assets/screenshot/line-chart.jpg';
import CSVChart from '../assets/screenshot/csv-chart.jpg';
import PieChart from '../assets/screenshot/pie-chart.jpg';
import CandleStickChart from '../assets/screenshot/candlestick-chart.jpg';

const ListContainer = styled.ul`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  max-width: 1400px;
  margin: 0 auto;

  li {
    flex: 0 1 300px;
    margin: 1.5rem 1rem;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    padding: 1rem;
  }

  a {
    width: 100%;
    height: 100%;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  h3 {
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;

const List = () => {
  return (
    <div>
      <ListContainer>
        <li>
          <Link to="/axis">
            <img src={Axis} alt="screenshot" />
            <h3>Axis</h3>
          </Link>
        </li>
        <li>
          <Link to="/bar-chart">
            <img src={BarChart} alt="screenshot" />
            <h3>Bar Chart</h3>
          </Link>
        </li>
        <li>
          <Link to="/bar-chart-sort">
            <img src={BarChartSort} alt="screenshot" />
            <h3>Bar Chart Sort</h3>
          </Link>
        </li>
        <li>
          <Link to="/line-chart">
            <img src={LineChart} alt="screenshot" />
            <h3>Line Chart</h3>
          </Link>
        </li>
        <li>
          <Link to="/csv-chart">
            <img src={CSVChart} alt="screenshot" />
            <h3>CSV Chart</h3>
          </Link>
        </li>
        <li>
          <Link to="/pie-chart">
            <img src={PieChart} alt="screenshot" />
            <h3>Pie Chart</h3>
          </Link>
        </li>
        <li>
          <Link to="/candlestick-chart">
            <img src={CandleStickChart} alt="screenshot" />
            <h3>Candlestick Chart</h3>
          </Link>
        </li>
      </ListContainer>
    </div>
  );
};

export default List;
