import React from 'react';
import Layout from '@/app/layout';
import Image from 'next/image';
import './projectPageBlueprint.css';
import CarouselComponent from './carousel';
interface Section {
    imagePath?: string;
    imageAlt?: string;
    subheading: string;
    content: string;
    images?: string[];
}

interface ProjectPageProps {
    title: string;
    date: string;
    sections: Section[];
}


const ProjectPageBlueprint: React.FC<ProjectPageProps> = ({ title, date, sections }) => {
    return (
      <Layout>
        <div className='project-page-content'>
          <h1 className='project-page-h1'>{title}</h1>
          <h6 className='project-page-date'>{date}</h6>
          {sections.map((section, index) => (
            <article key={index}>
              {section.images && section.images.length > 0 && <CarouselComponent images={section.images} />}
              {section.imagePath && (
                <Image src={section.imagePath} alt={section.imageAlt || 'Project image'} width={608} height={300} />
              )}
              <h2 className='project-page-subheading'>{section.subheading}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </article>
          ))}
        </div>
      </Layout>
    );
  };
export default ProjectPageBlueprint;