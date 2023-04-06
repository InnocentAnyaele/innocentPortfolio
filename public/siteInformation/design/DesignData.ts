
import MedMe from './MedMe1.png'
import GPTContext from './GPTContext.png'
import Reworded from './Reworded.png'
import CalvaryWorshipCenter from './CalvaryWorshipCenter.png'

interface designDataInterface {
    name: String,
    description: String,
    technology: String,
    viewLink: String,
    img: any,
    type: String,
}

const designData:designDataInterface[] = [
    {
        name: 'MedMe',
        description: "Connect with medical professionals and have medical related conversations",
        technology: 'Figma',
        viewLink: 'https://www.behance.net/gallery/167693531/MedMe',
        img: MedMe,
        type: 'Mobile',
    },
    {
        name: 'GPTContext',
        description: "An interface to upload documents into ChatGPT's LLM and have conversations around that",
        technology: 'Figma',
        viewLink: 'https://www.behance.net/innocentanyaele',
        img: GPTContext,
        type: 'PC',
    },
    {
        name: 'Reworded',
        description: "Format your CV experiences to be more professional and technical",
        technology: 'Figma',
        viewLink: 'https://www.behance.net/innocentanyaele',
        img: Reworded,
        type: 'PC',

    },
    {
        name: 'Calvary Worship Center',
        description: "Interface to manage church activities",
        technology: 'Figma',
        viewLink: 'https://www.behance.net/innocentanyaele',
        img: CalvaryWorshipCenter,
        type: 'PC',

    },
]

export {designData}