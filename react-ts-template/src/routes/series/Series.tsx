import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Typography, Container, CircularProgress } from '@mui/material';

import { useTranslation } from 'react-i18next';

import { VirtuosoGrid } from 'react-virtuoso';
import { debounce } from 'lodash';

import CustomCard from 'components/card';
import Search from 'components/search';
import { ItemContainer, ItemWrapper, ListContainer } from 'components/grid';

import seriesStore from 'stores/SeriesStore';
import { Series as SeriesInterface } from 'types/series';

const Series: FC = () => {
  const { t } = useTranslation();
  const { seriesList, searchResults, titleStartsWith, loading, endReached } =
    seriesStore;

  const loadMore = (ind: number) => {
    if (searchResults) {
      seriesStore.getMoreSeries(ind + 1, titleStartsWith);
    } else {
      seriesStore.getMoreSeries(ind + 1);
    }
  };

  const handleLoading = debounce(loadMore, 600);

  const Results = () => {
    if (seriesList.total === 0) {
      return <Typography>{t('no_characters_found')}</Typography>;
    }

    return (
      <VirtuosoGrid
        style={{ width: '100%' }}
        useWindowScroll
        data={seriesList.results}
        endReached={handleLoading}
        components={{
          List: ListContainer,
          Item: ItemContainer,
          Footer: () => {
            if (endReached)
              return (
                <Typography
                  variant="body1"
                  textAlign="center"
                  sx={{ padding: '20px 0 20px 0' }}
                >
                  {t('end_reached')}
                </Typography>
              );
            return (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <CircularProgress />
              </Box>
            );
          },
          ScrollSeekPlaceholder: () => (
            <ItemWrapper>
              <CustomCard
                image=""
                imageAlt=""
                name=""
                description=""
                id={0}
                category="characters"
                isFound={false}
              />
            </ItemWrapper>
          )
        }}
        itemContent={(index: number, series: SeriesInterface) => {
          return (
            <ItemWrapper>
              <CustomCard
                image={`${series.thumbnail.path}.${series.thumbnail.extension}`}
                imageAlt={series.title}
                name={series.title}
                description={series.description}
                id={series.id}
                category="series"
              />
            </ItemWrapper>
          );
        }}
      />
    );
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
            <>{t('Series')}</>
          </Typography>
          <Typography variant="h5" sx={{ pb: { xs: 1, sm: 2 } }} gutterBottom>
            ({seriesList.total})
          </Typography>
        </Box>
        <Search searchText="Series" defaultValue={titleStartsWith} />
        {loading ? <CircularProgress /> : <Results />}
      </Box>
    </Container>
  );
};

export default observer(Series);
