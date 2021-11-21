import {Avatar, Box, Group, Title, Text} from '@mantine/core'
import CommentForm from './CommentForm'

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === 'editing'
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === 'replying'
  const canDelete = currentUserId === comment.userId && replies.length === 0
  const canReply = Boolean(currentUserId)
  const canEdit = currentUserId === comment.userId
  const replyId = parentId ? parentId : comment.id
  const createdAt = new Date(comment.createdAt).toLocaleDateString()
  return (
    <Box>
      <Group
        align="start"
        spacing="lg"
        sx={t => ({
          backgroundColor:
            t.colorScheme === 'light' ? '#FCFCFC' : t.colors.dark[8],
          padding: t.spacing.xs,
          marginBottom: t.spacing.lg,
          borderRadius: t.spacing.xs,
          border: `1px solid ${
            t.colorScheme === 'light' ? t.colors.gray[1] : t.colors.dark[9]
          }`,
        })}
      >
        <Box>
          <Avatar src={null} alt={comment.userName} color="indigo" size="lg">
            {/* {comment.userName
              .split(' ')
              .map(n => n[0])
              .join(' ')} */}
          </Avatar>
        </Box>
        <Box style={{flexGrow: 1}}>
          <Box mb="xs">
            <Text weight={700}>{comment.userName}</Text>
            <Text size="sm" color="dimmed">
              {createdAt}
            </Text>
          </Box>
          <Box>
            <Box mb="xs">
              {!isEditing && <Text>{comment.body}</Text>}
              {isEditing && (
                <CommentForm
                  submitLabel="تعديل"
                  hasCancelButton
                  initialText={comment.body}
                  handleSubmit={text => updateComment(text, comment.id)}
                  handleCancel={() => {
                    setActiveComment(null)
                  }}
                />
              )}
            </Box>
            <Group>
              {canReply && (
                <Text
                  size="sm"
                  variant="link"
                  onClick={() =>
                    setActiveComment({id: comment.id, type: 'replying'})
                  }
                >
                  تعليق
                </Text>
              )}
              {canEdit && (
                <Text
                  size="sm"
                  variant="link"
                  onClick={() =>
                    setActiveComment({id: comment.id, type: 'editing'})
                  }
                >
                  تعديل
                </Text>
              )}
              {canDelete && (
                <Text
                  size="sm"
                  variant="link"
                  color="red"
                  onClick={() => deleteComment(comment.id)}
                >
                  حدف
                </Text>
              )}
            </Group>
            {isReplying && (
              <Box mt="xs">
                <CommentForm
                  mt="xs"
                  submitLabel="اضف تعليق"
                  hasCancelButton
                  handleCancel={() => {
                    setActiveComment(null)
                  }}
                  handleSubmit={text => addComment(text, replyId)}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Group>
      {replies.length > 0 && (
        <Box style={{marginRight: 50}}>
          {replies.map(reply => (
            <Comment
              comment={reply}
              key={reply.id}
              setActiveComment={setActiveComment}
              activeComment={activeComment}
              updateComment={updateComment}
              deleteComment={deleteComment}
              addComment={addComment}
              parentId={comment.id}
              replies={[]}
              currentUserId={currentUserId}
            />
          ))}
        </Box>
      )}
    </Box>
  )
}

export default Comment
