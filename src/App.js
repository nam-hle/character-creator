import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import styles from "./components/decoration/decoration.module.css";

function App() {
  return (
    <>
      <CharacterEditor />
      <div className={styles.decoration}/>
      <Footer />
    </>
  );
}

export default App;
