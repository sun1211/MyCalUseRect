//Import react
import React from 'react';

// Import our custom component from this directory
import Screen from './component/screen';
import Button from './component/Button';

// create a class which extends react component
class App extends React.Component {
  constructor() {
    super();
    // set our default state
    this.state = {
      question: '',
      answer: ''
    }
    // Bind our handleClick method (sets 'this' explicitly to refer to this componenent)
    // We did this because 'this' would refer to the source of the click events
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-8 col-xs-offset-2">
          <div className="row">
          {/*Title of application*/}
            My Calculate Example
          </div>
          <Screen question={this.state.question} answer={this.state.answer}/>

          {/*Button layout*/}
          <div className="btn-row row">
            <Button label={'1'} handleClick={this.handleClick} DoAction='input' />
            <Button label={'2'} handleClick={this.handleClick} DoAction='input' />
            <Button label={'3'} handleClick={this.handleClick} DoAction='input' />
            <Button label={'4'} handleClick={this.handleClick} DoAction='input' />
            <Button label={'-'} handleClick={this.handleClick} DoAction='action' />
            <Button label={'+'} handleClick={this.handleClick} DoAction='action' />
          </div>
          <div className="btn-row row">
            <Button label={'5'} handleClick={this.handleClick} DoAction='input' />
            <Button label={'6'} handleClick={this.handleClick} DoAction='input' />
            <Button label={'7'} handleClick={this.handleClick} DoAction='input' />
            <Button label={'8'} handleClick={this.handleClick} DoAction='input' />
            <Button label={'*'} handleClick={this.handleClick} DoAction='action' />
            <Button label={'/'} handleClick={this.handleClick} DoAction='action' />
          </div>
          <div className="btn-row row">
            <Button label={'9'} handleClick={this.handleClick} DoAction='input' />
            <Button label={'.'} handleClick={this.handleClick} DoAction='input' />
            <Button label={'0'} handleClick={this.handleClick} DoAction='input' />
            <Button label={'cls'} handleClick={this.handleClick} DoAction='action' />
            <Button label={'='} handleClick={this.handleClick} DoAction='action' />
          </div>
        </div>
      </div>
    )
  };

  // our method to handle all click events from our buttons
  handleClick(event){
    const value = event.target.value; // get the value from the target element (button)
    switch (value) {
      case '=': {
         // if it's an equal sign, use the eval module to evaluate the question
        // convert the answer (in number) to String
        const answer = eval(this.state.question).toString();
        // update answer in our state.
        this.setState({ answer });
        break;
      }
      case 'cls': {
        // if it's the Cls sign, just clean our question and answer in the state
        this.setState({ question: '', answer: '' });
        break;
      }
      case '*':
      case '+':
      case '-':
      case '/': {
        this.setState({ question: this.state.question += `${value}` });
        break;
      }
      default: {
        // for every other commmand, update the answer in the state
        this.setState({ question: this.state.question += value})
        break;
      }
    }
  }









}

// export our frame component. To be used in our client/index.js file
export default App;