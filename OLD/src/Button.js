import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  font-size: 18px;
  padding: 4px 10px;
  background: #3B5583;
  color: #ffffff;
  margin-top: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  border: none;

  &:hover {
    background: #273C5F;
  }
`;

export default function Button({ text }) {
  return (
    <ButtonContainer>{text}</ButtonContainer>
  );
}
