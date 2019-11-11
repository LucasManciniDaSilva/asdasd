import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { darken } from 'polished';

import Button from '~/Components/Button';
import Input from '~/Components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1px;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  &:hover {
    background: ${darken(0.08, '#3b9ef0')};
  }
`;

export const SignLinkButton = styled(Button)`
  margin-top: 10px;
  background: #ff6363;

  &:hover {
    background: ${darken(0.08, '#ff6363')};
  }
`;
