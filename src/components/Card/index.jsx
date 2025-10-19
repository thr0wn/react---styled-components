import React from "react";
import PropTypes from "prop-types";
import * as Styles from "./index.styles";

const Card = ({ children, ...otherProps }) => (
  <Styles.Card {...otherProps}>
    {children}
  </Styles.Card>
);

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: null
};

export default Card;
