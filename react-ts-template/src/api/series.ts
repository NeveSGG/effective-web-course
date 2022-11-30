import axios from 'api/helpers/axios';

// Types
import { Series } from 'types/series';

interface SeriesList {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Series[];
  };
}

export default {
  async getSeriesList(offset: number): Promise<SeriesList> {
    const response = await axios.get(`/v1/public/series`, {
      params: { offset }
    });
    console.log(response.data);
    return response.data;
  },

  async getSeries(seriesId: number): Promise<SeriesList> {
    const response = await axios.get(`/v1/public/series/${seriesId}`);
    return response.data;
  },

  async getSeriesListByTitle(
    titleStartsWith: string,
    offset: number
  ): Promise<SeriesList> {
    const response = await axios.get(`/v1/public/series`, {
      params: { titleStartsWith, offset }
    });
    console.log(response.data);
    return response.data;
  }
};
