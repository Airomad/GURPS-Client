import React, { Component } from 'react';
import styled from 'styled-components';

import InputField from 'components/InputField';
import Button from 'components/Button';
import MessageLabel from 'components/MessageLabel';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 80px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
`;

const TitleLabel = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worldNumber: '',
      nickname: ''
    };
  }

  render() {
    const { worldNumber, nickname } = this.state;
    const { onLogin, onCreateWorld } = this.props;
    
    return (
      <Wrapper>
        <TitleLabel>GURPS Client</TitleLabel>

        <MessageLabel>Пожалуйста введите номер игрового мира и ваш никнейм, чтобы присоединиться к игре</MessageLabel>
        <InputField
          placeholder="Номер игрового мира"
          value={worldNumber}
          onChange={(worldNumber) => this.setState({ worldNumber })}
        />
        <InputField
          placeholder="Nickname"
          value={nickname}
          onChange={(nickname) => this.setState({ nickname })}
        />
        <Button
          text="Присоединиться"
          onClick={() => onLogin(worldNumber, nickname)}
        />
        
        <MessageLabel>Или создайте новый игровой мир</MessageLabel>
        <Button
          text="Создать"
          onClick={() => onCreateWorld()}
        />

      </Wrapper>
    );
  }
}
