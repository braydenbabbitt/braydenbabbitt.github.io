import React from 'react';
import { Link } from "react-router-dom";
import styles from './Cards.module.scss';
const colorContrast = require('color-contrast');

interface CardProps {
  imagePath: string;
  title: string;
  description: string;
  iconStyle?: boolean;
  external?: boolean;
  href: string;
}

class Card extends React.Component<CardProps> {
  static defaultProps = {
    imagePath: '',
    title: 'Title Placeholder',
    description: 'Description Placeholder',
    iconStyle: true,
    external: false,
    href: '#'
  }

  render() {
    let iconStyle = (this.props.iconStyle === null) ? Card.defaultProps.iconStyle : this.props.iconStyle;
    let externalLink = (this.props.external === null) ? Card.defaultProps.external : this.props.external;
    
    if (externalLink) {
      return (
        <a className={styles.card_link} href={this.props.href}>
          <div className={styles.card}>
            <img className={iconStyle ? styles.icon : styles.preview} src={this.props.imagePath} alt="" />
            <div className={styles.info}>
              <h3 className={styles.title}>{this.props.title}</h3>
              <p className={styles.description}>{this.props.description}</p>
            </div>
          </div>
        </a>
      );
    } else {
      return (
        <Link className={styles.card_link} to={this.props.href}>
          <div className={styles.card}>
            <img className={iconStyle ? styles.icon : styles.preview} src={this.props.imagePath} alt="" />
            <div className={styles.info}>
              <h3 className={styles.title}>{this.props.title}</h3>
              <p className={styles.description}>{this.props.description}</p>
            </div>
          </div>
        </Link>
      );
    }
  }
}

export default Card;