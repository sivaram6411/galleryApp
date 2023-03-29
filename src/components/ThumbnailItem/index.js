// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {isActive, thumbnailDetails, updateListImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const onClickImage = () => {
    updateListImage(id)
  }

  const buttonStyle = isActive ? 'button' : 'button1'

  return (
    <li className="thumbnail-container">
      <button className={buttonStyle} type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} onClick={onClickImage} />
      </button>
    </li>
  )
}

export default ThumbnailItem
