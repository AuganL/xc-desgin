# 通知菜单


  <div>
    <xc-notification icon="RightBold" :value="50">
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
    <br />
    <br />
    <xc-notification :value="50" :max="30">
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
    <br />
    <br />
    <xc-notification :value="50" isDot>
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
    <br />
    <br />
    <xc-notification :value="50">
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
  </div>

<script  setup>

import { list, actions } from './data.js'

let clickItem = (val) => {
  console.log(val)
}
let clickAction = (val) => {
  console.log(val)
}
</script>
