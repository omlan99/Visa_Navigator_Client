import React from 'react';
import Latest from '../Component/Latest';
import About from '../Component/About';

const Home = () => {
    return (
        <div>
          <p>Home page is connected</p>
          <Latest></Latest>
          <About></About>
        </div>
    );
};

export default Home;