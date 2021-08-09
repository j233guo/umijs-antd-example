// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/jg/Desktop/itcast-react/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
      {
        "path": "/HelloWorld",
        "exact": true,
        "component": require('@/pages/HelloWorld.js').default
      },
      {
        "path": "/LifeCycle",
        "exact": true,
        "component": require('@/pages/LifeCycle.js').default
      },
      {
        "path": "/List",
        "exact": true,
        "component": require('@/pages/List.js').default
      },
      {
        "path": "/MyTabs",
        "exact": true,
        "component": require('@/pages/MyTabs.js').default
      },
      {
        "path": "/Show",
        "exact": true,
        "component": require('@/pages/Show.js').default
      },
      {
        "path": "/user/UserAdd",
        "exact": true,
        "component": require('@/pages/user/UserAdd.js').default
      },
      {
        "path": "/user/UserList",
        "exact": true,
        "component": require('@/pages/user/UserList.js').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
