<template>
  <a-layout has-sider>
    <a-layout-header
      class="a-layout-header"
      :style="{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#fff' }"
    >
      <div class="logo">
        <img src="../../assets/logo.JPG" alt="" style="width: 40px; height: 40px" />
        By ste.croy 💡 xc-desgin-ui admin
      </div>
    </a-layout-header>

    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-sider
        :style="{
          backgroundColor:'#fff',
          overflow: 'auto',
          height: '100vh',
          marginTop: '65px',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }"
      >
        <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline" dashed>
          <a-menu-item
            v-for="(item, index) in muneOptions"
            :key="index"
            @click="menuToRouterClick(item.path)"
          >
            <shop-outlined />
            <span class="nav-text">{{ item.text }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content
        class="a-layout-content"
        :style="{ marginTop: '65px', overflow: 'initial' , backgroundColor:'#fff',}"
      >
        <router-view style="padding: 10px"></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { backTopProps } from 'ant-design-vue/lib/back-top';

export default {
  name: "layout",
  data() {
    return {
      muneOptions: [
        {
          text: "指南", // 必要的
          path: "/intor", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
        },
        {
          text: "组件", // 必要的
          path: "/packages", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
        },
        {
          text: "快速开始",
          path: "/fastStart",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "Icon 图标",
          path: "/Icon",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "省市区选择器",
          path: "/provincialMunicipalSelector",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "趋势标记",
          path: "/trendMrker",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "倒计时",
          path: "/countdown",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "时间选择器",
          path: "/timeSelector",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "日期选择器",
          path: "/dateSelector",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "数据列表",
          path: "/list",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "旋转验证码",
          path: "/rotationVerification",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "滑块验证码",
          path: "/sliderVerification",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "通知菜单",
          path: "/notificationMenu",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "导航菜单",
          path: "/navigationMenu",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "城市选择器",
          path: "/citySelector",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "进度条",
          path: "/progressBar",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "日历组件",
          path: "/calendar",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "配置化表单",
          path: "/configuredForm",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "弹出框表单",
          path: "/popUpForm",
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          text: "表格",
          collapsable: false,
          path: "/table",
          sidebarDepth: 1,
        },
      ],
      selectedKeys: "",
    };
  },
  methods: {
    menuToRouterClick(path: string) {
      console.log(path);

      this.$router.push(path);
    },
  },
};
</script>
<style>
.logo {
  font-size: large;
}
.a-layout-content {
  height: calc(100vh - 65px);
}
</style>
