import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListContainer = styled.ul`
  padding: 2rem;

  li {
    margin-bottom: 2rem;

    a {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`;

const List = () => {
  return (
    <div>
      <ListContainer>
        <li>
          <Link to="/axis">Axis</Link>
        </li>
        <li>
          <Link to="/bar-chart">Bar Chart</Link>
        </li>
        <li>
          <Link to="/bar-chart-sort">Bar Chart Sort</Link>
        </li>
        <li>
          <Link to="/line-chart">Link Chart</Link>
        </li>
      </ListContainer>
    </div>
  );
};

export default List;
