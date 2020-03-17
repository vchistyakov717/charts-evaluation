import React from 'react';
import jwtDecode from 'jwt-decode';
import { Route } from 'react-router-dom';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

export const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => {
        return renderMergedProps(component, routeProps, rest);
      }}
    />
  );
};

export const Wrapper = Component => {
  return props => <Component {...props} />;
};

export const isFloat = val => {
  var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
  if (!floatRegex.test(val)) return false;

  val = parseFloat(val);
  if (isNaN(val)) return false;
  return true;
};

export const numericFilter = (filter, rv) => {
  let value = filter.value.replace(/\s/g, '');
  if (isFloat(value)) {
    return rv === parseFloat(value);
  } else {
    value = filter.value.replace(/\s/g, '');
    if (value.length <= 1) {
      return true;
    } else {
      if (value.length > 1 && value.includes('-')) {
        if (value.charAt(value.length - 1) === '-') {
          return true; //row[filter.id] == parseFloat(value.substring(0,value.length-1));
        } else {
          let values = value.split('-');
          if (parseFloat(values[1]) > parseFloat(values[0])) {
            let rowValue = rv;
            if (rowValue > parseFloat(values[0])) {
              if (rowValue < parseFloat(values[1])) {
                return rv;
              }
            }
          } else {
            return true;
          }
        }
      }
      if (value.charAt(0) === '>') {
        if (isFloat(value.substring(1))) {
          return rv > parseFloat(value.substring(1));
        } else {
          return true;
        }
      } else if (value.charAt(0) === '<') {
        if (isFloat(value.substring(1))) {
          return rv < parseFloat(value.substring(1));
        } else {
          return true;
        }
      }
    }
  }
};

export function parseAccessTokenScope(accessToken) {
  try {
    const scope = jwtDecode(accessToken).scope.split(/[\s|]+/);
    const scopeObj = {};
    scope.forEach(it => {
      const arr = it.split(':');
      if (arr[1]) {
        scopeObj[arr[0]] = arr[1];
      }
    });
    return scopeObj;
  } catch (e) {
    console.warn('Error parsing access token in parseAccessTokenScope function', e);
  }
}

export function getIdTokenPicture(idToken) {
  try {
    return jwtDecode(idToken).picture;
  } catch (e) {
    console.warn('Error parsing id token in getIdTokenPicture function', e);
  }
}

export function getInitials(name) {
  let initials = name.match(/\b\w/g) || [];
  initials = (initials.shift() || ') + (initials.pop() || ').toUpperCase();
  return initials;
}
