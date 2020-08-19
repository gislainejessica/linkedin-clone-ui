import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiFillCaretDown, AiOutlineBell } from 'react-icons/ai';

export const Container = styled.header`
  background: var(--color-header);
  padding: 0 30px;

  height: 48px;
  display: none;
  /* justify-items: space-between;
  align-items: center; */

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;

  @media (min-width: 1180px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  margin: 0 auto;
  max-width: 1128px;
  height: 52px;

  .left, .right nav {
    display: flex;
    align-items: center;
  }
  .right nav {
    height: 100%;

    button { 
      background: none;
      outline: 0;
      border: none;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      min-width: 90px;
      min-height: 100%;
      color: var(--color-icons);
      cursor: pointer;

      &:hover {
        color: var(--color-white);
      }

      & .active {
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`;

const Icon = css`
  width: 24px; 
  height: 24px;
`;

export const ProfileCicle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

export const  Search = styled.input`
  width: 100%;
  margin-left: 16px;

  background: var(--color-input);
  color: var(--color-black);
  font-size: 14px;
  padding: 7.5px 8px;
  outline: 0;
  border: none;
  border-radius: 2px;
  
  &:focus {
    background: var(--color-white);
  }

`;

export const LinkedInIcon = styled(GrLinkedin)`
   width: 34px; 
  height: 34px;
  color: var(--color-linkedin);
  flex-shrink: 0;

  background: #fff;
  border-radius: 4px;
`;

export const  HomeIcon = styled(AiFillHome)`
  ${Icon}
`;

export const  NotificationIcon = styled(AiOutlineBell)`
  ${Icon}
`;

 export const CaretDownIcon =  styled(AiFillCaretDown)`
   width: 16px; 
   height: 16px;
 `;