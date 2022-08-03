import axios, {AxiosRequestHeaders} from 'axios';

export const BASE_URL = 'https://aitorct-expenses-app.herokuapp.com';

enum RequestMethod {
  GET = 'get',
  POST = 'post',
}

const buildRequest = async (
  method: RequestMethod,
  path: string,
  data?: FormData,
  headers?: AxiosRequestHeaders,
) =>
  await axios({
    method,
    url: `${BASE_URL}${path}`,
    data,
    headers,
  });

const fetchExpenses = async (limit: number, offset: number) =>
  await buildRequest(
    RequestMethod.GET,
    `/expenses?limit=${limit}&offset=${offset}`,
  );

const uploadReceipt = async (id: string, receiptUri: string) => {
  const data = new FormData();
  const fileName = receiptUri.split('/').pop();

  data.append('receipt', {
    uri: receiptUri,
    name: `${fileName}.jpg`,
    type: 'image/jpg',
  });

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  };

  return await buildRequest(
    RequestMethod.POST,
    `/expenses/${id}/receipts`,
    data,
    headers,
  );
};

export {fetchExpenses, uploadReceipt};
