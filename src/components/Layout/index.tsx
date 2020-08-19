import React, { useState, useEffect } from 'react';
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';

import AdBanner from '../AdBanner';

import Perfil from '../LeftColumn';
import Feed from '../MiddleColumn';
import News from '../RightColumn';

import { Container } from './styles';

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, [])

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />
      <span> { !isLoading && <AdBanner /> } </span>
      <main>
        <Perfil isLoading={isLoading}/>
        <Feed isLoading={isLoading}/>
        <News isLoading={isLoading}/>
      </main>
    </Container>
  );
}

export default Layout;