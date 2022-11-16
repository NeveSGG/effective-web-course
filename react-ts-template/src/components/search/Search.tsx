import React, { FC } from 'react';

import { Box, Button, Divider, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface PropType {
  searchText: string;
}

const Search: FC<PropType> = ({ searchText }) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          gap: 3,
          alignItems: 'center'
        }}
      >
        <TextField
          id="outlined-search"
          label={t(`search_${searchText}`).toString()}
          type="search"
          sx={{ width: { xs: '100%', md: '77.5%' } }}
        />
        <Button
          variant="contained"
          sx={{ width: { xs: '100%', md: '20%' }, height: 55 }}
        >
          <>{t('search')}</>
        </Button>
      </Box>
      <Divider variant="middle" sx={{ my: 7 }} />
    </Box>
  );
};

export default Search;
