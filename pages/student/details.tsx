import Link from 'next/link'
import { Highlight, Container, Heading, Text } from '@chakra-ui/react'

export default function Details() {
    return (
        <Container>
            <Heading p={4}>
                <Highlight query='Web3.0' styles={{ px: '1', py: '1', bg: 'green.100' }}>
                    Course: Web3.0
                </Highlight>
            </Heading>
            <Heading>
                <Highlight query='AIC035964' styles={{ px: '1', py: '1', bg: 'orange.100' }}>
                    Rollno: AIC035964
                </Highlight>
            </Heading>
            <Text color='tomato' mt={4}>
                <Link href="/student"><u>Back</u></Link>
            </Text>
        </Container>

    )
}