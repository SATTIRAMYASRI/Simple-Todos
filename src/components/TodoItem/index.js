// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {todoDetails, onDelete} = this.props
    const {id, title} = todoDetails

    const onDeleteBtnClick = () => {
      onDelete(id)
    }

    return (
      <li className="li-container">
        <p className="liEl-heading">{title}</p>
        <button
          type="button"
          className="liEl-button"
          onClick={onDeleteBtnClick}
        >
          Delete
        </button>
      </li>
    )
  }
}
export default TodoItem
