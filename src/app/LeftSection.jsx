import {card} from "./info"
export default function LeftSection() {
    return (
      <div className="grid w-1/2">
        <div className="flex flex-col justify-end">
          <h1 className="text-4xl font-bold sm:text-5xl">{card.myName}</h1>
          <h2 className="text-lg font-medium sm:text-xl">{card.jobTitle}</h2>
          <p className="max-w-xs">{card.myBio}</p>
        </div>
        <div className="flex flex-col justify-center align-start">
          <p className="mb-10 ml-5">View Full Resume</p>
          <a className="py-3" href="#About">
            <span className="bg-blue h-[1px] inline-block duration-500 ease-out pr-10 mr-2 mb-1.5"></span>
            <span>About</span>
          </a>
          <a className="py-3" href="#Education">
            <span className="bg-blue h-[1px] inline-block duration-500 ease-out pr-10 mr-2 mb-1.5"></span>
            <span>Education</span>
          </a>
            <a className="py-3" href="#Experience">
          <span className="bg-blue h-[1px] inline-block duration-500 ease-out pr-10 mr-2 mb-1.5"></span>
            <span>Experience</span>
          </a>
          <a className="py-3" href="#Projects">
            <span className="bg-blue h-[1px] inline-block duration-500 ease-out pr-10 mr-2 mb-1.5"></span>
            <span>Projects</span>
          </a>
        </div>          
        <div className="flex flex-row justify-start items-center gap-4">
          <a href={card.myEmail}>Email</a>
          <a href={card.myGithub}>Github</a>
          <a href={card.myLinkedin}>In</a>
          <a href={card.myFacebook}>FB</a>
          <a href={card.myInstagram}>IG</a>
        </div>
      </div>
    )
}