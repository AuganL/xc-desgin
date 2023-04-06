
# 数据列表

<p>
该组件实现了一个列表的骨架，列表通过插槽的形式可以让用户自定义列表的header以及footer两部分的内容。
</p>
<p>
通过具名插槽为header和footer的两个插槽内容渲染列表头部跟底部内容。
</p>
<p>
通过默认插槽的接收组件内列表项的内容，通过vue提供的component组件在内部遍历默认插槽的每一个子元素，从而在列表的主体渲染出相对应的列表项。
</p>
<p>
对于列表项，该组件下还未用户定制了xc-data-list-item基础列表项组件以及xc-data-list-item-meta带头像和描述的自定义列表项组件。

</p>

<div>
  <el-card>
    <div style="width: 600px">
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
</div>

<script  setup>

    const reachBottom = () => {
        console.log('触底了')
    }

</script>

### 代码示例

<details>
<summary>展开查看</summary>

  ``` html

   <div>
  <el-card>
    <div style="width: 600px">
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
</div>


  ```

  ``` js 

    <script  setup>

    const reachBottom = () => {
        console.log('触底了')
    }

    </script>

  ```
  <br/>

</details>




## 数据列表API

### props

| 属性 | 说明 | 类型 | 可选择 | 默认值 |
| :-------------  | :-------------  | :------------- | :-------------  | :---------- |
| list |列表的数据源| Array as PropType<ListOptions[]> | 必填 | null | 
| avatar	 | 头像（list对应泛型内ListItem内属性） | string | 可选 | - | 
| title |字体标题（list对应泛型内ListItem内属性）大小 | string | 可选 | -  | 
| desc |描述（list对应泛型内ListItem内属性） | string | 可选 | - | 
| time |时间(list对应泛型内ListItem内属性） | number 或 string | 可选 | - | 
| tag |标签内容（list对应泛型内ListItem内属性） | Boolean | 可选  | - |
| tagType |标签状态（list对应泛型内ListItem内属性） | String <success | info | warning | danger> |  可选| - |


### 事件
| 事件名 | 说明 | 参数 |
| :-------------  | :-------------  | :------------- |
| clickItem	 | 列表项被点击时触发的回调函数（返回数据对象） | object:<item,index> |
| chickAction |选项被点击的时候触发的回调函数（返回数据对象） | object:<item,index> |