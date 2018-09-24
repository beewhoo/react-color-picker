import React, { Component } from 'react';
import logo from './logo.svg';
import Color from './Color'
import './App.css';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      colorsNum: 8,
      colors: []
    };
    for (let i = 0; i < this.state.colorsNum; i +=1) {
      this.state.colors.push({hexCode: this.generateColor()});
    }
  }

  generateColor () {
    let hex = '#' +  Math.random().toString(16).substr(-6);
    console.log(hex)
    return hex
  }

  updateColor (index) {
    let colors = this.state.colors.slice();
    const currentColor = this.generateColor();
    colors[index].hexCode = currentColor;
    this.setState({
      colors : colors
    });
 }

  render () {
    return (
      <div className="color-container">
        { this.state.colors.map((color, index) => <Color key={`color-${index}`} index={index} update={this.updateColor.bind(this)} hexCode={color.hexCode}></Color>) }
      </div>
    )
  }
}

export default App;
