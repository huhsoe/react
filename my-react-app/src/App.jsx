import { useState } from 'react';
import Header from './components/Header/Header';
import ContentBlock from './components/ContentBlock/ContentBlock';
import Showcase from './components/Showcase/Showcase';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('shop');

  const pageTitle = currentPage === 'shop' ? 'Shop' : 'Cart';
  const breadcrumbs =
    currentPage === 'shop' ? ['Home', 'Shop'] : ['Home', 'Shop', 'Cart'];

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="main">
        <ContentBlock
          title={pageTitle}
          breadcrumbs={breadcrumbs}
          setCurrentPage={setCurrentPage}
        />

        <div className="container">
          {currentPage === 'shop' ? <Showcase /> : <Cart />}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;