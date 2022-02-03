import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, search } = this.state;
    var filteredmonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={(e) => this.setState({ search: e.target.value })}
        />
        <CardList monsters={filteredmonsters} />
      </div>
    );
  }
}

export default App;
