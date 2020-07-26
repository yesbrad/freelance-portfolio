import React from 'react';
import Home from './components/home';
import Title from './components/title';
import Services from './components/services';
import Contact from './components/contact';
import About from './components/about';

const App = () => {
  return (
	<div>
		  <Home />
		  <Title title="Services" />
		  <Services />
		  <About />
		  <Contact />
    </div>
  );
}

export default App;
