import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';
import Logo from "../../../images/curam-icon-512.png";

const CustomHeader = (props) => (
  <Header {...props}>
   <img src={Logo} style={{ width: "24px", marginInlineEnd: "0.5rem" }} />
    Merative Support&nbsp;<span>Docs</span>&nbsp;(transitional)
  </Header>
);

export default CustomHeader;
