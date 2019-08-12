import React from 'react';

import SectionHero from './components/SectionHero/'
import SectionWork from './components/SectionWork/'
import SectionAbout from './components/SectionAbout'
import SectionFooter from './components/SectionFooter'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.onScrollHandle = this.onScrollHandle.bind(this)

    this.state = {
      calculate: 0
    }
  }

  onScrollHandle () {
    window.addEventListener('scroll', () => {
      let calc;

      if ( window.scrollY < 600)
        calc = (window.scrollY / 10.2) + `%`

      this.setState( () => ({calculate: calc}) )
      // const docHeight = document.documentElement.offsetHeight;
    })
  }

  componentDidMount () {
    this.onScrollHandle()
  }

  render () {
    let overflow = {
      overflow: 'hidden'
    }

    return (
      <div style={overflow}>
        <SectionHero
          calculate={this.state.calculate}
          scrollto={this.onScrollTo}
        />
        <SectionAbout />
        <SectionWork />
        <SectionFooter />
      </div>
    )
  }
}

export default App;
