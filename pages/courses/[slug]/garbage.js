let attachmentsWrapper

const sizeToText = size => (size / 1024).toFixed(1) + ' مغ'

if (chapter.type === 'quiz') {
  // if the chapter is a quiz
  return (
    <Paper
      key={`quiz-${chapter.id}`}
      component="article"
      mb="md"
      sx={theme => ({
        padding: `${theme.spacing.lg}px ${theme.spacing.md}px`,
      })}
    >
      <Title order={4} mb="md">
        {chapter.title}
      </Title>
      <Text mb="md">{chapter.description}</Text>
      <Button>ابدأ</Button>
    </Paper>
  )
}

if (chapter.attachmentsList) {
  // some chapters donn't have attachments
  attachmentsWrapper = (
    <div>
      <Title order={6} mb="xs" mr="xs">
        ملحقات
      </Title>
      <Box
        sx={theme => ({
          padding: theme.spacing.xs,
          borderTop: `2px solid ${
            theme.colorScheme === 'light'
              ? theme.colors.blue[5]
              : theme.colors.blue[9]
          }`,
          backgroundColor:
            theme.colorScheme === 'light'
              ? theme.colors.gray[0]
              : theme.colors.dark[9],
        })}
      >
        {chapter.attachmentsList.map((file, idx) => {
          return (
            <ChapterItem
              key={idx}
              icon={<DownloadIcon />}
              title={file.name}
              url={file.url}
              length={sizeToText(file.size)}
              mb={chapter.attachmentsList.length === idx + 1 ? null : 'xs'}
            />
          )
        })}
      </Box>
    </div>
  )
}
