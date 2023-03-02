import { Box, Center, CircularProgress, CircularProgressLabel, Flex } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import Link from "next/link";

export default function Specialization(){
    function completeValue(){
        return Math.floor(Math.random()*100);
    };
    let completedValue=completeValue();
    return (
        <>
            <Flex direction={'column'}>
                <Center fontSize={30}>Web 3 and Metaverse Specialization</Center>
                <Accordion allowToggle>
                    <AccordionItem>
                    <AccordionButton _expanded={{bg:'blue.100'}} >
                       <Box fontSize={20} as='span' flex='1' textAlign='left'>
                       Quarter III Web3 and Metaverse : W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel m={1} pb={4}>
                    Duration: 13 Weeks<br/><br/>
                    Course Description:<br/>
                    In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.
                        <br/><br/>
                        <ul>
                            <li>
                                <Link href='https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db'>
                                The reasons for learning Web 2 before Web 3
                                </Link>
                            </li>
                        </ul>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <AccordionButton>
                                <Box fontSize={15} as='span' flex='1' textAlign='left' fontWeight='bold'>
                                    Blockchain and Metaverse Theory
                                </Box>
                                <CircularProgress color='green.400' size={30} thickness='10px' value={completeValue()}>      
                                </CircularProgress>
                                </AccordionButton>
                                <AccordionPanel m={1}>
                                    <ul>
                                        <li>
                                            <Link href='https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0'>
                                            The Metaverse: And How It Will Revolutionize Everything by Matthew Ball - (Book)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067'>
                                            Mastering Blockchain - Fourth Edition by Imran Bashir - (Book)
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                <Box fontSize={15} as='span' flex='1' textAlign='left' fontWeight='bold'>
                                Smart Contract Development in Solidity
                                </Box>
                                <CircularProgress color='green.400' size={30} thickness='10px' value={completeValue()}>      
                                </CircularProgress>
                                </AccordionButton>
                                <AccordionPanel m={1}>
                                    <ul>
                                        <li>
                                            <Link href='https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181'>
                                            Solidity Programming Essentials - Second Edition By Ritesh Modi - (Book)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='https://github.com/panaverse/defi-dapps-solidity-smart-contracts'>
                                            Solidity Learning Repo - (Github Repo)
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box fontSize={15} as='span' flex='1' textAlign='left' fontWeight='bold'>
                                    Dapp Development using Ethers.js and Next.js 13
                                    </Box>
                                    <CircularProgress color='green.400' size={30} thickness='10px' value={completeValue()}>      
                                    </CircularProgress>
                                </AccordionButton>
                                <AccordionPanel m={1}>
                                    <ul>
                                        <li>
                                            <Link href='https://github.com/panaverse/dapps-nextjs'>
                                            Dapp Learning Repo - (Github Repo)
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box fontSize={15} as='span' flex='1' textAlign='left' fontWeight='bold'>
                                    Tokennomics
                                    </Box>
                                    <CircularProgress color='green.400' size={30} thickness='10px' value={completeValue()}>      
                                    </CircularProgress>
                                </AccordionButton>
                                <AccordionPanel m={1}>
                                    
                                        <Accordion allowToggle>
                                            <AccordionItem>
                                                <AccordionButton>
                                                <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                                Theory
                                                </Box>
                                                </AccordionButton>
                                                <AccordionPanel>
                                                As you probably know, the ICO ("Initial Coin Offering") industry has been booming, and it's completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia's list of highest crowdfunding projects https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects, and you'll notice that blockchain projects absolutely dominate the list.<br/>
                                                Understand the difference between IDO vs. IEO vs. ICO<br/>
                                                Also check these links for latest listings:<br/>
                                                ICO list at ICO Drops https://icodrops.com<br/>
                                                ICO List of Best New Initial Coin Offerings https://topicolist.com/<br/>
                                                Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs https://cryptototem.com/ico-list/<br/>
                                                ICO List Online https://www.icolistingonline.com<br/>
                                                Binance IEO List https://coincodex.com/ieo-list/binance/<br/>
                                                Binance Launchpad https://www.coinspeaker.com/ieo/platform/binance-launchpad/<br/>
                                                IEO List https://icomarks.com/ieo<br/>
                                                Polkastarter https://polkastarter.com<br/>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionButton>
                                                <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                                Blockchain Projects
                                                </Box>
                                                </AccordionButton>
                                                <AccordionPanel m={1}>
                                                    <Accordion allowToggle defaultIndex={[0]}>
                                                        <AccordionItem>
                                                            <AccordionButton>
                                                                <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                                                Blockchain Project: Create a Token and Launch ICO/IEO/IDO
                                                                </Box>
                                                                <CircularProgress color='blue.400' size={30} thickness='10px' value={100}/>
                                                            </AccordionButton>
                                                            <AccordionPanel>
                                                                <Accordion allowToggle>
                                                                    <AccordionItem>
                                                                        <AccordionButton>
                                                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                                                        Project Part 1: How to Launch a IEO on Binance Launchpad
                                                                        </Box>
                                                                        </AccordionButton>
                                                                        <AccordionPanel>
                                                                        Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo/.<br/>
                                                                        Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04
                                                                        .  Note: Also document the alternatives to Binance Launchpad.
                                                                        </AccordionPanel>
                                                                    </AccordionItem>
                                                                    <AccordionItem>
                                                                        <AccordionButton>
                                                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                                                        Project Part 2: How to Launch a IDO on Polkastarter
                                                                        </Box>
                                                                        </AccordionButton>
                                                                        <AccordionPanel>
                                                                        Review the list of top fundraising platforms https://cryptorank.io/fundraising-platforms
                                                                        <br/>Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter https://polkastarter.com/
                                                                        </AccordionPanel>
                                                                    </AccordionItem>
                                                                    <AccordionItem>
                                                                        <AccordionButton>
                                                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                                                        Project Part 3: Create a Pako Token
                                                                        </Box>
                                                                        </AccordionButton>
                                                                        <AccordionPanel>
                                                                        By creating a token and related contracts, you'll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future.
                                                                        <br/><br/>Therefore, for the sake of this chapter, let's imagine that our Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).
                                                                        <br/><br/>Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.
                                                                        </AccordionPanel>
                                                                    </AccordionItem>
                                                                    <AccordionItem>
                                                                        <AccordionButton>
                                                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                                                        Project Part 4: Develop Crowd Sale Contract
                                                                        </Box>
                                                                        </AccordionButton>
                                                                        <AccordionPanel>
                                                                        This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)

                                                                        <br/><br/>Implement a payable buyToken() function.
                                                                        <br/><br/>Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought
                                                                        <br/><br/>Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal "owner" account.
                                                                        <br/><br/>Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.
                                                                        <br/><br/>You can use the openzeppelin crowd sale contracts https://docs.openzeppelin.com/contracts/4.x/crowdsales however you will have to update the code to the latest solidity version.
                                                                        <br/><br/>Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.
                                                                        <br/><br/>Note: Before you get started writing the token contract we suggest you review access control https://docs.openzeppelin.com/contracts/4.x/access-control
                                                                        </AccordionPanel>
                                                                    </AccordionItem>
                                                                    <AccordionItem>
                                                                        <AccordionButton>
                                                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                                                        Project Part 5: Trying it with MetaMask
                                                                        </Box>
                                                                        </AccordionButton>
                                                                        <AccordionPanel>
                                                                        While it's always good to test your code, it's often more satisfying to see the results of your work wrapped in a nice UI. Let's see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!
                                                                        <br/><br/>We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.
                                                                        <br/><br/>When it's done, take note of what addresses the contracts were uploaded to and copy it!
                                                                        <br/><br/>Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.
                                                                        <br/><br/>After the transaction has been confirmed, you might be confused about why you can't see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to "register" it – after all, there are so many tokens out there, there's no way MetaMask could list them all by default!
                                                                        <br/><br/>To do this, open the side menu and click on the "Add token" button to get started:
                                                                        <br/><br/>Once you're on the token page, click on "Add custom token" and paste in the token contract's address in the address field.
                                                                        <br/><br/>After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!
                                                                        </AccordionPanel>
                                                                    </AccordionItem>
                                                                    <AccordionItem>
                                                                        <AccordionButton>
                                                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                                                        Project Part 6: Trying it with Multisignature Wallets
                                                                        </Box>
                                                                        </AccordionButton>
                                                                        <AccordionPanel>
                                                                        Read https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/
                                                                        <br/>Now use Gnosis Safe : https://gnosis-safe.io/ with multi-sigs to do what you did in the last part.
                                                                        </AccordionPanel>
                                                                    </AccordionItem>
                                                                    <AccordionItem>
                                                                        <AccordionButton>
                                                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                                                        Project Part 7: Sending Tokens using Ethers.js
                                                                        </Box>
                                                                        </AccordionButton>
                                                                        <AccordionPanel>
                                                                        Write a Typescript program to send Pako Token to some friend's address using Ethers.js.
                                                                        <br/>You may follow this tutorial https://ethereum.org/en/developers/tutorials/send-token-etherjs/
                                                                        </AccordionPanel>
                                                                    </AccordionItem>
                                                                    <AccordionItem>
                                                                        <AccordionButton>
                                                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                                                        Project Part 8 Advance: Create, Deploy, Mint, and Sell a NFT
                                                                        </Box>
                                                                        </AccordionButton>
                                                                        <AccordionPanel>
                                                                        Read this NFT tutorial series https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/
                                                                        <br/><br/>Create a NFT contract using the [OpenZepplen ERC721 NFT Standard https://docs.openzeppelin.com/contracts/4.x/erc721
                                                                        <br/><br/>You may use the Preset ERC721 contract https://docs.openzeppelin.com/contracts/4.x/erc721#Presets
                                                                        <br/><br/>Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace https://opensea.io/ for sale.
                                                                        <br/><br/>Implement a ERC721 Market https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/
                                                                        </AccordionPanel>
                                                                    </AccordionItem>
                                                                </Accordion>
                                                            </AccordionPanel>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{bg:'orange.400'}}>
                            <Box as='span' flex={1} textAlign='left' fontSize={20}>
                            Quarter IV Web3 and Metaverse : MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                        <AccordionPanel>
                        Duration: 13 Weeks<br/><br/>
                        Course Description:
                        <br/>The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.
                        <br/>
                        <Link href='https://github.com/panaverse/metaverse-web'>
                        <AccordionButton>
                            <Box as='span' flex={1} fontWeight='bold' textAlign='left'>
                                Open Metaverse Web Development - (GitHub Repo)
                            </Box>
                        <CircularProgress color="blue.400" size={8} value={completeValue()}/>
                        </AccordionButton>
                        </Link>
                        <AccordionItem>
                        <AccordionButton>
                            <Box as='span' flex={1} fontWeight='bold' textAlign='left'>
                            Blender 3D asset Creation for the Metaverse (Remote Zoom Class)
                            </Box>
                            <CircularProgress color="orange.400" size={8} value={completeValue()}/>
                        </AccordionButton>
                        <AccordionPanel m={1}>
                        Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse.
                        <Accordion allowToggle>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box as='span' textAlign='left'>
                                        Learning Materials
                                    </Box>
                                </AccordionButton>
                                <AccordionPanel m={1}>
                                <ul>
                                    <li>
                                        <Link href='https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD'>
                                        Blender 3.0 Beginner Tutorial - (Video Tutorial)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit'>
                                        Blender 3.0 Hotkey
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561'>
                                        Blender Projects Textbook: Blender by Example 2nd Edition - (Book)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5'>
                                        Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://www.youtube.com/watch?v=H7T0SzdFHwg'>
                                        Best Hardware Performance for Blender Rendering - (Youtube Video)
                                        </Link>
                                    </li>
                                </ul>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box as='span' textAlign='left'>
                                        Assignments
                                    </Box>
                                </AccordionButton>
                                <AccordionPanel>
                                    <Accordion allowToggle>
                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box as='span' textAlign='left' flex={1}>
                                                Assignment 1
                                                </Box>
                                            </AccordionButton>
                                            <AccordionPanel>
                                                <Link href='https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD'>
                                                Build a 3D Donut using Blender 3
                                                </Link>
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box as='span' textAlign='left' flex={1}>
                                                Assignment 2
                                                </Box>
                                            </AccordionButton>
                                            <AccordionPanel>
                                                <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561'>
                                                Build a Viking Scene using Blender 3 - (Book)
                                                </Link>
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box as='span' textAlign='left' flex={1}>
                                                Assignment 3
                                                </Box>
                                            </AccordionButton>
                                            <AccordionPanel>
                                                <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561'>
                                                Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition
                                                </Link>
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box as='span' textAlign='left' flex={1}>
                                                Assignment 4
                                                </Box>
                                            </AccordionButton>
                                            <AccordionPanel>
                                                <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561'>
                                                Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition
                                                </Link>
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box as='span' textAlign='left' flex={1}>
                                                Assignment 5
                                                </Box>
                                            </AccordionButton>
                                            <AccordionPanel>
                                                <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561'>
                                                Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition
                                                </Link>
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box as='span' textAlign='left' flex={1}>
                                                Assignment 6
                                                </Box>
                                            </AccordionButton>
                                            <AccordionPanel>
                                                <Link href='https://www.youtube.com/watch?v=bpvh-9H8S1g'>
                                                Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials
                                                </Link>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        </AccordionPanel>
                        </AccordionItem>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
           </Flex>
        </>
    )
}