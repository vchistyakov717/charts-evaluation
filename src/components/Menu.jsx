import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { uniqueId } from 'lodash';

import menu from '../data/menu';

require('../utils/cycle.js');

class Menu extends React.Component {

  handleClick = (e, name, navPopupListComponent) => {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
    e.target.parentElement.classList.add('host-active');
  };

  activeRoute = (routeName, props) => {
    return props.location.pathname.indexOf(routeName) > -1
      ? 'nav-item nav-dropdown open host-active'
      : 'nav-item nav-dropdown open';
  };

  render() {
    const { match, minimized, docked, disabledItems, hiddenItems } = this.props;

    const shouldBeDisabled = disabledItems ? disabledItems : [];
    const shouldBeHidden = hiddenItems ? hiddenItems : [];

    const navItem = item => {
      const classes = {
        item: `${item.class}`,
        link: shouldBeHidden.includes(item.name) ? 'nav-link btn hidden' : shouldBeDisabled.includes(item.name)
            ? 'nav-link btn disabled'
            : 'nav-link btn',
        icon: `${item.icon}`
      };
      return navLink(item, classes);
    };

    const navLink = (item, classes) => {
      const url = item.url ? `${match.url}${item.url}` : '';
      const uniqueKey = uniqueId('link_');
      const titleClass = minimized && docked ? 'transparent' : '';
      return (
        <NavItem key={`${uniqueKey}_nav`} id={`${uniqueKey}_nav`} className={classes.item}>
          {
            <NavLink key={uniqueKey} id={uniqueKey} to={url} className={classes.link}>
              <i key={`${uniqueKey}_i`} id={`${uniqueKey}i`} className={classes.icon} />
              <span className={titleClass}>{item.name}</span>
            </NavLink>
          }
        </NavItem>
      );
    };

    // nav dropdown
    const navDropdown = item => {
      let clsName = shouldBeDisabled.includes(item.name) ? 'nav-link btn disabled' : 'nav-link btn';
      const uniqueKey = uniqueId('dropdown_');
      let titleComponent = item.name;
      let navListComponent = navList(item.children);
      let navListPopupComponent = null;
      if (minimized && docked) {
        titleComponent = <span className="transparent">{item.name}</span>;
        navListPopupComponent = navPopupList(item.children);
        navListComponent = null;
      }
      return (
        <li key={uniqueKey} id={uniqueKey} className={this.activeRoute(item.url, this.props)}>
          <a
            key={`${uniqueKey}_a`}
            id={`${uniqueKey}_a`}
            className={clsName}
            href="#"
            onClick={e => this.handleClick(e, item.name, navListPopupComponent)}
          >
            <i key={`${uniqueKey}_i`} id={`${uniqueKey}_i`} className={item.icon} />
            {titleComponent}
          </a>
          <ul key={`${uniqueKey}_ul`} id={`${uniqueKey}_ul`} className="nav-dropdown-items">
            {navListComponent}
          </ul>
        </li>
      );
    };

    // nav type
    const navType = item => (item.children ? navDropdown(item) : navItem(item));

    // nav list
    const navList = items => {
      return items.map(item => navType(item));
    };

    const navPopupList = items => {
      return items.map(item => navPopup(item));
    };

    const navPopup = item => {
      const url = `${this.props.match.url}${item.url}`;
      let clsName = shouldBeDisabled.includes(item.name) ? 'nav-popup-link btn disabled' : 'nav-popup-link btn';
      const uniqueKey = uniqueId('popup_');
      return (
        <NavItem key={uniqueKey}>
          {
            <NavLink className={clsName} to={url}>
              <span>{item.name}</span>
            </NavLink>
          }
        </NavItem>
      );
    };

    return (
      <PerfectScrollbar>
        <Nav>{navList(menu.items)}</Nav>
      </PerfectScrollbar>
    );
  }
}

export default Menu;
