import React from "react";
import { ImageGridActions } from "actions";
import styles from "components/ImageGridMenu.css";

export default class ImageGridMenu extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      n: props.data.n,
      m: props.data.m
    };
  }

  render() {
    //var { n, m } = this.props;
    return (<form className={styles.form} onSubmit={(event) => {
      ImageGridActions.apply( event.currentTarget.n, event.currentTarget.m);
    }}>
      <label>
        n =
        <input type="text" name="n" value={this.state.n} onChange={(event) => {
          this.setState({n : event.target.value})
        }}/>
      </label>
      <label>
        m =
        <input type="text" name="m" value={this.state.m} onChange={(event) => {
          this.setState({m : event.target.value})
        }}/>
      </label>
      <button> Apply</button>
    </form>
    );
  }
}
ImageGridMenu.propTypes = {
  n: React.PropTypes.string,
  m: React.PropTypes.string,
};
