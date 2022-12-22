import NProgress from 'nprogress';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { lazy, useEffect, Suspense, Fragment } from 'react';

import Layout from 'app/layout';
import LoadingScreen from 'app/components/LoadingScreen';

function RouteProgress(props) {
  NProgress.configure({
    speed: 500,
    showSpinner: false,
  });

  useEffect(() => {
    NProgress.done();
    return () => {
      NProgress.start();
    };
  }, []);

  return <Route {...props} />;
}

export function renderRoutes(routes) {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Switch>
          {routes.map((route, i) => {
            const Component = route.component;
            const Guard = route.guard || Fragment;
            const Layout = route.layout || Fragment;

            return (
              <RouteProgress
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                  <Guard>
                    <Layout>{route.path !== '/' ? <Component {...props} /> : route.component}</Layout>
                  </Guard>
                )}
              />
            );
          })}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

const routes = [
  {
    component: <Redirect to="/dashboard" />,
    exact: true,
    path: '/',
  }, {
    component: lazy(() => import('app/pages/dashboard')),
    exact: true,
    layout: Layout,
    path: '/dashboard',
  }, {
    exact: true,
    layout: Layout,
    path: '/teams',
    component: lazy(() => import('app/pages/teams')),
  }, {
    exact: true,
    layout: Layout,
    path: '/events',
    component: lazy(() => import('app/pages/events')),
  }, {
    exact: true,
    layout: Layout,
    path: '/resources',
    component: lazy(() => import('app/pages/resources')),
  }, {
    exact: true,
    layout: Layout,
    path: '/discord',
    component: lazy(() => import('app/pages/discord')),
  }, {
    exact: true,
    layout: Layout,
    path: '/directory',
    component: lazy(() => import('app/pages/directory')),
  }, {
    exact: true,
    layout: Layout,
    path: '/forums',
    component: lazy(() => import('app/pages/forums')),
  }, {
    exact: true,
    layout: Layout,
    path: '/benefits',
    component: lazy(() => import('app/pages/benefits')),
  }, {
    exact: true,
    path: '/404',
    component: lazy(() => import('app/pages/404Page')),
  }, {
    component: () => <Redirect to="/404" />
  }
];

export default routes;
