import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { capitalize } from '../utils/text'

interface CardProps {
  title: string
  description: string
}

export const Card = ({ title, description }: CardProps) => {
  return (
    <Stack bg="gray.50" rounded="md" px={2} pt={2} pb={4}>
      <Text fontSize="xl" fontWeight="semibold">
        {capitalize(title)}
      </Text>
      <Text fontSize="md" fontWeight="light">
        {description}
      </Text>
    </Stack>
  )
}
