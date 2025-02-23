// core/App.jsx
import React from 'react';
import ImperiumApp from 'lms-imperium'; // your published package

const App = (props) => {
  // Forward configuration props to the imperium logic
  return <ImperiumApp {...props} />;
};

export default App;
