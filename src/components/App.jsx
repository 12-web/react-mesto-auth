import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import ImagePopup from './ImagePopup/ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup/EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup/AddPlacePopup';
import ConfirmDeleteCard from './ConfirmDeleteCard/ConfirmDeleteCard';
import MainLoader from './MainLoader/MainLoader';
import { Login } from './Login/Login';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useHistory,
} from 'react-router-dom';
import '../index.css';
import { Register } from './Register/Register';
import { Cards } from './Cards/Cards';
import { InfoTooltip } from './InfoTooltip/InfoTooltip';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import * as auth from '../utils/auth';

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
  const [selectedDeleteCardId, setSelectedDeleteCardId] = useState(null);
  const [cards, setCards] = useState([]);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isFormLoading, setFormIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    about: '',
    avatar: '',
  });
  const [isSuccessResult, setIsSuccessResult] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  /** добавление данных пользователя и карточек при загрузке страницы */
  useEffect(() => {
    setIsPageLoading(true);
    Promise.all([api.getUserInformation(), api.getInitialCards()])
      .then(([userData, cardsList]) => {
        // получение данных пользователя
        setCurrentUser(userData);
        // получение карточек
        setCards(cardsList);
      })
      .catch(console.error)
      .finally(() => setIsPageLoading(false));
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .tockenCheck(jwt)
        .then(res => {
          if (res) {
            setUserEmail(res.data.email);
            setLoggedIn(true);
            navigate('/', { replace: true });
          }
        })
        .catch(err => console.log(err));
    }
  }, []);

  /**
   * фукнция добавления новой картчочки
   * @param {string} name - название карточки
   * @param {string} link - ссылка на картинку карточки
   */
  const handleAddPlaceSubmit = ({ title: name, link }) => {
    setFormIsLoading(true);
    api
      .addNewCard(name, link)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(console.error)
      .finally(() => setFormIsLoading(false));
  };

  /**
   * изменение данных пользователя и закрытие модального окна
   * @param {string} name - имя пользователя
   * @param {string} about - род деятельности пользователя
   */
  const handleUpdateUser = ({ name, about }) => {
    setFormIsLoading(true);
    api
      .editProfileData(name, about)
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(console.error)
      .finally(() => setFormIsLoading(false));
  };

  /**
   * изменение аватара и закрытие модального окна
   * @param {string} avatar - ссылка на картинку (аватар пользователя)
   */
  const handleUpdateAvatar = avatar => {
    setFormIsLoading(true);
    api
      .editUserAvatar(avatar)
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(console.error)
      .finally(() => setFormIsLoading(false));
  };

  /**
   * изменение статуса лайка и количества лайков
   * @param {Array} card.likes - массив лайков карточки
   * @param {string} card._id - идентификатор карточки
   */
  const handleCardLike = card => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then(newCard => {
      setCards(cards => cards.map(c => (c._id === card._id ? newCard : c)));
    });
  };

  /**
   * открытие попапа редактирования аватара
   */
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  /**
   * открытие попапа редактирования профиля
   */
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);

  /**
   * открытие попапа редактирования профиля
   */
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);

  /**
   * открытие модального окна подтверждения удаления карточки
   * @param {string} id
   */
  const handleCardDeleteClick = id => {
    setIsDeleteCardPopupOpen(true);
    setSelectedDeleteCardId(id);
  };

  /**
   * удаление карточки и закрытие модального окна
   * @param {string} id - идентификатор карточки
   */
  const handleCardDelete = id => {
    setFormIsLoading(true);
    api
      .deleteCard(id)
      .then(() => {
        setCards(cards => cards.filter(card => card._id !== id));
        closeAllPopups();
      })
      .catch(console.error)
      .finally(() => setFormIsLoading(false));
  };

  const handleSignIn = ({ email, password }) => {
    setFormIsLoading(true);
    auth
      .authorize({ email, password })
      .then(userData => {
        localStorage.setItem('jwt', userData.token);
        setUserEmail(email);
        navigate('/', { replace: true });
      })
      .catch(() => {
        setIsInfoTooltipOpen(true);
        setIsSuccessResult(false);
      })
      .finally(() => setFormIsLoading(false));
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setUserEmail('');
    navigate('/signin', { replace: true });
  };

  const handleSignUp = userData => {
    setFormIsLoading(true);
    auth
      .register(userData)
      .then(res => {
        console.log(res);
        setIsSuccessResult(true);
        setIsInfoTooltipOpen(true);
      })
      .catch(err => {
        console.log(err);
        setIsSuccessResult(false);
        setIsInfoTooltipOpen(true);
      })
      .finally(() => setFormIsLoading(false));
  };

  /**
   * функция закрытия всех модальных окон и обнуление значения выбранной карточки
   */
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setIsInfoTooltipOpen(false);
    setSelectedCard({ name: '', link: '' });
  };

  /**
   * нажатие на карточку с открытие модального окна просмотра карточки
   * @param {string} name - имя карточки
   * @param {string} link - ссылка на картинку карточки
   */
  const handleCardClick = ({ name, link }) =>
    setSelectedCard({ name: name, link: link });

  const routes = [
    {
      path: '/signin',
      name: 'Вход',
      element: <Login />,
    },
    {
      path: '/signup',
      name: 'Регистрация',
      element: <Register />,
    },
  ];

  return (
    <div className='root'>
      <CurrentUserContext.Provider value={currentUser}>
        <Header onSignOut={handleSignOut} email={userEmail} />
        <Main>
          <Routes>
            <Route
              path='/signin'
              element={
                <Login isFormLoading={isFormLoading} onLogin={handleSignIn} />
              }
            />
            <Route
              path='/signup'
              element={
                <Register
                  isFormLoading={isFormLoading}
                  onRegister={handleSignUp}
                />
              }
            />
            <Route
              path='/'
              element={
                <ProtectedRoute
                  element={Cards}
                  loggedIn={loggedIn}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onEditAvatar={handleEditAvatarClick}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDeleteClick}
                  cards={cards}
                />
              }
            />
            <Route path='*' element={<Navigate to='/signin' replace />} />
          </Routes>
        </Main>
        <Footer />
        <InfoTooltip
          name='info'
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          isSuccessResult={isSuccessResult}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <EditAvatarPopup
          isFormLoading={isFormLoading}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isFormLoading={isFormLoading}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isFormLoading={isFormLoading}
          onAddPlace={handleAddPlaceSubmit}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <ConfirmDeleteCard
          isFormLoading={isFormLoading}
          cardId={selectedDeleteCardId}
          onConfirmDelete={handleCardDelete}
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
