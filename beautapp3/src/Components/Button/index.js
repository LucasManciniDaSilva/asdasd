/* eslint-disable react/prop-types */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propType = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.propType = {
  loading: false,
};
