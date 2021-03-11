import { Divider, Stack } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import ReactFlow from 'react-flow-renderer'
import MonacoEditor from 'react-monaco-editor'
import { Card } from './components/card'
import { Terminal } from './components/terminal'

const prompts = [
  {
    type: 'text',
    description: 'Text prompt for free text input',
  },
]

function App() {
  const [code, setCode] = useState([])

  return (
    <Stack direction="row" height="100%">
      <Stack height="100%" width="300px" bg="gray.200" p={2}>
        <Text fontSize="xl" fontWeight="semibold" color="gray.800">
          Prompts
        </Text>
        {prompts.map((prompt) => (
          <Card
            key={prompt.type}
            title={prompt.type}
            description={prompt.description}
          />
        ))}
      </Stack>
      <Stack width="50%" height="100%">
        <ReactFlow elements={code} />
      </Stack>
      <Divider orientation="vertical" />
      <Terminal />
    </Stack>
  )
}

export default App
