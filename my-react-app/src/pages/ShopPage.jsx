import Header from '../components/Header/Header';
import ContentBlock from '../components/ContentBlock/ContentBlock';
import Showcase from '../components/Showcase/Showcase';
import Footer from '../components/Footer/Footer';

function ShopPage() {
  return (
    <>
      <Header />
      <main className="main">
        <ContentBlock title="Shop" breadcrumbs={['Home', 'Shop']} />
        <div className="container">
          <Showcase />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ShopPage;