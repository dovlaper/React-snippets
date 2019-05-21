import { call, put } from 'redux-saga/effects';
import genresService from '../../services/api/GenreService';
import {
  fetching,
  setGenres,
  setAllGenres,
  deleteGenreError,
  addGenreError,
  editGenreError,
  closeModal,
  addGenreSaga,
  deleteGenreSaga,
  editGenreSaga
} from '../actions/GenreActions';
import genreService from '../../services/api/GenreService';

export function* getGenres({ payload }) {
  try {
    yield put(fetching(true));
    const { data } = yield call(genresService.fetchGenres, payload);
    payload
      ? yield put(setGenres(data))
      : yield put(setAllGenres(data));
    yield put(closeModal());
  } catch (error) {
    console.log(error);
    /*eslint-disable-line*/
  } finally {
    yield put(fetching(false));
  }
}

export function* deleteGenre({ payload }) {
  try {
    yield put(fetching(true));
    yield call(genresService.deleteGenre, payload);
    yield put(deleteGenreSaga(payload));
    yield put(closeModal());
  } catch (error) {
    yield put(deleteGenreError(error));
  } finally {
    yield put(fetching(false));
  }
}

export function* addGenre({ payload }) {
  try {
    yield put(fetching(true));
    const response = yield call(genreService.addGenre, payload);
    yield put(addGenreSaga(response.data));
    yield put(closeModal());
  } catch (error) {
    const response = { error };
    if (response && response.error.response.data) {
      yield put(addGenreError(error.response.data.errors.name));
    }
  } finally {
    yield put(fetching(false));
  }
}

export function* editGenre({ payload }) {
  try {
    yield put(fetching(true));
    const response = yield call(genreService.editGenre, payload);
    yield put(editGenreSaga(response.data));
    yield put(closeModal());
  } catch (error) {
    yield put(editGenreError(error.response.data.errors.name));
  } finally {
    yield put(fetching(false));
  }
}
