import { Platform } from 'react-native';

import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  /* justify-content: flex-end; */
  /* align-items: center; */
  padding: 50px 30px;
  background: #2b2b2c;

  display: ${props => props.status};
`;

export const Form = styled.View`
  align-self: stretch;
  align-items: center;
  margin-bottom: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  border-radius: 3.20442px;
  width: 160px;
`;

export const SignLink = styled.TouchableOpacity`
  margin: 20px 0 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  font-weight: 500;
`;
