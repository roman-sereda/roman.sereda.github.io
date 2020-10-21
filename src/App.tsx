import React from 'react';
import styles from './App.module.scss';
import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import Footer from "../../components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () => {

  return(
    <div>
      <Header />
      <div className={styles.content}>
        <SideMenu />

      </div>
      <Footer />
    </div>
  )
};

export default App;

