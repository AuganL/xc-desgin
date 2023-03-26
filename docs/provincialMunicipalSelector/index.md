# 省市区选择器
<p>通过对select选择器的封装，将全国的省市区层级数据封装在`xc-choose-area`组件内部，实现三级联动的省市区选择器 </p>

 ## 基本用法 
  <el-card>
    <xc-choose-area></xc-choose-area>
  </el-card>

  ### 代码示例
<details>
<summary>展开查看</summary>

  ``` html

    <xc-choose-area @change="change"></xc-choose-area>

  ```
  <br/>

  ``` js

    <script lang="ts" setup>
      const change = (e:any) =>{
        console.log(e);
      }
    </script>

  ```
</details>

## API

| 事件名 | 说明 | 参数 |
| :------------- | :-------------  | :------------- |
| change | 选择了三级省市区后触发 | val:AreaInfo, 省市区数据 |

### AreaInfo

| key | 说明 | 参数 |
| :-------------  | :-------------  | :------------- |
| province |省份数据 | val:Value |
| city |城市数据 | val:Value |
| area |区域数据 | val:Value |

