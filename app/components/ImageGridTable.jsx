import React from "react";
import { ImageGridActions } from "actions";
import styles from "components/ImageGridTable.css";

export default class ImageGridTable extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      n: props.data.n,
      m: props.data.m,
      images: props.images
    };
  }

  render() {
    return (<div className={}>
      <div></div>
    </div>
    );
  }
}
ImageGridTable.propTypes = {
  n: React.PropTypes.string,
  m: React.PropTypes.string,
};
