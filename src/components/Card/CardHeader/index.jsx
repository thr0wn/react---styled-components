import React from "react";
import PropTypes from "prop-types";
import * as Styles from "./index.styles";

const CardHeader = ({ children, ...otherProps }) => (
  <Styles.CardHeader {...otherProps}>{children}</Styles.CardHeader>
);

CardHeader.propTypes = {
  children: PropTypes.node,
};

CardHeader.defaultProps = {
  children: null
};

export default CardHeader;
