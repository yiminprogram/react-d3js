import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
import { Home } from '@material-ui/icons';
import List from './views/List';
import Axis from './views/Axis';
import BarChart from './views/BarChart';
import BarChartSort from './views/BarChartSort';
import LineChart from './views/LineChart';
import LineChartCSV from './views/LineChartCSV';
import PieChart from './views/PieChart';

const Header = styled.header`
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RouteWrapper = styled.section`
  min-height: calc(100vh - 60px);
`;

const Footer = styled.footer`
  padding: 1rem;
  text-align: center;

  p {
    margin-bottom: 0.5rem;
  }
`;

const App = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <Home fontSize="large" color="primary" />
        </Link>
      </Header>
      <RouteWrapper>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/axis" component={Axis} />
          <Route path="/bar-chart" component={BarChart} />
          <Route path="/bar-chart-sort" component={BarChartSort} />
          <Route path="/line-chart" component={LineChart} />
          <Route path="/line-chart-csv" component={LineChartCSV} />
          <Route path="/pie-chart" component={PieChart} />
        </Switch>
      </RouteWrapper>
      <Footer>
        <p>程式練習測試用，任何資料無任何商業行為</p>
        <p>only from programming test, no commercial use</p>
      </Footer>
    </>
  );
};

export default App;
