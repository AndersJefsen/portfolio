import React from 'react';
import ProjectPageBlueprint from '@/components/projectPageBlueprint';

const golfrobot: React.FC = () => {
  const sections = [
    {
      subheading: "Introduction",
      content: "Hvis vi kigger på vores tidligere projektplaner ser vi at vi stort set altid har været “on target” undtagen ved vores statusrapport 4, da vi valgte at omstrukturere vores ComputerVision script, hvilket gav os stort tilbageslag i vores projekt udvikling, da det gjorde at vores andre opgaver blev sat på pause. Dette gjorde at vores udvikling på ruter måtte afvente indtil vi blev færdige med ComputerVision scriptet. Da vi blev færdige med det kom vi hurtigt tilbage og det gav os en stor fordel da det blev nemmere at anvende den nye version af vores ComputerVision. i nedenstående skema ser i hvorfor vi mener vores projekt er “on target”",
      imagePath: "/fysiskrobot.png",
      imageAlt: 'picture of physical robot',
    },
    {
      subheading: "Introduction",
      content: "Hvis vi kigger på vores tidligere projektplaner ser vi at vi stort set altid har været “on target” undtagen ved vores statusrapport 4, da vi valgte at omstrukturere vores ComputerVision script, hvilket gav os stort tilbageslag i vores projekt udvikling, da det gjorde at vores andre opgaver blev sat på pause. Dette gjorde at vores udvikling på ruter måtte afvente indtil vi blev færdige med ComputerVision scriptet. Da vi blev færdige med det kom vi hurtigt tilbage og det gav os en stor fordel da det blev nemmere at anvende den nye version af vores ComputerVision. i nedenstående skema ser i hvorfor vi mener vores projekt er “on target”",
      imagePath: "/fysiskrobot.png",
      imageAlt: 'picture of physical robot',
    },
  ];

  return (
    <ProjectPageBlueprint title="GolfRobot Project: A Computer Vision and Robotics System" date="the 2nd of July, 2024" sections={sections} />
  );
};
export default golfrobot;
