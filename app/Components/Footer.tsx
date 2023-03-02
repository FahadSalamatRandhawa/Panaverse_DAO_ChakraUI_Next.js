import {
    Box,
    chakra,
    Container,
    Flex,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Icon,
    IconButton,
    Center,
    Button
  } from '@chakra-ui/react';
  import { FaFacebook, FaInstagram, FaTwitter, FaYoutube,FaGithub, FaLinkedin } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
        <Flex width='100%' bgColor='teal.700' height='auto' alignItems='center' direction={['column','row','row']}>
            <Flex color='white' width='50%' direction='column'>
              <Center m={2}>Social Media</Center>
              <Flex width='100%' gap={3} justifyContent='space-evenly' wrap='wrap'>
                  <IconButton aria-label='Facebook' colorScheme='facebook' icon={<FaFacebook />} />               
                  <IconButton _hover={{bgColor:'pink.700'}} aria-label='instagram' bgColor='pink.600' color='white' icon={<FaInstagram />} />
                  <IconButton aria-label='twitter' colorScheme='twitter' icon={<FaTwitter />} />
                  <IconButton aria-label='FaYoutube' colorScheme='red' icon={<FaYoutube />} />
              </Flex>
            </Flex>
            <Flex width='75%' float='right' justifyContent='end'>
                <Box m={3}>
                    <Center color='white' mb={2}>Learning Resources</Center>
                    <Box pl={['50px',0,0]}>
                    <Button m={2} ml={2} aria-label='linkedin' colorScheme='linkedin' leftIcon={<FaLinkedin />}>Linked In</Button>
                    <Button ml={2} variant='outline' aria-label='github' colorScheme='github' leftIcon={<FaGithub />}>Linked In</Button>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
  }