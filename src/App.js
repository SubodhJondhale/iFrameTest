// parent-app/src/App.js

import React, { useState, useEffect } from 'react';

// A simple component for the "Home" page
const HomePage = () => (
  <div style={{ padding: '2rem', backgroundColor: '#fafafa', borderRadius: '8px', border: '2px dashed #d1d5db' }}>
    <h2>You are on the Home Page</h2>
    <p>Click the link below to navigate to the page with the iframe.</p>
    <a
      href="#/iframe"
      style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 1.5rem', fontSize: '1rem', cursor: 'pointer', color: 'white', textDecoration: 'none', borderRadius: '8px', backgroundColor: '#3b82f6' }}
    >
      Go to Iframe Page
    </a>
  </div>
);

// The page that shows the iframe
const IframePage = () => (
  <div>
    <a href="#/" style={{ color: '#3b82f6', marginBottom: '1rem', display: 'inline-block' }}>&larr; Back to Home</a>
    <div style={{ padding: '1rem', backgroundColor: '#f0f9ff', border: '1px solid #e0e7ff', borderRadius: '8px' }}>
      <p style={{ marginTop: 0, color: '#374151', fontSize: '0.9rem' }}>The content below is from http://localhost:3001</p>
      <iframe
        title="Child React App"
        src="https://nhs-clinic.yasuqii.com/?uid=S0hicDVNcXhJWG5iUFVCbkU5SmdCTWhQRTMyQU5aV3NHOE9udVpUeE1uST0="
        style={{ width: '100%', height: '350px', border: '1px solid #d1d5db', borderRadius: '8px' }}
      />
    </div>
  </div>
);

function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1>Parent Application (localhost:3000)</h1>
      </header>
      {route === '#/iframe' ? <IframePage /> : <HomePage />}
    </div>
  );
}

export default App;