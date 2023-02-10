import axios from 'axios';
import envs from 'config/environments';
import md5 from 'md5';

const dateNow = Date.now();

const instance = axios.create({
  baseURL: envs.baseApiUrl,
  params: {
    ts: dateNow,
    apikey: envs.publicApi,
    hash: md5(`${dateNow}${envs.privateApi}${envs.publicApi}`),
    limit: 18
  }
});

export default instance;
