import React, { Suspense, lazy } from 'react';
import './App.css';

function App() {
  const AboutComponent = lazy(() => import('./About'))
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutComponent />
    </Suspense>
  );
}

export default App;

