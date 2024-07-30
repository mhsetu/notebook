import React from 'react';
import Notes from '../Notes/Notes';

const Home = () => {
  return (
    <div className='m-16'>
      <h2 className='text-2xl text-center'>Welcome to Notebook</h2>
      <Notes></Notes>
    </div>
  );
};

export default Home;
