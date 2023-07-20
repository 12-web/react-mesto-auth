export const BASE_URL = 'https://auth.nomoreparties.co';

/**
 * Проверка ответа на запрос к серверу
 * @param { Promise } res - возвращаемый при fetch-запросе объект
 * @returns { Object } - возвращаемый объект переведен в json-формат и содержит готовые данные
 */
const getResponseData = res => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

/**
 * Осуществление запроса к серверу
 * @param { string } url - эндпойнт запроса
 * @param { string } options - объект конфигурации запроса
 * @returns { Promise } - возвращаемый объект переведен в json-формат и содержит готовые данные
 */
const request = (url, options) => {
  return fetch(`${BASE_URL}/${url}`, options).then(res => getResponseData(res));
};

/**
 * Аутентификация пользователя
 * @param { Object } user
 * @param { string}  user.email - email пользователя при регистрации
 * @param { string } user.password - password пользователя при регистрации
 * @returns { Promise.<{string[]}> } - возвращаемый объект содержит id зарегистрированного пользователя и email
 */
export const register = ({ email, password }) => {
  return request('signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  });
};

/**
 * Авторизация пользователя
 * @param { Object } user
 * @param { string } user.email - email пользователя при авторизации
 * @param { string } user.password - password пользователя при авторизации
 * @returns { Promise.<{string}> } - возвращаемый объект содержит токен пользователя
 */
export const authorize = ({ email, password }) => {
  return request('signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  });
};

/**
 * Проверка токека пользователя
 * @param { string } jwt - токен, содержащийся в localStorage
 * @returns { Promise.<{string}> } - возвращаемый объект содержит id зарегистрированного пользователя и email
 */
export const tockenCheck = jwt => {
  return request('users/me', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
};
