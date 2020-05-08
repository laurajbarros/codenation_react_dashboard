import React from 'react';
import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Loading from './components/Loading';
import { handleSort } from './utils/sort';
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
    let { direction, data, orderFilter } = this.state;
    if(e.target.name === orderFilter){
      sortedData = handleSort(data, direction, orderFilter)
    } else {
      direction = 1;
      sortedData = handleSort(data, 1, e.target.name)
    }
    this.setState({
      data:sortedData,
      direction: -direction,
      orderFilter:e.target.name});
  }

  handleSearchChange = (e) => {
    e.preventDefault();
    const filteredData = this.state.data.filter(contact => contact.name.toLowerCase().includes(e.target.value));
    this.setState({filteredData});
  }

  async componentDidMount(){
    this.setState({isLoading:true});
    const response = await fetch(baseUrl);
    const data  = await response.json();
    const sortedData = handleSort(data, this.state.direction , this.state.orderFilter);
    this.setState({
      data:sortedData,
      filteredData: sortedData,
      isLoading: false,
      direction: -this.state.direction })
  };

  render() {
    return (
      <>
        <Topbar/>
        <Filters
          handleSearchChange={this.handleSearchChange}
          handleOrderFilterChange={this.handleOrderFilterChange}
          searchFilter={this.state.searchFilter}
          orderFilter={this.state.orderFilter}
        />
        {
          this.state.isLoading ?
          <Loading /> :
          <Contacts
            contacts={this.state.filteredData}
          />
        }
      </>
    )
  }
}

export default App;
