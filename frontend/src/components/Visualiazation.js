//  Displays health data (processed in the backend).

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const VisualizationContainer = styled.div`
  padding: 50px;
  background-color: #e0f7fa;
`;

const Visualization = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:5000/health-data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'Health Metrics',
        data: data.values,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return (
    <VisualizationContainer id="visualization">
      <h2>Health Data Visualization</h2>
      <Line data={chartData} />
    </VisualizationContainer>
  );
};

export default Visualization;

