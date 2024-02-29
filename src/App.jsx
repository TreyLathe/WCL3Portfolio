// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
       <Header />
      <Nav />
      <main className="mx-3">
{/* put header here? */}
       
        <Outlet />
{/* put footer here? */}
      <Footer />
      </main>
    </>
  );
}

export default App;
