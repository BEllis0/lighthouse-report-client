import React from 'react';
import './App.css';
import moment from 'moment';
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
      downloadUrlInput: "",
      data: JSON.parse(window.localStorage.getItem("downloadFiles")) || [],
    };

    //bindings
    this.handleDownloadSubmit = this.handleDownloadSubmit.bind(this);
    this.onDownloadFormInputChange = this.onDownloadFormInputChange.bind(this);
  }

  handleDownloadSubmit(e) {
    e.preventDefault();
    downloadReport(this.state.downloadUrlInput)
      .then(response => {
        
        // download the file
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.xlsx'); //or any other extension
        document.body.appendChild(link);
        link.click();

        // set download url and response date
        response.date = moment().format('MMMM Do YYYY, h:mm:ss a');
        response.url = url;

        // save to  state for future downloads
        this.setState({ data: 
          [...this.state.data, response] 
        }, () => window.localStorage.setItem("downloadFiles", JSON.stringify(this.state.data)));
      })
      .catch(err => {
        console.log("Error downloading report", err);
      });
  };

  onDownloadFormInputChange(e) {
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
                data={this.state.data}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
