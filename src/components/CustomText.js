import * as React from 'react';
import { Text } from 'react-native';
import { translate } from '@/i18n';

const CustomText = (props) => {
  const { tx, txOptions, text, children, style, ...rest } = props;

  // figure out which content to use
  const i18nText = tx && translate(tx, txOptions);
  const content = i18nText || text || children;

  return (
    <Text {...rest} style={style}>
      {content}
    </Text>
  );
};

export default CustomText;
