'use client';
import {education, experience, projects} from '../documents/info'
import Education from './Education'
import Experience from './Experience'
import Project from './Project'
import Credit from './Credit'

export default function RightSection() {
    const getEducation = () => {
        let list = []
        for(let i = education.length - 1; i >= 0; i--){
            list.push(<Education key={i} item={education[i]}/>)
        }
        return list
    }
    const getExperince = () => {
        let list = []
        for(let i = experience.length - 1; i >= 0; i--){
            list.push(<Experience key={i} item={experience[i]}/>)
        }
        return list
    }
    const getProjects = () => {
        let list = []
        for(let i = projects.length - 1; i >= 0; i--){
            list.push(<Project key={i} item={projects[i]}/>)
        }
        return list
    }
    return (
        <div className="">
            <p className="text-sm font-bold uppercase tracking-widest sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">About</p>
            <div className="lg:pt-24" id="About">About</div>
            <p className="text-sm font-bold uppercase tracking-widest sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">Education</p>
            <div className="lg:pt-24" id="Education">{getEducation()}</div>
            <p className="text-sm font-bold uppercase tracking-widest sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">Experince</p>
            <div className="lg:pt-24" id="Experience">{getExperince()}</div>
            <p className="text-sm font-bold uppercase tracking-widest sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">Projects</p>
            <div className="lg:pt-24" id="Projects">{getProjects()}</div>
            <div className="mt-12 lg:mb-12 w-5/6"><Credit /></div>
        </div>
    )
}