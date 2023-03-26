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
        <a-button type="primary" style="margin-left: 10px"  @click="comModalVisible = !comModalVisible">显示组件</a-button>
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
        {{ record.optional == '1' ? '是' : '必填'  }}
      </template>
      <template v-if="column.key === 'value'">
        {{ record.value ? record.value : '-'  }}
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
import com from "./com.vue";

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
          fixed: 'left',
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
  },
};
</script>
