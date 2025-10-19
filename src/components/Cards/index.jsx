import React from "react";
import PropTypes from "prop-types";
import * as Styles from "@/src/components/Cards/index.styles";

const Cards = ({ children, ...otherProps }) => (
  <Styles.Cards {...otherProps}>
    {children}
  </Styles.Cards>
);

Cards.propTypes = {
  children: PropTypes.node,
};

Cards.defaultProps = {
  children: null
};

export default Cards;
