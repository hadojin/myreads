import React, { Component } from 'react'
import Bookitem from './Bookitem'

class Bookshelf extends Component{
    state = { 
      
  }  

  
 render(){

   const {Readingstate, updateState} = this.props
 console.log(Readingstate);

 return( <ol className="books-grid">
        { Readingstate.map((mybook) => 
        <Bookitem key={mybook.id} mybook={mybook} updateState={this.props.updateState} />
)}
                    </ol>
 )
 
 } 
 
}

export default Bookshelf