import React from 'react';
import ProjectPageBlueprint from '@/components/projectPageBlueprint';
import stockVestContent from '../content/contentStockVest.json';

const stockvest: React.FC = () => {

  return (
    <ProjectPageBlueprint 
      title = {stockVestContent.title}
      date={stockVestContent.date}
      sections={stockVestContent.sections}
    />
  );
};
export default stockvest;
