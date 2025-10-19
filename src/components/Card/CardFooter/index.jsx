import React from "react";
import PropTypes from "prop-types";
import * as Styles from "./index.styles";

const CardFooter = ({ children, ...otherProps }) => (
  <Styles.CardFooter {...otherProps}>{children}</Styles.CardFooter>
);

CardFooter.propTypes = {
  children: PropTypes.node,
};

CardFooter.defaultProps = {
  children: null
};

export default CardFooter;
