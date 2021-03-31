import axios from 'axios';

export const fetchChuck = async () => {
  const { data } = await axios.get(`https://api.chucknorris.io/jokes/random`);
  return data.value;
};

export async function fetchCategories() {
  const { data } = await axios.get(
    'https://api.chucknorris.io/jokes/categories'
  );

  return data;
}

export const categoriesJoke = async (category) => {
  const { data } = await axios.get(
    `https://api.chucknorris.io/jokes/random?category=${category}
    `
  );
  return data.value;
};
//api.chucknorris.io/jokes/search?query={query}

export const searchJoke = async (search) => {
  try {
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${search}`
    );
    const toAsk = data.result[0].value;
    return toAsk;
  } catch (error) {
    console.log('err:' + error);
    return error
  }
};
