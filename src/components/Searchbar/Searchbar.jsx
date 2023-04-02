import { Component } from 'react';

class Searchbar extends Component {
  state = {
    queryWord: '',
  };

  handlerSubmit(ev) {
    ev.preventDefault();
    // console.log("func",this.props)
    // console.log('word', this.state.queryWord);

    (this.state.queryWord)&&this.props.getQuery(this.state.queryWord)
  }

  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={(ev)=>this.handlerSubmit(ev)}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              //   value={this.state.queryWord}
              onChange={ev => this.setState({ queryWord: ev.target.value })}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
