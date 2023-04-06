# ConfiguredForm 配置化表单
<br/>
<p>通过对多种类型的表单组件进行集中封装配置，以及富文本编辑器的引入配置使用。实现通过一个option的配置化数据结构，在组件内部利用数据驱动的思想对表单进行动态化生成。</p>
<p>当 xc-forrm 元素中注入 option 对象数组后，组件内部通过对 option 对象数组的遍历，识别数组每一项元素的表单节点类型，判断是普通表单项还是上传组件或者说富文本编辑器从而动态的渲染整个配置化表单。</p>

## 基础用法
<br>

  <div>
    <xc-form
      ref="form"
      label-width="100px"
      :options="options"
      @on-change="handleChange"
      @before-upload="handleBeforeUpload"
      @on-preview="handlePreview"
      @on-remove="handleRemove"
      @before-remove="beforeRemove"
      @on-success="handleSuccess"
      @on-exceed="handleExceed"
    >
      <template #uploadArea>
        <el-button size="small" type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc;font-size: 12px;">jpg/png files with a size less than 500kb</div>
      </template>
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </template>
    </xc-form>
  </div>

<script  setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'

let options = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    placeholder: '请输入用户名',
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 6,
        message: '用户名在2-6位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      clearable: true
    }
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    placeholder: '请输入密码',
    rules: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur'
      },
      {
        min: 6,
        max: 15,
        message: '密码在6-15位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      showPassword: true,
      clearable: true
    }
  },
  {
    type: 'select',
    value: '',
    placeholder: '请选择职位',
    prop: 'role',
    label: '职位',
    attrs: {
      style: {
        width: '100%'
      },
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1'
      },
      {
        type: 'option',
        label: '主管',
        value: '2'
      },
      {
        type: 'option',
        label: '员工',
        value: '3'
      }
    ]
  },
  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',
    label: '爱好',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '1'
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '2'
      },
      {
        type: 'checkbox',
        label: '排球',
        value: '3'
      }
    ]
  },
  {
    type: 'radio-group',
    value: '',
    prop: 'gender',
    label: '性别',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: 'male'
      },
      {
        type: 'radio',
        label: '女',
        value: 'female'
      },
      {
        type: 'radio',
        label: '保密',
        value: 'not'
      }
    ]
  },
  {
    type: 'upload',
    label: '上传',
    prop: 'pic',
    uploadAttrs: {
      action: 'https://jsonplaceholder.typicode.com/posts/',
      multiple: true,
      limit: 3
    },
    rules: [
      {
        required: true,
        message: '图片不能为空',
        trigger: 'blur'
      }
    ],
  },
  {
    type: 'editor',
    value: '123',
    prop: 'desc',
    label: '描述',
    placeholder: '请输入描述',
    rules: [
      {
        required: true,
        message: '描述不能为空',
        trigger: 'blur'
      }
    ]
  }
]
let form = ref()

let submitForm = (scope) => {
  // 判空
  scope.form.validate((valid) => {
    if (valid) {
      console.log(scope.model)
      ElMessage.success('提交成功')
    } else {
      ElMessage.error('表单填写有误,请检查')
    }
  })
}
// 重置表单
let resetForm = () => {
  form.value.resetFields()
}

// 获取表单数据
let getFormData = () =>{
  return form.value.getFormData()
}

let handleRemove = (file, fileList) => {
  console.log('handleRemove')
  console.log(file, fileList)
}
let handlePreview = (file) => {
  console.log('handlePreview')
  console.log(file)
}
let beforeRemove = (val) => {
  console.log('beforeRemove')
  return ElMessageBox.confirm(`Cancel the transfert of ${val.file.name} ?`)
}
let handleExceed = (val) => {
  console.log('handleExceed', val)
  ElMessage.warning(
    `The limit is 3, you selected ${val.files.length
    } files this time, add up to ${val.files.length + val.fileList.length} totally`
  )
}
let handleSuccess = (val) => {
  console.log('success')
  console.log(val)
}
let handleChange = (val) => {
  console.log('change')
  console.log(val)
}
let handleBeforeUpload = (val) => {
  console.log('handleBeforeUpload')
  console.log(val)
}
</script>

