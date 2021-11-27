import { Footer, Sidebar, Main, SiteContainer, Header } from './components';
import { Context } from './context/DataContext';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ImgGrid, Project, Landing } from './components';
import { useContext } from 'react';
import Div100vh from 'react-div-100vh';

function App() {
  const { project } = useContext(Context);
  return (
    <Div100vh>
      <SiteContainer>
        <Header />
        <Sidebar />
        <Footer />
        <Main>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/designs' element={<ImgGrid />} />
            <Route path='/projects' element={<Project />} />
            <Route
              path='/projects/:id/:name'
              element={project ? <Project /> : <Navigate to='/projects' />}
            />
          </Routes>
        </Main>
      </SiteContainer>
    </Div100vh>
  );
}

export default App;
