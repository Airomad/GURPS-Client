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

export default class WorldCreateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worldName: ''
    };
  }

  render() {
    const { worldName } = this.state;
    const { onScreenChange } = this.props;

    return (
      <Wrapper>
        <MessageLabel>Вы создаете новый игровой мир</MessageLabel>
        <InputField
          placeholder="Название мира"
          value={worldName}
          onChange={(worldName) => this.setState({ worldName })}
        />
        <Button
          text="Создать"
          onClick={() => onScreenChange('game')}
        />
        <Button
          text="Отмена"
          onClick={() => onScreenChange('login')}
        />
      </Wrapper>
    );
  }
}
