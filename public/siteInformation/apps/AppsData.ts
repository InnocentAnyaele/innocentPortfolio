import GPTContext from './GPTContext.png';
import CalvaryWorshipCenter from './CalvaryWorshipCenter.png'
import Garrison from './Garrison.png'
import Maame from './Maame.png'
import DataLinkRequestForms from './DataLinkRequestForms.png'
import KwesiChatbot from './KwesiChatbot.png'
import SkramBull from './Skrambull.png'
import GoPoll from './GoPoll.png'
import DataLinkSRC from './DataLinkSRC.png'

interface appsDataInterface {
    name: String,
    description: String,
    technology: String,
    appLink: String,
    githubLink: String,
    img: any,
}

const appsData:appsDataInterface[] = [
    {
        name: 'GPTContext',
        description: "An interface built in React and Flask that allows users to upload document and have conversations with ChatGPT's AI within the document context",
        technology: 'ReactJS, Flask',
        appLink: 'https://gpt-context.netlify.app/',
        githubLink: 'https://github.com/InnocentAnyaele/GPTContext-',
        img: GPTContext
    },
    {
        name: 'Calvary Worship Center',
        description: "A church interface developed for a local church that manages members, offerings, projects and other church related activities",
        technology: 'NextJS, ReactJS, Firebase',
        appLink: 'https://master.djiikbspe5jg1.amplifyapp.com/',
        githubLink: 'https://github.com/InnocentAnyaele/worship-center',
        img: CalvaryWorshipCenter
    },
    {
        name: 'The Garrison',
        description: "A website developed for a local pub",
        technology: 'ReactJs',
        appLink: 'https://garrisonpub.netlify.app/',
        githubLink: 'https://github.com/InnocentAnyaele/garrison',
        img: Garrison
    },
    {
        name: 'Maame',
        description: "A chatbot built for a software company that engages customers and guide them in knowing more about the company",
        technology: 'HTML, CSS, Javascript',
        appLink: 'https://chatbot.snwolley.com/',
        githubLink: 'https://github.com/InnocentAnyaele/Chatbot-Private-N-',
        img: Maame
    },
    {
        name: 'DataLink Request Forms',
        description: " A document request platform built with React, Node and MongoDB that allows students remotely request various forms and documents and enable management to keep track of payment and clearance of these documents.",
        technology: 'ReactJS, MongoDB',
        appLink: 'https://datalink-request-form.herokuapp.com/',
        githubLink: 'https://github.com/InnocentAnyaele/datalink-request-form',
        img: DataLinkRequestForms
    },
    {
        name: 'Kwesi Chatbot',
        description: "A bank prototype Chatbot application to guide customers in accessing bank services",
        technology: 'HTML, CSS, JavaScript',
        appLink: 'http://innocentanyaele.github.io/chatbot/',
        githubLink: 'https://github.com/InnocentAnyaele/chatbot',
        img: KwesiChatbot
    },
    {
        name: 'Skrambull',
        description: "A word game built with Javascript where users reorganize shuffled words",
        technology: 'HTML, CSS, Javascript',
        appLink: 'https://innocentanyaele.github.io/skrambull/',
        githubLink: 'https://github.com/InnocentAnyaele/skrambull',
        img: SkramBull
    },
    {
        name: 'GPTContext',
        description: "An interface built in React and Flask that allows users to upload document and have conversations with ChatGPT's AI within the document context",
        technology: 'React, Flask',
        appLink: 'https://gpt-context.netlify.app/',
        githubLink: 'https://github.com/InnocentAnyaele/GPTContext-',
        img: GPTContext
    },
    {
        name: 'GoPoll',
        description: "An interface developed in React and Flask that allows users to create quick polls and share with friends to vote on",
        technology: 'ReactJS, Typescript, Django, PostgreSQL',
        appLink: 'https://gopoll.herokuapp.com/',
        githubLink: 'https://github.com/InnocentAnyaele/goPollClient',
        img: GoPoll
    },
    {
        name: 'DataLink SRC',
        description: "An SRC management platform built with ReactJS, NodeJS, and MongoDB to manage activities of the Student Council. Includes features for voting, news platform, handout repository, timetable repository, SRC application",
        technology: 'ReactJS, MongoDB',
        appLink: 'https://src-dlibt.herokuapp.com/',
        githubLink: 'https://github.com/InnocentAnyaele/src_dlibt',
        img: DataLinkSRC
    },
]

export {appsData}