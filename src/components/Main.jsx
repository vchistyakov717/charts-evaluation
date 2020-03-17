import React from 'react';
import { Container, Row, Col, Navbar, NavbarToggler } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Popup from 'react-popup';
import ReactResizeDetector from 'react-resize-detector';
import { fadeIn, slideLeft } from 'animate-keyframes';
import { Merge, Delay, FadeIn } from 'animate-components';

import Header from './Header';
import Sidebar from './sidebar/Sidebar';

import { Wrapper } from '../utils/helpers';
import { routes } from '../data/routes';

import image from "../styles/images/sidebar-3.jpg";

require('../utils/cycle.js');

/* tablets portrait width, sync up with width in bootstrap's NavbarToggler component */
const tablet = window.matchMedia(`(min-width: 768px)`);
const custom = window.matchMedia(`(min-width: 900px)`);

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: tablet.matches,
      open: false,
      minimized: !custom.matches,
      hidden: this.props.hidden,
      openSubmenu: false,
      isDarkTheme: false
    };

    tablet.addListener(this.mediaQueryChanged);
    custom.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    tablet.removeListener(this.mediaQueryChanged);
    custom.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged = () => {
    this.setState({
      minimized: !custom.matches,
      docked: tablet.matches,
      open: false
    });
  };

  onSetSidebarOpen = e => {
    this.setState({ open: !this.state.open });
    if (e) {
      e.preventDefault();
    }
  };

  minimize = e => {
    this.setState({ minimized: !this.state.minimized });
    if (e) {
      e.preventDefault();
    }
  };

  isAuthenticated(authService) {
    if (authService.isAuthenticated()) {
      if (this.state.hidden) {
        this.setState({ hidden: false });
      }
    } else {
      if (!this.state.hidden) {
        this.setState({ hidden: true });
      }
    }
  }

  onLogout = (isLogout) => {
    if (isLogout) {
      if (!this.state.hidden) {
        this.setState({ hidden: true });
      }
    }
  };

  isSubmenu = (e) => {
    if (e) {
      e.preventDefault();
    }
  };

  onResize = () => {
    Popup.close();
  };

  toggleTheme = () => {
    this.setState({isDarkTheme: !this.state.isDarkTheme})
  };

  render() {
    const { match } = this.props;
    let disabledItems = []; //["Summary","Impressions","Reach","Airing Details","Lift","Creative","All Cuts"];
    let hiddenItems = ['TEST2', 'Audiences'];
    let sidebarClassName = this.state.hidden
      ? 'box-sidebar-hidden'
      : this.state.docked && !this.state.open
      ? this.state.minimized
        ? 'box-sidebar-minimized'
        : 'box-sidebar'
      : 'box-sidebar-hidden';
    const headerClassName = this.state.hidden ? 'hidden' : this.state.docked ? '' : 'header';

    const navbarClassName = this.state.hidden ? 'hidden' : '';

    if (this.state.open && !this.state.docked) sidebarClassName = 'box-sidebar-overlay';

    const contentHeader = (
      <Navbar className={navbarClassName}>
        {!this.state.docked && (
          <NavbarToggler className="d-md-none" onClick={this.onSetSidebarOpen} />
        )}
        {!this.state.docked && (
          <div className="center-all">
            <Delay timeout={100}>
              <Merge
                one={{ name: fadeIn, duration: '1s', timingFunction: 'ease-in' }}
                two={{ name: slideLeft, duration: '0.5s', timingFunction: 'ease-out' }}
              >
                <div className="brand" />
              </Merge>
            </Delay>
          </div>
        )}
      </Navbar>
    );

    const sidebarProps = {
      minimize: this.minimize,
      minimized: this.state.minimized,
      docked: this.state.docked,
      // // open: this.state.open,
      // // onSetSidebarClose: this.onSetSidebarOpen,
      authService: this.props.authService,
      location: this.props.location,
      match: this.props.match,
      onLogout: this.onLogout,
      disabledItems: disabledItems,
      hiddenItems: hiddenItems,
      toggleTheme: this.toggleTheme,
      image: image
    };

    const theme = this.state.isDarkTheme ? "box theme-dark" : "box theme-light";

    return (
      <Container fluid className={theme}>
        <Popup />
        <Row className="box-container">
          <Col className={sidebarClassName}>
            <FadeIn duration="2s">
              <Sidebar {...sidebarProps} />
            </FadeIn>
          </Col>
          <Col className="box-content">
            <Header content={contentHeader} className={headerClassName}>
              <FadeIn duration="4s">
                
                  <Switch>
                    {routes.map((route, i) => (
                      <Route
                        key={i}
                        path={`${match.path}${route.path}`}
                        render={props =>
                          Wrapper(route.component)({
                            ...props,
                            authService: this.props.authService,
                            docked: this.state.docked
                          })
                        }
                      />
                    ))}
                    <Redirect from={match.path} to={`${match.path}/highcharts`} />
                  </Switch>
                
              </FadeIn>
            </Header>
          </Col>
        </Row>
        <ReactResizeDetector handleWidth onResize={this.onResize} />
      </Container>
    );
  }
}

export default Main;
