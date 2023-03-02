import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    name: 'Esther Howard',
    bloodGroup: 'AB+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 2,
    name: 'Esther Howard',
    bloodGroup: 'B+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 3,
    name: 'Esther Howard',
    bloodGroup: 'A+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 4,
    name: 'Esther Howard',
    bloodGroup: 'B+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 5,
    name: 'Esther Howard',
    bloodGroup: 'B+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 6,
    name: 'Esther Howard',
    bloodGroup: 'A+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 7,
    name: 'Esther Howard',
    bloodGroup: 'O+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 8,
    name: 'Esther Howard',
    bloodGroup: 'AB+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 9,
    name: 'Esther Howard',
    bloodGroup: 'A-',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 10,
    name: 'Esther Howard',
    bloodGroup: 'B-',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 11,
    name: 'Esther Howard',
    bloodGroup: 'AB-',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 12,
    name: 'Esther Howard',
    bloodGroup: 'B+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 13,
    name: 'Esther Howard',
    bloodGroup: 'O-',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 13,
    name: 'Esther Howard',
    bloodGroup: 'AB+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 15,
    name: 'Esther Howard',
    bloodGroup: 'B+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 16,
    name: 'Esther Howard',
    bloodGroup: 'A+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 17,
    name: 'Esther Howard',
    bloodGroup: 'AB+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 18,
    name: 'Esther Howard',
    bloodGroup: 'AB+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 19,
    name: 'Esther Howard',
    bloodGroup: 'B+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
  {
    uniqueNo: 20,
    name: 'Esther Howard',
    bloodGroup: 'AB+',
    Location: 'Tadepalligudem',
    ContactNo: '7780694274',
  },
]

class App extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)
    const searchResults = userDetailsList.filter(eachUser =>
      eachUser.bloodGroup.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Blood Group</h1>
        <h2 className="title">
          Note:Enter Blood Groups Only in capital letters.
        </h2>
        <input
          type="search"
          placeHolder="Enter Any Blood Group"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile userDetails={eachUser} key={eachUser.uniqueNo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
