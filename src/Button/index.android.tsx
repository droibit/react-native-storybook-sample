import React from 'react';
import { TouchableNativeFeedback } from 'react-native';

type Props = {
  onPress(): void;
  children: React.ReactNode;
};

const Button: React.SFC<Props> = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>{props.children}</TouchableNativeFeedback>
  );
}

Button.defaultProps = {
  children: null,
  onPress: () => { },
};

export default Button;