import React from 'react';
import Home from './components/home';
import Title from './components/title';
import Services from './components/services';
import Contact from './components/contact';
import About from './components/about';
import Works from './components/works';
import Footer from './components/footer';
import { Element } from 'react-scroll';

const App = () => {
  return (
	<div>
		<Home />
		<Element name="services">
			<Title title="Services" />
			<Services />
		</Element>
		<Element name="works">
			<Title title="Works" />
			<Works />
		</Element>
		<Element name="about">
			<About />
		</Element>
		<Element name="contact">
			<Contact />
		</Element>
		<Footer />
    </div>
  );
}

export default App;
