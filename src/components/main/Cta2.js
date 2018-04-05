import React from 'react'

import { Container, Segment, Grid, Button } from 'semantic-ui-react'

const Cta2 = (props) => {
  return (
    <div className="cta2">
      <Container text>
        <h2>Start Here</h2>
        <Segment className="cta2-card">
          <h3>Join the Community</h3>
          <p>Want daily motivation and eye-opening insights to help you unleash your inner rockstar and blast your career reinvention forward? My Facebook community is the place to be.</p>
          <Button color="pink">Join here</Button>
        </Segment>
        <Segment className="cta2-card">
          <h3>Interview Like a Rockstar</h3>
          <p>As a career transitioner, how do you stand out and WOW them at first impression at the job interview? This FREE report will teach you ‘what you must know before you go’.</p>
          <Button color="pink">Get it here</Button>
        </Segment>
        <Segment className="cta2-card">
          <h3>Work With Me</h3>
          <p>Can you imagine being able to confidently communicate your most marketable strengths, elevate your image and value and possess THE edge you need to stand out and succeed?</p>
          <Button color="pink">Read more</Button>
        </Segment>
        <Segment className="cta2-card">
          <h3>Get Started Right Now!</h3>
          <p>Ready to put yourself first and make a high ROI, results-oriented investment in your career? Let us chat about how comprehensive personal branding and coaching can benefit you.</p>
          <Button color="pink">Schedule yours</Button>
        </Segment>
        
      </Container>
    </div>
  )
}

export default Cta2
