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
    myBio: "Eager to keep learning and loves to code."
}

const about:string[] = [
    "My journey into the tech world began during my college years, where I studied robotics and automation system engineering. I first learned C programming as my foundational programming language. Driven by my interest, I later learned Java and Python. I have programmed various microprocessors, controllers, single-board computers, and robot manipulators. I find coding in different programming languages enjoyable because it is logical, much like mathematics. However, I did not have ample time to fully explore it due to the demands of other departmental subjects.",
    "During my final year of study, I had the opportunity to intern at Mitsubishi Electric Factory Automation (Thailand). Here, I worked on SCADA system design, encompassing both frontend (UI) and backend (transaction, SQL, AWS IoT, etc.) development. This experience felt similar to full-stack development.",
    "After graduating, I secured a job in the field of automation, working on logistics and robotics at Somboon Siasun Tech. During my time there, I utilized my programming skills to aid in automated commissioning and testing workflows for the systems my team and I installed onsite for customers.",
    "Nowadays, I have decided to transition into the tech world and aim to become a full-stack engineer. I want to work in a field I love and continue learning without interruption."
]

class Experience{
    title: string
    companyName: string
    date: string
    location: string
    website: string
    responsibility: string[]
    sumResponsibility: string
    constructor(title: string, companyName: string, date: string, location: string, website: string, responsibility: string[], sumResponsibility: string){
        this.title = title
        this.companyName = companyName
        this.date = date
        this.location = location
        this.website = website
        this.responsibility = responsibility
        this.sumResponsibility = sumResponsibility
    }
}

const MELFT:Experience = new Experience(
    "Internship",
    "MELFT",
    "AUG — NOV 2022",
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
    "JUN 2023 — JUL 2024",
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
    date: string
    extraDetail: string[]
    constructor(degree: string, university: string, GPA: string, location: string, website:string, date: string, extraDetail: string[]){
        this.degree = degree
        this.university = university
        this.GPA = GPA
        this.location = location
        this.website = website
        this.date = date
        this.extraDetail = extraDetail
    }
}

const KU:Education = new Education(
    "B.Eng. in Robotic and Automation Systems Engineering",
    "Kasetsart University",
    "3.65",
    "Sriracha, Chonburi, Thailand",
    "/transcript.pdf",
    "JUL — MAR 2023",
    [
        "First Class Honors"
    ]
)

const education:Education[] = [KU]

class Project{
    projectName: string
    date: string
    previewImage: string
    workSummary: string
    link: string
    constructor(projectName: string, date: string, previewImage: string, workSummary: string, link: string){
        this.projectName = projectName
        this.date = date
        this.previewImage = previewImage
        this.workSummary = workSummary
        this.link = link
    }
}


const projects:Project[] = [
    new Project(
        "Object Inspection by using Python OpenCV",
        "DEC 2021",
        "/images/oipo/image.png",
        "This project focused on developing algorithms to detect and analyze the shapes and dimensions of objects, measured in millimeters, within video streams. Its goal was to enable accurate real-time inspection processes, specifically for applications in quality control, thereby enhancing operational efficiency and precision.",
        "https://github.com/phurin-git/object-inspection-opencv-python"
    ),
    new Project(
        "3DoF Robot Kinematics and Dynamics Design",
        "MAR — APR 2022",
        "/images/rkdd/image.png",
        "Designed with a focus on pick-and-place tasks and considering defined load and workspace parameters, this system utilizes Python SymPy to calculate Forward and Inverse Kinematics, Jacobian matrices, and Dynamic Equations using the Euler-Lagrange approach. The selection of actuators and transmission systems is optimized for enhancing robot performance and efficiency in task execution.",
        "https://github.com/phurin-git/3dof-robot-kinematics-dynamics"
    ),
    new Project(
        "SCADA for Decarbonization (Prototype)",
        "OCT — NOV 2022",
        "/images/scada/image.png",
        "Developed a SCADA system for industrial clients to comply with TGO policies related to international emissions trading schemes, aimed at reducing greenhouse gas emissions. The system is designed to monitor real-time energy resource consumption and calculate carbon credit profits based on historical consumption data.",
        "https://www.mitsubishifa.co.th/en/solutions/efactory-alliance/a-system-for-tracking-energy-use-and-carbon-emissions-in-industrial-plants"
    ),
    new Project(
        "Robot control by using Motion Capture and MQTT Protocol",
        "JAN — MAY 2023",
        "/images/rmcm/image.png",
        "Developed wireless control of robot manipulator using human motion, aiming to seamlessly integrate motion capture, robot control, and real-time visualization.",
        "https://github.com/phurin-git/python-ahrs-mpu9250"
    ),
    new Project(
        "Automated Storage and Retrieval System",
        "AUG 2023 — MAY 2024",
        "/images/asrs/image.jpg",
        "Installation and commissioning ASRS for storage tires 2 factories. This project involves adding new ASRS units to the existing system.",
        "https://www.somboonsiasuntech.co.th/en/our-business/intelligent-logistic"
    )
]

export {card, about, experience, education, projects}