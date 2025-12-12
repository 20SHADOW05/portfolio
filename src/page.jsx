import { useState } from "react";
import { skills , projects } from "./data";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Moon, Sun } from "lucide-react";
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
        <div className = "w-full h-[9vh] flex justify-between px-4 md:px-12 border-b-2 bg-background"> 
            <div className = "flex items-center justify-center bg-background text-foreground font-irish text-3xl">Ankababu Yadav</div>
            <div className = "flex items-center justify-center bg-background">
                <Button onClick={() => window.location.href = ""} className = "text-base">view resume</Button>
                <button onClick={toggleTheme} className="ml-4 bg-background text-foreground rounded-md w-9 h-9 flex items-center justify-center border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"> {darkMode ? <Sun /> : <Moon />} </button>

            </div>
        </div>
    )
}

function IntroSegment(){
    return (
        <div>
            <p></p>
            <p></p>
            <div></div>
        </div>
    )
}

function SkillSegment(){
    return (
        <div className="m-8 mb-24">
            <div className="mb-8 flex items-center justify-center bg-background text-foreground text-3xl">skills</div>
            <div className="flex justify-center flex-wrap gap-8">
                <Card className = "w-full max-w-sm bg-card text-card-foreground border border-border shadow-sm">
                    <p className="p-4 mb-6 flex justify-center font-semibold">Programming Languages</p>
                    <CardContent className = "flex flex-wrap justify-evenly gap-10 px-5">
                        { skills.programmingLanguages.map((skill) => (
                            <div key={skill.name} className="flex flex-col flex-wrap items-center gap-2">
                                <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                                <span className="capitalize text-[0.9rem]">{skill.name}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Card className = "w-full max-w-sm bg-card text-card-foreground border border-border shadow-sm">
                    <p className="p-4 mb-6 flex justify-center font-semibold">Frameworks & Libraries</p>
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
                    <p className="p-4 mb-6 flex justify-center font-semibold">Development Tools</p>
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
        <div className="m-8">
            <div className="mb-8 flex items-center justify-center bg-background text-foreground text-3xl">Projects</div>
            <div className="w-full flex justify-center ">
                <Carousel className="w-full max-w-6xl">
                    <CarouselContent className="-ml-4">
                        { projects.map((project , idx) => (
                            <CarouselItem key={idx} className="pl-4 pr-4 basis-full md:basis-1/2 lg:basis-1/3">
                               <Card key={project.name} className = "flex flex-col justify-between w-full h-[300px] bg-card text-card-foreground border border-border shadow-sm">
                                    <p className="flex justify-center text-lg pb-2 pt-4">{project.name}</p>
                                    <CardContent className = "pb-0">
                                        <CardDescription className = "text-md pb-4">{project.desc}</CardDescription>
                                        <div className="flex flex-col pb-2"> 
                                            <div className="text-md py-1">Tech Stack</div> 
                                            <div className="flex text-md">
                                                { project.tech_stack.split(",")
                                                                        .map((tech, index, arr) => (
                                                                            <span key={index} className="flex items-center">
                                                                                <span>{tech}</span>
                                                                                { index != arr.length - 1 && (<Separator orientation="vertical" className="mx-2 h-4 w-0.5"/>)}
                                                                            </span>
                                                                        ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className = "flex justify-between">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <img onClick={() => window.open(project.demo_link, "_blank")} src="/images/icons/link-grey.png" alt="Demo link" className="w-5 h-5"/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Demo link</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <img onClick={() => window.open(project.repo_link, "_blank")} src="/images/icons/github-white.svg" alt="Repo link" className="w-6 h-6"/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Repo link</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

// <CarouselPrevious className="left-2 md:left-8 z-50" />
// <CarouselNext className="right-2 md:right-8 z-50" />

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