import axios from 'api/helpers/axios';

// Types
import { Comics } from 'types/comics';

interface ComicsList {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comics[];
  };
}

export default {
  async getComicsList(offset: number): Promise<ComicsList> {
    const response = await axios.get(`/v1/public/comics`, {
      params: { offset }
    });
    return response.data;
  },

  async getComics(comicsId: number): Promise<ComicsList> {
    const response = await axios.get(`/v1/public/comics/${comicsId}`);
    return response.data;
  },

  async getComicsListByTitle(
    titleStartsWith: string,
    offset: number
  ): Promise<ComicsList> {
    const response = await axios.get(`/v1/public/comics`, {
      params: { titleStartsWith, offset }
    });
    return response.data;
  }
};
