import React from 'react'

import { Container, Segment, Divider, Grid, Icon } from 'semantic-ui-react'

const Intro = (props) => {
  return (
    <div className="intro">
      <Container text >
        <h1>Attention: Career revolutionaries looking to reinvent themselves!</h1>
        <Divider hidden />
        <h3>Are you...</h3>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Icon circular inverted color='black' name='trophy' style={{marginBottom: '5px'}} />
              <p>An ambitious, passion-driven, intelligent optimist who marches to the beat of your own drum?</p>
            </Grid.Column>
            <Grid.Column>
              <Icon circular inverted color='black' name='child' style={{marginBottom: '5px'}} />
              <p>a distraught cubicle dweller, ready to escape the rat race and redefine success on your own terms?</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Icon circular inverted color='black' name='lightning' style={{marginBottom: '5px'}} />
              <p>re-entering the workforce in a new career that is authentically you and matches your deepest ideals/priorities?</p>
            </Grid.Column>
            <Grid.Column>
              <Icon circular inverted color='black' name='rocket' style={{marginBottom: '5px'}} />
              <p>an NYC transplantee, looking to relaunch & reinvent yourself fresh in the greatest city in the world?</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden section />
        <h3>Chances are, if you’re any of these, you’re feeling like a fish out of water.</h3>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment color="red">
                <p>You know exactly what your true calling is, but you’re terrified by the whole career transition process.</p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="red">
                <p>Your transferable skills? You have no idea what they are or how to showcase them so they attract employers to you.</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment color="red">
                <p>Your transition attempts so far have yielded little to no results and you feel self-doubt, demoralized and hopeless.</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden />
        <h3>But most importantly, you ARE 100% clear that:</h3>
        <p>You are sick of the status quo, ready to make yourself and your career a priority and raise the quality of your life.</p>
        <p>You are ready to unleash the real you and reinvent yourself as the kick-ass ROCKSTAR you have the potential to be.</p>
        <p>You’re a gutsy, determined, action-oriented individual who doesn’t back down without a fight.</p>

        <Divider hidden/>
        <h4>Most of all, you are ready to unlock your awesomeness, take major action and make a serious, results-oriented investment in your personal and professional development that will move you forward in your life (Yeow!)</h4>
        <Divider hidden/>
      </Container>
    </div>
  )
}

export default Intro
