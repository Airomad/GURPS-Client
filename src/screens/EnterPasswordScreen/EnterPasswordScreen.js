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
`;

export default class EnterPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
  }

  render() {
    const { password } = this.state;
    const { onScreenChange } = this.props;

    return (
      <Wrapper>
        <MessageLabel>Вы гейм-мастер данного игрового мира. Введите пожалуйста пароль для получения прав</MessageLabel>
        <InputField
          placeholder="Пароль гейм-мастера"
          value={password}
          onChange={(password) => this.setState({ password })}
        />
        <Button
          text="Войти"
          onClick={() => onScreenChange('game')}
        />
      </Wrapper>
    );
  }
}
