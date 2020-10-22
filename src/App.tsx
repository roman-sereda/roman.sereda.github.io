import React from 'react';
import styles from './App.module.scss';
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import Footer from "./components/Footer/Footer";
import { Grid, Row, Col } from 'react-flexbox-grid';

import { BrowserRouter as Router, Route } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Test from "./pages/Test/Test";

import storybook from './docs/storybook.json';


const App = () => {

  return(
    <Router basename={process.env.PUBLIC_URL}>
      <div className={styles.page}>
      <SideMenu />

        <div className={styles.body}>
          <Header />
          <Row className={styles.grid}>
            <Col xsOffset={0} xs={12} smOffset={1} sm={9} mdOffset={2} md={8} lgOffset={2} lg={6}>
              <div className={styles.content}>
                {
                  storybook.map(group =>
                    group.links.map(page =>
                      <Route path={page.path}>
                        <Test page={page} />
                      </Route>
                    )
                  )
                }
                <Route path='/'>
                  <WelcomePage />
                </Route>
              </div>
            </Col>
            <Col xs={0} sm={2} md={4} lg={4}  className={styles.empty}/>
          </Row>
        </div>
      </div>
      <Footer />
    </Router>
  )
};

export default App;

