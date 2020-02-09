import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isPrivateProv,
  ...rest
}) {

  const { signed } = store.getState().auth;
  const { provider } = store.getState().auth.profile;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (!signed && isPrivateProv) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivateProv && provider) {
    return <Redirect to="/dash-prov" />;
  }

  if (signed && !isPrivate && !provider) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isPrivateProv: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isPrivateProv: false,
};
