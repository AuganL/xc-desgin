<!--
 * @Author: croy 
 * @Date: 2023-03-20 11:10:26
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-22 01:28:56
 * @FilePath: /croyxi-ui-vite-ts/src/views/menu/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div style="display: flex;">
    <div style="flex:1;">
      <xc-menu :data="data1" defaultActive="1" name="a" index="b" icon="c" children="d"></xc-menu>
    </div>
    <div style="flex:1;">
      <xc-infinite-menu :data="data2" defaultActive="2" name="a" index="b" icon="c" children="d"></xc-infinite-menu>
    </div>
  </div>
</template>

<script lang='ts' setup>

let data1 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
      }
    ]
  }
]
let data2 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
        d: [
          {
            a: '导航3-1-1',
            b: '3-1-1',
            c: 'Document',
            d: [
              {
                a: '导航3-1-1-1',
                b: '3-1-1-1',
                c: 'Document',
                d: [
                  {
                    a: '导航3-1-1-1-1',
                    b: '3-1-1-1-1',
                    c: 'Document',
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
</script>

<style lang='scss' scoped>
</style>