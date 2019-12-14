import React from 'react';
import { View } from 'react-native';

// add space between different components => should take values from constants/styles/spacing
const Spacer = ({ height }) => {
  const viewStyle = { height };

  return <View style={viewStyle} />;
};

export default Spacer;
