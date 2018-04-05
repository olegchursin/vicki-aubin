import React from 'react'

// Semantic UI React
import { Item } from 'semantic-ui-react'

// components
import NewsPiece from './NewsPiece'

const NewsList = (props) => {

  const selectedNews = props.news

  return (
    <div>
      <Item.Group>
        {
          selectedNews.map((newsPiece, index) => {
            return <NewsPiece key={index} newsPiece={newsPiece} />
          })
        }
      </Item.Group>
    </div>
  )
}

export default NewsList
