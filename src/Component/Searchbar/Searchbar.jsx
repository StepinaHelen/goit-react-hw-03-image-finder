import React from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';
class Searchbar extends React.Component {
  state = {
    query: '',
  };
  handleChangeInput = e => {
    // console.log(e.currentTarget.value);
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmitForm(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChangeInput}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
export default Searchbar;
