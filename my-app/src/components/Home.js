import React, { Component } from "react";
 import {
//   FormControl,
//   InputLabel,
//   Input,
    Button,
  } from "@material-ui/core";
  import "./Home.css";
  import history from './History';


export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p>A simple app showing react button click navigation</p>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/Products')}>Click button to view products</Button>
          </form>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/SampleComponents')}>Click button to view Sample Components</Button>
          </form>
        </div>
      </div>
    );
  }
}