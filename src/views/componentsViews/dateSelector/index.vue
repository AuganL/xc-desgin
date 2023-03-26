<template>
  <div>
    <a-row style="padding-top: 10px; padding-bottom: 10px" justify="end">
      <a-col :span="8">
        <a-input-search
          v-model:value="value"
          placeholder="请输入属性值"
          enter-button
          @search="onSearch"
      /></a-col>
      <a-col :span="8">
        <a-button type="primary" style="margin-left: 10px" @click="edit('add', {})"
          >新增</a-button
        >
        <a-button type="primary" style="margin-left: 10px"           @click="comModalVisible = !comModalVisible"> 显示组件</a-button>
      </a-col>
      <a-col :span="8"></a-col>
      <!-- <a-col :span="6"></a-col> -->
    </a-row>
    <a-table
      sticky
      :dataSource="dataSource"
      :columns="columns"
      :scroll="{ x: 1300, y: 1000 }"
    >
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.key === 'optional'">
          {{ record.optional == "1" ? "是" : "必填" }}
        </template>
        <template v-if="column.key === 'value'">
          {{ record.value ? record.value : "-" }}
        </template>
        <template v-if="column.key === 'operation'">
          <a-button
            type="primary"
            style="margin-left: 10px"
            @click="edit('edit', record)"
          >
            <template #icon>
              <SearchOutlined />
            </template>
            编辑</a-button
          >
          <a-button type="dashed" danger style="margin-left: 10px" @click="del(record)"
            >删除</a-button
          >
        </template>
      </template>
    </a-table>
    <a-modal v-model:visible="addModalVisible" title="新增组件配置" @ok="editHandleOk">
      <a-form :model="addFrom" label="vertical">
        <a-form-item label="属性名">
          <a-input v-model:value="addFrom.name" />
        </a-form-item>
        <a-form-item label="属性类型">
          <a-input v-model:value="addFrom.dataType" />
        </a-form-item>
        <a-form-item label="属性描述">
          <a-textarea v-model:value="addFrom.description" />
        </a-form-item>
        <a-form-item label="是否可选">
          <a-switch v-model:checked="addFrom.optional" />
        </a-form-item>
        <a-form-item label="类别">
          <a-radio-group v-model:value="addFrom.type">
            <a-radio value="props">props属性</a-radio>
            <a-radio value="emit">emits事件</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="默认值">
          <a-input v-model:value="addFrom.defaultVal" />
        </a-form-item>
        <a-form-item label="参数">
          <a-input v-model:value="addFrom.value" />
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal v-model:visible="comModalVisible" title="组件显示">
      <com />
    </a-modal>
  </div>
</template>

<script>
import com from './com.vue'
import { dataSource, dataSourceUpdate, dataSourceInsert } from "../../../api/index";
export default {
  name: "provincialMunicipalSelector",
  components: {
    com,
  },
  data() {
    return {
      comModalVisible: false,
      // add modal
      addFrom: {},
      // 控制新增弹窗
      addModalVisible: false,
      modalType: "",
      value: "",
      dataSource: [
        {
          name: "startPlaceholder",
          dataType: "String",
          defaultVal: "请选择开始时间",
          type: "props",
          description: "开始时间的占位符",
          optional: true ? "是" : "否",
          value: "",
        },
        {
          name: "startChange",
          dataType: "Function",
          defaultVal: "",
          type: "click-emit",
          description: "开始时间变化时触发",
          optional: true ? "是" : "否",
          value: "val:string(开始时间)",
        },
      ],

      columns: [
        {
          width: 200,
          fixed: "left",
          title: "属性名",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "属性类型",
          dataIndex: "dataType",
          key: "dataType",
        },
        {
          title: "默认值",
          dataIndex: "defaultVal",
          key: "defaultVal",
        },
        {
          title: "类别",
          dataIndex: "type",
          key: "dataType",
        },
        {
          title: "属性描述",
          dataIndex: "description",
          key: "description",
        },
        {
          title: "是否可选",
          dataIndex: "optional",
          key: "optional",
        },
        {
          title: "参数",
          dataIndex: "value",
          key: "value",
        },
        {
          title: "Action",
          key: "operation",
          fixed: "right",
          width: 200,
        },
      ],
    };
  },
  methods: {
    onSearch() {},
    async getTableData() {
      this.dataSource = [];
      let res = await dataSource();
      this.dataSource = res.data.data;
    },
    // 编辑 新增
    async edit(type, row) {
      this.modalType = type;
      if (type == "edit") {
        this.modalType = type;
        this.addModalVisible = !this.addModalVisible;
        let data = JSON.parse(JSON.stringify(row));
        data.optional = data.optional == "1" ? true : false;
        this.addFrom = data;
      } else {
        this.addModalVisible = true;
        this.addFrom = row;
        console.log(11);
      }
    },
    // 删除
    async del(row) {
      let params = {
        data: row,
      };
      let res = await calendarDelete(params);
      this.getTableData();
      this.addModalVisible = false;
      res.data.code == "200"
        ? this.$message.success(res.data.message)
        : this.$message.error(res.data.message);
    },
    // 提交编辑
    async editHandleOk() {
      if (this.modalType == "edit") {
        let data = JSON.parse(JSON.stringify(this.addFrom));
        data.optional = data.optional ? "1" : "0";
        let params = {
          ...data,
        };
        let res = await dataSourceUpdate(params);
        // let res = await axios.post("", params);
        // console.log(res);
        this.getTableData();
        this.addModalVisible = false;
        res.data.code == "200"
          ? this.$message.success(res.data.message)
          : this.$message.error(res.data.message);
      } else if (this.modalType == "add") {
        if (this.addFrom) {
          let params = JSON.parse(JSON.stringify(this.addFrom));
          params.optional = params.optional ? "1" : "0";
          console.log(params);
          let result = await dataSourceInsert(params);
          this.addFrom = {};
          this.getTableData();
          res.data.code == "200"
            ? this.$message.success(res.data.message)
            : this.$message.error(res.data.message);

          this.addModalVisible = false;
        } else {
          //
        }
      }
    },
    onSubmit() {
      console.log("submit!", toRaw(addFrom));
    },
  },
  mounted() {
    this.getTableData();
  },
};
</script>
