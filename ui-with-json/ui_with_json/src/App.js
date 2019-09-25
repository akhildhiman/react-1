import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dogsImages: []
    }
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick() {
    const randomNum = Math.floor(Math.random() * this.state.dogsImages.length)
    const randomImg = this.state.dogsImages[randomNum];
    console.log(randomImg);

    this.setState({ dogsImages: randomImg });
    fetch("https://dog.ceo/api/breeds/image/random/10")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({ dogsImages: data.message })
    })
  }

  // componentDidMount() {
  //   fetch("https://dog.ceo/api/breeds/image/random/10")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       this.setState({ dogsImages: data.message })
  //     })
  // }

  render() {
    return (
      <div>
        <h1 style = {{textAlign: "center"}}>Random Dog Generator</h1>
        <img style = {{width: "200px"}} src = {this.state.dogsImages} alt = "dogs"/>
        <button style = {{display: "block"}} onClick = {this.handleClick}>Click Here</button>
      </div>
    )
  }
}

export default App;