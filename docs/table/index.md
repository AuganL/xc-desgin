# 表格

<p>
配置表格与配置化表单类似，同样是将一个表格所能具备的功能以及交互进行集中配置，通过外部传人的optional作为配置设定去渲染对应的表格功能。这样就将表格内部功能的多样性全部集中管理并渲染创建。
同时表格如何了分页组件以及相关的行编辑等功能。
</p>

<br/>

<div>
  <xc-table
    :options="options"
    :data="tableData"
    elementLoadingText="加载中..."
    elementLoadingBackground="rgba(0,0,0,.8)"
    :element-loading-svg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    isEditRow
    pagination
    stripe
    :total="total"
    :currentPage="current"
    :pageSize="pageSize"
    v-model:editRowIndex="editRowIndex"
    @confirm="confirm"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
    <template #date="{ scope }">
      <el-icon-timer></el-icon-timer>
      <span style="margin-left: 10px">{{ scope.row.date }}</span>
    </template>
    <template #name="{ scope }">
      <el-popover effect="light" trigger="hover" placement="top">
        <template #default>
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
        </template>
        <template #reference>
          <div class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-popover>
    </template>
    <template #editRow="scope">
      <el-button size="small" type="primary" @click="sure(scope.scope)">确认</el-button>
      <el-button size="small" type="danger">取消</el-button>
    </template>
    <template #action="scope">
      <el-button size="small" type="primary" @click="edit(scope.scope)">编辑</el-button>
      <el-button size="small" type="danger">删除</el-button>
    </template>
  </xc-table>
</div>

<script  setup>
import { ref, onMounted } from "vue";

let options = [
  {
    prop: "date",
    label: "日期",
    width: '180',
    align: "center",
    slot: "date",
    editable: true,
  },
  {
    prop: "name",
    label: "姓名",
    width: '180',
    align: "center",
    slot: "name",
  },
  {
    prop: "address",
    label: "地址",
    align: "center",
    editable: true,
  },
  {
    label: "操作",
    action: true,
    align: "center",
  },
];
let tableData = ref([]);
let editRowIndex = ref("");
let svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;
setTimeout(() => {
tableData.value = [
  {
    date: '2016-05-03',
    name: 'Tom1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom2',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom3',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom4',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
}, 3000)

let current = ref(1);
let pageSize = ref(10);
let total = ref(0);
let getData = () => {
  
};
let handleSizeChange = (val) => {
  pageSize.value = val;
  getData();
};
let handleCurrentChange = (val) => {
  current.value = val;
  getData();
};
onMounted(() => {
  getData();
});

let edit = (scope) => {
  // console.log(scope)
  editRowIndex.value = "edit";
};
let sure = (scope) => {
  console.log(scope);
};
let confirm = (scope) => {
  // console.log(scope)
};
</script>

<style scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>


### 代码示例

<details>
<summary>展开查看</summary>

  ``` html

  <div>
  <xc-table
    :options="options"
    :data="tableData"
    elementLoadingText="加载中..."
    elementLoadingBackground="rgba(0,0,0,.8)"
    :element-loading-svg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    isEditRow
    pagination
    stripe
    :total="total"
    :currentPage="current"
    :pageSize="pageSize"
    v-model:editRowIndex="editRowIndex"
    @confirm="confirm"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
    <template #date="{ scope }">
      <el-icon-timer></el-icon-timer>
      <span style="margin-left: 10px">{{ scope.row.date }}</span>
    </template>
    <template #name="{ scope }">
      <el-popover effect="light" trigger="hover" placement="top">
        <template #default>
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
        </template>
        <template #reference>
          <div class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-popover>
    </template>
    <template #editRow="scope">
      <el-button size="small" type="primary" @click="sure(scope.scope)">确认</el-button>
      <el-button size="small" type="danger">取消</el-button>
    </template>
    <template #action="scope">
      <el-button size="small" type="primary" @click="edit(scope.scope)">编辑</el-button>
      <el-button size="small" type="danger">删除</el-button>
    </template>
  </xc-table>
</div>


  ```

  ``` js 

    <script  setup>
import { ref, onMounted } from "vue";

let options = [
  {
    prop: "date",
    label: "日期",
    width: '180',
    align: "center",
    slot: "date",
    editable: true,
  },
  {
    prop: "name",
    label: "姓名",
    width: '180',
    align: "center",
    slot: "name",
  },
  {
    prop: "address",
    label: "地址",
    align: "center",
    editable: true,
  },
  {
    label: "操作",
    action: true,
    align: "center",
  },
];
let tableData = ref([]);
let editRowIndex = ref("");
let svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;
setTimeout(() => {
tableData.value = [
  {
    date: '2016-05-03',
    name: 'Tom1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom2',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom3',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom4',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
}, 3000)

let current = ref(1);
let pageSize = ref(10);
let total = ref(0);
let getData = () => {
  
};
let handleSizeChange = (val) => {
  pageSize.value = val;
  getData();
};
let handleCurrentChange = (val) => {
  current.value = val;
  getData();
};
onMounted(() => {
  getData();
});

let edit = (scope) => {
  // console.log(scope)
  editRowIndex.value = "edit";
};
let sure = (scope) => {
  console.log(scope);
};
let confirm = (scope) => {
  // console.log(scope)
};
</script>

  ```
  <br/>

  ``` css


<style scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>

  ```

</details>
