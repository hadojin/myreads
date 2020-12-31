import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class Bookitem extends Component{
   state = {
    value: '',
  
  }
  
  
   updateQuery = (event) => {
    this.setState(() => ({
      value: event.target.value

    }))
     
  }

onChange=(event)=>{
	 	BooksAPI.update(this.props.mybook,event.target.value).then(json=>{ this.props.updateState()})
 
        
}
 render(){
   
     
 
  const {mybook} = this.props
    
    
return (


  <div className="book"  key={this.props.mybook.id} >
                          <div className="book-top">
                            <img className="book-cover" src={ mybook.imageLinks.thumbnail } alt={mybook.title} style={{ width: 128, height: 193}}></img>
                            <div className="book-shelf-changer">
                            <select value={this.props.mybook.shelf || "none"}   onChange={this.onChange.bind(this)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">   {mybook.title}</div>
                          <div className="book-authors"> {mybook.authors}</div>
                        </div>


)}
}
export default Bookitem