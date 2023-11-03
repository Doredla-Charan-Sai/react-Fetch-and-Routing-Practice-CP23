// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, title, author, topic, imageUrl, avatarUrl} = blogItemDetails
  return (
    <Link to={`/blogs/${id}`} className="link-style">
      <li className="blog-item-cont">
        <img className="main-image" src={imageUrl} alt={title} />
        <div className="text-cont">
          <p className="topic">{topic}</p>
          <h1 className="title topic">{title}</h1>
          <div className="avatar-author">
            <img className="avatar-card-img" src={avatarUrl} alt="avatar" />
            <p className="topic">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
