import { Outlet } from 'react-router-dom';
import ContentBlock from '../ContentBlock/ContentBlock';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function MainLayout() {
  return (
    <>
      <Header />

      <main className="main">
        <ContentBlock />

        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;