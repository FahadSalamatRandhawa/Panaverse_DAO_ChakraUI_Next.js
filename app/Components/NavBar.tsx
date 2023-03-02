import panaverseLogo from '../../public/panaverse.png'
import Image from 'next/image'

import { Flex,Box, Container, Center } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import Link from 'next/link'

export default function NavBar(){
    return (
        <>
            <Flex width='100%' height='3.5rem' direction='row' bgColor='teal.600'>
                <Box display='block'>
                <Link href='/'>
                <Image width='100' height='100' src='/panaverse.png' alt='logo'/>
                </Link>
                </Box>
                <Flex align='center' justify='end' position='relative' gap={1} justifyItems='flex-end' width='100%'>
                    <Center _hover={{bgColor:'teal.700',textColor:'white'}} height='95%' width='5rem'>
                    About us
                    </Center>
                    <Center _hover={{bgColor:'teal.700',textColor:'white'}} padding='2' height='95%' width='auto'>
                    Panaverse DAO
                    </Center>
                    <Center _hover={{bgColor:'teal.700',textColor:'white'}} height='95%' width='5rem'>
                    Sign up
                    </Center>
                </Flex>
            </Flex>
        </>
    )
}