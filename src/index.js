import React from 'react';
import ReactDOM from 'react-dom/client';

const myelement = (
  <ul>
    <li>Apples</li>
    <li>Banana</li>
    <li>Cherries</li>
  </ul>

  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myelement)