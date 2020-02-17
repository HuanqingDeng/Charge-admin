import defaultSettings from './defaultSettings'; // https://umijs.org/config/

import slash from 'slash2';
import themePluginConfig from './themePluginConfig';
import proxy from './proxy';
const { pwa } = defaultSettings; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION, REACT_APP_ENV } = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';
const plugins = [
  ['umi-plugin-antd-icon-config', {}],
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 3,
      },
      pwa: pwa
        ? {
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
              importWorkboxFrom: 'local',
            },
          }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
];

if (isAntDesignProPreview) {
  // 针对 preview.pro.ant.design 的 GA 统计代码
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
  plugins.push(['umi-plugin-antd-theme', themePluginConfig]);
}

export default {
  plugins,
  hash: true,
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/realtimesituation',
            },
            {
              path: '/realtimesituation',
              name: '实时概况',
              icon: 'smile',
              component: './Realtimeituation',
            },
            {
              path: '/ChargeMag',
              name: '充电运营',
              icon: 'smile',
              routes: [
                {
                  path: '/ChargeMag/PowerStationMag',
                  name: '电站管理',
                  icon: 'smile',
                  component: './ChargeMag/PowerStationMag',
                },
                {
                  path: '/ChargeMag/PileMag',
                  name: '电桩管理',
                  icon: 'smile',
                  component: './ChargeMag/PileMag',
                },
                {
                  path: '/ChargeMag/RateMag',
                  name: '费率管理',
                  icon: 'smile',
                  component: './ChargeMag/RateMag',
                },
              ]
            },
            {
              path: '/VipMag',
              name: '会员管理',
              icon: 'smile',
              routes: [
                {
                  path: '/VipMag/PersonVipMag',
                  name: '个人会员管理',
                  icon: 'smile',
                  component: './VipMag/PersonVipMag',
                },
                {
                  path: '/VipMag/GroupVipMag',
                  name: '团体会员管理',
                  icon: 'smile',
                  component: './VipMag/GroupVipMag',
                }
              ]
            },
            {
              path: '/FinanceMag',
              name: '财务管理',
              icon: 'smile',
              routes: [
                {
                  path: '/FinanceMag/OrderMag',
                  name: '订单管理',
                  icon: 'smile',
                  component: './FinanceMag/OrderMag',
                },
                {
                  path: '/FinanceMag/RechargeMag',
                  name: '充值管理',
                  icon: 'smile',
                  component: './FinanceMag/RechargeMag',
                }
              ]
            },
            {
              path: '/DateAnly',
              name: '数据分析',
              icon: 'smile',
              routes: [
                {
                  path: '/DateAnly/ChargeMonitor',
                  name: '数据监控',
                  icon: 'smile',
                  component: './DateAnly/ChargeMonitor',
                },
                {
                  path: '/DateAnly/Report',
                  name: '数据报表',
                  icon: 'smile',
                  component: './DateAnly/Report',
                }
              ]
            },
            {
              path: '/Runmaintain',
              name: '运行维护',
              icon: 'smile',
              routes: [
                {
                  path: '/Runmaintain/WarnMag',
                  name: '告警管理',
                  icon: 'smile',
                  component: './Runmaintain/WarnMag',
                },
                {
                  path: '/Runmaintain/OriginWarn',
                  name: '原始告警',
                  icon: 'smile',
                  component: './Runmaintain/OriginWarn',
                },
                {
                  path: '/Runmaintain/Abnormal',
                  name: '异常监控',
                  icon: 'smile',
                  component: './Runmaintain/Abnormal',
                },
                {
                  path: '/Runmaintain/Report',
                  name: '报文监控',
                  icon: 'smile',
                  component: './Runmaintain/Report',
                },
                {
                  path: '/Runmaintain/ChargeDate',
                  name: '充电数据',
                  icon: 'smile',
                  component: './Runmaintain/ChargeDate',
                },
                {
                  path: '/Runmaintain/EquipmentUpgrade',
                  name: '设备升级',
                  icon: 'smile',
                  component: './Runmaintain/EquipmentUpgrade',
                }
              ]
            },
            {
              path: '/SystemMag',
              name: '系统管理',
              icon: 'smile',
              routes: [
                {
                  path: '/SystemMag/CompanyMag',
                  name: '公司管理',
                  icon: 'smile',
                  component: './SystemMag/CompanyMag',
                },
                {
                  path: '/SystemMag/AccountMag',
                  name: '账号管理',
                  icon: 'smile',
                  component: './SystemMag/AccountMag',
                },
                {
                  path: '/SystemMag/RightMag',
                  name: '权限管理',
                  icon: 'smile',
                  component: './SystemMag/RightMag',
                },
                {
                  path: '/SystemMag/PlatformPram',
                  name: '平台商参数',
                  icon: 'smile',
                  component: './SystemMag/PlatformPram',
                },
                {
                  path: '/SystemMag/SeverMag',
                  name: '服务器设置',
                  icon: 'smile',
                  component: './SystemMag/SeverMag',
                }
              ]
            },
            {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              component: './Admin',
              authority: ['admin'],
              routes: [
                {
                  path: '/admin/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './Welcome',
                  authority: ['admin'],
                },
              ],
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
  },
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, _, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },
  proxy: proxy[REACT_APP_ENV || 'dev'],
};
