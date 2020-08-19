import React from 'react';

import TrendingPanel from './TrendingPanel';

import LoadingRightPanel from '../Shimmer/LoadingRightPanel';

import { Container } from './styles';

const RightColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="right-column">
    {isLoading ? (
        <LoadingRightPanel />
    ) : (
    <>
      <TrendingPanel />
      <TrendingPanel />
    </>
      )}
    </Container>
  );
};

export default RightColumn;
