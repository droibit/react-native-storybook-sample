import React from 'react';
import { View } from 'react-native';
import style from './style';

type Props = {
  children: React.ReactNode;
};

const CenterView: React.SFC<Props> = props => {
  return <View style={style.main}>{props.children}</View>;
};

CenterView.defaultProps = {
  children: null,
};

export default CenterView;
