import constants from '@/common/constants';

/* eslint-disable valid-typeof */
export default class ServiceConfig {
  public baseUrl() {
    return constants.BASE_URL;
  }

  public apiUrl(url: string) {
    const actualUrl = this.baseUrl() + url;
    return actualUrl;
  }

  public getHeaders() {
    const headers = {
      headers: {
        'Access-Control-Allow-Origin' : '*',
      },
    };
    return headers;
  }
}
