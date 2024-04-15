import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sumail Kaur Pannu's Portfolio</h1>
        <div className="portfolio-section">
          <h2>Basic Information</h2>
          <p>Proficient in leveraging Python, Ruby, JavaScript, HTML, and CSS to create highly interactive and responsive user interfaces. Adept at solving intricate problems with a passion for delivering robust and scalable solutions. Demonstrated ability to collaborate effectively in cross-functional teams and contribute to the entire development lifecycle. Delivering high-quality code on time and exceeding project expectations.</p>
        </div>
        <div className="portfolio-section">
          <h2>Work Experience</h2>
          <div className="job">
            <h3>Crew Member - McDonald's Restaurant, Winnipeg</h3>
            <p>Operating cash register, taking orders from customers, and running drive-thru. Delivering prompt, friendly, and polite customer service. Handling cash and operating a POS system.</p>
            <p>June 2023-Present</p>
          </div>
          <div className="job">
            <h3>Customer Service Associate - Global Enterprises, Khamano, India</h3>
            <p>Provided excellent customer service for clients coming in. Polite, kind-hearted, and friendly. Answered all phone calls and performed general reception duties.</p>
            <p>August 2019-January 2023</p>
          </div>
        </div>
        {/* Add more sections for Technical Skills, Education, Developer Setup, Supporting Resources, etc. */}
      </header>
    </div>
  );
}

export default App;
