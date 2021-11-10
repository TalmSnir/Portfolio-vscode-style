import { createContext, useState, useEffect } from 'react';
import { useFetch } from '../hooks';

const topProjects = [
  'Vanilla-CSS-Elements',
  'Googl-Drive-Clone',
  'FigmaOP-open-source-Figma-plugins',
  'moodle-staff-emails-scraper',
];

export const Context = createContext(null);

export default function DataContext({ children }) {
  const [project, setProject] = useState(null);
  const [colorTheme, setColorTheme] = useState('sublimeMonkai');

  const [data, setData] = useState(null);

  let { data: fetchedData } = useFetch(
    'https://api.github.com/users/TalmSnir/repos'
  );
  useEffect(() => {
    if (fetchedData && fetchedData.length > 0) {
      const filteredData = [...fetchedData].filter(project =>
        topProjects.includes(project.name)
      );

      setData(filteredData);
    }
  }, [fetchedData]);
  return (
    <Context.Provider
      value={{
        data,
        project,
        setProject,
        colorTheme,
        setColorTheme,
      }}>
      {children}
    </Context.Provider>
  );
}
