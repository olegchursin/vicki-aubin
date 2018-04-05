import React from 'react'

import { Container, Divider, Button } from 'semantic-ui-react'

const Cta1 = (props) => {
  return (
    <div className="cta1">
      <Container text>
        <Divider hidden section />
        <h2>You and I have got to get to know each other!</h2>
        <p>I’m Vicki Aubin – The Rockin’ Career Coach and I help extraordinary individuals like you who are looking to break out of their shell and make a transformative career change to unleash their inner rockstar, make a powerful first impression and do the work they were meant to do.</p>
        <Divider hidden />
        <Button color="pink">Here's how...</Button>
        <Divider hidden section />
      </Container>
    </div>
  )
}

export default Cta1
