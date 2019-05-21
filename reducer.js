import {
  SET_GENRES,
  SET_ALL_GENRES,
  DELETE_GENRE,
  ADD_GENRE,
  EDIT_GENRE,
  DELETE_GENRE_ERROR,
  EDIT_GENRE_ERROR,
  ADD_GENRE_ERROR,
  OPEN_ADD_MODAL,
  CLOSE_MODALS,
  OPEN_EDIT_MODAL,
  OPEN_DELETE_GENRE_MODAL,
  FETCHING
} from '../actions/ActionTypes';

export const initialState = {
  genres: [],
  error: '',
  addModalIsOpen: false,
  confirmModalIsOpen: false,
  genreToDelete: {},
  genreToEdit: {},
  loading: false,
  currentPage: 1,
  lastPage: 1
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_GENRES:
      return {
        ...state,
        genres: action.payload.data,
        currentPage: action.payload.current_page,
        lastPage: action.payload.last_page
      };
    case SET_ALL_GENRES:
      return {
        ...state,
        genres: action.payload,
        currentPage: 1
      };
    case DELETE_GENRE: {
      return {
        ...state,
        genres: state.genres.filter(el => el.id !== action.payload)
      };
    }
    case ADD_GENRE: {
      return {
        ...state,
        genres: [...state.genres, action.payload]
      };
    }
    case EDIT_GENRE: {
      const index = state.genres.findIndex(g => g.id === action.payload.id);
      return {
        ...state,
        genres: [
          ...state.genres.slice(0, index),
          action.payload,
          ...state.genres.slice(index + 1, state.genres.length)
        ]
      };
    }

    case DELETE_GENRE_ERROR: {
      return {
        ...state,
        error: `${action.payload}`
      };
    }
    case ADD_GENRE_ERROR: {
      return {
        ...state,
        error: `${action.payload}`
      };
    }
    case EDIT_GENRE_ERROR: {
      return {
        ...state,
        error: `${action.payload}`
      };
    }
    case OPEN_ADD_MODAL: {
      return {
        ...state,
        addModalIsOpen: action.payload
      };
    }
    case OPEN_EDIT_MODAL: {
      return {
        ...state,
        addModalIsOpen: true,
        genreToEdit: action.payload
      };
    }
    case CLOSE_MODALS: {
      return {
        ...state,
        addModalIsOpen: action.payload,
        confirmModalIsOpen: action.payload,
        genreToDelete: {},
        genreToEdit: {},
        error: ''
      };
    }
    case OPEN_DELETE_GENRE_MODAL: {
      return {
        ...state,
        confirmModalIsOpen: true,
        genreToDelete: action.payload
      };
    }
    default:
      return state;
  }
};

export default genresReducer;
