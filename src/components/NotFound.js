import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import ResultFadeIn from './utils/ResultFadeIn';
import device from '../responsive/Device';

const NotFoundTeleWrapper = styled.div`
  max-width: 88%;
  height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto 0;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  position: relative;
  top: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 7px;
  animation: ${ResultFadeIn} 0.5s 1.4s forwards;
`;

const NotfoundTeleIcon = styled.span`
  display: block;
  text-align: center;
  color: black;
  font-size: 40px;
  margin-right: 10px;
`;

const NotFoundTeleText = styled.span`
  color: green;
  font-size: 17px;
`;

const NotFoundTeleLink = styled.a`
  display: block;
  position: relative;
  top: 50px;
  right: 0;
  color: #333;
  @media ${device.mobileL} {
    flex-basis: 50%;
    padding-right: 10px;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    padding-right: 20px;
  }
`;

const NotFound = () => {
  return (
    <NotFoundTeleWrapper>
      <NotfoundTeleIcon>
        <FontAwesomeIcon icon={faCoffee} />
      </NotfoundTeleIcon>
      <NotFoundTeleText>Ciudad no encontrada. Visitá... </NotFoundTeleText>
      <NotFoundTeleLink as="a" href="https://www.instagram.com/telecomarg/" target="_Blank">Telecom Instagram</NotFoundTeleLink> 
    </NotFoundTeleWrapper>
  );
};

export default NotFound;
