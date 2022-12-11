// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { observable, action, makeObservable, runInAction } from 'mobx';

// API
import api from 'api';

// Types
import { Comics } from 'types/comics';

interface ComicsList {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comics[];
}

class ComicsStore {
  @observable
  comics: ComicsList = {
    offset: 0,
    limit: 0,
    total: 0,
    count: 0,
    results: []
  };

  @observable
  comicsList: ComicsList = {
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
  endReached: boolean = false;

  @observable
  offset: number = 0;

  @observable
  titleStartsWith: string = '';

  constructor() {
    makeObservable(this);
  }

  @action
  getComics = async (id: number): Promise<void> => {
    try {
      this.loading = true;
      this.comics = {
        offset: 0,
        limit: 0,
        total: 0,
        count: 0,
        results: []
      };
      const comics = await api.comics.getComics(id);

      runInAction(() => {
        this.comics = comics.data;
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
  getMoreComics = async (offset?: number, query?: string): Promise<void> => {
    if (!this.endReached)
      if (!query) {
        try {
          this.titleStartsWith = '';
          this.searchResults = false;
          if (offset === 0) this.comicsList.results = [];

          const comics = await api.comics.getComicsList(offset || 0);

          runInAction(() => {
            this.comicsList = {
              offset: comics.data.offset,
              limit: comics.data.limit,
              total: comics.data.total,
              count: this.comicsList.count + comics.data.count,
              results: [...this.comicsList.results, ...comics.data.results]
            };
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          this.searchResults = true;
          this.titleStartsWith = query;
          if (offset === 0) this.comicsList.results = [];

          const comics = await api.comics.getComicsListByTitle(
            query,
            offset || 0
          );

          runInAction(() => {
            this.comicsList = {
              offset: comics.data.offset,
              limit: comics.data.limit,
              total: comics.data.total,
              count: this.comicsList.count + comics.data.count,
              results: [...this.comicsList.results, ...comics.data.results]
            };
          });
        } catch (error) {
          console.error(error);
        }
      }
  };
}

const comicsStore = new ComicsStore();
export default comicsStore;
