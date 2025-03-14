import { Layout } from '@/router/constant';
import { renderIcon } from '@/utils/index';
import { OptionsSharp } from '@vicons/ionicons5';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/system',
    name: 'System',
    redirect: '/system/menu',
    component: Layout,
    meta: {
      title: '系统设置',
      icon: renderIcon(OptionsSharp),
      sort: 6,
    },
    children: [
      {
        path: 'menu',
        name: 'system_menu',
        meta: {
          title: '菜单权限',
        },
        component: () => import('@/views/system/menu/menu.vue'),
      },
      {
        path: 'role',
        name: 'system_role',
        meta: {
          title: '角色权限',
        },
        component: () => import('@/views/system/role/role.vue'),
      },
    ],
  },
];

export default routes;
