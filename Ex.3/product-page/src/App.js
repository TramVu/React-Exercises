import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",          // setting for value needs to be searched
    }
  }

  onFilterButton = (event) => {
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value }); //input the information needs to be searched
  } 
 

  render()
  {
    return (
      <>
        <input type="text" onChange = {this.onFilterButton} value = {this.state.productSearchString}/>
        <SearchView 
          items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }   //filter the item in item data                                                                                                 
                                                                                                    //that includes the searched product info then print out
        />                                                              
      </>
    )
  }

}

export default App;