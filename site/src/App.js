import SiteTheme from './SiteTheme';
import { Footer, Sidebar, Main, SiteContainer, Header } from './components';
import DataContext from './context/DataContext';
function App() {
  return (
    <SiteTheme>
      <DataContext>
        <SiteContainer>
          <Header />
          <Sidebar />
          <Footer />
          <Main />
        </SiteContainer>
      </DataContext>
    </SiteTheme>
  );
}

export default App;
