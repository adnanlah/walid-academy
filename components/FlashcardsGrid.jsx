import {Box, Center, Col, Grid, Pagination} from '@mantine/core'
import React, {useState} from 'react'
import FlashcardCard from './FlashcardCard'

import useSWR from 'swr'

const FlashcardsGrid = ({api, pagination, ...restProps}) => {
  const {data: flashcards, error} = useSWR(`${api}`)
  const [activePage, setPage] = useState(1)

  if (error) return <Center>فشل في التحميل</Center>

  const setChange = page => {
    setPage(page)
  }
  return (
    <Box {...restProps}>
      <Grid mb="md">
        {flashcards?.map((flashcard, idx) => (
          <Col key={idx} span={3}>
            <FlashcardCard flashcard={flashcard} />
          </Col>
        ))}
      </Grid>
      {pagination && (
        <Center>
          <Pagination total={5} page={activePage} onChange={setChange} />
        </Center>
      )}
    </Box>
  )
}

export default FlashcardsGrid
