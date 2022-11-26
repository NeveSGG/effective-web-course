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
  getCharactersList = async (offset?: number): Promise<void> => {
    try {
      this.loading = true;
      const characters = await api.characters.getCharactersList(offset || 0);

      runInAction(() => {
        this.characters = characters.data;
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

const charactersStore = new CharactersStore();
export default charactersStore;
