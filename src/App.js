import { Component } from 'react';
import personalImg  from './debbarh-removebg-preview.png';


class App extends Component{
  constructor(){
    super();
    this.state = {
      //number:1,
      show : true,
      Person : { 
                fullName : "abdelhafid debbarh ",
                bio : "web developer", 
                imgSrc: personalImg, 
                profession:"Student in GMC"
              },
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  


  clickHandler(){
    this.setState(function (prevState){
      return{
        show : !prevState.show ,
      }
    });
  }

  render(){
    if(this.state.show)
    return (
      <div className="container">
        <button className="btn btn-primary" onClick={this.clickHandler}>Hide</button>
        <br/>
        <img src={personalImg} alt="image peronel" width="400" height="430" />
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <h2>{this.state.Person.profession}</h2>
      </div>
      );
      else return (
        <div className="container">
      <button className="btn btn-primary" onClick={this.clickHandler}>Show</button>
      </div>
      );
  }
}

export default App;
