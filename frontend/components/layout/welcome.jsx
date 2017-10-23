import React from 'react';

const Welcome = () => {
  return (
    <main className='welcomeContent'>
      <div className='welcomeBox'>
        <div className='welcomeTextBox'>
          <h1>Welcome to Leaderhosen</h1>
          <p>Keep score with your friends</p>
        </div>
      </div>

      <div className='introBox'>
        <div className='introTextBox'>
          <h1>What is Leaderhosen?</h1>
          <ul>
            <li>Create a group of friends who play games together.</li>
            <li>Compare stats and score history for ultimate bragging rights.</li>
            <li>Unlock achievements and titles</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Welcome;
