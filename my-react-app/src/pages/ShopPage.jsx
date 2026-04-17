import Header from '../components/Header/Header';
import ContentBlock from '../components/ContentBlock/ContentBlock';
import Showcase from '../components/Showcase/Showcase';
import Footer from '../components/Footer/Footer';
import { PAGE_NAMES } from '../constants';

function ShopPage() {
  return (
    <>
      <Header />
      <main className="main">
        <ContentBlock title="Shop" breadcrumbs={[PAGE_NAMES.HOME, PAGE_NAMES.SHOP]} />
        <div className="container">
          <Showcase />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ShopPage;