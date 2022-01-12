import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Expertise from './Components/Expertise';
import Contact from './Components/Contact';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home'
    }
  }

  gotoHome = () => {
    this.setState({route: 'home'})
  }

  gotoAbout = () => {
    this.setState({route: 'about'})
  }

  gotoExpertise = () => {
    this.setState({route: 'expertise'})
  }

  gotoContact = () => {
    this.setState({route: 'contact'})
  }

  render() {
    const { route } = this.state;
    if (route === 'home') {
      return (
        <>
          <Navbar 
          gotoExpertise={this.gotoExpertise} 
          gotoHome={this.gotoHome} 
          gotoAbout={this.gotoAbout}
          gotoContact={this.gotoContact}/>
          <HeroSection />
        </>
      );
    } else if (route === 'about') {
      return (
        <About
        gotoExpertise={this.gotoExpertise}
        gotoHome={this.gotoHome} 
        gotoAbout={this.gotoAbout}
        gotoContact={this.gotoContact}/>
      )
    } else if (route === 'expertise') {
      return (
        <Expertise
        gotoExpertise={this.gotoExpertise}
        gotoHome={this.gotoHome} 
        gotoAbout={this.gotoAbout}
        gotoContact={this.gotoContact}/>
      )
    } else if (route === 'contact') {
      return (
        <Contact 
        gotoExpertise={this.gotoExpertise}
        gotoHome={this.gotoHome} 
        gotoAbout={this.gotoAbout}
        gotoContact={this.gotoContact}/>
      )
    }
  }
}

export default App;
