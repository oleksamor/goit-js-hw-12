import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '43441081-c9c9daac9af91d4227dda2db1';

export async function objectSearch(text, page) {
  const {data} = await axios(BASE_URL, {
    params: {
      key: KEY,
      q: text,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 15,
    },
  });

  return data;
}