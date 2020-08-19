import React from 'react';

import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';

import LoadingLeft from '../Shimmer/LoadingLeft';

import { Container } from './styles';

const LeftColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="left-column">
     {isLoading ? (
      <LoadingLeft />
    ) : (
    <> 
      <ProfilePanel />
      <HashtagPanel />
    </>
      )
    }
    </Container>
  );
};

export default LeftColumn;
