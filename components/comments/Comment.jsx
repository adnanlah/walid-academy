import {Avatar, Box, Group, Text} from '@mantine/core'
import CommentForm from './CommentForm'
import InlineButton from '../InlineButton'

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
  ...props
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
    <Box {...props}>
      <Group
        align="start"
        spacing="lg"
        sx={t => ({
          backgroundColor:
            t.colorScheme === 'light' ? t.colors.gray[1] : t.colors.dark[8],
          padding: t.spacing.md,
          borderRadius: t.spacing.xs,
          border: `1px solid ${
            t.colorScheme === 'light' ? t.colors.gray[1] : t.colors.dark[9]
          }`,
        })}
      >
        <Avatar
          src={null}
          alt={comment.userName}
          color="indigo"
          size="lg"
          radius="xl"
        >
          {/* {comment.userName
              .split(' ')
              .map(n => n[0])
              .join(' ')} */}
        </Avatar>
        <div style={{flexGrow: 1}}>
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
                <InlineButton
                  onClick={() =>
                    setActiveComment({id: comment.id, type: 'replying'})
                  }
                >
                  تعليق
                </InlineButton>
              )}
              {canEdit && (
                <InlineButton
                  onClick={() =>
                    setActiveComment({id: comment.id, type: 'editing'})
                  }
                >
                  تعديل
                </InlineButton>
              )}
              {canDelete && (
                <InlineButton
                  color="red"
                  onClick={() => deleteComment(comment.id)}
                >
                  حدف
                </InlineButton>
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
        </div>
      </Group>
      {replies.length > 0 && (
        <Box style={{marginRight: '5%'}}>
          {replies.map((reply, idx) => (
            <Comment
              mt="xs"
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
