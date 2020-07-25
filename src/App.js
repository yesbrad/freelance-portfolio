import React from 'react';
import Home from './components/home';
import Title from './components/title';
import Services from './components/services';
import Contact from './components/contact';

const App = () => {
  return (
	<div>
		  <Home />
		  <Title title="Services" />
		  <Services />
		  <Contact />
    </div>
  );
}

export default App;
