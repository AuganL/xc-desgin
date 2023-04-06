<template>
  <el-card>
    <div style="width: 800px">
      <div>基础用法</div>
      <br />
      <xc-data-list>
        <template #header>List header</template>
        <xc-data-list-item>Racing car sprays burning fuel into crowd.</xc-data-list-item>
        <xc-data-list-item>Japanese princess to wed commoner.</xc-data-list-item>
        <xc-data-list-item>Australian walks 100km after outback crash.</xc-data-list-item>
        <xc-data-list-item>Man charged over missing wedding girl.</xc-data-list-item>
        <xc-data-list-item>Los Angeles battles huge wildfires.</xc-data-list-item>
        <template #footer>List footer</template>
      </xc-data-list>

      <br />
      <br />
      <div>自定义内容</div>
      <br />
      <xc-data-list>
        <template #header>List header</template>
        <xc-data-list-item>
          <xc-data-list-item-meta
            avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            title="xc-element-component title1"
            description="xc-element-component description1"
          ></xc-data-list-item-meta>
        </xc-data-list-item>
        <xc-data-list-item>
          <xc-data-list-item-meta
            avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            title="xc-element-component title2"
            description="xc-element-component description2"
          ></xc-data-list-item-meta>
        </xc-data-list-item>
        <xc-data-list-item>
          <xc-data-list-item-meta
            avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            title="xc-element-component title3"
            description="xc-element-component description3"
          ></xc-data-list-item-meta>
        </xc-data-list-item>
        <xc-data-list-item>
          <xc-data-list-item-meta
            avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            title="xc-element-component title4"
            description="xc-element-component description4"
          ></xc-data-list-item-meta>
        </xc-data-list-item>
        <xc-data-list-item>
          <xc-data-list-item-meta
            avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            title="xc-element-component title5"
            description="xc-element-component description5"
          ></xc-data-list-item-meta>
        </xc-data-list-item>
        <template #footer>List footer</template>
      </xc-data-list>
      <br />
      <br />
      <div>滚动触底</div>
      <br />
      <xc-data-list maxHeight="200" @reach-bottom="reachBottom">
        <template #header>List header</template>
        <xc-data-list-item>Racing car sprays burning fuel into crowd.</xc-data-list-item>
        <xc-data-list-item>Japanese princess to wed commoner.</xc-data-list-item>
        <xc-data-list-item>Australian walks 100km after outback crash.</xc-data-list-item>
        <xc-data-list-item>Man charged over missing wedding girl.</xc-data-list-item>
        <xc-data-list-item>Los Angeles battles huge wildfires.</xc-data-list-item>
        <template #footer>List footer</template>
      </xc-data-list>
      <br />
      <br />
      <div>栅格布局</div>
      <br />
      <xc-data-list grid :border="false">
        <xc-data-list-item>
          <xc-data-list>
            <template #header>Platform</template>
            <xc-data-list-item>iOS</xc-data-list-item>
            <xc-data-list-item>iOS</xc-data-list-item>
            <xc-data-list-item>iOS</xc-data-list-item>
          </xc-data-list>
        </xc-data-list-item>
        <xc-data-list-item>
          <xc-data-list>
            <template #header>Platform</template>
            <xc-data-list-item>iOS</xc-data-list-item>
            <xc-data-list-item>iOS</xc-data-list-item>
            <xc-data-list-item>iOS</xc-data-list-item>
          </xc-data-list>
        </xc-data-list-item>
        <xc-data-list-item>
          <xc-data-list>
            <template #header>Platform</template>
            <xc-data-list-item>iOS</xc-data-list-item>
            <xc-data-list-item>iOS</xc-data-list-item>
            <xc-data-list-item>iOS</xc-data-list-item>
          </xc-data-list>
        </xc-data-list-item>
        <xc-data-list-item>
          <xc-data-list>
            <template #header>Platform</template>
            <xc-data-list-item>iOS</xc-data-list-item>
            <xc-data-list-item>iOS</xc-data-list-item>
            <xc-data-list-item>iOS</xc-data-list-item>
          </xc-data-list>
        </xc-data-list-item>
      </xc-data-list>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
const reachBottom = () => {
  console.log('触底了')
}
</script>
  