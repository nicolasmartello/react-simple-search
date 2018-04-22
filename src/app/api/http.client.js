import axios from 'axios';

export default class ApiClient {
  get(params) {
    axios.defaults.headers.common.Accept = 'application/json';
    if (params.headers) {
      Object.keys(params.headers)
        .forEach((k) => {
          axios.defaults.headers.common[k] = params.headers[k];
        });
    }
    const localParams = Object.assign({}, params.query || {});
    const options = {
      method: params.method.toLowerCase(),
      url: params.module,
      baseURL: params.url,
      params: localParams,
      data: params.data,
    };

    return axios.request(options)
      .then(res => res.data)
      .catch(err => Promise.reject(new Error(err.message)));
  }
}
