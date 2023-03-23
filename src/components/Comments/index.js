import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentList,
} from './styledComponents'
import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentList, setCommentList] = useState([])
  const onChangeName = event => {
    setName(event.target.value)
  }
  const onChangeCommentText = event => {
    setCommentText(event.target.value)
  }
  const onSubmitForm = event => {
    event.preventDefault()
    const newComment = {id: uuidv4(), name, commentText}
    setCommentList(prevCommentList => [...prevCommentList, newComment])
    setName('')
    setCommentText('')
  }
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onSubmitForm}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeCommentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentList>
        {commentList.map(each => (
          <CommentItem key={each.id} commentDetails={each} />
        ))}
      </CommentList>
    </CommentsContainer>
  )
}

export default Comments
