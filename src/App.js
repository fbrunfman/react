import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Book from './Book/Book';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    authors: [
      { 
        name: 'Jorge Luis Borges', 
        books: [
          'El Libro de Arena',
          'El Aleph',
          'Ficciones'
        ]
      },
      { name: 'Adolfo Bioy Casares'},
      { name: 'Philip Dick'}
    ],
    showBooks: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  toggleBooks = () => {
    const doesShow = this.state.showBooks
    this.setState({ showBooks: !doesShow })
    console.log();
    
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: '#944'
    };

    let books = null
    if (this.state.showBooks) {
      books = (
        <div>
          {this.state.authors[0].books.map((book, index) => {
            return <div key={index}>
              {book}
            </div>
          })}
        </div>
      )      
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
       {/*  <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} /> */}
        <Book
          author={this.state.authors[0].name}
          click={this.toggleBooks}
        />
        {books}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;