import React from 'react';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'; // Exemplo de ícone
import StarIcon from '@mui/icons-material/Star';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';

type CardProps = {
  icon: React.ReactElement;
  color: string;
  title: string;
  description: string;
};

const InfoCard: React.FC<CardProps> = ({ icon, color, title, description }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between max-h-80 h-full">
      <div className={`text-${color}-500 p-5`}>
        {icon}
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
      <div className="p-5 pt-0">
        <hr className="border-t border-gray-200 mb-4" />
        <a href="#" className="text-sm text-blue-500 hover:underline">
          Learn more
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="bg-[#DEE8FE] min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-10 text-start pt-20">Soluções</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InfoCard
          icon={<LibraryAddIcon fontSize="large" />}
          color="blue"
          title="Regular Cleaning"
          description="Good design is good for business."
        />
        <InfoCard
          icon={<StarIcon fontSize="large" />}
          color="blue"
          title="Deep Cleaning"
          description="Save your favorites for quick access."
        />
        <InfoCard
          icon={<HomeIcon fontSize="large" />}
          color="blue"
          title="Move-in & Move-out"
          description="Find everything you need at home."
        />
        <InfoCard
          icon={<BuildIcon fontSize="large" />}
          color="blue"
          title="Commercial"
          description="Get the best tools for your work."
        />
        <InfoCard
          icon={<PeopleIcon fontSize="large" />}
          color="blue"
          title="Vacation Home"
          description="Join our vibrant community."
        />
        <InfoCard
          icon={<WorkIcon fontSize="large" />}
          color="blue"
          title="Event"
          description="Take your career to the next level."
        />
      </div>
    </section>
  );
};

export default Services;
