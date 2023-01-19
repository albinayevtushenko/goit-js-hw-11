import axios from 'axios';

export async function fetchImages(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '31897365-b920f2014f36cdac865e9411d';
  const filter = `?key=${key}&q=${value}$&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
  return await axios.get(`${url}${filter}`).then(response => response.data);
}
