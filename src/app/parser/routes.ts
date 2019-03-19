import { RouteConfig } from 'vue-router/types/router';

export const ParserRoutes: RouteConfig[] = [
  {
    path: '/parser',
    component: () => import(/* webpackChunkName: "parser" */ './Parser/Parser.vue').then((m: any) => m.default),
  },
];
