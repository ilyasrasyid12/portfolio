"use client"
import React, {useTransition, useState} from 'react'
import Image from "next/image"
import TabButton from "./TabButton.jsx"
import { title } from 'process'
import { Content } from 'next/font/google'

const Tab_Data = [
    {
        title:"Skill",
        id:"skills",
        Content:(
            <ul className='list-disc pl-2'>
                <li>Desain Grafis</li>
                <li>UIX Design</li>
                <li>Frontend Frameworks</li>
                <li>Backend Frameworks</li>
                <li>Machine Learning Algorithms</li>
                <li>Deep Learning</li>
            </ul>
        ),
    },
    {
        title:"Education",
        id:"education",
        Content:(
            <ul className='list-disc pl-2'>
                <li>UNDIKSHA</li>
            </ul>
        ),
    },
    {
        title:"Certifications",
        id:"certifications",
        Content:(
            <ul className='list-disc pl-2'>
                <li>Interaction Design Foundation (IDF) Certifications</li>
                <li>Microsoft Certified: Azure Developer Associate</li>
                <li>Coursera Machine Learning Specialization by Stanford University</li>
                <li>Google Professional Machine Learning Engineer</li>
            </ul>
        ),
    },
]
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange =(id) => {
    startTransition(() =>{
        setTab(id);
    });
  };

  return (
    <section>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
            <Image src="/images/about-image.png" width={500} height={500} />    
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-primary font-bold text-4xl mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'> Halo, nama saya Ilyas Rasyid, seorang Machine Learning Engineer dan Web Developer dengan hasrat untuk menciptakan solusi teknologi yang inovatif. Saya memiliki pengalaman dalam mengembangkan aplikasi web yang responsif dan fungsional, serta menerapkan algoritma machine learning untuk memecahkan berbagai masalah kompleks. Dengan kombinasi keterampilan di bidang pengembangan web dan machine learning, saya mampu membangun sistem yang tidak hanya efisien secara teknis tetapi juga memberikan pengalaman pengguna yang optimal.</p>
                <div className="flex flex-row mt-8 justify-start">
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab == "skills"}> 
                        {""}
                        skills{""}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab == "education"}> 
                        {""}
                        education{""}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("certifications")} 
                        active={tab == "certifications"}> 
                        {""}
                        certifications{""}
                    </TabButton>
                </div>
                <div className="mt-8">{Tab_Data.find((t) => t.id === tab).Content}</div>
            </div> 
        </div>
    </section>
  );
};

export default AboutSection
