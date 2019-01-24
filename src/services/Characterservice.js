const charactersApi = 'http://hp-api.herokuapp.com/api/characters';
const fetchCharacters  = () => fetch(charactersApi).then(res => res.json());

export {fetchCharacters};