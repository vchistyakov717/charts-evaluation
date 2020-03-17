import React from 'react';

import Menu from '../Menu';

class SidebarContent extends React.Component {
  render() {
    const menuProps = {
      docked: this.props.docked,
      minimized: this.props.minimized,
      location: this.props.location,
      match: this.props.match,
      disabledItems: this.props.disabledItems,
      hiddenItems: this.props.hiddenItems
    };

    const contentStyle = this.props.docked ? 'box-sidebar-content' : 'box-sidebar-content-undocked';
//<div className={contentStyle} style={{ backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundImage: "url(" + this.props.image + ")" }}>
    return (
      <div className={contentStyle}>
        <Menu {...menuProps} />
      </div>
    );
  }
}

export default SidebarContent;
