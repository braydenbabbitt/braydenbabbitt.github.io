import React from 'react';
import { Link } from "react-router-dom";
// import 'src/globalStyles/mainStyles.scss';
import styles from './NavHeader.module.scss';

function currentURLMatches(document: Document, matchURL: string) {
  const currentSubdirectory = document.location.pathname.split('/')[1];
  console.log(`${currentSubdirectory} === ${matchURL}`);
  if (currentSubdirectory === matchURL) return true;
  return false;
}

interface HeaderProps {

}

class NavHeader extends React.Component<HeaderProps> {
  render() {
    return (
      <nav className={styles.nav}>
        <span className={styles.logo_link}><Link to="/"><img className={styles.logo} alt="Brayden Babbitt logo and watermark" src="/wordmark-white-transparent.svg" /></Link></span>
        <HeaderMenu />
      </nav>
    );
  }
}

interface HeaderMenuProps {

}

class HeaderMenu extends React.Component<HeaderMenuProps> {
  render() {
    return (
      <ul className={styles.menu}>
        <Link className={styles.menu_link} to="/about"><HeaderMenuItem href="/about" text="About" /></Link>
        <Link className={styles.menu_link} to="/work"><HeaderMenuItem href="/work" text="Work" /></Link>
        <Link className={styles.menu_link} to="/apps"><HeaderMenuItem href="/apps" text="Apps" /></Link>
        <HeaderMenuItem href="http://music.braydenbabbitt.com" text="Music" />
        <Link className={styles.menu_link} to="/contact"><HeaderMenuItem href="/contact" text="Contact" /></Link>
      </ul>
    );
  }
}

interface HeaderMenuItemProps {
  href: string;
  text: string;
}

class HeaderMenuItem extends React.Component<HeaderMenuItemProps> {
  render() {
    let isExternal = false;
    if (!this.props.href.startsWith('/')) isExternal = true;

    let linkClassName = `${styles.menu_item}`;
    if (currentURLMatches(document, this.props.href.replace('/', ''))) linkClassName += ` ${styles.active_item}`;
    if (isExternal) {
      return (
        <a className={styles.menu_link} href={this.props.href}>
          <li className={linkClassName}>{this.props.text}</li>
        </a>
      );
    } else {
      return (
        <li className={linkClassName}>{this.props.text}</li>
      );
    }
  }
}

export default NavHeader;