import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '登录',
      meta: {
        title: '登录',
        keywords: '登录1',
        description: '登录2'
      },
      component: resolve => require(['../views/loginView/loginView.vue'], resolve)
    },
    {
      path: '/login',
      name: '登录',
      meta: {
        title: '登录',
        keywords: '登录1',
        description: '登录2'
      },
      component: resolve => require(['../views/loginView/loginViewUser.vue'], resolve)
    },
    // 帮助中心
    {
      path: '/aboutUs',
      name: 'aboutUs',
      meta: {
        title: '帮助中心'
      },
      component: resolve => require(['../views/helpCenter/aboutUs.vue'], resolve)
    },
    {
      path: '/ruleIndex',
      name: 'ruleIndex',
      meta: {
        title: '平台规则'
      },
      component: resolve => require(['../views/helpCenter/rule/ruleIndex.vue'], resolve)
    },
    {
      path: '/operationIndex',
      name: 'operationIndex',
      meta: {
        title: '操作指南'
      },
      component: resolve => require(['../views/helpCenter/operation/operationIndex.vue'], resolve)
    },
    {
      path: '/caiIndex',
      name: 'caiIndex',
      meta: {
        title: '采购帮助'
      },
      component: resolve => require(['../views/helpCenter/cai/caiIndex.vue'], resolve)
    },
    {
      path: '/gongIndex',
      name: 'gongIndex',
      meta: {
        title: '供应帮助'
      },
      component: resolve => require(['../views/helpCenter/gong/gongIndex.vue'], resolve)
    },
    {
      path: '/connectIndex',
      name: 'connectIndex',
      meta: {
        title: '联系我们'
      },
      component: resolve => require(['../views/helpCenter/connect/connectIndex.vue'], resolve)
    },
    {
      path: '/self',
      name: 'self',
      meta: {
        title: '关于我们'
      },
      component: resolve => require(['../views/helpCenter/connect/self.vue'], resolve)
    },
    {
      path: '/culture',
      name: 'culture',
      meta: {
        title: '企业文化'
      },
      component: resolve => require(['../views/helpCenter/connect/culture.vue'], resolve)
    },
    {
      path: '/recruit',
      name: 'recruit',
      meta: {
        title: '招贤纳士'
      },
      component: resolve => require(['../views/helpCenter/connect/recruit.vue'], resolve)
    },
    {
      path: '/connectUs',
      name: 'connectUs',
      meta: {
        title: '联系我们'
      },
      component: resolve => require(['../views/helpCenter/connect/connectUs.vue'], resolve)
    },
    {
      path: '/information',
      name: 'information',
      meta: {
        title: '信息发布规则'
      },
      component: resolve => require(['../views/helpCenter/rule/Information.vue'], resolve)
    },
    {
      path: '/transaction',
      name: 'transaction',
      meta: {
        title: '交易管理规范'
      },
      component: resolve => require(['../views/helpCenter/rule/Transaction.vue'], resolve)
    },
    {
      path: '/registerlogin',
      name: 'registerlogin',
      meta: {
        title: '注册登录'
      },
      component: resolve => require(['../views/helpCenter/cai/registerlogin.vue'], resolve)
    },
    {
      path: '/requirements',
      name: 'requirements',
      meta: {
        title: '发布需求'
      },
      component: resolve => require(['../views/helpCenter/cai/requirements.vue'], resolve)
    },
    {
      path: '/approval',
      name: 'approval',
      meta: {
        title: '审批管理'
      },
      component: resolve => require(['../views/helpCenter/cai/approval.vue'], resolve)
    },
    {
      path: '/payment',
      name: 'payment',
      meta: {
        title: '支付结算'
      },
      component: resolve => require(['../views/helpCenter/cai/payment.vue'], resolve)
    },
    {
      path: '/registerloginG',
      name: 'registerloginG',
      meta: {
        title: '注册登录'
      },
      component: resolve => require(['../views/helpCenter/gong/registerloginG.vue'], resolve)
    },
    {
      path: '/online',
      name: 'online',
      meta: {
        title: '在线报价'
      },
      component: resolve => require(['../views/helpCenter/gong/online.vue'], resolve)
    },
    {
      path: '/paymentG',
      name: 'paymentG',
      meta: {
        title: '支付结算'
      },
      component: resolve => require(['../views/helpCenter/gong/paymentG.vue'], resolve)
    },
    {
      path: '/operationDown',
      name: 'operationDown',
      meta: {
        title: '操作手册下载'
      },
      component: resolve => require(['../views/helpCenter/operation/operationDown.vue'], resolve)
    },
    // 帮助中心完
    {
      path: '/homeView',
      name: 'homeView',
      meta: {
        title: '首页'
      },
      component: resolve => require(['../views/home/homeView.vue'], resolve),
      children: [{
        path: '/homePageView',
        name: 'homePageView',
        meta: {
          title: '首页',
          keywords: '首页1',
          description: '首页2'
        },
        component: resolve => require(['../views/home/homePageView.vue'], resolve)
      },
      {
        path: '/classificationView',
        name: 'classificationView',
        meta: {
          title: '分类'
        },
        component: resolve => require(['../views/home/classificationView.vue'], resolve)
      },
      {
        path: '/infoView',
        name: 'infoView',
        meta: {
          title: '个人信息'
        },
        component: resolve => require(['../views/home/infoView.vue'], resolve)
      },
      {
        path: '/message',
        name: 'message',
        meta: {
          title: '消息'
        },
        component: resolve => require(['../views/home/message.vue'], resolve)
      },
      {
        path: '/loginAfterIndex',
        name: 'loginAfterIndex',
        meta: {
          title: '登录后首页'
        },
        component: resolve => require(['../views/Personal/loginAfter/loginAfterIndex.vue'], resolve)
      }
      ]
    },
    {
      path: '/searchHistory',
      name: 'searchHistory',
      meta: {
        title: '历史搜索'
      },
      component: resolve => require(['../views/searchHistory/searchHistory.vue'], resolve)
    },
    {
      path: '/agreementView',
      name: 'agreementView',
      meta: {
        title: '用户协议'
      },
      component: resolve => require(['../views/loginView/agreementView.vue'], resolve)
    },
    {
      path: '/supplyView',
      name: 'supplyView',
      meta: {
        title: '供应大廳'
      },
      component: resolve => require(['../views/procurement/supplyView.vue'], resolve)
    },
    {
      path: '/fongetPassword',
      name: 'fongetPassword',
      meta: {
        title: '忘记密码'
      },
      component: resolve => require(['../views/loginView/fongetPassword.vue'], resolve)
    },
    {
      path: '/fongetPassword2',
      name: 'fongetPassword2',
      meta: {
        title: '忘记密码'
      },
      component: resolve => require(['../views/loginView/fongetPassword2.vue'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: '注册'
      },
      component: resolve => require(['../views/loginView/register.vue'], resolve)
    },
    {
      path: '/secondHandSellList',
      name: 'secondHandSellList',
      meta: {
        title: '二手'
      },
      component: resolve => require(['../views/secondhand/secondHandSellList.vue'], resolve)
    },
    {
      path: '/personnel',
      name: 'personnel',
      meta: {
        title: '人才'
      },
      component: resolve => require(['../views/personnel/personnel.vue'], resolve)
    },
    {
      path: '/financing',
      name: 'financing',
      meta: {
        title: '金融'
      },
      component: resolve => require(['../views/financing/financing.vue'], resolve)
    },
    {
      path: '/addressView',
      name: 'addressView',
      meta: {
        title: '地址选择'
      },
      component: resolve => require(['../views/home/addressView.vue'], resolve)
    },
    {
      path: '/projectmanagement',
      name: 'projectmanagement',
      meta: {
        title: '项目管理'
      },
      component: resolve => require(['../views/Personal/projectmanagement/projectmanagement.vue'], resolve)
    },
    {
      path: '/editBaseInfo',
      name: 'editBaseInfo',
      meta: {
        title: '编辑基本信息',
        titles: '新增基本信息'
      },
      component: resolve => require(['../views/Personal/projectmanagement/editBaseInfo.vue'], resolve)
    },
    {
      path: '/newAddProject',
      name: 'newAddProject',
      meta: {
        title: '添加项目',
        titles: '新增基本信息'
      },
      component: resolve => require(['../views/Personal/projectmanagement/newAddProject.vue'], resolve)
    },
    {
      path: '/editPersonInCharge',
      name: 'editPersonInCharge',
      meta: {
        title: '编辑项目负责人信息',
        titles: '新增项目负责人信息'
      },
      component: resolve => require(['../views/Personal/projectmanagement/editPersonInCharge.vue'], resolve)
    },
    {
      path: '/editingproject',
      name: 'editingproject',
      meta: {
        title: '编辑项目'
      },
      component: resolve => require(['../views/Personal/projectmanagement/editingproject.vue'], resolve)
    },
    {
      path: '/addPersonInCharge',
      name: 'addPersonInCharge',
      meta: {
        title: '添加项目负责人信息'
      },
      component: resolve => require(['../views/Personal/projectmanagement/addPersonInCharge.vue'], resolve)
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      meta: {
        title: '个人中心'
      },
      component: resolve => require(['../views/Personal/personalCenter.vue'], resolve)
    },
    {
      path: '/baseInfo',
      name: 'baseInfo',
      meta: {
        title: '基本信息'
      },
      component: resolve => require(['../views/Personal/loginAfter/baseInfo.vue'], resolve)
    },
    {
      path: '/modifyBaseInfo',
      name: 'modifyBaseInfo',
      meta: {
        title: '修改基本信息'
      },
      component: resolve => require(['../views/Personal/loginAfter/modifyBaseInfo.vue'], resolve)
    },
    {
      path: '/seeInfo',
      name: 'seeInfo',
      meta: {
        title: '员工管理'
      },
      component: resolve => require(['../views/Personal/employeeadmin/seeinfo.vue'], resolve)
    },
    {
      path: '/seeInfoDetail',
      name: 'seeInfoDetail',
      meta: {
        title: '员工详情'
      },
      component: resolve => require(['../views/Personal/employeeadmin/seeInfoDetail.vue'], resolve)
    },
    {
      path: '/modifyInfo',
      name: 'modifyInfo',
      meta: {
        title: '修改员工信息'
      },
      component: resolve => require(['../views/Personal/employeeadmin/modifyInfo.vue'], resolve)
    }
  ]
})
