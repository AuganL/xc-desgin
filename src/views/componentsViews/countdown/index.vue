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
        <a-button
          type="primary"
          style="margin-left: 10px"
          @click="comModalVisible = !comModalVisible"
          >显示组件</a-button
        >
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
    <a-modal v-model:visible="addModalVisible" :title="modalTitle" @ok="editHandleOk">
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
import com from "./com.vue";
import {
  countdown,
  countdownUpdate,
  countdownDelete,
  countdownInsert,
} from "../../../api/index";
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
      modalTitle: "",
      // 控制新增弹窗
      addModalVisible: false,
      modalType: "",
      // 查询
      value: "",
      dataSource: [],
      // dataSource: [
      //   {
      //     id: "1",
      //     name: "time",
      //     dataType: "number",
      //     defaultVal: "0（毫秒）",
      //     type: "props",
      //     description: "倒计时时长（毫秒）",
      //     optional: true ? "是" : "否",
      //     value: "-",
      //   },
      //   {
      //     id: "2",
      //     name: "separator",
      //     dataType: "String",
      //     defaultVal: "colon",
      //     type: "props",
      //     description: "separator",
      //     optional: true ? "是" : "否",
      //     value: "-",
      //   },
      //   {
      //     id: "3",
      //     name: "separatorSize",
      //     dataType: "String || Number",
      //     defaultVal: "16",
      //     type: "props",
      //     description: "字体大小",
      //     optional: true ? "是" : "否",
      //     value: "-",
      //   },
      //   {
      //     id: "4",
      //     name: "separatorColor",
      //     dataType: "String",
      //     defaultVal: "#000",
      //     type: "props",
      //     description: "字体颜色",
      //     optional: true ? "是" : "否",
      //     value: "-",
      //   },
      //   {
      //     id: "5",
      //     name: "gutter",
      //     dataType: "String || number",
      //     defaultVal: 0,
      //     type: "props",
      //     description: "gutter",
      //     optional: true ? "是" : "否",
      //     value: "-",
      //   },
      //   {
      //     id: "6",
      //     name: "showDays",
      //     dataType: "Boolean",
      //     defaultVal: "false",
      //     type: "props",
      //     description: "是否展示天数",
      //     optional: true ? "是" : "否",
      //     value: "-",
      //   },
      //   {
      //     id: "7",
      //     name: "showHours",
      //     dataType: "Boolean",
      //     defaultVal: "true",
      //     type: "props",
      //     description: "是否显示小时",
      //     optional: true ? "是" : "否",
      //     value: "-",
      //   },
      //   {
      //     id: "8",
      //     name: "showMinutes",
      //     dataType: "Boolean",
      //     defaultVal: "true",
      //     type: "props",
      //     description: "是否显示分钟",
      //     optional: true ? "是" : "否",
      //     value: "-",
      //   },
      //   {
      //     id: "9",
      //     name: "showSeconds",
      //     dataType: "Boolean",
      //     defaultVal: "true",
      //     type: "props",
      //     description: "是否显示秒数",
      //     optional: true ? "是" : "否",
      //     value: "-",
      //   },
      //   {
      //     id: "10",
      //     name: "start",
      //     dataType: "Boolean",
      //     defaultVal: "true",
      //     type: "props",
      //     description: "是否自动开始",
      //     optional: true ? "是" : "否",
      //     value: "-",
      //   },
      //   {
      //     id: "11",
      //     name: "end",
      //     dataType: "Function",
      //     defaultVal: "-",
      //     type: "emit事件",
      //     description: "倒计时结束时触发",
      //     optional: true ? "是" : "否",
      //     value: "-",
      //   },
      //   {
      //     id: "12",
      //     name: "change",
      //     dataType: "Function",
      //     defaultVal: "-",
      //     type: "emit事件",
      //     description: "倒计时时长改变触发,向父组件传出剩余时长val",
      //     optional: true ? "是" : "否",
      //     value: "val 剩余时长",
      //   },
      // ],

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
      let res = await countdown();
      this.dataSource = res.data.data;
    },
    // 编辑 新增
    async edit(type, row) {
      this.modalType = type;
      if (type == "edit") {
        this.modalTitle = "编辑";
        this.modalType = type;
        this.addModalVisible = !this.addModalVisible;
        let data = JSON.parse(JSON.stringify(row));
        data.optional = data.optional == "1" ? true : false;
        this.addFrom = data;
      } else {
        (this.modalTitle = "新增"), (this.addModalVisible = true);
        this.addFrom = row;
      }
    },
    // 删除
    // 删除
    async del(row) {
      let params = {
        data: row,
      };
      let res = await countdownDelete(params);
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
        let res = await countdownUpdate(params);
        console.log(res);
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
          let result = await countdownInsert(params);
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
