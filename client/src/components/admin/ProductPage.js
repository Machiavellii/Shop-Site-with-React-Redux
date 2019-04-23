import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';
import TextInputGroup from '../common/TextInputGroup';
import SelectListGroup from '../common/SelectListGroup';
import Message from '../common/Message';
import Progress from '../common/Progress';

class ProductPage extends Component {
  state = {
    product: '',
    action: '',
    popular: '',
    gender: '',
    price: '',
    model: '',
    productImage: '',
    errors: {},
    message: '',
    uploadPercentage: 0
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const {
      product,
      gender,
      price,
      model,
      productImage,
      action,
      popular
    } = this.state;

    let formData = new FormData();
    formData.set('product', product);
    formData.set('action', action);
    formData.set('popular', popular);
    formData.set('gender', gender);
    formData.set('price', price);
    formData.set('model', model);
    formData.append('productImage', productImage);

    //Check for errors / validation
    if (product === '') {
      this.setState({ errors: { product: 'Product is required' } });
      return;
    }
    if (action === '') {
      this.setState({ errors: { action: 'Action is required' } });
      return;
    }
    if (popular === '') {
      this.setState({ errors: { popular: 'Popuar is required' } });
      return;
    }
    if (gender === '') {
      this.setState({ errors: { gender: 'Gender is required' } });
      return;
    }
    if (price === '') {
      this.setState({ errors: { price: 'Price is required' } });
      return;
    }
    if (model === '') {
      this.setState({ errors: { model: 'Model is required' } });
      return;
    }
    if (productImage === '') {
      this.setState({ errors: { productImage: 'Image is required' } });
      return;
    }

    try {
      const res = await axios.post('/api/products', formData, {
        onUploadProgress: progressEvent => {
          this.setState({
            uploadPercentage: parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          });

          //Clear Progress bar
          setTimeout(() => this.setState({ uploadPercentage: 0 }), 4000);
        }
      });

      dispatch({ type: 'ADD_PRODUCT', payload: res.data });

      this.setState({ message: 'Product Added' });
      //Clear Message Alert
      setTimeout(() => this.setState({ message: '' }), 3000);
    } catch (err) {
      if (err.response.status === 500) {
        this.setState({ message: 'There was a problem with the server' });
      } else {
        this.setState({ message: err.response.data.msg });
      }
    }

    this.setState({
      product: '',
      action: '',
      gender: '',
      price: '',
      model: '',
      productImage: null
    });
  };

  onChange = e => {
    if (e.target.name === 'productImage') {
      this.setState({ productImage: e.target.files[0] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
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
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              <div className="card-body">
                {message ? <Message msg={message} /> : null}
                <form
                  onSubmit={this.onSubmit.bind(this, dispatch)}
                  encType="multipart/form-data"
                >
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
                    placeholder={'* Describe prodduct'}
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
                    placeholder={'Model'}
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
        }}
      </Consumer>
    );
  }
}

export default ProductPage;
