'use client';
import {useState, useEffect} from 'react'
import {card} from "../documents/info"

export default function LeftSection() {
  const [isAbout, setIsAbout] = useState(true)
  const [isEducation, setIsEducation] = useState(false)
  const [isExperience, setIsExperience] = useState(false)
  const [isProjects, setIsProjects] = useState(false)
  
  const getAboutRect = () => document.getElementById("about")?.getBoundingClientRect()
  const getEducationRect = () => document.getElementById("education")?.getBoundingClientRect()
  const getExperinceRect = () => document.getElementById("experience")?.getBoundingClientRect()
  const getProjectsRect = () => document.getElementById("projects")?.getBoundingClientRect()
  const getAboutHeight = () => Number(getAboutRect()?.top) + Number(getAboutRect()?.height)
  const getEducationHeight = () => Number(getEducationRect()?.top) + Number(getEducationRect()?.height)
  const getExperienceHeight = () => Number(getExperinceRect()?.top) + Number(getExperinceRect()?.height)
  const getProjectsHeight = () => Number(getProjectsRect()?.top) + Number(getProjectsRect()?.height)
  
  const updateNavState = () => {
    const aboutnavbar = document.getElementById("aboutnavbar")
    const educationnavbar = document.getElementById("educationnavbar")
    const experiencenavbar = document.getElementById("experiencenavbar")
    const projectsnavbar = document.getElementById("projectsnavbar")
    const aboutnavtext = document.getElementById("aboutnavtext")
    const educationnavtext = document.getElementById("educationnavtext")
    const experiencenavtext = document.getElementById("experiencenavtext")
    const projectsnavtext = document.getElementById("projectsnavtext")
    setIsAbout(getAboutHeight() > 10)
    setIsEducation(!isAbout && (getEducationHeight() > 10))
    setIsExperience(!isAbout && !isEducation && (getExperienceHeight() > 10))
    setIsProjects(!isAbout && !isEducation && !isExperience && (getProjectsHeight() > 10))
    aboutnavbar?.classList.toggle("w-16", isAbout)
    aboutnavbar?.classList.toggle("bg-hypertext", isAbout)
    aboutnavtext?.classList.toggle("text-hypertext", isAbout)
    aboutnavbar?.classList.toggle("w-8", !isAbout)
    aboutnavbar?.classList.toggle("bg-text", !isAbout)
    educationnavbar?.classList.toggle("w-16", isEducation)
    educationnavbar?.classList.toggle("bg-hypertext", isEducation)
    educationnavtext?.classList.toggle("text-hypertext", isEducation)
    educationnavbar?.classList.toggle("w-8", !isEducation)
    educationnavbar?.classList.toggle("bg-text", !isEducation)
    experiencenavbar?.classList.toggle("w-16", isExperience)
    experiencenavbar?.classList.toggle("bg-hypertext", isExperience)
    experiencenavtext?.classList.toggle("text-hypertext", isExperience)
    experiencenavbar?.classList.toggle("w-8", !isExperience)
    experiencenavbar?.classList.toggle("bg-text", !isExperience)
    projectsnavbar?.classList.toggle("w-16", isProjects)
    projectsnavbar?.classList.toggle("bg-hypertext", isProjects)
    projectsnavtext?.classList.toggle("text-hypertext", isProjects)
    projectsnavbar?.classList.toggle("w-8", !isProjects)
    projectsnavbar?.classList.toggle("bg-text", !isProjects)
  }
  useEffect(() => {
    const onStart = setTimeout(updateNavState, 0)
    return () => {
      clearTimeout(onStart)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', updateNavState)
    return () => {
        window.removeEventListener('scroll', updateNavState)
    }  
  }, [isAbout, isEducation, isExperience, isProjects])

  useEffect(() => {
    window.addEventListener('scrollend', updateNavState)
    return () => {
        window.removeEventListener('scrollend', updateNavState)
    }  
  }, [isAbout, isEducation, isExperience, isProjects])

    return (
      <div className="z-20 mb-10 lg:min-h-screen lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:max-h-screen  lg:py-24 lg:mb-0">
        <div>
          <h1 className="text-4xl font-bold tracking-tight brightness-110 sm:text-5xl">{card.myName}</h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight brightness-110 sm:text-xl">{card.jobTitle}</h2>
          <p className="mt-4 max-w-xs leading-normal">{card.myBio}</p>
          <a className="group mt-4 max-w-xs leading-normal font-medium flex items-center" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <span className="font-bold mr-1">View Full Resume</span>
            <svg className="size-4 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>
          </a>
          <div className="hidden w-2/5 lg:text-sm lg:font-bold lg:uppercase lg:tracking-widest lg:flex lg:flex-col lg:my-10">
            <a className="group py-3" href="#about">
              <span id="aboutnavbar" className="inline-block align-middle mr-4 h-0.5 transition-all group-hover:w-16 group-hover:bg-hypertext group-focus-visible:w-16 group-focus-visible:bg-text group-motion-reduce:transition-none"></span>
              <span id="aboutnavtext" className="text-xs group-hover:text-hypertext group-focus-visible:bg-text group-motion-reduce:transition-none">About</span>
            </a>
            <a className="group py-3" href="#education">
              <span id="educationnavbar" className="inline-block align-middle mr-4 h-0.5  transition-all group-hover:w-16 group-hover:bg-hypertext group-focus-visible:w-16 group-focus-visible:bg-text group-motion-reduce:transition-none"></span>
              <span id="educationnavtext" className="text-xs group-hover:text-hypertext group-focus-visible:bg-text group-motion-reduce:transition-none">Education</span>
            </a>
            <a className="group py-3" href="#experience">
              <span id="experiencenavbar" className="inline-block align-middle mr-4 h-0.5 transition-all group-hover:w-16 group-hover:bg-hypertext group-focus-visible:w-16 group-focus-visible:bg-text group-motion-reduce:transition-none"></span>
              <span id="experiencenavtext" className="text-xs group-hover:text-hypertext group-focus-visible:bg-text group-motion-reduce:transition-none">Experience</span>
            </a>
            <a className="group py-3" href="#projects">
              <span id="projectsnavbar" className="inline-block align-middle mr-4 h-0.5 transition-all group-hover:w-16 group-hover:bg-hypertext group-focus-visible:w-16 group-focus-visible:bg-text group-motion-reduce:transition-none"></span>
              <span id="projectsnavtext" className="text-xs group-hover:text-hypertext group-focus-visible:bg-text group-motion-reduce:transition-none">Projects</span>
            </a>
          </div>
        </div>
        <div className="flex flex-row mt-10 lg:mt-0">
          <a className="mr-5 " href={card.myEmail}>
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
            </svg>
          </a>
          <a className="mr-5 " href={card.myGithub}>
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
            </svg>
          </a>
          <a className="mr-5" href={card.myLinkedin}>
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
            </svg>
          </a>
          <a className="mr-5" href={card.myFacebook}>
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
            </svg>
          </a>
          <a href={card.myInstagram}>
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
          </a>
        </div>
      </div>
    )
}