// Combines all componenets into one app
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Visualization from './components/Visualization';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <HeroSection />
      <Features />
      <Visualization />
      <Footer />
    </>
  );
}

export default App;





//  import logo from './logo.svg';
// import React from 'react';

// import { Link, Element } from 'react-scroll';
// // Add Smooth Scrolling with react-scroll
// // Implement smooth scrolling to different sections of your page.

// import { Canvas } from 'react-three-fiber';
// import { OrbitControls } from 'drei';

// import styled from 'styled-components';
// // styled-components to write CSS directly inside your JavaScript components. 
// // This makes it easier to manage and style your components.

// import './App.css'; //  add styles here

// // CSS
// const Nav = styled.nav`
// position:fixed;
// top: 10px:
// left: 10px;
// background-color: rgba(0,0,0,0.5)
// padding: 10px;
// border-radius: 5px;
// `;

// const Section = styled.div`
// height: 100vh;
// display: flex;
// justify-content: center;
// align-items: center;
// `;

// function App() {
//   return (
//     <div className='App'>
//       <Nav>
//         <Link to="section1" smooth={true} duration={500}>Go to 3D Cube</Link>
//         <Link to="section2" smooth={true} duration={500}>Go to section 2</Link>        
//       </Nav>
//       <Element name='section1'>
//         <Section>
//           <Canvas style={{ height: '100vh'}}>
//             <ambientLight/>
//             <pointLight position={[10,10,10]} />
//             <mesh rotation={[45,45,0]} scale={2}>
//               <boxGeometry args={[1,1,1]}/>
//               <meshStandardMaterial color="orange" />
//             </mesh>
//             <OrbitControls />
//           </Canvas>
//         </Section>
//       </Element>
//       <Element name='section2'>
//         <div style={{ height: '500px', backgroundColor:'lightblue'}}>
//           <h1>Section 2 content</h1>
//         </div>
//       </Element>
//     </div>
    
//   );
// }

// export default App;

