import React from 'react';
import ProjectPageBlueprint from '@/components/projectPageBlueprint';
import golfcontent from '../content/contentGolfRobot.json';

const golfrobot: React.FC = () => {

  return (
    <ProjectPageBlueprint 
      title = {golfcontent.title}
      date={golfcontent.date}
      sections={golfcontent.sections}
    />
  );
};
export default golfrobot;
