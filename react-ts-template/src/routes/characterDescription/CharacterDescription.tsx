import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';

const CharacterDescription: FC = () => {
  const { id } = useParams();
  return (
    <Typography variant="h2">{`CharacterDescription. id: ${id}`}</Typography>
  );
};

export default CharacterDescription;
