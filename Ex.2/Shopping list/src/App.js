import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]

    
    };

    /* V1: setTimeout(() => {
      this.setState({ 
        items:
        [
          this.state.items[0],
          this.state.items[1],
          this.state.items[2],
          this.state.items[3],
          {id:5, value: 'Carrots', qty: 5}]
        });
    }, 2000) */ /*Adding new item showing up after 2s*/

    /* setTimeout(() => {
      this.setState({ items:[...this.state.items, {id:5, value: 'Carrots', qty:5}] })
    },2000) */
    /*V2: equal to V1, but '...' replace for the items array => shorter code */
    
    //this.addingCarrots = this.addingCarrots.bind(this);
    
  }

  addingItems = (description, quantity) => {
    const searchResult = this.state.items.findIndex((element, index, array) => {
      if (element.value === description) 
      {
        return true;
      } 
      else 
      {
        return false;
      }
    });

    if ((searchResult) !== -1) 
    {
      console.log('Success, element with index ' + searchResult + ' is matching with ' + description);
      let extraItems = [...this.state.items];
      extraItems[searchResult].qty += quantity;

      this.setState({items: extraItems});
    } 
    else 
    {
      console.log('No item!')
      this.setState({ 
        items:
        [...this.state.items, 
          {
            id:this.state.items.length + 1, 
            value: description, qty: quantity
          }
        ] 
      });
    }
    
  }


  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick= { () => this.addingItems ('Carrots', 5) }>Carrot</button>
      <button onClick= { () => this.addingItems ('Yougurts', 4) }>Yogurt</button>
      <button onClick= { () => this.addingItems ('Noodle', 1) }>Noodle</button>
      <button onClick= { () => this.addingItems ('Beers', 6) }>Beer</button>
    </div>
  }
}

export default App;