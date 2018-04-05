import React from 'react'

// Semantic UI React
import { Container, Divider } from 'semantic-ui-react'

// Components
import NewsList from './NewsList'

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e90cbaedfcb544709b49ea3598466c2f');

class Newsfeed extends React.Component {

  state = {
    newsArr: []
  }

  componentDidMount = () => {
    newsapi.v2.everything({
      q: 'career advice',
      sources: 'bloomberg, business-insider, the-new-york-times, tech-radar, fortune',
      language: 'en',
      sortBy: 'relevancy'
    }).then(res => {
      this.setState ({
        newsArr: res.articles.slice(0, 6)
      }, () => console.log("News State", this.state.newsArr))
    });
  }


  render () {
    return (
      <div className="newsfeed">
        <Container text>
          <h2>Latest Updates from the Web</h2>
          <Divider hidden />
          <NewsList news={this.state.newsArr}/>
        </Container>

      </div>
    )
  }
}

export default Newsfeed;
