import { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    queryWord: '',
  };

  handlerSubmit(ev) {
    ev.preventDefault();
    this.state.queryWord && this.props.getQuery(this.state.queryWord);
  }

  render() {
    return (
      <>
        <header className={s.Searchbar}>
          <form
            className={s.SearchForm}
            onSubmit={ev => this.handlerSubmit(ev)}
          >
            <button type="submit" className={s.SearchFormButton}>
              <span className={s.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={s.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.queryWord}
              onChange={ev => this.setState({ queryWord: ev.target.value })}
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes={
  getQuery:PropTypes.func,
}

export default Searchbar;
