import React from 'react';
import { Line } from './style';
import theme from '../../styles/theme';

interface Props {
  color?: string;
  w?: number;
}

const ItemSeparator = ({ color = theme.colors.grey, w }: Props) => (
  <Line color={color} w={w} />
);

export default ItemSeparator;
