import React from 'react';

import { Container, Wrapper, LinkedInIcon, HomeIcon, NotificationIcon, CaretDownIcon, ProfileCicle, Search } from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
     <Wrapper>
       <div className="left">
         <LinkedInIcon />
         <Search placeholder="Search"/>
       </div>

       <div className="right">
         <nav>
           <button className="active">
             <HomeIcon />
             <span> Início </span>
           </button>
           <button >
             <NotificationIcon />
             <span> Notificações </span>
           </button>
           <button >
            <ProfileCicle src="https://avatars2.githubusercontent.com/u/11761077?s=460&u=1ca6a71edb690da7e30f5cef9267846141301b29&v=4" />
             <span> Eu <CaretDownIcon /> </span>
           </button>
           
         </nav>
       </div>
     </Wrapper>
    </Container>
  );
}

export default DesktopHeader;
