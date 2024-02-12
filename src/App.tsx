import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Box, Card, Container, Heading } from '@chakra-ui/react'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Container maxW={'3xl'}>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap="5"
        m={5}
      >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Box>
      <Heading>Jessica</Heading>
      <Card>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Container>
  )
}
