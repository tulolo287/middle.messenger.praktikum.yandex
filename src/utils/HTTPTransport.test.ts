import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import HTTPTransport from './HTTPTransport.ts';
import { expect } from 'chai';


describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let http: HTTPTransport;
  let requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // @ts-ignore
    global.XMLHttpRequest = xhr;

    xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    });

    http = new HTTPTransport('/auth');
  });

  afterEach(() => {
    requests = [];
  })

  it('.get() should send GET request', () => {
    http.get('/user');

    const [request] = requests;

    expect(request.method).to.eq('Get');
  });

    it('.get() should send POST request', () => {
    http.post('/user');

    const [request] = requests;

    expect(request.method).to.eq('Post');
  });

    it('.get() should send DELETE request', () => {
    http.delete('/user');

    const [request] = requests;

    expect(request.method).to.eq('Delete');
  });

      it('.get() should send PUT request', () => {
    http.put('/user');

    const [request] = requests;

    expect(request.method).to.eq('Put');
  });

      it('.get() should send POST request', () => {
    http.post('/user');

    const [request] = requests;

    expect(request.method).to.eq('Post');
  });
  
});
