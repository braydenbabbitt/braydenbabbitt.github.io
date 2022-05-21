import { match } from 'assert';
import React from 'react';
import { Link } from "react-router-dom";
import '../styles/mainStyles.scss';

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
      <nav className="header-nav">
        <span className="header-logo-link"><Link to="/"><img className="header-logo" alt="Brayden Babbitt logo and watermark" src="/wordmark-white-transparent.svg" /></Link></span>
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
      <ul className="header-menu">
        <Link to="/about"><HeaderMenuItem href="/about" text="About" isExternal={false} /></Link>
        <Link to="/work"><HeaderMenuItem href="/work" text="Work" isExternal={false} /></Link>
        <Link to="/apps"><HeaderMenuItem href="/apps" text="Apps" isExternal={false} /></Link>
        <HeaderMenuItem href="https://music.braydenbabbitt.com" text="Music" isExternal={true} />
        <Link to="/contact"><HeaderMenuItem href="/contact" text="Contact" isExternal={false} /></Link>
      </ul>
    );
  }
}

interface HeaderMenuItemProps {
  isExternal: boolean;
  href: string;
  text: string;
}

class HeaderMenuItem extends React.Component<HeaderMenuItemProps> {
  render() {
    let linkClassName = 'header-menu-item';
    if (currentURLMatches(document, this.props.href.replace('/', ''))) linkClassName += ' header-active-item';
    if (this.props.isExternal) {
      return (
        <a className="header-menu-link" href={this.props.href}>
          <li className={linkClassName}>{this.props.text}</li>
        </a>
      );
    } else {
      return (
        <li className={linkClassName + ' header-menu-link'}>{this.props.text}</li>
      );
    }
  }
}

export default NavHeader;