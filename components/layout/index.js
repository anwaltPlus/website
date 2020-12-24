import Head from 'next/head';
import { useState } from 'react';
// components
import MenuComponent from '../menu';
import FooterComponent from '../footer';
import HeaderComponent from '../header';
import ContactWithMap from '../contact';
// ui
import { PageWrapper } from '../../ui';
// //////////////////////////////////////////////////

const Layout = ({ title, router, children, keywords = '' }) => {
  const { push, route } = router;
  const handleGoToHomePage = () => push('/');
  const [isMenuOpened, setIsOpenedMenu] = useState(false);

  return (
    <PageWrapper>
      <Head>
        <title>{title}</title>
        <meta name="Keywords" content={keywords} />
      </Head>
      <HeaderComponent
        isMenuOpened={isMenuOpened}
        setIsOpenedMenu={setIsOpenedMenu}
        handleGoToHomePage={handleGoToHomePage} />
      {children}
      <ContactWithMap />
      <FooterComponent />
      <MenuComponent
        isMenuOpened={isMenuOpened}
        setIsOpenedMenu={setIsOpenedMenu}
        width={isMenuOpened ? '280px': '0px'}
      />
    </PageWrapper>
  );
};

export default Layout;
