import React, {Component} from 'react';
import './Like.css';

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    this.setState({ liked: !this.state.liked});
  }
  render() {
    let buttonText = this.state.liked? 'Liked': 'Like';
    return (
      <button 
      	onClick={this.handleClick} 
      	className={this.state.liked? 'like' : 'unlike'}>
        <i className="fa fa-heart"></i>&nbsp;
        {buttonText}</button>
     );
  }
}

export default Like;