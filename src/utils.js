const _wundergroundURL = 'https://api.wunderground.com/api/';
const _APIKEY = 'ded42e78e8460baa';
const _baseURL = _wundergroundURL + _APIKEY;

export function weatherApi(query) {
  let url = `${_baseURL}/conditions/forecast/q/${query}.json?`;
  return fetch(url, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => {
    return json;
  });
}