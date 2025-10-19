import React from "react";
import PropTypes from "prop-types";
import * as Styles from "./index.styles";

const CardBody = ({ children, ...otherProps }) => (
  <Styles.CardBody {...otherProps}>{children}</Styles.CardBody>
);

CardBody.propTypes = {
  children: PropTypes.node,
};

CardBody.defaultProps = {
  children: null
};

export default CardBody;
