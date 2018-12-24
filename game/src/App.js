import React, { Component } from 'react';
import Images from "./components/Images/img";
import Wrapper from "./components/Wrapper/index";
import Header from "./components/Header/title";
import images from "./images.json";


class App extends Component {
  state = {
    images,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.images.forEach(image => {
      image.count = 0;
    });
    // alert(`Game Over! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.images.find((o, i) => {
      if (o.id === id) {
        if(images[i].count === 0){
          images[i].count = images[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.images.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

 
 render() {
  return (
    <Wrapper>
      <Header score={this.state.score} highscore={this.state.highscore}>Pee-Wee Memory Game</Header>
      {this.state.images.map(image => (
        <Images
          clickCount={this.clickCount}
          id={image.id}
          image={image.image}
        />
      ))}
    </Wrapper>
  );
}
}




export default App;
