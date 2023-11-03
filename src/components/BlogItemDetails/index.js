// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.fetchBlogItemDetails()
  }

  fetchBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedBlogDetails = {
      author: data.author,
      avatarUrl: data.avatar_url,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blogData: updatedBlogDetails, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {title, author, imageUrl, avatarUrl, content} = blogData
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" height={50} width={50} color="#00Bfff" />
          </div>
        ) : (
          <div className="main-blog-cont">
            <h1 style={{textAlign: 'center'}} className="topic title">
              {title}
            </h1>
            <div className="avatar-author">
              <img className="avatar-card-img" src={avatarUrl} alt="avatar" />
              <p className="topic">{author}</p>
            </div>
            <img className="main-card-img" src={imageUrl} alt={title} />
            <p className="content">{content}</p>
          </div>
        )}
      </>
    )
  }
}
export default BlogItemDetails
