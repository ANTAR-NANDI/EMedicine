import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './includes/Footer';
import Header from './includes/Header';
const Layout = ({ children }) => {
  return (
    <div>
        <Container>
            <Header/>

                <main>
                {children}
                </main>

            <Footer/>
        </Container>
     
    </div>
  );
};

export default Layout;
