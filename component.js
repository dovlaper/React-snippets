import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import GenreTableRow from '../components/GenreTableRow';
import AddEditGenreModal from '../components/AddEditGenreModal';
import ConfirmModal from '../components/ConfirmModal';
import {
  getGenres,
  deleteGenre,
  openModal,
  closeModal,
  openEditModal,
  openDeleteGenreModal,
} from '../store/actions/GenreActions';
import Pagination from '../components/Pagination';
import { getPageFromQueryParams } from '../methods';

class GenreList extends Component {

  constructor(props) {
    super(props);
    Modal.setAppElement('body');
  }

  componentDidMount() {
    this.props.getGenres(
      getPageFromQueryParams(this.props.location.search, this.props.currentPage)
    );
  }

  componentDidUpdate() {
    const page = getPageFromQueryParams(
      this.props.location.search,
      this.props.currentPage
    );
    if (Number(page) !== this.props.currentPage && !this.props.fetching) {
      this.props.getGenres(page);
    }
  }

  deleteGenre = () => {
    this.props.deleteGenre(this.props.genreToDelete.id);
    this.props.getGenres(
      getPageFromQueryParams(this.props.location.search, this.props.currentPage)
    );
  };

  renderGenres() {
    return this.props.genres.map(genre => (
      <GenreTableRow
        key={genre.id}
        singleGenre={genre}
        openConfirmModal={this.props.openDeleteGenreModal}
        openEditModal={this.props.openEditModal}
      />
    ));
  }

  render() {
    return (
      <div className="kg-c-table kg-c-table--genres">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Genre name</th>
              <th>Questions</th>
              <th className="kg-c-table--genres__item">Games played</th>
              <th className="kg-u-text--right ">
                <Button bsClass="kg-c-btn-add" onClick={this.props.openModal}>
                  +<span>ADD NEW</span>
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>{this.renderGenres()}</tbody>
          <tfoot>
            <tr>
              {this.props.lastPage > 1 && (
                <Pagination
                  currentPage={this.props.currentPage}
                  lastPage={this.props.lastPage}
                  handleJump={page =>
                    this.props.history.push('/genres?page=' + page)
                  }
                />
              )}
            </tr>
          </tfoot>
        </Table>
        <AddEditGenreModal />
        <ConfirmModal
          closeModal={this.props.closeModal}
          header={'Delete Genre'}
          message={'Are you sure that you want to delete this genre?'}
          note={
            'Note: By deleting this genre you will delete all the questions for this genre.'
          }
          isOpen={this.props.confirmModalIsOpen}
          deleteFunction={this.deleteGenre}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    genres: state.genres.genres,
    confirmModalIsOpen: state.genres.confirmModalIsOpen,
    genreToDelete: state.genres.genreToDelete,
    currentPage: state.genres.currentPage,
    lastPage: state.genres.lastPage,
    fetching: state.genres.loading
  };
};

const mapDispatchToProps = {
  getGenres, 
  deleteGenre, 
  openModal, 
  openEditModal, 
  closeModal, 
  openDeleteGenreModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreList);
