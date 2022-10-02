

import { Test } from "../test/test";
import { TestSecond } from "../testSecond/testSecond";
import { TestThreed } from "../testThreed/testThreed"
import { TestFourth } from "../testFourth/testFourth";
import { Routes, Route } from 'react-router-dom'
import { Component } from "react";

import photoOne from '../../resources/mainImg/815O9ktyfUL.png'
import photoTwo from '../../resources/mainImg/91Ryk2gKejL.png'
import photoThred from '../../resources/mainImg/71qBQnpQFYL.png'
import photoFoirth from '../../resources/coffeItemPageImg/81tGmkXdGLL.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { img: photoFoirth, best: true, name: 'Solimo Coffee Beans 2 kg', descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', value: '10.73$', id: 1, country: 'Brazil' },
        { img: photoFoirth, best: true, name: 'Presto Coffee Beans 1 kg', descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', value: '15.99$', id: 2, country: 'Kenya' },
        { img: photoThred, best: true, name: 'AROMISTICO Coffee 1 kg', descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', value: '6.99$', id: 3, country: 'Columbia' },
        { img: photoThred, best: false, name: 'Solimo Coffee Beans 2 kg', descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', value: '10.73$', id: 4, country: 'Brazil' },
        { img: photoThred, best: false, name: 'Solimo Coffee Beans 2 kg', descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', value: '10.73$', id: 5, country: 'Kenya' },
        { img: photoThred, best: false, name: 'Solimo Coffee Beans 2 kg', descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', value: '10.73$', id: 6, country: 'Columbia' }
      ],
      term: '',
      filter: 'all',
      testData: [{}]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        testData: data.filter(item => item.id === id)
      }
    })
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }
  onUpdateSearch = (term) => {
    this.setState({ term: term })
  }
  filterPost = (items, filter) => {
    switch (filter) {
      case 'Brazil':
        return items.filter(item => item.country === 'Brazil')
      case 'Kenya':
        return items.filter(item => item.country === 'Kenya')
      case 'Columbia':
        return items.filter(item => item.country === 'Columbia')
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({ filter: filter });
  }

  render() {
    const { data, term, filter,testData } = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter)
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Test data={data} />} />
          <Route path="/OurCoffe"
              element={<TestSecond data={visibleData}
              deleteItem={this.deleteItem}
              onUpdateSearch={this.onUpdateSearch}
              onFilterSelect={this.onFilterSelect}
              filter={filter} />} />
          <Route path="/ForYourPleasure"
              element={<TestThreed data={visibleData}
              onUpdateSearch={this.onUpdateSearch}
              onFilterSelect={this.onFilterSelect}
              filter={filter} />} />
          <Route path="/1" element={<TestFourth data={testData} />} />
        </Routes>
      </div>
    )
  }



}

export default App;
