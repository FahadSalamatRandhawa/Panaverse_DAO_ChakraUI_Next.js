'use client'
import { Inter } from '@next/font/google'
import Cities from './Components/Cities'
import Footer from './Components/Footer'
import QuaterDetails from './Components/QuarterDetails'
import Quarters from './Components/Quarters'

interface QuarterItemInterface{
      src:string;
      title:string;
}

interface QuarterInterface{
  QuarterName:string,
  Items:QuarterItemInterface[];
  tests:string[];
}

interface CityInterface{
  src:string;
  name:string;
  location:string;
  dayOfWeek:string;
}

let QuarterList:QuarterInterface[]=[{
  QuarterName:'Quarter1',
  Items:[
    {src:'/Quarter1/html_css-removebg-preview.png',title:'HTML & CSS'},
  {src:'/Quarter1/js-javascript--removebg-preview.png',title:'JavaScript'},
  {src:'/Quarter1/ts-removebg-preview.png',title:'TypeScript'},
  {src:'/Quarter1/Web 3 & Metaverse Theory.png',title:'Web3 & Metavese Theory'},
  {src:'/Quarter1/git.png',title:'Git'}],
  tests:['Assigment 1','JS Quiz','TypeScript Quiz','TS Proficiency Quiz','Git Quiz1','Git Quiz2']
  },
  {
    QuarterName:'Quarter 2',
    Items:[
      {src:'/Quarter2/tsx-removebg-preview.png',title:'TSX'},
      {src:'/Quarter2/nextjs-removebg-preview.png',title:'Next.js'},
      {src:'/Quarter2/SQL.png',title:'SQL'},
      {src:'/Quarter2/terraform.png',title:'Terraform CDK'},
      {src:'/Quarter2/aws_app_composer-removebg-preview.png',title:'AWS App Composer'},
      {src:'/Quarter2/tailwind.png',title:'TailWind Css'},
      {src:'/Quarter2/chakra_ui-removebg-preview.png',title:'Chakra UI'},
    ],
    tests:['Next.js Projects','TailWind&Chakra UI Projects','Todo FullStack App','Twitter Clone']
  },{
    QuarterName:'$ Making Qurter',
    Items:[
      {src:'/$ Making Quarter/graphql.png',title:"GraphQL API's"},
      {src:'/$ Making Quarter/jamstack.png',title:'JamStack Templates'},
    ],
    tests:['Headless CMS Templates','Theme Forest Seller',"Serverless API's","API Economy"]
  }
]

let CityList:CityInterface[]=[
  {src:'/City/lahore.png',name:'Lahore',location:'UMT',dayOfWeek:"Sunday"},
  {src:'/City/Peshawar.png',name:'Peshawar',location:'PESCO',dayOfWeek:"Tuesday"},
  {src:'/City/islamabad.png',name:'Islamabad',location:'Air University',dayOfWeek:"Saturday"},
  {src:'/City/karachi.png',name:'Karachi',location:'Bahria University',dayOfWeek:"Thursday"},
  {src:'/City/Quetta.png',name:'Quetta',location:'Minhaj University',dayOfWeek:"Wednesday"},
]

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Quarters/>
      <QuaterDetails QuarterList={QuarterList}/>
      <Cities CityList={CityList}/>
      <Footer/>
    </>
  )
}
