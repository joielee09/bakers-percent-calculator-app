import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Stack from './src/modules/Stack'
import { NavigationContainer } from '@react-navigation/native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wrapper = styled.View``;
const Text = styled.Text`
  font-size: 15px;
`;

export default Basic = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  )
}