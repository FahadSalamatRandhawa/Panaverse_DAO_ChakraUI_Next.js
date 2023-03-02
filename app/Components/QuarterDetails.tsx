import { Card, Flex,CardBody, CardFooter,Center, Box, Divider } from "@chakra-ui/react";
import Image from "next/image";

interface QuarterItemInterface{
    src:string;
    title:string;
}

interface QuarterInterface{
    QuarterName:string,
    Items:QuarterItemInterface[];
    tests:string[];
  }

export default function QuaterDetails({QuarterList}:{QuarterList:QuarterInterface[]}){
    console.log(QuarterList[0]);
    return (
        <>
            {
                QuarterList.map((q:QuarterInterface)=>{
                    return (
                        <>
                            <Flex bgImage='/bg.avif' bgSize='contain' direction='column' width='100%' height='auto' padding={2}>
                                <Flex width='100%' direction={['column','column','row']} height='auto' padding={2}>
                                    <Center mb={5} alignSelf={['center','center',null]} minW={['80%','80%','9rem']} maxW='11rem' rounded='md' boxShadow='lg' bgColor='gray.400' minHeight='7rem' maxH='10rem'>
                                    {q.QuarterName}
                                    </Center>
                                    <Flex justifyContent='space-evenly' flexWrap='wrap' width='100%' gap="10px">
                                    {
        
                                        q.Items.map((item)=>{
                                            return (
                                                <>
                                                    
                                                        <Card textColor='white' bg='transparent' width='7rem' maxW='8rem' minH='7rem' maxH='7rem' marginLeft={10}>
                                                            <Image priority width={250} height='250' src={item.src} alt='JS'/>
                                                            <Box>
                                                            <Center>{item.title}</Center><Divider/>
                                                            </Box>
                                                        </Card>
                                                    
                                                </>
                                            )
                                        })
                                    }
                                    </Flex>
                                </Flex>
                                <Flex width='100%' direction={['column','row','row']} gap='2' justifyContent='space-evenly' my={10} height='auto' padding={2} pl={[null,null,'10rem']}>
                                {
                                    q.tests?
                                    q.tests.map(t=>{
                                        return (
                                            <>
                                                
                                                <Box width='auto' p={3} outline='2' border='2px' borderColor='white' textColor='white'>
                                                    {t}<Divider/>
                                                </Box>
                                                
                                            </>
                                        )
                                    }):
                                    <></>
                                }
                                </Flex>
                            </Flex>
                        </>
                    )
                })
            }
        </>
    )
}