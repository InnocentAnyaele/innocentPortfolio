import GPTContext from './GPTContext.png';
import CalvaryWorshipCenter from './CalvaryWorshipCenter.png'
import Garrison from './Garrison.png'
import Maame from './Maame.png'
import DataLinkRequestForms from './DataLinkRequestForms.png'
import KwesiChatbot from './KwesiChatbot.png'
import SkramBull from './Skrambull.png'
import GoPoll from './GoPoll.png'
import DataLinkSRC from './DataLinkSRC.png'
import ApexChat from './apexChat.png'
import FormChat from './FormChat.png'

interface appsDataInterface {
    name: String,
    description: String,
    technology: String,
    appLink: String,
    githubLink: String,
    img: any,
    imgType: String,
}

const appsData:appsDataInterface[] = [
    {
        name: 'ApexChat',
        description: "An Instagram ChatBot built with OpenAI's ChatGPT LLM to handle client queries about a Dummy Business.",
        technology: 'Flask, Redis, PineCone, LangChain, OpenAi, ChromaDB',
        appLink: 'https://www.instagram.com/apex_chat/',
        githubLink: 'https://github.com/InnocentAnyaele/doc-chat-server',
        img: ApexChat,
        imgType: 'Mobile',
    },
    {
        name: 'GPTContext',
        description: "An interface built in React and Flask that allows users to upload document and have conversations with ChatGPT's AI within the document context",
        technology: 'ReactJS, Flask',
        appLink: 'https://gpt-context.netlify.app/',
        githubLink: 'https://github.com/InnocentAnyaele/GPTContext-',
        img: GPTContext,
        imgType: 'PC',
    },
    {
        name: 'Form Chat',
        description: "An AI conversational bot for a restuarant designed to process orders by providing forms in the conversation.",
        technology: 'NextJS, Flask',
        appLink: 'https://form-chat-lovat.vercel.app/',
        githubLink: 'https://github.com/InnocentAnyaele/form-chat',
        img: FormChat,
        imgType: 'PC',
    },
    {
        name: 'Calvary Worship Center',
        description: "A church interface developed for a local church that manages members, offerings, projects and other church related activities",
        technology: 'NextJS, ReactJS, Firebase',
        appLink: 'https://master.djiikbspe5jg1.amplifyapp.com/',
        githubLink: 'https://github.com/InnocentAnyaele/worship-center',
        img: CalvaryWorshipCenter,
        imgType: 'PC',
    },
    {
        name: 'The Garrison',
        description: "A website developed for a local pub",
        technology: 'ReactJs',
        appLink: 'https://garrisonpub.netlify.app/',
        githubLink: 'https://github.com/InnocentAnyaele/garrison',
        img: Garrison,
        imgType: 'PC',
    },
    {
        name: 'Maame',
        description: "A chatbot built for a software company that engages customers and guide them in knowing more about the company",
        technology: 'HTML, CSS, Javascript',
        appLink: 'https://chatbot.snwolley.com/',
        githubLink: 'https://github.com/InnocentAnyaele/Chatbot-Private-N-',
        img: Maame,
        imgType: 'PC',
    },
    {
        name: 'DataLink Request Forms',
        description: " A document request platform built with React, Node and MongoDB that allows students remotely request various forms and documents and enable management to keep track of payment and clearance of these documents.",
        technology: 'ReactJS, MongoDB',
        appLink: 'https://datalink-request-form.herokuapp.com/',
        githubLink: 'https://github.com/InnocentAnyaele/datalink-request-form',
        img: DataLinkRequestForms,
        imgType: 'PC',
    },
    {
        name: 'Kwesi Chatbot',
        description: "A bank prototype Chatbot application to guide customers in accessing bank services",
        technology: 'HTML, CSS, JavaScript',
        appLink: 'http://innocentanyaele.github.io/chatbot/',
        githubLink: 'https://github.com/InnocentAnyaele/chatbot',
        img: KwesiChatbot,
        imgType: 'PC',
    },
    {
        name: 'Skrambull',
        description: "A word game built with Javascript where users reorganize shuffled words",
        technology: 'HTML, CSS, Javascript',
        appLink: 'https://innocentanyaele.github.io/skrambull/',
        githubLink: 'https://github.com/InnocentAnyaele/skrambull',
        img: SkramBull,
        imgType: 'PC',
    },
    {
        name: 'GPTContext',
        description: "An interface built in React and Flask that allows users to upload document and have conversations with ChatGPT's AI within the document context",
        technology: 'React, Flask',
        appLink: 'https://gpt-context.netlify.app/',
        githubLink: 'https://github.com/InnocentAnyaele/GPTContext-',
        img: GPTContext,
        imgType: 'PC',
    },
    {
        name: 'GoPoll',
        description: "An interface developed in React and Flask that allows users to create quick polls and share with friends to vote on",
        technology: 'ReactJS, Typescript, Django, PostgreSQL',
        appLink: 'https://gopoll.herokuapp.com/',
        githubLink: 'https://github.com/InnocentAnyaele/goPollClient',
        img: GoPoll,
        imgType: 'PC',
    },
    {
        name: 'DataLink SRC',
        description: "An SRC management platform built with ReactJS, NodeJS, and MongoDB to manage activities of the Student Council. Includes features for voting, news platform, handout repository, timetable repository, SRC application",
        technology: 'ReactJS, MongoDB',
        appLink: 'https://src-dlibt.herokuapp.com/',
        githubLink: 'https://github.com/InnocentAnyaele/src_dlibt',
        img: DataLinkSRC,
        imgType: 'PC',
    },
]

export {appsData}