
import * as React from 'react';
import { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

import {getData} from './utils/data.utils'


import CardList from './components/card-list/card-list.component';

export type Monster = {
  id: string,
  name: string,
  email: string
}

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredmonsters,setFilteredMonsters] = useState(monsters);
  console.log("redered")

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users);
    }
    fetchUsers();
  }, []);
  //console.log('monster', monsters);

  useEffect(()=>{
    const newFilteredmonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredMonsters(newFilteredmonsters);
  },[monsters,searchField])
  
  // console.log("searchField",searchField)
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholder="Search monsters"
        handleChange={onSearchChange}
        className="search"
      />
      {monsters.length > 0 ? (
        <CardList monsters={filteredmonsters} />
      ) : (
        'loading'
      )}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       search: '',
//     };
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   onSearchChange = (e) => {
//     this.setState({ search: e.target.value });
//   };

//   render() {
//     const { monsters, search } = this.state;
//     const { onSearchChange } = this;
//     var filteredmonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(search.toLowerCase());
//     });
//     console.log('app js render');
//     return (
//       <div className="App">
//         <h1>Monster Rolodex</h1>
//         <SearchBox
//           placeholder="Search monsters"
//           handleChange={onSearchChange}
//           className="search"
//         />
//         {monsters.length > 0 ? (
//           <CardList monsters={filteredmonsters} />
//         ) : (
//           'loading'
//         )}
//       </div>
//     );
//   }
// }

export default App;
