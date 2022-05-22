import React from 'react';
import { Link } from "react-router-dom";
import styles from './NavHeader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

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

interface HeaderMenuState {
  expanded: boolean;
}

class HeaderMenu extends React.Component<HeaderMenuProps, HeaderMenuState> {
  constructor(props: HeaderMenuProps) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  render() {
    let menuClassName = `${styles.menu}`;
    let icon = faBars;
    if (this.state.expanded) {
      menuClassName += ` ${styles.expanded_menu}`;
      icon = faXmark;
    }

    return (
      <span className={styles.menu_wrapper}>
        <FontAwesomeIcon onClick={() => this.setState({ expanded: !this.state.expanded})} className={styles.hamburger_icon} icon={icon} />
        <ul className={menuClassName} id="menu-content">
          <Link className={styles.menu_link} to="/about"><HeaderMenuItem href="/about" text="About" /></Link>
          <Link className={styles.menu_link} to="/work"><HeaderMenuItem href="/work" text="Work" /></Link>
          <Link className={styles.menu_link} to="/apps"><HeaderMenuItem href="/apps" text="Apps" /></Link>
          <HeaderMenuItem href="http://music.braydenbabbitt.com" text="Music" />
          <Link className={styles.menu_link} to="/contact"><HeaderMenuItem href="/contact" text="Contact" /></Link>
        </ul>
      </span>
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