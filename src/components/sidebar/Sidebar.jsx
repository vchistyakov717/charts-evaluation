import React, { Fragment } from 'react';
import animate from 'css-animation';

import SidebarHeader from './SidebarHeader';
import SidebarContent from './SidebarContent';
import SidebarMinimizer from './SidebarMinimizer';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minimized: props.minimized || false
    };
  }

  minimize = () => {
    this.props.minimize();
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.minimized !== this.state.minimized) {
      this.setState({
        minimized: nextProps.minimized
      });
    }
  };

  render() {
    const animation = {
      enter(node, done) {
        let height;
        return animate(node, 'rc-menu-collapse', {
          start() {
            height = node.offsetHeight;
            node.style.height = 0;
          },
          active() {
            node.style.height = `${height}px`;
          },
          end() {
            node.style.height = '';
            done();
          }
        });
      },

      appear() {
        return this.enter.apply(this, arguments);
      },

      leave(node, done) {
        return animate(node, 'rc-menu-collapse', {
          start() {
            node.style.height = `${node.offsetHeight}px`;
          },
          active() {
            node.style.height = 0;
          },
          end() {
            node.style.height = '';
            done();
          }
        });
      }
    };

    return (
      <Fragment>
        <SidebarHeader
          {...this.props}
          toggleTheme={this.props.toggleTheme}
        />
        <SidebarContent
          location={this.props.location}
          docked={this.props.docked}
          minimized={this.props.minimized}
          match={this.props.match}
          disabledItems={this.props.disabledItems}
          hiddenItems={this.props.hiddenItems}
          image={this.props.image}
        />        
        {this.props.docked ? (
          <div className="wrapper-minimizer" onClick={this.minimize}>
            <SidebarMinimizer pos="left" {...this.props} />
          </div>
        ) : (
          <div />
        )}
      </Fragment>
    );
  }
}

export default Sidebar;
