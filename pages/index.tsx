import { Inter } from '@next/font/google'
import Link from 'next/link'
import { Container, Heading, Text } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <Heading>Navigate to Name Page</Heading>
      <Text color='tomato' mt={4}>
        <Link href="/student"><u>Name Page</u></Link>
      </Text>
    </Container>
  )
}
