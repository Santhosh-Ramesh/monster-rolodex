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

  onSearchChange = (e) =>{
    this.setState({ search: e.target.value })
  }

  render() {
    const { monsters, search } = this.state;
    const { onSearchChange } = this;
    var filteredmonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log("app js render")
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={onSearchChange}
          className = "search"
        />
        {
          monsters.length > 0 ? ( <CardList monsters={filteredmonsters} />): ("loading")
        }
      </div>
    );
  }
}

export default App;
