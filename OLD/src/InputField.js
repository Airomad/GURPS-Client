import React, { Component } from 'react';
import styled from 'styled-components';

const InputContainer = styled.input`
  font-size: 18px;
  padding: 4px 10px;
  border: 1px solid #666E7C;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export default function InputField({ placeholder, value, onChange }) {
  return (
    <InputContainer
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
