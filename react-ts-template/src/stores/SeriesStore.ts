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
  getSeriesList = async (offset?: number): Promise<void> => {
    try {
      this.loading = true;
      this.searchResults = false;
      this.titleStartsWith = '';
      this.series = {
        offset: 0,
        limit: 0,
        total: 0,
        count: 0,
        results: []
      };
      const seriesList = await api.series.getSeriesList(offset || 0);

      runInAction(() => {
        this.seriesList = seriesList.data;
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
  getSeriesListByTitle = async (
    titleStartsWith: string,
    offset?: number
  ): Promise<void> => {
    try {
      this.loading = true;
      this.titleStartsWith = titleStartsWith;
      const seriesList = await api.series.getSeriesListByTitle(
        titleStartsWith,
        offset || 0
      );
      runInAction(() => {
        this.seriesList = seriesList.data;
        this.searchResults = true;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

const charactersStore = new SeriesStore();
export default charactersStore;
