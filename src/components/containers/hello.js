import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setSay, fetchAPI } from 'actions';

class Hello extends Component {
  constructor() {
    super();
  }
  _onClickHandler = () => {
    this.props.setSay('React Redux Cool!');
  };
  _onFetchHandler = () => {
    this.props.fetchAPI();
  };
  render() {
    return [
      <div key={1}>
        {this.props.say}
        <button type="button" onClick={this._onClickHandler}>
          Click Me!
        </button>
      </div>,
      <div key={2}>
        <button type="button" onClick={this._onFetchHandler}>
          fetchAPI!
        </button>
        github:
        {this.props.githubData}
      </div>
    ];
  }
}

Hello.propTypes = {
  say: PropTypes.string.isRequired,
  githubData: PropTypes.string.isRequired,
  setSay: PropTypes.func.isRequired,
  fetchAPI: PropTypes.func.isRequired
};

export default connect(
  state => ({
    say: state.hello.say,
    githubData: state.hello.githubData
  }),
  dispatch =>
    bindActionCreators(
      {
        setSay,
        fetchAPI
      },
      dispatch
    )
)(Hello);
