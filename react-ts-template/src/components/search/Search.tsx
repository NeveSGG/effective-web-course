import React, { FC } from 'react';
import { Box, Button, Divider } from '@mui/material';
import TextField from '@mui/material/TextField';

interface PropType {
  searchText: string;
}

const Search: FC<PropType> = ({ searchText }) => {
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
          label={`Search for ${searchText}`}
          type="search"
          sx={{ width: { xs: '100%', md: '77.5%' } }}
        />
        <Button
          variant="contained"
          sx={{ width: { xs: '100%', md: '20%' }, height: 55 }}
        >
          SEARCH
        </Button>
      </Box>
      <Divider variant="middle" sx={{ my: 7 }} />
    </Box>
  );
};

export default Search;
