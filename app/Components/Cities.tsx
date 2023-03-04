import Image from "next/image";
import { Card, CardBody, CardFooter, CardHeader, Center, Flex } from "@chakra-ui/react";

interface CityInterface{
    src:string;
    name:string;
    location:string;
    dayOfWeek:string;
  }

export default function Cities({CityList}:{CityList:CityInterface[]}){
    console.log(CityList)
    return (
        <>
            <Flex py={5} justifyContent='space-evenly' bgImage='/bg.avif' wrap='wrap' padding='2' direction='row' width='100%' height='auto'>   
                {
                    CityList.map(city=>{
                        return (
                            <>
                                <Card shadow='xl' mb={2} bgSize='contain'  textColor='black' width='15rem' height='auto'>
                                    <CardBody>
                                    <Center height='100%'>
                                    <Image width={100} height={100} src={city.src} alt={city.name}/>
                                    </Center>
                                    </CardBody>
                                    <CardFooter>
                                    {city.name}<br/>
                                        {city.location} : {city.dayOfWeek}
                                    </CardFooter>
                                </Card>
                            </>
                        )
                    })
                }
            </Flex>
        </>
    )
}