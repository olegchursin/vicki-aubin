import React from 'react'

import { Container, Image, Menu, Dropdown, Icon } from 'semantic-ui-react'

const About = (props) => {
  return (
    <Menu fixed='top' className="nav" borderless>
      <Container>
        <Menu.Item as='a' header>
          <Image
            size='mini'
            src='/img/vicki-aubin-logo.svg'
            style={{ marginRight: '1.5em', width: '150px' }}
          />
        </Menu.Item>
        <Menu.Menu position="right">
          <Dropdown item icon='bars' simple>
            <Dropdown.Menu>
              <Dropdown.Item>Home</Dropdown.Item>
              <Dropdown.Item>About</Dropdown.Item>
              <Dropdown.Item>Work with me</Dropdown.Item>
              <Dropdown.Item>Blog</Dropdown.Item>
              <Dropdown.Item>Raving fans</Dropdown.Item>
              <Dropdown.Item>Contact</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default About
