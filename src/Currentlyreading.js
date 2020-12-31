import React, { Component } from 'react'

class Currentlyreading extends Component{
    state = { 
    query: ''
  }  

  
 render(){
    const { query } = this.state
    const {books} = this.props
 

  const CurrentReading = books.filter((c) => (
          c.shelf === "currentlyReading"
        ))



 return( <ol className="books-grid">
        {CurrentReading.map((book) => 
 
         <div className="book"  key={book.id} >
                          <div className="book-top">
                            <img className="book-cover" src={ book.imageLinks.thumbnail } style={{ width: 128, height: 193}}></img>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>

        )}

                    </ol>
 )
 
 } 
 
}

export default Currentlyreading