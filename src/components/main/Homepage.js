import React from 'react'

// Semantic UI React
import { Segment, Container, Header, List, Grid, Divider } from 'semantic-ui-react'

// Components
import Hero from './Hero'
import Intro from './Intro'
import Cta1 from './Cta1'
import Cta2 from './Cta2'
import Newsfeed from './Newsfeed'
import RavingFans from './RavingFans'

class Homepage extends React.Component {
  render () {
    return (
      <div>
        <Hero />
        <Divider hidden section />
        <Intro />
        <Divider hidden section />
        <Cta1 />
        <Divider hidden section />
        <Newsfeed />
        <Divider hidden section />
        <RavingFans />
        <Divider hidden section />
        <Cta2 />
      </div>
    )
  }
}

export default Homepage;
