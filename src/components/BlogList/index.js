// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.fetchBlogList()
  }

  fetchBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const eachItem = await response.json()
    const updatedData = eachItem.map(data => ({
      author: data.author,
      avatarUrl: data.avatar_url,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }))
    console.log(updatedData)
    this.setState({blogsList: updatedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <ul className="blog-list-cont">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" height={50} width={50} color="#00Bfff" />
          </div>
        ) : (
          blogsList.map(everyItem => (
            <BlogItem blogItemDetails={everyItem} key={everyItem.id} />
          ))
        )}
      </ul>
    )
  }
}
export default BlogList
