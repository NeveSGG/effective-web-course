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
  getComicsList = async (offset?: number): Promise<void> => {
    try {
      this.loading = true;
      const comicsList = await api.comics.getComicsList(offset || 0);

      runInAction(() => {
        this.comicsList = comicsList.data;
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
  getComicsListByTitle = async (
    titleStartsWith: string,
    offset?: number
  ): Promise<void> => {
    try {
      this.loading = true;
      this.titleStartsWith = titleStartsWith;
      const comicsList = await api.comics.getComicsListByTitle(
        titleStartsWith,
        offset || 0
      );
      runInAction(() => {
        this.comicsList = comicsList.data;
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

const charactersStore = new ComicsStore();
export default charactersStore;
