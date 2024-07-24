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
        for(let i = education.length - 1; i >= 0; i--){
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
        <div className="mt-12">
            <div className="my-12">About</div>
            <div className="my-12">{getEducation()}</div>
            <div className="my-12">{getExperince()}</div>
            <div className="my-12">{getProjects()}</div>
            <div className="my-24 w-5/6"><Credit /></div>
        </div>
    )
}