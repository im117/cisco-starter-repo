'use client';

import './App.css';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Exhibit headingText="Deployments">
        <ul>
        <li>Dep 1</li>
        <li>Dep 2</li>
        <li>Dep 3</li>
        </ul>
      </Exhibit>
      
    </div>
  );
}

function Exhibit({ headingText, children }) {
  return (<div className='Exhibit'>
    <strong className="ex-heading">{headingText}</strong>
    <div>
      {children}
    </div>
  </div>);
}

function Banner() {
  return <div className="Banner">
    <span>Sextant</span>
  </div>
}

export default App;
