import React from 'react';
import ProjectPageBlueprint from '@/components/projectPageBlueprint';
import porcelainContent from '../content/contentPorcelain.json';

const porcelain: React.FC = () => {

  return (
    <ProjectPageBlueprint 
      title = {porcelainContent.title}
      date={porcelainContent.date}
      sections={porcelainContent.sections}
    />
  );
};
export default porcelain;
