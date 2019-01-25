const url = 'https://hp-api.herokuapp.com/api/characters';
const fetchCharacters = () => fetch(url).then(res => res.json());

export {fetchCharacters};