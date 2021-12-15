import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';

import './ContentCard.pcss';

interface IProps {
  text: string;
  src: string;
}

export const ContentCard = (props: IProps) => {
  const { text, src } = props;

  return (
    <Card raised>
      <CardMedia className={'card'} image={src} src={src} />
      <CardContent className={'card-title'}>{text}</CardContent>
    </Card>
  );
};
