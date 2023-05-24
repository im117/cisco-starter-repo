'use client';

import './App.css';
import { Exhibit } from './Exhibit.js';
import { Banner } from './Banner'
import { IP } from './UserIP.js';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Exhibit headingText="IP Address">
        <ul>
          <li>Public IPv4: <IP ipv6={false} /></li>
          <li>Public IPv6: <IP ipv6={true} /></li>
        </ul>
      </Exhibit>

    </div>
  );
}


export default App;
