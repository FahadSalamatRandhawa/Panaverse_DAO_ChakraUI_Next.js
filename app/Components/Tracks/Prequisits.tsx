'use client'

import { Box, Center, CircularProgress, CircularProgressLabel, Flex } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import Link from "next/link";


export default function Prequisits(){
    function completeValue(){
        return Math.floor(Math.random()*100);
    };
    let completedValue=completeValue();
    return (
        <>
           <Flex direction={'column'}>
                <Center fontSize={30}>Compulsory Track</Center>
                <Accordion allowMultiple>
                    <AccordionItem>
                    <AccordionButton _expanded={{bg:'gray.400'}}>
                       <Box fontSize={20} as='span' flex='1' textAlign='left'>
                            Quarter I (Core) : CS-101: Object-Oriented Programming using TypeScript
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Box fontSize={15} as='span' flex='1' textAlign='left' mr={10}>
                        Duration: 13 Weeks<br/>
                        Course Description:
                        We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.
                        </Box>
                        <AccordionItem>
                            <AccordionButton>
                                <Box as='span' flex='1' fontWeight='bold' textAlign='left'>JavaScript</Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                The most popular and widely used programing language developed primarily for web development
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>Theory</Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel m={2}>
                                    Fundamentals of JavaScript and Node.js Quiz<br/>
                                    Topics Covered in the Quiz:<br/>
                                    <ul>Background of JavaScript and How to use JavaScript in Browser Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)<br/>
                                        <li>
                                        Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm: https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
                                        How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs: https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
                                        Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.
                                        </li>
                                        <li>
                                        Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)
                                        </li>
                                        <li>
                                        Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)
                                        </li>
                                        <li>
                                        Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)
                                        </li>
                                        <li>
                                        Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)
                                        </li>
                                        <li>
                                        Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)
                                        </li>
                                        <li>
                                        JavaScript promises, mastering the asynchronous
                                        </li>
                                    </ul>

                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>Guides</Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel m={1}>
                                        <ul>
                                            <li>
                                                <Link href='https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing'>
                                                    Panaverse DAO
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit#slide=id.p'>
                                                Web 3.0 User Guide
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit#slide=id.p'>
                                                Virtual and Augmented Metaverse User Guide
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>Prequisits</Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel m={1}>
                                        <ul>
                                            <li>
                                                <Link href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6'>
                                                Learn HTML by Hira Khan (Watch Recorded Videos)
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob'>
                                                Learn CSS Intro by Hira Khan (Watch Recorded Videos)
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>Videos</Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel m={1}>
                                        <ul>
                                            <li>
                                                <Link href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo'>
                                                Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>Interactive Exercises</Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel m={1}>
                                        <ul>
                                            <li>
                                                <Link href='https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript'>
                                                JavaScript promises, mastering the asynchronous
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'>
                                                JavaScript Algorithms and Data Structures (FreeCodeCamp)
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>Learning Repos</Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel m={1}>
                                        <ul>
                                            <li>
                                                <Link href='https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional'>
                                                    JavaScript-from-Beginner-to-Professional
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md'>
                                                    Getting Started Exercises with JavaScript and Node.js
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>Books</Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel m={1}>
                                        <ul>
                                            <li>
                                                <Link href='https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4'>
                                                JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionPanel>
                                </AccordionItem>
                            </AccordionPanel>
                           
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton>
                                <Box fontSize={15} fontWeight='bold' as='span' flex='1' textAlign='left'>
                                TypeScript
                                </Box>  
                                <AccordionIcon/>
                            </AccordionButton>
                            <AccordionPanel>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                        Interactive Exercises
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>                       
                                    <AccordionPanel>
                                        <ul>
                                            <li>
                                                <Link href='https://profy.dev/article/react-typescript'>
                                                    Minimal TypeScript Crash Course For React With Interactive Code Exercises
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='https://www.learningtypescript.com/unions-and-literals/primitive-cooking'>
                                                In Class Companion projects and articles for Learning TypeScript
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                        Boooks
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <ul>
                                            <li>
                                                <Link href='https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1'>
                                                Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript
                                                </Link>
                                            </li>
                                        </ul>    
                                    </AccordionPanel> 
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                        Learning Repos
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <ul>
                                            <li>
                                                <Link href='https://github.com/panaverse/learn-typescript'>
                                                    Learn TypeScript
                                                </Link>
                                            </li>
                                        </ul>    
                                    </AccordionPanel> 
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                        Home Work Projects
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <ul>
                                            <li>
                                                <Link href='https://github.com/panaverse/typescript-node-projects'>
                                                    Typescript Node Projects
                                                </Link>
                                            </li>
                                        </ul>    
                                    </AccordionPanel> 
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                        Quizzes
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                    <AccordionPanel m={1}>
                                        <ul>
                                            <li>
                                            Fundamentals of TypeScript Quiz
                                            </li>
                                            <li>
                                            TypeScript Professional Proficiency Quiz
                                            </li>
                                        </ul>
                                    </AccordionPanel>
                                </AccordionItem>
                            </AccordionPanel> 
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton>
                                <Box fontSize={15} fontWeight='bold' as='span' flex='1' textAlign='left'>
                                    Git (Version Controll)
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                            <AccordionPanel>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                            Videos
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <ul>
                                            <li>
                                                <Link href='https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF'>
                                                Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                            Articles
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                    <AccordionPanel m={1}>
                                        <ul>
                                            <li>
                                                <Link href='https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github'>
                                                Markdown Basics
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='https://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github'>
                                                    Fork vs Branch
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='https://stackoverflow.com/questions/3329943/what-are-the-differences-between-git-branch-fork-fetch-merge-rebase-and-clon'>
                                                    Branch , Fork, Merge, Rebase, Clone, Fetch
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='https://git-scm.com/book/en/v2/Git-Branching-Rebasing'>
                                                    Branching - Rebase
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches'>
                                                    Git Branching - Remote Branches
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                           Homework / Practice
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                    <AccordionPanel m={1}>
                                        <ul>
                                            <li>
                                            <Link href='https://docs.github.com/en/get-started/quickstart/set-up-git'>
                                            Set up Git
                                            </Link>
                                            </li>
                                            <li>
                                                <Link href='https://www.datacamp.com/courses/introduction-to-git'>
                                                    Git for Data Sciences
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html'>
                                                    Git Cheatsheet
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box fontSize={15} as='span' flex='1' textAlign='left'>
                                           Quizzes
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                    <AccordionPanel m={1}>
                                        Total Questions : 60
                                        <br/>Total Marks : 75
                                        <ul>
                                            <li>
                                                Quiz 1
                                            </li>
                                            <li>
                                                Quiz 2
                                            </li>
                                        </ul>
                                    </AccordionPanel>
                                </AccordionItem>
                            </AccordionPanel>
                            
                        </AccordionItem>   

                    </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{bg:'gray.400'}}>
                            <Box fontSize={20} as='span' flex='1' textAlign='left'>
                                Quarter II (Core): W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                        <AccordionPanel>
                            <Box fontSize={15} as='span' flex='1' textAlign='left' mr={10}>
                                Duration: 13 Weeks<br/>
                                The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).
                            </Box>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box as='span' fontWeight='bold' flex={1} textAlign='left'>
                                        Next.js (latest)
                                    </Box>
                                </AccordionButton>
                                <AccordionPanel>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as='span' flex={1} textAlign='left'>
                                                Next.js Web Development
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                        <AccordionPanel m={1}>
                                            <ul>
                                                <li>
                                                    <Link href='https://beta.nextjs.org/docs'>
                                                    Next 13 Official Documentation
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='https://beta.reactjs.org/learn'>
                                                    Latest Learn React Official Website
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='https://github.com/panaverse/learn-nextjs'>
                                                        Learn Next.js 13 Learning Repo
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as='span' flex={1} textAlign='left'>
                                            Next.js 13 using Chakra UI (Remote Zoom Class)
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                        <AccordionPanel m={1}>
                                            <ul>
                                                <li>
                                                    <Link href='https://chakra-ui.com/getting-started'>
                                                        Chakra UI Docks
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='https://www.freecodecamp.org/news/css-flexbox-complete-guide/'>
                                                        CSS Flex-Box explained
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as='span' flex={1} textAlign='left'>
                                            UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom Class)
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                        <AccordionPanel m={1}>
                                            <ul>
                                                <li>
                                                    <Link href='https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa'>
                                                    Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='https://www.figma.com/community/file/768809027799962739'>
                                                        Figma Design Kit for TailwindCSS
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='https://www.figma.com/community/file/971408767069651759'>
                                                    Chakra UI Figma Kit
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as='span' flex={1} textAlign='left'>
                                                API Routes with Next.js
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                        <AccordionPanel m={1}>
                                            <ul>
                                                <li>
                                                    <Link href='https://nextjs.org/docs/api-routes/introduction'>
                                                        API Routes
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as='span' flex={1} textAlign='left'>
                                            Next.js 13 using TailwindCSS (Remote Zoom Class)
                                            </Box>
                                        </AccordionButton>
                                        <AccordionPanel m='1'>
                                            <ul>
                                                <li>
                                                    <Link href='https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/'>
                                                    Modern CSS with Tailwind, Second Edition by Noel Rappin
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box as='span' fontWeight='bold' flex={1} textAlign='left'>
                                        SQL and Prisma (Databases)
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                                <AccordionPanel m={1}>
                                    <ul>
                                        <li>
                                            <Link href='https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres'>
                                            Start from scratch with relational databases
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='https://www.youtube.com/watch?v=5hzZtqCNQKk'>
                                            SQL For Beginners Video Tutorial
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='https://www.freecodecamp.org/news/dbms-and-sql-basics/'>
                                            Database Management Systems and SQL – Tutorial for Beginners
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box as="span" fontWeight='bold' flex={1} textAlign='left'>
                                        AWS Application Composer (Remote Zoom Class)
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                                <AccordionPanel m={1}>
                                    <ul>
                                        <li>
                                            <Link href='https://www.youtube.com/watch?v=BujE_tik5r8'>
                                                What is AWS Application Composer? (video)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='https://www.youtube.com/watch?v=p411uh363jQ'>
                                                Event-driven apps with AWS Application Composer (video)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='https://aws.amazon.com/application-composer/'>
                                                Visually design and build serverless applications quickly
                                            </Link>
                                        </li>
                                        <li>
                                            <Accordion allowToggle>
                                                <AccordionItem>
                                                    <AccordionButton>
                                                        <Box as='span' flex={1} textAlign='left'>
                                                            Must Have:Free AWS Account
                                                        </Box>
                                                        <AccordionIcon/>
                                                    </AccordionButton>
                                                    <AccordionPanel m={1}>
                                                        <ul>
                                                            <li>
                                                                <Link href='https://aws.amazon.com/free/'>
                                                                AWS Free Tier - (Resources)
                                                                </Link>
                                                            </li>
                                                        </ul><br/>
                                                        Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.
                                                        Now you can create a virtual VISA Debit card through the NayaPay app (https://www.nayapay.com/ ) which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.You can also get a $300 credit https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </Accordion>
                                        </li>
                                    </ul>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box as='span' fontWeight='bold' flex={1} textAlign='left'>
                                        Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                                <AccordionPanel m={1}>
                                    <ul>
                                        <li>
                                            <Link href='https://github.com/panaverse/learn-multicloud-api-development'>
                                                Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps - (Github Repo)
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box as='span' fontWeight='bold' flex={1} textAlign='left'>
                                        Web 2.0 Projects
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                                <AccordionPanel m={1}>
                                    <ul>
                                        <li>
                                            <Link href='https://github.com/panaverse/nextjs-projects'>
                                                Next.js Projects (Github Repo)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='https://github.com/panaverse/styling-nextjs-projects'>
                                                Styling Next.js Projects using TailwindCSS and Chakra UI
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='https://github.com/ogzhanolguncu/min-todo'>
                                                Todo Full-Stack App
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='https://www.youtube.com/watch?v=nzJsYJPCc80'>
                                                Build a Twitter Clone - (Tutorial Video)
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box as='span' fontWeight='bold' flex={1} textAlign='left'>
                                        Earn While You Learn Projects
                                    </Box>         
                                    <AccordionIcon/>                        
                                </AccordionButton>
                                <AccordionPanel m={1}>
                                    <ul>
                                        <li>
                                            <Accordion allowToggle>
                                                <AccordionItem >
                                                    <AccordionButton>
                                                    <Box as='span' flex={1} textAlign='left'>
                                                    Build Full-Stack Next.js 13 Jamstack Templates
                                                    </Box> 
                                                    <AccordionIcon/>
                                                    </AccordionButton>
                                                    <AccordionPanel m={1}>
                                                        <ul>
                                                            <li>
                                                                <Link href='https://github.com/panaverse/panaverse-template-standard'>
                                                                    The Panaverse Full-Stack Template Standard
                                                                </Link>
                                                            </li>
                                                        </ul><br/>
                                                        You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.
                                                    </AccordionPanel>
                                                </AccordionItem>
                                                
                                            </Accordion>
                                        </li>
                                        <li>
                                            <Accordion allowToggle>
                                            <AccordionItem>
                                                    <AccordionButton>
                                                    <Box as='span' flex={1} textAlign='left'>
                                                        Build QraphQL APIs
                                                    </Box>
                                                    <AccordionIcon/>
                                                    </AccordionButton>
                                                    <AccordionPanel>
                                                    You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.
                                                    </AccordionPanel>
                                            </AccordionItem>
                                            </Accordion>
                                        </li>
                                    </ul>
                                </AccordionPanel>
                            </AccordionItem>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
           </Flex>
        </>
    )
}