import React, { FC, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';

import charactersData from 'mocks/charactersData';

const CharacterDescription: FC = () => {
  const [idFound, setIdFound] = useState<boolean>(false);

  const ind = useParams().id;

  useMemo(() => {
    if (ind) {
      const indInt = parseInt(ind, 10);
      const t = charactersData.some((character) => character.id === indInt);
      if (t) {
        setIdFound(true);
      } else {
        setIdFound(false);
      }
    } else {
      setIdFound(false);
    }
  }, [ind]);

  return (
    <Typography variant="h2">
      {idFound
        ? `CharacterDescription. id: ${ind}`
        : 'This character not found. Try another one'}
    </Typography>
  );
};

export default CharacterDescription;
