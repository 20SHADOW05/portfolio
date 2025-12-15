import { useState, useEffect } from "react"
import { skills , projects } from "./data"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Moon, Sun, Mail, Link } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function Header(){
    const [darkMode, setDarkMode] = useState(false);

    function toggleTheme() {
        const html = document.documentElement;
        html.classList.toggle("dark");
        setDarkMode(!darkMode);
    }

    return (
        <div className = "w-full h-[9vh] sticky top-0 z-50 flex justify-between px-4 md:px-12 bg-background dark:bg-[#0f0f0f] border-b"> 
            <div className = "flex items-center justify-center font-irish text-3xl text-[#e44e58]">Ankababu Yadav</div>
            <div className = "flex items-center justify-center">
                <Button onClick={() => window.location.href = ""} className = "text-base">view resume</Button>
                <button onClick={toggleTheme} className="ml-4 text-foreground rounded-md w-9 h-9 flex items-center justify-center border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"> {darkMode ? <Sun /> : <Moon />} </button>
            </div>
        </div>
    )
}

function IntroSegment(){
    const [displayText, setDisplayText] = useState("");
    const fullText = "Hello,";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center gap-5 m-8 my-24">
            <div className="font-poppinsBold text-center text-5xl"><span className="text-[#e44e58]">{displayText} </span>I'm Ankababu</div>
            <div className=" flex justify-center text-center max-w-3xl italic text-lg">
                "I’m passionate about backend and low-level systems, with a keen interest in how systems work behind the scenes. I enjoy tackling challenges that make applications run smoothly and efficiently. Building reliable, well-structured code is what drives me. I like being part of the process that powers software from the ground up."
            </div>
            <div className="flex gap-8 items-center justify-center flex-wrap">
                <div className="flex items-center justify-center gap-4 border rounded-md p-1 bg-border">
                    <Mail className="w-6 h-6 cursor-pointer"></Mail>
                    <span>ankababu774@gmail.com</span>
                </div>
                <div className="flex gap-8 items-center justify-center">
                    <FaGithub onClick={() => window.open("https://github.com/20SHADOW05", "_blank")} className="w-7 h-7 cursor-pointer"> </FaGithub>
                    <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/ankababu-s-351829358/", "_blank")} className="w-7 h-7 cursor-pointer"> </FaLinkedin>
                </div>
                
            </div>
        </div>    
    )
}

function SkillSegment(){
    return (
        <div className="m-8 mb-24">
            <div className="flex justify-center mb-8">
                <div className="relative inline-block text-2xl text-foreground border-b border-b-[#e44e58]">
                    SKILLS
                </div>
            </div>
            <div className="flex justify-center flex-wrap gap-8">
                <Card className = "w-full max-w-sm bg-card text-card-foreground border border-border shadow-sm">
                    <p className="p-4 mb-6 flex justify-center text-[1.1rem]">Languages & Databases</p>
                    <CardContent className = "flex flex-wrap justify-evenly gap-10 px-5">
                        { skills.languagesAndDatabases.map((skill) => (
                            <div key={skill.name} className="flex flex-col flex-wrap items-center gap-2">
                                <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                                <span className="capitalize text-[0.9rem]">{skill.name}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Card className = "w-full max-w-sm bg-card text-card-foreground border border-border shadow-sm">
                    <p className="p-4 mb-6 flex justify-center text-[1.1rem]">Frameworks & Libraries</p>
                    <CardContent className = "flex flex-wrap justify-evenly gap-10 px-5">
                        { skills.frameworksAndLibraries.map((skill) => (
                            <div key={skill.name} className="flex flex-col flex-wrap items-center gap-2">
                                <img src={skill.icon} alt={skill.name} className="w-11 h-11" />
                                <span className="capitalize text-[0.9rem]">{skill.name}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Card className = "w-full max-w-sm bg-card text-card-foreground border border-border shadow-sm">
                    <p className="p-4 mb-6 flex justify-center text-[1.1rem]">Development Tools</p>
                    <CardContent className = "flex flex-wrap justify-evenly gap-10 px-5">
                        { skills.developmentTools.map((skill) => (
                            <div key={skill.name} className="flex flex-col flex-wrap items-center gap-2">
                                <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                                <span className="capitalize text-[0.9rem]">{skill.name}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    ) 
}

function ProjectSegment(){
    return (
        <div className="m-8 pb-8">
            <div className="flex justify-center mb-8">
                <div className="relative inline-block text-2xl text-foreground border-b border-b-[#e44e58]">
                    PROJECTS
                </div>
            </div>

            <div className="w-full flex justify-center ">
                <Carousel className="w-full max-w-6xl">
                    <CarouselContent className="-ml-4">
                        { projects.map((project , idx) => (
                            <CarouselItem key={idx} className="pl-4 pr-4 basis-full md:basis-1/2 lg:basis-1/3">
                               <Card key={project.name} className = "flex flex-col justify-between w-full h-[320px] dark:bg-card text-card-foreground border border-border shadow-sm bg-accent">
                                    <p className="flex justify-center text-lg pb-2 pt-4">{project.name}</p>
                                    <CardContent className = "pb-0">
                                        <CardDescription className = "text-md pb-4">{project.desc}</CardDescription>
                                        <div className="flex flex-col pb-2 text-muted-foreground"> 
                                            <span className="text-md my-1 w-fit border-b">Tech Stack</span> 
                                            <div className="flex flex-wrap text-md">
                                                { project.tech_stack.split(",")
                                                                        .map((tech, index, arr) => (
                                                                            <span key={index} className="flex items-center">
                                                                                <span>{tech.trim()}</span>
                                                                                { index != arr.length - 1 && (<span className="mx-2">|</span>)  
                                                                                // (<Separator orientation="vertical" className="mx-2 h-4 w-[2px] bg-muted-foreground"/>)
                                                                                }
                                                                            </span>
                                                                        ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className = "flex justify-between">
                                        
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <FaGithub onClick={() => window.open(project.repo_link, "_blank")} className="w-6 h-6 cursor-pointer"> </FaGithub>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Repo link</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>

                                        { project.name != "Arch dotfiles"  && 
                                            (<TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Link onClick={() => window.open(project.demo_link, "_blank")} className="w-5 h-5 cursor-pointer"></Link>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Demo link</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>)}
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-4 md:left-4 lg:-left-12" />
                    <CarouselNext className="right-0 md:right-4 lg:-right-8" />
                </Carousel>
            </div>
        </div>
    )
}

export default function Page(){
    return (
        <>
            <Header />
            <IntroSegment />
            <SkillSegment />
            <ProjectSegment />
        </>
    )
}