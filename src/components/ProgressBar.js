import React from 'react';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import colors from '../config/colors';

export default function AppProgressBar({
  color = colors.primary,
  width = '100%',
  progress,
}) {
  return (
    <ProgressBar
      styleAttr="Horizontal"
      indeterminate={false}
      progress={progress}
      color={color}
      width={width}
    />
  );
}
