import React from 'react';
import HeaderComponent from '../Header';
import { Container } from 'reactstrap';
import Footer from '../Footer';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = (props: Props) => {
  return (
    <div className='application'>
      <HeaderComponent />
      <main className='main'>
        <Container>{props.children}</Container>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
