import React from 'react';
import Home from './components/home';
import Title from './components/title';
import Services from './components/services';

const App = () => {
  return (
	<div>
		  <Home />
		  <Title title="Services" />
		  <Services />
    </div>
  );
}

export default App;
