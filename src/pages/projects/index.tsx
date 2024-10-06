import { Button, HeaderTitle } from '@/components';
import { useState } from 'react';

const projectsData = [
  {
    title: 'CMMS - Tractian',
    description: 'A frontend technical challenge with machine maintenance management features.',
    imageUrl: 'https://github.com/cristianmeelo/challenge-frontend-engineer-react/blob/main/thumbnail-mockup.png?raw=true#vitrinedev',
    techStack: ['nextJS', 'highcharts', 'Antdesign', 'jspdf'],
    url: 'https://challenge-frontend-engineer-react-nu.vercel.app/',
    github: 'https://github.com/cristianmeelo/challenge-frontend-engineer-react',
  },
  {
    title: 'Taskban',
    description: 'A technical challenge with features similar to our beloved Trello.',
    imageUrl: 'https://github.com/cristianmeelo/challenge-frontend-herocode-react/raw/main/thumbnail-mockup.png?raw=true#vitrinedev',
    techStack: ['Next.js', 'Styled Components', 'GraphQL'],
    url: 'https://challenge-frontend-herocode-react.vercel.app/',
    github: 'https://github.com/cristianmeelo/challenge-frontend-herocode-react',
  },
  {
    title: 'Freela BabiRevisao',
    description: 'My first freelance, a landing page  to present academic work consultancy services.',
    imageUrl: 'https://github.com/cristianmeelo/freelance-babirevisao/blob/main/mockup-static.png?raw=true',
    techStack: ['netxjs', 'lottie', 'aos', 'tailwindcss'],
    url: 'https://babiconsultoria.com.br/',
    github: 'https://github.com/cristianmeelo/freelance-babirevisao',
  },
  {
    title: 'Github Finder',
    description: 'Search for profile hosted on the github platform, bringing details of followers and the number of people the profile follows.',
    imageUrl: 'https://github.com/cristianmeelo/react-app-github-finder/raw/main/thumbnail-mockup.png?raw=true#vitrinedev',
    techStack: ['typescript', 'vite', 'cssModules', 'react-icons', 'react-router-dom'],
    url: 'https://react-app-github-finder-cristianmeelo.vercel.app/',
    github: 'https://github.com/cristianmeelo/react-app-github-finder',
  },
  {
    title: 'Focus Time',
    description: 'Pomodoro timer with ambient background sound options to help you f0cus with scenario you find convient.',
    imageUrl: 'https://github.com/cristianmeelo/js-app-focus-time/raw/main/thumbnail-mockup.png?raw=true#vitrinedev',
    techStack: ['html', 'css', 'javascript'],
    url: 'https://js-app-focus-time.vercel.app/',
    github: 'https://github.com/cristianmeelo/js-app-focus-time',
  },
  {
    title: 'Go travel!',
    description: 'A responsive website with travel images developed with Gatsby and GraphQL.',
    imageUrl: 'https://github.com/cristianmeelo/gatsby-travel-website/raw/master/thumbnail-mockup.png?raw=true#vitrinedev',
    techStack: ['Gatsby', 'typescript', 'Styled Components', 'GraphQL'],
    url: 'https://go-travel-website.netlify.app/',
    github: 'https://github.com/cristianmeelo/gatsby-travel-website',
  },
  {
    title: 'Pokedéx',
    description: 'A responsive pokedéx developed for you to browse and meet all the 5th generation pokemons.',
    imageUrl: 'https://github.com/cristianmeelo/js-app-pokedex/raw/main/thumbnail-mockup.png?raw=true#vitrinedev',
    techStack: ['html', 'css', 'javascript'],
    url: 'https://js-app-pokedex.vercel.app/',
    github: 'https://github.com/cristianmeelo/js-app-pokedex',
  },
  {
    title: 'Organo',
    description: 'A definitive solution to simplify people management, organize people and teams in one place.',
    imageUrl: 'https://github.com/cristianmeelo/organo/raw/main/thumbnail-mockup.png?raw=true#vitrinedev',
    techStack: ['Create React App', 'css', 'react-icons', 'react-toastify'],
    url: 'https://organo-cristianmeelo.vercel.app/',
    github: 'https://github.com/cristianmeelo/react-app-organo',
  },
  {
    title: 'Cinetag',
    description: 'A place to you save your videos and movies.',
    imageUrl: 'https://github.com/cristianmeelo/cinetag/raw/main/thumbnail-mockup.png?raw=true#vitrinedev',
    techStack: ['typescript', 'cssModules', 'react-router-dom', 'react-toastify'],
    url: 'https://cinetag-six-pi.vercel.app/',
    github: 'https://github.com/cristianmeelo/react-app-cinetag',
  },
  {
    title: 'Weather React App',
    description: 'A simple query address app and find out thw weather. Find weather data for your city or anywhere else in the world.',
    imageUrl: 'https://github.com/cristianmeelo/react-app-weather-forecast/raw/main/thumbnail-mockup.png?raw=true#vitrinedev',
    techStack: ['Create React App', 'css', 'javascript', 'axios'],
    url: 'https://react-app-weather-forecast.vercel.app/',
    github: 'https://github.com/cristianmeelo/react-app-weather-forecast',
  },
  {
    title: 'Pokenext',
    description: 'On one page, you have access to all pokemons of the second generation,bringing the breakdown of attributes of a pokemon by clicking on details',
    imageUrl: 'https://github.com/cristianmeelo/next-app-pokenext/raw/main/thumbnail-mockup.png?raw=true#vitrinedev',
    techStack: ['nextjs', 'typescript', 'cssModules', 'vercel-deployment'],
    url: 'https://pokenext-agraq7zr3-cristianmeelo.vercel.app/',
    github: 'https://github.com/cristianmeelo/next-app-pokenext',
  },
  {
    title: 'TYpe Fast',
    description: 'Train you typing speed with 10 randomly generated phrases, if it helps, switch the theme between dark and light',
    imageUrl: 'https://github.com/cristianmeelo/js-app-type-fast/raw/main/thumbnail-mockup.png?raw=true#vitrinedev',
    techStack: ['html', 'css', 'javascript', 'vercel deployment'],
    url: 'https://js-app-type-fast.vercel.app/',
    github: 'https://github.com/cristianmeelo/js-app-type-fast',
  },
  {
    title: 'Digital Clock',
    description: 'With its sleek, futuristic aesthetic, envision a digital watch with a modern look',
    imageUrl: 'https://github.com/cristianmeelo/js-app-digital-clock/raw/development/thumbnail-mockup.png?raw=true#vitrinedev',
    techStack: ['html', 'css', 'javascript', 'aws deployment'],
    url: 'http://cristianmeelo4.com.s3-website-sa-east-1.amazonaws.com/',
    github: 'https://github.com/cristianmeelo/js-app-digital-clock',
  },
  {
    title: 'Freelando',
    description: 'An online platform to find freelancers or for freelancers to find clients!',
    imageUrl: 'https://github.com/cristianmeelo/react-app-freelando/raw/main/thumbnail-mockup.png?raw=true',
    techStack: ['react-grid-system', 'emotion', 'react-icons', 'react-router-dom'],
    url: 'https://react-app-freelando.vercel.app/',
    github: 'https://github.com/cristianmeelo/react-app-freelando',
  },
];

export const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(8);

  const handleShowMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 6);
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-start justify-start min-h-screen py-12 "
    >
      <HeaderTitle level="h2" children="personal projects" align="right" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 py-28">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className="flex border rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex-none w-1/3">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-full"
              />

            </div>
            <div className="flex-grow p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-black font-extrabold text-lg">
                  {project.title}
                </h2>
                <p className="text-black text-base">{project.description}</p>
                {/* <p className="text-gray-400 text-sm mt-2">
                    Lorem ipsum dolor sit amet.
                  </p> */}
                <div className="flex space-x-2 py-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="See Project"
                  className="bg-black text-white py-2 px-4 rounded hover:bg-slate-400"
                >
                  See Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="See Code"
                  className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
                >
                  See Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < projectsData.length && (
        <div className="flex items-center justify-center w-full pb-12">
          <Button
            onClick={handleShowMoreProjects}
            ariaLabel="See more projects"
            isBold
            fontSize="18px"
          >
            Show more projects
          </Button>
        </div>
      )}
      <div className="h-px bg-custom-gray w-full" />
    </section>
  );
};
