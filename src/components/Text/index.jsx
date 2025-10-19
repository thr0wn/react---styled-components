import React from "react";
import PropTypes from "prop-types";
import * as Styles from "./index.styles";

const Text = ({ children, ...otherProps }) => (
  <Styles.Text {...otherProps}>{children}</Styles.Text>
);

Text.propTypes = {
  children: PropTypes.node,
};

Text.defaultProps = {
  children: null
};

export default Text;
