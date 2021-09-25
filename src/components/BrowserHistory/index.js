// import HistoryItem from '../HistoryItem'

import './index.css'

const BrowserHistory = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, title, logoUrl, domainUrl, id} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-list">
      <p className="time">{timeAccessed}</p>
      <div className="sub-container">
        <img src={logoUrl} alt="domain logo" className="app-image" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button type="button" className="delete-img-container" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="app-image"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
