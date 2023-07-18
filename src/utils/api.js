class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  // получение овтета на запрос
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  //отправка запроса и обработка ответа
  _request(url, options) {
    return fetch(`${this._baseUrl}/${url}`, options).then(
      this._getResponseData
    );
  }

  // получение карточек
  getInitialCards() {
    return this._request('cards', {
      headers: {
        authorization: this._headers.authorization,
      },
    });
  }
  // получение информации пользователя
  getUserInformation() {
    return this._request('users/me', {
      headers: {
        authorization: this._headers.authorization,
      },
    });
  }
  // изменение информации пользователя
  editProfileData(name, about) {
    return this._request(`users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    });
  }

  // изменение аватара пользователя
  editUserAvatar(avatar) {
    return this._request('users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    });
  }
  // добавление новой карточки
  addNewCard(name, link) {
    return this._request('cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }

  // удаление карточки
  deleteCard(id) {
    return this._request(`cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._headers.authorization,
      },
    });
  }
  // изменение статуса лайка
  changeLikeCardStatus(id, isLiked) {
    return this._request(`cards/${id}/likes`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: {
        authorization: this._headers.authorization,
      },
    });
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers: {
    authorization: '14b13473-1b56-4228-afac-2edb4b448b71',
    'Content-Type': 'application/json',
  },
});

export default api;