## 代码示例
<details>
<summary>展开查看</summary>

``` html
  <div>
    <xc-form
      ref="form"
      label-width="100px"
      :options="options"
      @on-change="handleChange"
      @before-upload="handleBeforeUpload"
      @on-preview="handlePreview"
      @on-remove="handleRemove"
      @before-remove="beforeRemove"
      @on-success="handleSuccess"
      @on-exceed="handleExceed"
    >
      <template #uploadArea>
        <el-button size="small" type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc;font-size: 12px;">jpg/png files with a size less than 500kb</div>
      </template>
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </template>
    </xc-form>
  </div>
```
``` js
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'
let options = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    placeholder: '请输入用户名',
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 6,
        message: '用户名在2-6位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      clearable: true
    }
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    placeholder: '请输入密码',
    rules: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur'
      },
      {
        min: 6,
        max: 15,
        message: '密码在6-15位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      showPassword: true,
      clearable: true
    }
  },
  {
    type: 'select',
    value: '',
    placeholder: '请选择职位',
    prop: 'role',
    label: '职位',
    attrs: {
      style: {
        width: '100%'
      },
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1'
      },
      {
        type: 'option',
        label: '主管',
        value: '2'
      },
      {
        type: 'option',
        label: '员工',
        value: '3'
      }
    ]
  },
  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',
    label: '爱好',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '1'
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '2'
      },
      {
        type: 'checkbox',
        label: '排球',
        value: '3'
      }
    ]
  },
  {
    type: 'radio-group',
    value: '',
    prop: 'gender',
    label: '性别',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: 'male'
      },
      {
        type: 'radio',
        label: '女',
        value: 'female'
      },
      {
        type: 'radio',
        label: '保密',
        value: 'not'
      }
    ]
  },
  {
    type: 'upload',
    label: '上传',
    prop: 'pic',
    uploadAttrs: {
      action: 'https://jsonplaceholder.typicode.com/posts/',
      multiple: true,
      limit: 3
    },
    rules: [
      {
        required: true,
        message: '图片不能为空',
        trigger: 'blur'
      }
    ],
  },
  {
    type: 'editor',
    value: '123',
    prop: 'desc',
    label: '描述',
    placeholder: '请输入描述',
    rules: [
      {
        required: true,
        message: '描述不能为空',
        trigger: 'blur'
      }
    ]
  }
]
let form = ref()

let submitForm = (scope) => {
  // 判空
  scope.form.validate((valid) => {
    if (valid) {
      console.log(scope.model)
      ElMessage.success('提交成功')
    } else {
      ElMessage.error('表单填写有误,请检查')
    }
  })
}
// 重置表单
let resetForm = () => {
  form.value.resetFields()
}

// 获取表单数据
let getFormData = () =>{
  return form.value.getFormData()
}

let handleRemove = (file, fileList) => {
  console.log('handleRemove')
  console.log(file, fileList)
}
let handlePreview = (file) => {
  console.log('handlePreview')
  console.log(file)
}
let beforeRemove = (val) => {
  console.log('beforeRemove')
  return ElMessageBox.confirm(`Cancel the transfert of ${val.file.name} ?`)
}
let handleExceed = (val) => {
  console.log('handleExceed', val)
  ElMessage.warning(
    `The limit is 3, you selected ${val.files.length
    } files this time, add up to ${val.files.length + val.fileList.length} totally`
  )
}
let handleSuccess = (val) => {
  console.log('success')
  console.log(val)
}
let handleChange = (val) => {
  console.log('change')
  console.log(val)
}
let handleBeforeUpload = (val) => {
  console.log('handleBeforeUpload')
  console.log(val)
}
</script>

```

</details>



## 日历组件API

### props

| 属性 | 说明 | 类型 | 可选择 | 默认值 |
| :-------------  | :-------------  | :------------- | :-------------  | :---------- |
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 
| options	        |表单配置项 | Array as PropType<FormOptions[]>	 | 必填 | 必填属性 | 



### 事件


| 事件名 | 说明 | 参数 |
| :-------------  | :-------------  | :------------- |
| on-preview	  | 上传组件事件 | file |



