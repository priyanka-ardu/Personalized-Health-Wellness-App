//  Footer section with links and contact details.

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 HealthApp. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
