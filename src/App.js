import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import Dashboard from './Dashboard.js'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  
  constructor(){
    super();
    this.state = {books:[], searchResults:[]}
  }
  
 componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books,
          searchResults:[]
        }))
      })
  }
    updateState() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
         
        }))
      })
  }
	searchChange(input){
       BooksAPI.search(input.target.value, 100).then(res=>{this.setState({...this.state, searchResults:res.error?[]:res})});
      console.log(this.state.searchResults);
    	
    }


  render() {   
 
    return (
      <div className="app">  
          <Route exact path='/search' render={() => (
        	  <div className="search-books">
           		 <div className="search-books-bar">

              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                									<input type="text" placeholder="Search by title or author" onChange={this.searchChange.bind(this)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"><Bookshelf Readingstate={this.state.searchResults} updateState={this.updateState.bind(this)}/></ol>
            </div>
          </div>)}/>




           <Route exact path='/' render={() => (
            <div> <Dashboard books={this.state.books} updateState={this.updateState.bind(this)} />
                   <div className="open-search">
 			              <Link to="/search">Add a book</Link>    
                   </div>
           </div>)}/>



        
      </div>
    )
}
}

export default BooksApp
