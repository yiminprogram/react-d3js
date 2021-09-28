import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
import { Home } from '@material-ui/icons';
import List from './views/List';
import Axis from './views/Axis';
import BarChart from './views/BarChart';
import LineChart from './views/LineChart';

const Header = styled.header`
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <Home fontSize="large" color="primary" />
        </Link>
      </Header>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/axis" component={Axis} />
        <Route path="/bar-chart" component={BarChart} />
        <Route path="/line-chart" component={LineChart} />
      </Switch>
    </>
  );
};

export default App;
