import React from 'react'

import { Item, Divider } from 'semantic-ui-react'

const NewsPiece = (props) => {
  console.log("Props", props.newsPiece)

  let newsPiece = props.newsPiece

  return (
      <Item>
        <Item.Image size='small' src={newsPiece.urlToImage} />
        <Item.Content>
          <Item.Header>{newsPiece.title}</Item.Header>
          <Item.Meta>{newsPiece.author}</Item.Meta>
          <Item.Description>
            <p>{newsPiece.description}</p>
          </Item.Description>
          <Item.Extra>Source: <a href={newsPiece.url}>{newsPiece.source.name}</a></Item.Extra>
        </Item.Content>
        <Divider />
      </Item>
  )
}

export default NewsPiece
