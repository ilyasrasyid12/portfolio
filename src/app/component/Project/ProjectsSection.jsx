"use client"
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "react portfolio website",
        description: "projects 1 description",
        image: "images/project/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "next portfolio website",
        description: "projects 2 description",
        image: "images/project/1.png",
        tag: ["All", "Design"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "html portfolio website",
        description: "projects 3 description",
        image: "images/project/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "css portfolio website",
        description: "projects 4 description",
        image: "images/project/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "js portfolio website",
        description: "projects 5 description",
        image: "images/project/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 6,
        title: "web portfolio website",
        description: "projects 6 description",
        image: "images/project/1.png",
        tag: ["All", "Design"],
        gitUrl: "/",
        previewUrl: "/"
    },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div>
      <h2 className='text-center text-4xl font-bold text-black mt-4 mb-4'>My Projects</h2>
      <div className='text-primary flex flex-row justify-center items-center gap-4 py-6 px-4'>
        <ProjectTag onClick={handleTagChange} tag="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} tag="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} tag="Design" isSelected={tag === "Design"} />
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'> 
        {filteredProject.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))} 
      </div>
    </div>
  )
}

export default ProjectsSection