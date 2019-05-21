import {
  GET_GENRES,
  EDIT_GENRE_API,
  ADD_GENRE_API,
  SET_GENRES,
  SET_ALL_GENRES,
  DELETE_GENRE_API,
  OPEN_ADD_MODAL,
  CLOSE_MODALS,
  OPEN_EDIT_MODAL,
  OPEN_DELETE_GENRE_MODAL,
  FETCHING,
  EDIT_GENRE_ERROR,
  ADD_GENRE_ERROR,
  DELETE_GENRE_ERROR,
  ADD_GENRE,
  DELETE_GENRE,
  EDIT_GENRE
} from './ActionTypes';

export const getGenres = page => {
  return {
    type: GET_GENRES,
    payload: page
  };
};

export const setGenres = payload => {
  return {
    type: SET_GENRES,
    payload
  };
};

export const setAllGenres = payload => {
  return {
    type: SET_ALL_GENRES,
    payload
  };
};

export const deleteGenre = id => {
  return {
    type: DELETE_GENRE_API,
    payload: id
  };
};

export const addGenre = genre => {
  return {
    type: ADD_GENRE_API,
    payload: genre
  };
};

export const editGenre = genre => {
  return {
    type: EDIT_GENRE_API,
    payload: genre
  };
};

export const deleteGenreSaga = id => {
  return {
    type: DELETE_GENRE,
    payload: id
  };
};

export const addGenreSaga = genre => {
  return {
    type: ADD_GENRE,
    payload: genre
  };
};

export const editGenreSaga = genre => {
  return {
    type: EDIT_GENRE,
    payload: genre
  };
};

export const deleteGenreError = error => {
  return {
    type: DELETE_GENRE_ERROR,
    payload: error
  };
};

export const addGenreError = error => {
  return {
    type: ADD_GENRE_ERROR,
    payload: error
  };
};

export const editGenreError = error => {
  return {
    type: EDIT_GENRE_ERROR,
    payload: error
  };
};

export const openModal = () => {
  return {
    type: OPEN_ADD_MODAL,
    payload: true
  };
};

export const openEditModal = genre => {
  return {
    type: OPEN_EDIT_MODAL,
    payload: genre
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODALS,
    payload: false
  };
};

export const openDeleteGenreModal = genre => {
  return {
    type: OPEN_DELETE_GENRE_MODAL,
    payload: genre
  };
};

export const fetching = status => {
  return {
    type: FETCHING,
    payload: status
  };
};
