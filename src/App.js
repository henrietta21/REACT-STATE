import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    person : {
      fullName : ' ',
      bio : " ",
      profession : '',
      image : ''
    },
    show : true,
    seconds : 0
  }


  handleOpenProfile = ()=> {
    this.setState({
      show : false,
      person :{
        fullName :'Apata Henrietta',
        bio :"An undergraduate with a spice",
        profession : 'Student',
        image : 'ProfilePicture.jpg'  
      }
    });
  }

  handleCloseProfile = () =>{
    this.setState({
      show : true,
      person :{
        fullName :'',
        bio :" ",
        profession : '',
        image : ''  
      }
    });
  }
  
  
  time() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(()=>this.time(), 1000);
  }

  

  

  render() {
    return (
      <div className="App">
        <div>
          <h1>{this.state.person.fullName}</h1>
          <h1>{this.state.person.bio}</h1>
          <h1>{this.state.person.profession}</h1>
          <img  style={{width:'250px'}}  src={this.state.person.image} alt="" />
        </div>
        <button onClick={this.state.show ? this.handleOpenProfile : this.handleCloseProfile}>{this.state.show ? 'Show': 'Hide'}</button>
        <p>This component was mounted {this.state.seconds}s ago</p>
      </div>
    );
  }
}


export default App;



