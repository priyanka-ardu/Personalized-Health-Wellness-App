//  Describes the app features.

import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  padding: 50px;
  background-color: #f4f4f4;
  text-align: center;
`;

const FeatureItem = styled.div`
  margin: 20px 0;
`;

const Features = () => {
  return (
    <FeaturesContainer id="features">
      <h2>App Features</h2>
      <FeatureItem>Track your health metrics in real-time</FeatureItem>
      <FeatureItem>Get personalized insights and recommendations</FeatureItem>
      <FeatureItem>Visualize your progress with interactive charts</FeatureItem>
    </FeaturesContainer>
  );
};

export default Features;

