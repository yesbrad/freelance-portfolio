import React from 'react';
import Home from './components/home';
import Title from './components/title';
import Services from './components/services';
import Contact from './components/contact';
import About from './components/about';
import Works from './components/works';
import Footer from './components/footer';

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
		  <Footer />
    </div>
  );
}

export default App;
