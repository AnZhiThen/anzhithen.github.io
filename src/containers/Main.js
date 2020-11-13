import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Splash from "./splash/Splash";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false,
        show2: false
    };
  }
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ show: false, show2: false });
    }, 2500);
    this.timeout = setTimeout(() => {
      this.setState({ show: true, show2: true});
    }, 4000);
    this.timeout = setTimeout(() => {
        this.setState({ show: true, show2: false  });
    }, 100);
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div>
        {
          this.state.show2
          ? <Portfolio />
          : <Splash show={ this.state.show } />
        }
      </div>
    );
  }
}

function Portfolio() {
  return (
    <div>
      <Header />
      <Greeting />
      <Skills />
      <Education />
      <WorkExperience />
      <Contact />
      <Footer />
      <Top />
    </div>
  );
}
