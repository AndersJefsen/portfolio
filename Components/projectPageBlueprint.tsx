import React from 'react';
import Layout from '@/app/layout';
import Image from 'next/image';
import './projectPageBlueprint.css';

interface ProjectPageProps {
    title: string;
    date: string;
    sections: Array<{
        subheading:string;
        content: string;
        imagePath?:string;
        imageAlt?:string;
    }>;
}

const ProjectPageBlueprint: React.FC<ProjectPageProps> = ({title,date,sections}) =>{
    return(
        <Layout>
            <div className='project-page-content'>
                <h1 className='project-page-h1'>{title}</h1>
                <h6 className='project-page-date'>{date}</h6>
                {sections.map((sections,index)=>(
                    <article key={index}>
                        {sections.imagePath && (
                            <Image src={sections.imagePath} alt={sections.imageAlt || 'Project image'} width={608} height={300} />
                        )}
                        <h2 className='project-page-subheading'>{sections.subheading}</h2>

                        <p>{sections.content}</p>

                    </article>
                ))}
            </div>
        </Layout>
    );
};

export default ProjectPageBlueprint;