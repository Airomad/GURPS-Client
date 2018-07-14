import React, { Component } from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';


const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function() {
  return (
    <Wrapper>
      <Loader
         type="Puff"
         color="#AEAEAE"
         height="100"
         width="100"
      />
    </Wrapper>
  );
}
