import React from 'react';

class Color extends React.Component {

  render () {
    let style = {
      backgroundColor: this.props.hexCode
    }
    return (
      <div className="color" onClick={this.props.update.bind(this, this.props.index)} style={style}>
        <p className="colorcode">{this.props.hexCode}</p>
      </div>
    );
  }
};

export default Color
