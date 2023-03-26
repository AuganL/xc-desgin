# 趋势标记
<p>表示上升或者下降趋势，支持多种自定义</p>

 ## 基本用法 

  <div>
  <el-card>
    <el-divider>正常趋势</el-divider>
    <div class="flex">
      <div>
        <xc-trend text="营业额"></xc-trend>
      </div>
      <div>
        <xc-trend text="销售额" type="down"></xc-trend>
      </div>
    </div>
    <br />
    <el-divider>颜色翻转</el-divider>
    <div class="flex">
      <div><xc-trend text="销售额" reverseColor></xc-trend></div>
      <div><xc-trend text="营业额" type="down" reverseColor></xc-trend></div>
    </div>
    <br />
    <el-divider>自定义图标颜色</el-divider>
    <div class="flex">
      <div>
        <xc-trend text="营业额" upIconColor="blue"></xc-trend>
      </div>
      <div>
        <xc-trend text="销售额" type="down" downIconColor="#123456"></xc-trend>
      </div>
    </div>
    <br />
    <el-divider>自定义文字颜色</el-divider>
    <div class="flex">
      <div><xc-trend text="营业额" upTextColor="blue"></xc-trend></div>
      <div><xc-trend text="销售额" type="down" downTextColor="yellow"></xc-trend></div>
    </div>
    <br />
    <el-divider>自定义图标</el-divider>
    <div class="flex">
      <div><xc-trend upIcon="CaretTop">营业额</xc-trend></div>
      <div><xc-trend type="down" downIcon="CaretBottom">销售额</xc-trend></div>
    </div>
  </el-card>

  </div>

<style scoped>
.flex {
  display: flex;
}
.flex div {
    margin-right: 10px;
  }
</style>


### 代码示例

<details>
<summary>展开查看</summary>

  ``` html

   <div>
  <el-card>
    <el-divider>正常趋势</el-divider>
    <div class="flex">
      <div>
        <xc-trend text="营业额"></xc-trend>
      </div>
      <div>
        <xc-trend text="销售额" type="down"></xc-trend>
      </div>
    </div>
    <br />
    <el-divider>颜色翻转</el-divider>
    <div class="flex">
      <div><xc-trend text="销售额" reverseColor></xc-trend></div>
      <div><xc-trend text="营业额" type="down" reverseColor></xc-trend></div>
    </div>
    <br />
    <el-divider>自定义图标颜色</el-divider>
    <div class="flex">
      <div>
        <xc-trend text="营业额" upIconColor="blue"></xc-trend>
      </div>
      <div>
        <xc-trend text="销售额" type="down" downIconColor="#123456"></xc-trend>
      </div>
    </div>
    <br />
    <el-divider>自定义文字颜色</el-divider>
    <div class="flex">
      <div><xc-trend text="营业额" upTextColor="blue"></xc-trend></div>
      <div><xc-trend text="销售额" type="down" downTextColor="yellow"></xc-trend></div>
    </div>
    <br />
    <el-divider>自定义图标</el-divider>
    <div class="flex">
      <div><xc-trend upIcon="CaretTop">营业额</xc-trend></div>
      <div><xc-trend type="down" downIcon="CaretBottom">销售额</xc-trend></div>
    </div>
  </el-card>

  </div>

  ```
  <br/>

</details>

## API

### props

| 属性 | 说明 | 类型 | 可选择 | 默认值 |
| :-------------  | :-------------  | :------------- | :-------------  | :------------- |
| type |上升趋势或者下降趋势 | up / down | up / down | up |
| upIcon |上升趋势显示的图标 | string |  | ArrowUp |
| downIcon |下降趋势显示的图标 | String |  | ArrowDown |
| text |趋势显示的文字 | String | | 文字 |
| reverseColor |颜色翻转只在默认的颜色下生效 如果使用了自定义颜色 这个属性就不生效了 | Boolean | | false |
| upIconColor |上升趋势图标颜色 | String | | '#f5222d' |
| downIconColor |下降趋势的图标颜色 | String | | '#52c41a' |
| upTextColor |上升趋势文字颜色 | String | |  |
| downTextColor |下降趋势的文字颜色 | String | |  |

### slost插槽
| 属性 | 说明 |
| :-------------  | :-------------  |
| defaull |趋势显示的文字 |



