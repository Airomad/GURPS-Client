import React, { Component } from 'react';
import styled from 'styled-components';

import InputField from '../InputField';
import Button from '../Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 80px;
`;

const TitleLabel = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const MessageLabel = styled.div`
    font-size: 25px;
    margin-top: 60px;
    margin-bottom: 20px;
    max-width: 600px;
`;

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomNumber: '',
    };
  }

  render() {
    const { roomNumber } = this.state;
    
    return (
      <Wrapper>
        <TitleLabel>GURPS Client</TitleLabel>

        <MessageLabel>Пожалуйста введите номер игрового мира, чтобы присоединиться к игре</MessageLabel>
        <InputField
          placeholder="Номер игрового мира"
          value={roomNumber}
          onChange={(roomNumber) => this.setState({ roomNumber })}
        />
        <Button
          text="Присоединиться"
        />
        
        <MessageLabel>Или создайте новый игровой мир</MessageLabel>
        <Button
          text="Создать"
        />

      </Wrapper>
    );
  }
}
