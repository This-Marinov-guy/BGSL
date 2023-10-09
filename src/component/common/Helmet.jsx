import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>BGSL || {this.props.pageTitle} </title>
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
