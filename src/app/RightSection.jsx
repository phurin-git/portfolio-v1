import {education, experience, projects} from './info'
import Education from './Education'
import Experience from './Experience'
import Project from './Project'
export default function RightSection() {

    const getEducation = () => {
        let list = []
        for(let i = education.length - 1; i >= 0; i--){
            list.push(<Education item={education[i]}/>)
        }
        return list
    }

    const getExperince = () => {
        let list = []
        for(let i = education.length - 1; i >= 0; i--){
            list.push(<Experience item={experience[i]}/>)
        }
        return list
    }

    const getProjects = () => {
        let list = []
        for(let i = projects.length - 1; i >= 0; i--){
            list.push(<Project item={projects[i]}/>)
        }
        return list
    }

    return (
        <div className="w-1/2 pt-24">
            <div className="">About</div>
            <div className="">
                <h1>Education</h1>
                {getEducation()}
            </div>
            <div className="">
                <h1>Experience</h1>
                <div>{getExperince()}</div>
            </div>
            <div className="mb-96">
                <h1>Projects</h1>
                {getProjects()}
            </div>
        </div>
    )
}