<template>
    <div>
      <xc-notification icon="ChatRound" :value="50">
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
  </template>
  
  <script lang='ts' setup>
  
  import { list, actions } from './data'
  
  let clickItem = (val: any) => {
    console.log(val)
  }
  let clickAction = (val: any) => {
    console.log(val)
  }
  </script>
  