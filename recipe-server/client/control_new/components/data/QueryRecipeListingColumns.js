import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { loadRecipeListingColumns } from 'control_new/state/recipes/actions';


@connect(
  null,
  {
    loadRecipeListingColumns,
  },
)
export default class QueryRecipeListingColumns extends React.Component {
  static propTypes = {
    loadRecipeListingColumns: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.loadRecipeListingColumns();
  }

  render() {
    return null;
  }
}
