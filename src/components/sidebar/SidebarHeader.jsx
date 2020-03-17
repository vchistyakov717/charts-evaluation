import React from 'react';
import { Delay } from 'animate-components';

import Header from '../Header';

class SidebarHeader extends React.Component {
  render() {
    const brandClassName = this.props.open
      ? ''
      : this.props.minimized
      ? 'brand-minimized'
      : 'brand';
    const brand = (
      <div className = "brand-wrapper">
        <Delay timeout={300}>
          <div className={brandClassName} />
        </Delay>
      </div>
    );
    const close = (
      <div className="brand-close">
        <button className="float-right btn" onClick={this.props.onSetSidebarClose}>
          x
        </button>
      </div>
    );
    return <Header content={this.props.open ? close : brand} toggleTheme={this.props.toggleTheme}/>;
  }
}

export default SidebarHeader;
