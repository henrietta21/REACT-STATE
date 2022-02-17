import './App.css';
import img from './assets/ProfilePicture.jpg'
import React, { Component } from 'react'

class App extends Component {
  state = {
    person :{
      fullName :'Apata Henrietta',
      bio :"An undergraduate with a spice",
      profession : 'Student',
      image : img  
    },
    show : true,
    seconds : 0
  }

  handleClick = () =>{
    this.setState({
      show : !this.state.show
    });
  }
  
  

  

  render() {
    return (
      <div className="App">
        {
          this.state.show ? (
            <div>
            <h1>{this.state.person.fullName}</h1>
            <h1>{this.state.person.bio}</h1>
            <h1>{this.state.person.profession}</h1>
            <img  style={{width:'250px'}}  src={this.state.person.image} alt="" />
          </div>
          ):
          ''
        }
        <button onClick={this.handleClick}>{this.state.show ? 'Show': 'Hide'}</button>
        
      </div>
    );
  }
}


export default App;



