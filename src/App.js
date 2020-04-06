import React from 'react';
import Homepage from './homepage.component'

class App extends React.Component {
  constructor(){
    super()
    this.state={
    }
  }

  render() {
    return (
      <div className="App">
      <Homepage />
      </div>
    );

  }

}

export default App;
