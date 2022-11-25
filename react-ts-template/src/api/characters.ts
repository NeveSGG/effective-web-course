import axios from 'api/helpers/axios';

// Types
import { Character } from 'types/character';

interface CharactersList {
  code: number;
  status: string;
  data: {
    offset: 0;
    limit: 20;
    total: 1562;
    count: 20;
    results: [];
  };
}

export default {
  async getCharactersList(): Promise<CharactersList> {
    const response = await axios.get(`/v1/public/characters`);
    return response.data;
  },

  async getCharacter(characterId: number): Promise<Character> {
    const response = await axios.get(`/v1/public/characters/${characterId}`);
    return response.data;
  }
};
