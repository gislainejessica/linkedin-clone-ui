import React from 'react';
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';

import AdBanner from '../AdBanner';

import Perfil from '../LeftColumn';
import Feed from '../MiddleColumn';
import News from '../RightColumn';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />
      <span> <AdBanner /> </span>
      <main>
        <Perfil />
        <Feed />
        <News />
      </main>
    </Container>
  );
}

export default Layout;