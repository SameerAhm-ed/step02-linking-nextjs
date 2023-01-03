import Link from 'next/link'
import { Button, Stack, Highlight, Container, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';

export default function Student() {
    const router = useRouter();
    return (
        <Container>
            <Heading>
                <Highlight query='Sameer Ahmed' styles={{ px: '1', py: '1', bg: 'orange.100' }}>
                    Hello from Sameer Ahmed
                </Highlight>
            </Heading>
            <Stack spacing={370} direction='row'>
                <Text color='tomato' mt={4}>
                    <Link href="/"><u>Back!</u></Link>
                </Text>
                <Text color='tomato'>
                    <Button
                        mt={4}
                        size='sm'
                        pos={'fixed'}
                        color={'white'}
                        colorScheme="purple"
                        onClick={() => router.push('/student/details')}
                    >Details</Button>
                </Text>
            </Stack>
        </Container>

    )
}