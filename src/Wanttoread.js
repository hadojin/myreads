import React, {Component} from 'react'
import Bookitem from './Bookitem.js'

class Wanttoread extends Component{
  
  render(){
  return( <div className="bookshelf-books">
                    <ol className="books-grid">
                                             <Bookitem />
                                              <Bookitem />

                    </ol>
                  </div>)

  }
  
}

export default Wanttoread