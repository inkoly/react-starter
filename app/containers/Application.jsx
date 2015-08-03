import React from "react";
import { RouteHandler } from "react-router";
import MainMenu from "components/MainMenu";
import ImageGridMenu from "components/ImageGridMenu";
import styles from "./Application.css";

export default class Application extends React.Component {
  static getProps(stores, params) {
    return {
      n: 3,
      m: 3
    };
  }

  render() {
    return <div>
      <ImageGridMenu data={this.props}/>
    </div>;
  }
}

Application.contextTypes = {
  stores: React.PropTypes.object
};
