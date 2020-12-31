import React, {Component} from 'react'
import Bookshelf from './Bookshelf.js'

class Dashboard extends Component{

  



  render() {
     
      const { books } = this.props;
      console.log(books)
      
    const CurrentReading = books.filter((c) => (
          c.shelf === "currentlyReading"
        ))
       const WantToRead = books.filter((c) => (
          c.shelf === "wantToRead"
        ))
        const Read = books.filter((c) => (
          c.shelf === "read"
        ))

console.log(CurrentReading)
   

  return(
  
   <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                   <h2 className="bookshelf-title">Currently Reading</h2>
                  <Bookshelf Readingstate={CurrentReading}  updateState={this.props.updateState} />	
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                   <Bookshelf Readingstate={WantToRead} updateState={this.props.updateState}/>	


                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <Bookshelf Readingstate={Read} updateState={this.props.updateState}/>	

                </div>
          </div>
            </div>
          
          
          
          
          </div>
       
  
  )
  }
}

export default Dashboard