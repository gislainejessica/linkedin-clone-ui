import React from 'react';

import { Container, ProfileCicle, Search, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCicle src="https://avatars2.githubusercontent.com/u/11761077?s=460&u=1ca6a71edb690da7e30f5cef9267846141301b29&v=4" />
      <Search placeholder="Search"/>
      <MessageIcon />
    </Container>
  );
}

export default MobileHeader;
