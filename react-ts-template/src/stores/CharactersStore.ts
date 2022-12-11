// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { observable, action, makeObservable, runInAction } from 'mobx';

// API
import api from 'api';

// Types
import { Character } from 'types/character';

interface CharactersList {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}

class CharactersStore {
  @observable
  character: CharactersList = {
    offset: 0,
    limit: 0,
    total: 0,
    count: 0,
    results: []
  };

  @observable
  characters: CharactersList = {
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
  searchQuery: string = '';

  @observable
  offset: number = 0;

  constructor() {
    makeObservable(this);
  }

  @action
  getCharacter = async (id: number): Promise<void> => {
    try {
      this.loading = true;
      const character = await api.characters.getCharacter(id);

      runInAction(() => {
        this.character = character.data;
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
  getMoreCharacters = async (
    offset?: number,
    query?: string
  ): Promise<void> => {
    if (!query) {
      try {
        this.searchQuery = '';
        this.searchResults = false;
        if (offset === 0) this.characters.results = [];

        const characters = await api.characters.getCharactersList(offset || 0);

        runInAction(() => {
          this.characters = {
            offset: characters.data.offset,
            limit: characters.data.limit,
            total: characters.data.total,
            count: this.characters.count + characters.data.count,
            results: [...this.characters.results, ...characters.data.results]
          };
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        this.searchResults = true;
        this.searchQuery = query;
        if (offset === 0) this.characters.results = [];

        const characters = await api.characters.getCharactersListByName(
          query,
          offset || 0
        );

        runInAction(() => {
          this.characters = {
            offset: characters.data.offset,
            limit: characters.data.limit,
            total: characters.data.total,
            count: this.characters.count + characters.data.count,
            results: [...this.characters.results, ...characters.data.results]
          };
        });
      } catch (error) {
        console.error(error);
      }
    }
  };
}

const charactersStore = new CharactersStore();
export default charactersStore;
