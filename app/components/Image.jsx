import React from "react";
import { ImageGridActions } from "actions";
import styles from "components/ImageGridTable.css";


export class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      url: this.props.data.url,
      isChecked: this.props.data.isChecked,
    };
  }

  render() {
    return (<div className={}>
      <input type="checkbox"
             className={styles.hidden}
             checked={this.state.isChecked}
             onChange={(event) => {
                this.setState({
                  isChecked : event.target.checked
                });
                ImageGridActions.check(this.state.id, this.state.isChecked);
             }}
        />
      <img src={this.state.url}/>
    </div>);
  }
}
;

Image.propTypes = {
  id: React.PropTypes.string,
  url: React.PropTypes.string,
  isChecked: React.PropTypes.bool
};
