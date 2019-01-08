import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup } from 'react-bootstrap';

class SearchForm extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <br />
          <input 
            type="text" 
            className="form-control" 
            id="InputSearch" 
            placeholder="Search" 
            value={this.state.value}
            onChange={this.handleChange} />
        </FormGroup>
      </Form>
    );
  }
}

SearchForm.propTypes = {

};

export default SearchForm;