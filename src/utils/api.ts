const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

class HTTPTransport {
  get = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };
  put = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  };
  post = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  };
  delete = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  };
  // PUT, POST, DELETE

  // options:
  // headers — obj
  // data — obj
  request = (url, options, timeout = 5000) => {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
