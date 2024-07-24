interface Card {
    myName: string,
    jobTitle: string,
    myEmail: string,
    myGithub: string,
    myLinkedin: string,
    myFacebook: string,
    myInstagram: string,
    myBio: string
}

const card:Card = {
    myName: "Phurin Nararat",
    jobTitle: "Automation Engineer | Aspiring Full Stack Engineer",
    myEmail: "mailto:phurin.nrt@gmail.com",
    myGithub: "https://www.github.com/phurin-git",
    myLinkedin: "https://www.linkedin.com/in/phurinnararat",
    myFacebook: "https://www.fb.com/phurinnararat",
    myInstagram: "https://www.instagram.com/phurin.ig",
    myBio: "Enthusiastic Automation Engineer who passionate for coding and programing transitioning to Full Stack Engineering"
}

const about:string = "Enthusiastic Automation Engineer transitioning to Full Stack Engineering, with a proven track record in programming and integrating complex systems. Skilled in system testing, validation, and performance optimization. Committed to lifelong learning and passionate about coding. Adept at leveraging programming knowledge to solve complex problems and drive innovation. Excited to bring a self-reliant and continuously learning mindset to Full Stack development, utilizing expertise in various programming languages and tools to build robust and efficient applications."

class Experience{
    title: string
    companyName: string
    fromDate: string
    toDate: string
    location: string
    website: string
    responsibility: string[]
    sumResponsibility: string
    constructor(title: string, companyName: string, fromDate: string, toDate: string, location: string, website: string, responsibility: string[], sumResponsibility: string){
        this.title = title
        this.companyName = companyName
        this.fromDate = fromDate
        this.toDate = toDate
        this.location = location
        this.website = website
        this.responsibility = responsibility,
        this.sumResponsibility = sumResponsibility
    }
}

const MELFT:Experience = new Experience(
    "Internship",
    "MELFT",
    "08/2022",
    "11/2022",
    "Phra Khanong, Bangkok, Thailand",
    "https://www.mitsubishifa.co.th",
    [
        "Learn and use ICONICS GENESIS64 SCADA software, sharing techniques with team members.",
        "Provide user manuals for ICONICS GENESIS64 to customers.",
        "Design SCADA prototypes for decarbonization project."
    ],
    "Learned and used ICONICS GENESIS64 SCADA software, sharing techniques and providing user manuals to customers and team members. Also designed SCADA prototype for company's decarbonization project."
)

const SST:Experience = new Experience(
    "Automation Engineer",
    "SST",
    "06/2023",
    "07/2024",
    "Bang Chalong, Samut Prakan, Thailand",
    "https://www.somboonsiasuntech.co.th",
    [
        "Install and wire ASRS electrical components (cabinet, cables, sensors).",
        "Program PLC and HMI for system control.",
        "Integrate ASRS with WMS, WCS, and ERP systems.",
        "Conduct hardware and software testing.",
        "Validate system performance and accuracy.",
        "Train customers on ASRS operation and maintenance.",
        "Manage ASRS go-live and monitored initial performance."
    ],
    "Installed and wired ASRS electrical components, programmed PLC and HMI for control, and integrated ASRS with WMS, WCS, and ERP systems. Conducted hardware and software testing to validate performance, trained customers on operation and maintenance, and managed the go-live process while monitoring initial performance"
)

const experience:Experience[] = [MELFT, SST]

class Education{
    degree: string
    university: string
    GPA: string
    location: string
    website:string
    fromDate: string
    toDate: string
    extraDetail: string[]
    constructor(degree: string, university: string, GPA: string, location: string, website:string, fromDate: string, toDate: string, extraDetail: string[]){
        this.degree = degree
        this.university = university
        this.GPA = GPA
        this.location = location
        this.website = website
        this.fromDate = fromDate
        this.toDate = toDate
        this.extraDetail = extraDetail
    }
}

const KU:Education = new Education(
    "B.Eng. in Robotic and Automation Systems Engineering",
    "Kasetsart University",
    "3.65",
    "Sriracha, Chonburi, Thailand",
    "https://www.ku.ac.th/",
    "07/2019",
    "04/2023",
    [
        "First Class Honors"
    ]
)

const TU:Education = new Education(
    "M.Eng. in Artificial Intelligence and Internet of Things",
    "Thammasat University",
    "",
    "TUXSA, skillane",
    "https://www.skilllane.com/academic/thammasat-university",
    "08/2024",
    "Present",
    []
)

const education:Education[] = [KU, TU]

class Project{
    projectName: string
    fromDate: string
    toDate: string
    workSummary: string
    constructor(projectName: string, fromDate: string, toDate: string, workSummary: string){
        this.projectName = projectName,
        this.fromDate = fromDate,
        this.toDate = toDate,
        this.workSummary = workSummary
    }
}


const projects:Project[] = [
    new Project(
        "Object Inspection by using Python OpenCV",
        "12/2021",
        "12/2021",
        "This project focused on developing algorithms to detect and analyze the shapes and dimensions of objects, measured in millimeters, within video streams. Its goal was to enable accurate real-time inspection processes, specifically for applications in quality control, thereby enhancing operational efficiency and precision."
    ),
    new Project(
        "3DoF Robot Kinematics and Dynamics Design",
        "04/2022",
        "05/2022",
        "Designed with a focus on pick-and-place tasks and considering defined load and workspace parameters, this system utilizes Python SymPy to calculate Forward and Inverse Kinematics, Jacobian matrices, and Dynamic Equations using the Euler-Lagrange approach. The selection of actuators and transmission systems is optimized for enhancing robot performance and efficiency in task execution."
    ),
    new Project(
        "SCADA for Decarbonization (Prototype)",
        "10/2022",
        "11/2022",
        "Developed a SCADA system for industrial clients to comply with TGO policies related to international emissions trading schemes, aimed at reducing greenhouse gas emissions. The system is designed to monitor real-time energy resource consumption and calculate carbon credit profits based on historical consumption data."
    ),
    new Project(
        "Robot control by using Motion Capture and MQTT Protocol",
        "01/2023",
        "05/2023",
        "Developed wireless control of robot manipulator using human motion, aiming to seamlessly integrate motion capture, robot control, and real-time visualization."
    ),
    new Project(
        "Automated Storage and Retrieval System",
        "08/2023",
        "05/2024",
        "Installation and commissioning ASRS for storage tires 2 factories. This project involves adding new ASRS units to the existing system."
    )
]

export {card, about, experience, education, projects}