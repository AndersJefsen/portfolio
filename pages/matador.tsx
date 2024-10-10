import React from 'react';
import ProjectPageBlueprint from '@/components/projectPageBlueprint';
import matadorContent from '../content/contentMatador.json';

const matador: React.FC = () => {

  return (
    <ProjectPageBlueprint 
      title = {matadorContent.title}
      date={matadorContent.date}
      sections={matadorContent.sections}
    />
  );
};
export default matador;
