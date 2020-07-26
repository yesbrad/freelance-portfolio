import React from 'react';
import Home from './components/home';
import Title from './components/title';
import Services from './components/services';
import Contact from './components/contact';
import About from './components/about';
import Works from './components/works';

const App = () => {
  return (
	<div>
		  <Home />
		  <Title title="Services" />
		  <Services />
		  <Title title="Works" />
		  <Works />
		  <About />
		  <Contact />
    </div>
  );
}

export default App;
