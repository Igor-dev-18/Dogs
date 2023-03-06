import React from 'react'
import styles from './Footer.module.css';
import Dogs from '../../Assets/dogs-footer.svg';

function Footer() {
  return (
   <footer className={styles.footer}>
    <img src={Dogs} alt="Dogs logo"/>
    <p>Dogs. Alguns direitos reservados.</p>
   </footer>
  )
}

export default Footer