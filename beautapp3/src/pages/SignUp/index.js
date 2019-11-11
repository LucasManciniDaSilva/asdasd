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


export default function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
          />

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

          <SubmitButton onPress={() => {}}>Já possui uma conta?</SubmitButton>
          <SignLinkButton onPress={() => navigation.navigate('SignIn')}>
            Criar Conta
          </SignLinkButton>
        </Form>
      </Container>
    </Background>
  );
}
