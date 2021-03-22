import React from 'react';
import store from './store';
import { Link } from 'react-router-dom';

class Products extends React.Component {
  state = { store: [] };
  componentDidMount() {
    this.setState({ store: store });
  }
  render() {
    const showProducts = () => {
      return this.state.store.map((e) => {
        return (
          <Link to={`${this.props.location.pathname}/${e.id}`} key={e.id}>
            {e.title}
          </Link>
        );
      });
    };
    console.log(this.props);
    return (
      <div>
        <h2>All The Product</h2>
        {showProducts()}
      </div>
    );
  }
}
export default Products;
