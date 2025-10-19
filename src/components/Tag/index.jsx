import React from "react";
import PropTypes from "prop-types";
import * as Styles from "./index.styles";

const Tag = ({ children, ...otherProps }) => (
  <Styles.Tag {...otherProps}>{children}</Styles.Tag>
);

Tag.propTypes = {
  children: PropTypes.node,
};

Tag.defaultProps = {
  children: null
};

export default Tag;
