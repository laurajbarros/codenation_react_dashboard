import React from 'react';
import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Loading from './components/Loading';
import { handleSort } from './services/sort';
import { baseUrl } from  './services/api';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      filteredData: [],
      isLoading: false,
      orderFilter: 'name',
      direction: 1,
      error:null
    }
  }

  handleOrderFilterChange = (e) => {
    let sortedData;
    let direct = this.state.direction;
    if(e.target.name === this.state.orderFilter){
      sortedData = handleSort(this.state.data, this.state.direction, this.state.orderFilter)
    } else {
      direct = 1;
      sortedData = handleSort(this.state.data, 1, e.target.name)
    }
    this.setState({
      data:sortedData,
      direction: -direct,
      orderFilter:e.target.name});
  }

  handleSearchChange = (e) => {
    e.preventDefault();
    const filteredData = this.state.data.filter(contact => contact.name.toLowerCase().includes(e.target.value));
    this.setState({filteredData});
  }

  componentDidMount(){
    this.setState({isLoading:true});
    fetch(baseUrl)
    .then( response => response.json())
    .then(data => {
      const sortedData = handleSort(data, this.state.direction , this.state.orderFilter);
      this.setState({
        data:sortedData,
        filteredData: sortedData,
        isLoading: false,
        direction: -this.state.direction })
    })
    .catch(error => this.setState({error, isLoading:false}))
  };

  render() {
    return (
      <React.Fragment>
        <Topbar/>
        <Filters
          handleSearchChange={this.handleSearchChange}
          handleOrderFilterChange={this.handleOrderFilterChange}
          search={this.state.searchFilter}
          orderFilter={this.state.orderFilter}
        />
        {
          this.state.isLoading ?
          <Loading /> :
          <Contacts
            contacts={this.state.filteredData}
          />
        }
      </React.Fragment>
    )
  }
}

export default App;
