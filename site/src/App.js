import SiteTheme from './SiteTheme';
import { Footer, Sidebar, Main, SiteContainer, Header } from './components';
import DataContext from './context/DataContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ImgGrid, Project, Landing } from './components';
function App() {
  return (
    <Router>
      <DataContext>
        <SiteTheme>
          <SiteContainer>
            <Header />
            <Sidebar />
            <Footer />

            <Main>
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/designs' component={ImgGrid} />d
                <Route path='/projects' component={Project} />
              </Switch>
            </Main>
          </SiteContainer>
        </SiteTheme>
      </DataContext>
    </Router>
  );
}

export default App;
