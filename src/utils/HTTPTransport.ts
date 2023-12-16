enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type HTTPMethod = (url: string, options?: Record<string, any>) => Promise<unknown>

function queryStringify(data: Record<string, number>) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }
  const keys = Object.keys(data);
  return keys.reduce(
    (result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`,
    '?',
  );
}

export class HTTPTransport {
  get: HTTPMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.GET }, options.timeout);

  post: HTTPMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  put: HTTPMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  delete: HTTPMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  private request = (
    url: string,
    options: Record<string, any>,
    timeout = 5000,
  ) => {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else xhr.send(JSON.stringify(data));
    });
  };
}
