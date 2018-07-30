import React from 'react';
import { TouchableHighlight } from 'react-native';

type Props = {
  onPress(): void;
  children: React.ReactNode;
};

const Button: React.SFC<Props> = (props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>{props.children}</TouchableHighlight>
  );
}

Button.defaultProps = {
  children: null,
  onPress: () => { },
};

export default Button;