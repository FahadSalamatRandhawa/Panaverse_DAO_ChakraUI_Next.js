import { Center, Flex,Box } from "@chakra-ui/react";
import Link from "next/link";

export default function Quarters(){
    return (
        <>
            <Flex fontWeight='medium' width='100%' bgImage='/bg-image.jpg' wrap='wrap' height='auto' justifyContent='space-evenly' padding='2'>
                
                <Flex  width='100%' wrap='wrap' height='auto' justifyContent='space-evenly' padding='2'>
                    <Center p={2}  shadow='md' rounded='md' bgColor='gray.400' height='15rem' width='15rem' marginBottom={2}>
                    Quarter I (Core) CS-101: Object-Oriented Programming using TypeScript
                    </Center>
                    <Center p={2} shadow='md' rounded='md' bgColor='gray.400' height='15rem' width='15rem' marginBottom={2}>
                    Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
                    </Center>
                    <Center p={2} shadow='md' rounded='md' bgColor='gray.400' height='15rem' width='15rem' marginBottom={2}>
                    Dollar Making $
                    </Center>
                    
                </Flex>
                <Box color='white' fontWeight='bold' fontSize={30}>Specialized Tracks</Box>
                <Flex width='100%' wrap='wrap' height='auto' justifyContent='space-evenly' padding='2'>
                    
                    <Link href='../SpecialTracks/'>
                    <Center shadow='lg' p={2} rounded='md' bgColor='teal.600' height='15rem' width='15rem' marginBottom={2}>
                    Web 3.0 (Blockchain) and Metaverse Specialization
                    </Center>
                    </Link>
                    <Center shadow='lg' p={2} rounded='md' bgColor='blue.500' height='15rem' width='15rem' marginBottom={2}>
                    Artificial Intelligence (AI) and Deep Learning Specialization
                    </Center>
                    <Center shadow='lg' p={2} rounded='md' bgColor='pink.400' height='15rem' width='15rem' marginBottom={2}>
                    Cloud-Native Computing Specialization
                    </Center>
                    <Center shadow='lg' p={2} rounded='md' bgColor='yellow.500' height='15rem' width='15rem' marginBottom={2}>
                    Ambient Computing and IoT Specialization
                    </Center>
                    
                </Flex>
            </Flex>
        </>
    )
}