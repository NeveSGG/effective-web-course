// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { observable, action, makeObservable, runInAction } from 'mobx';

// API
import api from 'api';

// Types
import { Series } from 'types/series';

interface SeriesList {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Series[];
}

class SeriesStore {
  @observable
  series: SeriesList = {
    offset: 0,
    limit: 0,
    total: 0,
    count: 0,
    results: []
  };

  @observable
  seriesList: SeriesList = {
    offset: 0,
    limit: 0,
    total: 0,
    count: 0,
    results: []
  };

  @observable
  loading: boolean = false;

  @observable
  searchResults: boolean = false;

  @observable
  offset: number = 0;

  @observable
  titleStartsWith: string = '';

  constructor() {
    makeObservable(this);
  }

  @action
  getSeries = async (id: number): Promise<void> => {
    try {
      this.loading = true;
      const series = await api.series.getSeries(id);

      runInAction(() => {
        this.series = series.data;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  @action
  getMoreSeries = async (offset?: number, query?: string): Promise<void> => {
    if (!query) {
      try {
        this.titleStartsWith = '';
        this.searchResults = false;
        if (offset === 0) this.seriesList.results = [];

        const series = await api.series.getSeriesList(offset || 0);

        runInAction(() => {
          this.seriesList = {
            offset: series.data.offset,
            limit: series.data.limit,
            total: series.data.total,
            count: this.seriesList.count + series.data.count,
            results: [...this.seriesList.results, ...series.data.results]
          };
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        this.searchResults = true;
        this.titleStartsWith = query;
        if (offset === 0) this.seriesList.results = [];

        const series = await api.series.getSeriesListByTitle(
          query,
          offset || 0
        );

        runInAction(() => {
          this.seriesList = {
            offset: series.data.offset,
            limit: series.data.limit,
            total: series.data.total,
            count: this.seriesList.count + series.data.count,
            results: [...this.seriesList.results, ...series.data.results]
          };
        });
      } catch (error) {
        console.error(error);
      }
    }
  };
}

const charactersStore = new SeriesStore();
export default charactersStore;
