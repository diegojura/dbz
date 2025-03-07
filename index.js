const axios = require('axios');

const URL = 'https://dragonball-api.com/api/characters';

async function getCharacters() {
  try {
    const response = await axios.get(URL);
    console.log('Personajes obtenidos:', response.data);
  } catch (error) {
    console.error('Error al obtener los personajes:', error.message);
  }
}

getCharacters();
