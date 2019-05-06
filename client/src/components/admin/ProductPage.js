import React, { Component } from 'react';

import TextInputGroup from '../common/TextInputGroup';
import SelectListGroup from '../common/SelectListGroup';
import Message from '../common/Message';
import Progress from '../common/Progress';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/productActions';

class ProductPage extends Component {
  state = {
    product: '',
    action: '',
    popular: '',
    gender: '',
    price: '',
    model: '',
    productImage: null,
    errors: {},
    message: '',
    uploadPercentage: 0
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });

      //Clear Errors
      setTimeout(() => this.setState({ errors: '' }), 3000);
    }
  }

  onChange = e => {
    if (e.target.name === 'productImage') {
      this.setState({ productImage: e.target.files[0] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      product,
      gender,
      price,
      model,
      action,
      popular,
      productImage
    } = this.state;

    let formData = new FormData();
    formData.set('product', product);
    formData.set('action', action);
    formData.set('popular', popular);
    formData.set('gender', gender);
    formData.set('price', price);
    formData.set('model', model);
    formData.append('productImage', productImage);

    this.props.addProduct(formData);

    if (
      productImage &&
      product &&
      action &&
      popular &&
      model &&
      gender &&
      price
    ) {
      this.setState({ message: 'Product Added' });

      this.setState({ uploadPercentage: 100 });

      //Clear Message Alert
      setTimeout(() => this.setState({ message: '' }), 2000);
      //Clear Progress bar
      setTimeout(() => this.setState({ uploadPercentage: 0 }), 3000);

      // Clear State
      this.setState({
        product: '',
        action: '',
        gender: '',
        price: '',
        model: '',
        productImage: null
      });
    }
  };

  render() {
    const {
      gender,
      price,
      model,
      errors,
      product,
      message,
      uploadPercentage
    } = this.state;

    //Select options for female or male product
    const options = [
      { label: '* Select Female or Male product', value: 0 },
      { label: 'Female', value: 'female' },
      { label: 'Male', value: 'male' }
    ];
    const actions = [
      { label: '* Select Product Action', value: 0 },
      { label: 'Action', value: true },
      { label: 'No Action', value: false }
    ];

    const popular = [
      { label: '* Select Popular or not', value: 0 },
      { label: 'Popular', value: true },
      { label: 'No Popular', value: false }
    ];

    return (
      <React.Fragment>
        <div className="card-body">
          {message ? <Message msg={message} /> : null}
          <form onSubmit={this.onSubmit} encType="multipart/form-data">
            <SelectListGroup
              name="product"
              value={product}
              onChange={this.onChange}
              error={errors.product}
              options={options}
            />

            <SelectListGroup
              name="action"
              value={this.state.action}
              onChange={this.onChange}
              error={errors.action}
              options={actions}
            />

            <SelectListGroup
              name="popular"
              value={this.state.popular}
              onChange={this.onChange}
              error={errors.popular}
              options={popular}
            />

            <TextInputGroup
              name="gender"
              placeholder={'* Describe product'}
              value={gender}
              onChange={this.onChange}
              error={errors.gender}
            />
            <TextInputGroup
              name="price"
              placeholder={'* Price'}
              value={price}
              onChange={this.onChange}
              error={errors.price}
            />

            <TextInputGroup
              name="model"
              placeholder={'* Model'}
              value={model}
              onChange={this.onChange}
              error={errors.model}
            />
            <TextInputGroup
              type="file"
              name="productImage"
              placeholder={'* Image'}
              onChange={this.onChange}
              error={errors.productImage}
            />
            <Progress percentage={uploadPercentage} />
            <input
              type="submit"
              value="Submit"
              className="btn btn-dark btn-block"
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addProduct }
)(ProductPage);
