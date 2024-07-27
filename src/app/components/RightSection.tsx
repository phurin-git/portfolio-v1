import {education, experience, projects} from '../documents/info'
import Education from './Education'
import Experience from './Experience'
import Project from './Project'
import Credit from './Credit'

export default function RightSection() {
    const navClass = "text-sm font-bold uppercase tracking-widest sticky z-20 top-0 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    const getComponent = (element:any[]) => {
        let list = []
        for(let i = element.length - 1; i >= 0; i--){
            if(element === education){
                list.push(<Education key={i} item={education[i]}/>)
            }
            else if(element === experience){
                list.push(<Experience key={i} item={experience[i]}/>)
            }
            else if(element === projects){
                list.push(<Project key={i} item={projects[i]}/>)
            }
            else
            return ;
        }
        return list
    }

    return (
        <div className='z-10'>
            <p className={navClass}>About</p>
            <p id="about" className=" font-normal lg:pt-24">
                My journey into the tech world began during my college years, where I studied robotics and automation system engineering. I first learned C programming as my foundational programming language. Driven by my interest, I later learned Java and Python. I have programmed various microprocessors, controllers, single-board computers, and robot manipulators. I find coding in different programming languages enjoyable because it is logical, much like mathematics. However, I did not have ample time to fully explore it due to the demands of other departmental subjects.
                <span className="mb-4 block"></span>
                During my final year of study, I had the opportunity to intern at <a className="font-bold" href={experience[experience.length-1].website}>Mitsubishi Electric Factory Automation Thailand (MELFT)</a>. Here, I worked on SCADA system design, encompassing both frontend (UI) and backend (transaction, SQL, AWS IoT, etc.) development. This experience felt similar to full-stack development.
                <span className="mb-4 block"></span>
                After graduating, I got a job in the field of automation, working on logistics and robotics at <a className="font-bold" href={experience[experience.length - 2].website}>Somboon Siasun Tech (SST)</a>. During my time there, I used my programming skills to help automate the commissioning and testing workflows for the systems my team and I installed onsite for customers.
                <span className="mb-4 block"></span>
                Nowadays, I have decided to transition into the tech world and aim to become a full-stack engineer. I want to work in a field I love and continue learning. 
                <span className="mb-4 block"></span>
            </p>
            <p className={navClass}>Education</p>
            <div id="education" className="lg:pt-24">{getComponent(education)}</div>
            <p className={navClass}>Experince</p>
            <div id="experience" className="lg:pt-24">{getComponent(experience)}</div>
            <p className={navClass}>Projects</p>
            <div id="projects" className="lg:pt-24">{getComponent(projects)}</div>
            <div className="mt-12 lg:mb-12 w-5/6"><Credit /></div>
        </div>
    )
}