import React from 'react';
import { View, StyleSheet } from 'react-native';

const Wrapper = ({
  center,
  flex,
  style,
  children,
  centerHorizontal,
  centerVertical,
  row,
  column,
}) => {
  const viewStyle = [
    flex && styles.flex,
    center && styles.center,
    row && styles.flexRow,
    column && styles.flexColumn,
    centerHorizontal && styles.centerHorizontal,
    centerVertical && styles.centerVertical,
    style,
  ];

  return <View style={viewStyle}>{children}</View>;
};

export default Wrapper;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerHorizontal: {
    justifyContent: 'center',
  },
  centerVertical: {
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
});
