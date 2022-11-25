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
  character: Character = {
    id: 0,
    name: '',
    description: '',
    modified: new Date(),
    thumbnail: {
      path: '',
      extension: ''
    },
    resourceURI: '',
    comics: {
      available: 0,
      collectionURI: '',
      items: [
        {
          resourceURI: '',
          name: ''
        }
      ],
      returned: 0
    },
    series: {
      available: 0,
      collectionURI: '',
      items: [
        {
          resourceURI: '',
          name: ''
        }
      ],
      returned: 0
    },
    stories: {
      available: 0,
      collectionURI: '',
      items: [
        {
          resourceURI: '',
          name: '',
          type: ''
        }
      ],
      returned: 0
    },
    events: {
      available: 0,
      collectionURI: '',
      items: [
        {
          resourceURI: '',
          name: ''
        }
      ],
      returned: 0
    },
    urls: [
      {
        type: '',
        url: ''
      }
    ]
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

  constructor() {
    makeObservable(this);
  }

  @action
  getCharacter = async (id: number): Promise<void> => {
    try {
      this.loading = true;
      const character = await api.characters.getCharacter(id);

      runInAction(() => {
        this.character = character;
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
  getCharactersList = async (): Promise<void> => {
    try {
      this.loading = true;
      const characters = await api.characters.getCharactersList();

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
