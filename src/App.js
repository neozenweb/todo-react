import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
       messages: []
    };
       this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this); 
  }
  
  handleChange(evt)
  {
           var text = evt.target.value;
           this.setState({input:text});
  }

  submitMessage()
  {
          this.setState({messages:this.state.messages.concat(this.state.input),input:""});
  }
  

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input type='text' name="inputmsg"  value={this.state.input} onChange={this.handleChange}/>
          <button value="submit" onClick={this.submitMessage}>
          Add Message
          </button>

          <ul>
           {this.state.messages.map(
             function(msg,index){
                return(<li>{msg}</li>)
           }
           )}
           </ul>
      
      </div>
    );
  }
}

export default App;
