import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Grid,
  Box,
  Typography,
  Container,
  Stack,
  Pagination,
  PaginationItem,
  CircularProgress
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useTranslation } from 'react-i18next';

import CustomCard from 'components/card';
import Search from 'components/search';

import comicsStore from 'stores/ComicsStore';

const Comics: FC = () => {
  const { t } = useTranslation();
  const { comicsList, searchResults, titleStartsWith, loading } = comicsStore;
  const [offset, setOffset] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (searchResults) {
      comicsStore.getComicsListByTitle(titleStartsWith, offset);
    } else {
      comicsStore.getComicsList(offset);
    }
  }, [offset]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setOffset((value - 1) * 20);
  };

  const Results = () => {
    if (comicsList.total !== 0) {
      return (
        <>
          <Box
            sx={{
              marginTop: '20px',
              paddingBottom: '20px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Stack spacing={2}>
              <Pagination
                count={Math.floor(comicsList.total / 20)}
                page={page}
                onChange={handleChange}
                color="primary"
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>
          </Box>
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {comicsList.results.map((comic) => (
              <Grid item xs={12} sm={6} md={4} key={comic.id}>
                <CustomCard
                  image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  imageAlt={comic.title}
                  name={comic.title}
                  description={comic.description}
                  id={comic.id}
                  category="characters"
                />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              marginTop: '20px',
              paddingBottom: '20px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Stack spacing={2}>
              <Pagination
                count={Math.floor(comicsList.total / 20)}
                page={page}
                onChange={handleChange}
                color="primary"
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>
          </Box>
        </>
      );
    }
    return <Typography>Series not found</Typography>;
  };

  return (
    <Container>
      <Box
        sx={{
          pt: { xs: 10, sm: 13, md: 17, lg: 19 },
          pb: { xs: 7, sm: 10, md: 14, lg: 16 }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            mb: 2,
            alignItems: 'end'
          }}
        >
          <Typography variant="h3" fontWeight={800} gutterBottom>
            <>{t('Comics')}</>
          </Typography>
          <Typography variant="h5" sx={{ pb: { xs: 1, sm: 2 } }} gutterBottom>
            ({comicsList.total})
          </Typography>
        </Box>
        <Search searchText="Comics" defaultValue={titleStartsWith} />
        {loading ? <CircularProgress /> : <Results />}
      </Box>
    </Container>
  );
};

export default observer(Comics);
