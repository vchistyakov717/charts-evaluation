import React, { Fragment } from 'react';

const Header = (props) => {
  return (
    <Fragment>
      <div className={props.className} onClick={props.toggleTheme}>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Header;
