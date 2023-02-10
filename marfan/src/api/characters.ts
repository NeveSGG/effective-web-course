import axios from 'api/helpers/axios';

// Types
import { Character } from 'types/character';

interface CharactersList {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
  };
}

export default {
  async getCharactersList(offset: number): Promise<CharactersList> {
    const response = await axios.get(`/v1/public/characters`, {
      params: { offset }
    });
    return response.data;
  },

  async getCharacter(characterId: number): Promise<CharactersList> {
    const response = await axios.get(`/v1/public/characters/${characterId}`);
    return response.data;
  },

  async getCharactersListByName(
    nameStartsWith: string,
    offset: number
  ): Promise<CharactersList> {
    const response = await axios.get(`/v1/public/characters`, {
      params: { nameStartsWith, offset }
    });
    return response.data;
  }
};
