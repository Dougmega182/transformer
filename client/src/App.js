import React, {Component} from "react" 
import logo from './logo.svg';
import './App.css';

Class APP extends Component {
  constructor(props)  {
    super(props);
    this.state = { apiResponse: "" };
  }


callAPI() {
  fetch("http://localhost:9060/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
}

componentDIDMount() {
  this.callAPI();
}

render () {
  return(
    <div className="App">
      <header className="App-Header">
        <img src={logo} className="App-logo"/>
        <h1 className="App-title"> Welcome to My App </h1>
        </header>
        <p className="App-intro">;{this.state.apiResponse}</p>
    </div>

  );
}
}



export default App;
