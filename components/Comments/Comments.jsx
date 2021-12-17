import {useState, useEffect} from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'
import {Box, Center, LoadingOverlay, Title} from '@mantine/core'
import useSWR from 'swr'

async function fetcher(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

const getReplies = (commentId, comments) =>
  comments
    .filter(c => c.parentId === commentId)
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    )

const Comments = ({lessonId, currentUserId}) => {
  const [activeComment, setActiveComment] = useState(null)

  const addComment = (text, parentId) => {
    console.log('adding a comment to this parrent id', text, parentId)
  }

  const updateComment = (text, commentId) => {
    console.log('deleting comment', text, commentId)
  }
  const deleteComment = commentId => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      console.log('deleting comment', commentId)
    }
  }

  const {data, error} = useSWR(
    `https://my.backend/lessons/${lessonId}/comments`,
    fetcher,
  )

  if (error) return <Center>فشل في التحميل</Center>

  const commentsList = data
    ?.filter(c => c.parentId === null)
    .map((rootComment, idx) => {
      return (
        <Comment
          mt={idx === 0 ? null : 'xs'}
          key={rootComment.id}
          comment={rootComment}
          replies={getReplies(rootComment.id, data)}
          activeComment={activeComment}
          setActiveComment={setActiveComment}
          addComment={addComment}
          deleteComment={deleteComment}
          updateComment={updateComment}
          currentUserId={currentUserId}
        />
      )
    })

  return (
    <div>
      <LoadingOverlay visible={!data} />
      {/* Add if not logged in later */}
      <div>
        <Title order={6} align="center" mb="md">
          ناقش هذا الدرس
        </Title>
        <CommentForm submitLabel="أضف ردا" handleSubmit={addComment} />
        <Box mt="xl">{commentsList}</Box>
      </div>
    </div>
  )
}

export default Comments
