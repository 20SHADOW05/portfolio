export const skills = {
  programmingLanguages: [
    { name: "javascript", icon: "/images/programming_languages/javascript.svg" },
    { name: "java", icon: "/images/programming_languages/java.svg" },
    { name: "postgre", icon: "/images/programming_languages/postgresql.svg" },
    { name: "python", icon: "/images/programming_languages/python.svg" },
    { name: "mongodb", icon: "/images/programming_languages/mongodb.svg" },
    { name: "html", icon: "/images/programming_languages/html5.svg" },
    { name: "css", icon: "/images/programming_languages/css.svg" },
    { name: "bash", icon: "/images/programming_languages/bash.png" }
    
  ],

  frameworksAndLibraries: [
    { name: "react", icon: "/images/frameworks&libraries/react.svg" },
    { name: "node.js", icon: "/images/frameworks&libraries/nodejs.svg" },
    { name: "expressjs", icon: "/images/frameworks&libraries/express.png" },
    { name: "tailwind css", icon: "/images/frameworks&libraries/tailwindcss.svg" }
  ],

  developmentTools: [
    { name: "git", icon: "/images/development_tools/git.svg" },
    { name: "linux", icon: "/images/development_tools/linux.svg" },
    { name: "docker", icon: "/images/development_tools/docker.svg" },
    { name: "vite", icon: "/images/development_tools/vite.svg" },
    { name: "webpack", icon: "/images/development_tools/webpack.svg" },
    { name: "babel", icon: "/images/development_tools/babel.svg" },
    { name: "esLint", icon: "/images/development_tools/eslint.svg" }
  ]
};

export const projects = [
    { name : "Inventory", desc : "Inventory system with authentication, authorization, and product management built using Passport.js and PostgreSQL.", tech_stack : "ExpressJs , PostgreSQL , Ejs , Css" , demo_link : "https://inventory-gv3f.onrender.com/", repo_link : "https://github.com/20SHADOW05/inventory.git"},

    { name : "Notes", desc : "Notes site storing tasks with dates and priority, fully saved in LocalStorage for persistence.", tech_stack : "Javascript , Webpack , Css , Html", demo_link : "https://20shadow05.github.io/notes/", repo_link : "https://github.com/20SHADOW05/notes.git"},  

    { name : "Etch a sketch", desc : "Interactive sketch board that colors pixel-like grid cells, supporting custom sizes from 1–64.", tech_stack : "Javascript , Css , Html", demo_link : "https://20shadow05.github.io/etch-a-sketch/", repo_link : "https://github.com/20SHADOW05/etch-a-sketch.git"},

    { name : "Modify cv", desc : "A resume editor that lets users update personal details and preview formatted CV output.", tech_stack : "React , Vite , EsLint , Css , Html", demo_link : "https://cv-edit-fone.vercel.app/", repo_link : "https://github.com/20SHADOW05/cv.git"},

    { name : "Arch dotfiles", desc : "A collection of customized Linux dotfiles for configuring desktop environment, terminal, and workflow tools.", tech_stack : "Css , Bash", repo_link : "https://github.com/20SHADOW05/dotfiles.git"}    
]


