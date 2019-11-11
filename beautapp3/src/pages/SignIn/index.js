import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/Components/Backgorund';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLinkButton,
} from './styles';

// eslint-disable-next-line react/prop-types
export default function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu Email"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
          <SignLinkButton onPress={() => navigation.navigate('SignUp')}>
            Criar Conta
          </SignLinkButton>
        </Form>
      </Container>
    </Background>
  );
}
