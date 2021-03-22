import React from 'react';
import store from './store';
import Card from './Card';

const styleHeader = {
  backgroundColor: 'lightGreen',
  height: '250px',
  width: ' 150px',
};
class OneProduct extends React.Component {
  state = { product: null };
  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const findProduct = store.find((e) => {
      return e.id === id;
    });
    this.setState({ product: findProduct });
  }
  render() {
    return (
      <div style={styleHeader}>
        {this.state.product && <Card data={this.state.product} />}
        {/* <h2>{this.state.product.title}</h2> */}
      </div>
    );
  }
}
export default OneProduct;
