import React from 'react';

class SidebarMinimizer extends React.Component{
  minimize = () => {
    this.props.minimize();
  };

  render() {
    const cssClass = 'sidebar-minimizer-' + this.props.pos;
    return <button className={cssClass} onClick={this.minimize} />;
  }
}

export default SidebarMinimizer;