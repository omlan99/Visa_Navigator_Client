import React from 'react';
import Latest from '../Component/Latest';
import About from '../Component/About';
import Newsletter from '../Component/Newsletter';

const Home = () => {
    return (
        <div>
          <p>Home page is connected</p>
          <Latest></Latest>
          <About></About>
          <Newsletter></Newsletter>
        </div>
    );
};

export default Home;