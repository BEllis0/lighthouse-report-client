import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {downloadReport} from './api/downloadReport.js';
import Home from './components/Views/Home.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      downloadUrlInput: ""
    };

    //bindings
    this.handleDownloadSubmit = this.handleDownloadSubmit.bind(this);
    this.onDownloadFormInputChange = this.onDownloadFormInputChange.bind(this);
  }

  handleDownloadSubmit(e) {
    e.preventDefault();
    console.log("downloading report")
    downloadReport(this.state.downloadUrlInput)
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.xlsx'); //or any other extension
        document.body.appendChild(link);
        link.click();
      })
      .catch(err => {
        console.log("Error downloading report", err);
      });
  };

  onDownloadFormInputChange(e) {
    console.log(e.target.value)
    e.preventDefault();
    this.setState({
      downloadUrlInput: e.target.value
    });
  }


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home 
                handleDownloadSubmit={this.handleDownloadSubmit}
                onDownloadFormInputChange={this.onDownloadFormInputChange}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
