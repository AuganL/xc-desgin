<template>
  <div class="cc-count-down">
    <!-- 如果插槽存在，则渲染插槽内容 -->
    <slot v-if="defaultSlots" :timeData="timeData"></slot>

    <template v-else>
      <div v-if="showDays && day > 0">{{ dayValue }}</div>
      <div
        v-if="showDays && day > 0"
        :style="{
          fontSize: separatorSize + 'px',
          color: separatorColor,
          margin: `0 ${gutter}rpx`,
        }"
      >
        {{ separator === "colon" ? ":" : "天" }}
      </div>
      <div v-if="showHours">{{ hourValue }}</div>
      <div
        v-if="showHours"
        :style="{
          fontSize: separatorSize + 'px',
          color: separatorColor,
          margin: `0 ${gutter}rpx`,
        }"
      >
        {{ separator === "colon" ? ":" : "时" }}
      </div>
      <div v-if="showMinutes">{{ minuteValue }}</div>
      <div
        v-if="showMinutes"
        :style="{
          fontSize: separatorSize + 'px',
          color: separatorColor,
          margin: `0 ${gutter}rpx`,
        }"
      >
        {{ separator === "colon" ? ":" : "分" }}
      </div>
      <div v-if="showSeconds">{{ secondValue }}</div>
      <div
        v-if="showSeconds"
        :style="{
          fontSize: separatorSize + 'px',
          color: separatorColor,
          margin: `0 ${gutter}rpx`,
        }"
      >
        {{ separator === "colon" ? "" : "秒" }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  withDefaults,
  ref,
  useSlots,
  computed,
  onMounted,
  onUnmounted,
  watch,
} from "vue";

const props = withDefaults(
  defineProps<{
    time?: number;
    separator?: string;
    separatorSize?: number | string;
    separatorColor?: string;
    gutter?: number | string;
    showDays?: boolean;
    showHours?: boolean;
    showMinutes?: boolean;
    showSeconds?: boolean;
    start?: boolean;
  }>(),
  {
    time: 0, //时间
    separator: "colon",
    separatorSize: 16, // 字体大小
    separatorColor: "#000",
    gutter: 0,
    showDays: false, // 是否展示日期
    showHours: true, //是否显示小时
    showMinutes: true, // 是否显示时间
    showSeconds: true, // 是否显示秒杀
    start: true, // 是否开始
  }
);
const slots = useSlots(); // 创建插槽对象
const emits = defineEmits(["end", "change"]); // 分发emits事件
/* --------------------------------------------------------------响应式数据创建 -------------------------------------------------------------- */

/* 创建响应式数据：天 小时 分钟 秒 */
const day = ref<number>(0);
const hour = ref<number>(0);
const minute = ref<number>(0);
const second = ref<number>(0);
const timer = ref<any>(); // 用于记录  setInterval() 方法返回的ID值
const timeValue = ref<number>(0); // 记录倒计时时间
const timeData = ref<any>({}); // 记录倒计时的天数
// 用于记录插槽内容
const defaultSlots = ref();
/* -------------------------------------------------------------computed/watch数据监听-------------------------------------------------------------- */
const dayValue = computed(() => formatNum(day.value));
const hourValue = computed(() => formatNum(hour.value));
const minuteValue = computed(() => formatNum(minute.value));
const secondValue = computed(() => formatNum(second.value));
watch(
  () => timeValue.value,
  (val) => {
    timeData.value.days = dayValue.value;
    timeData.value.hours = hourValue.value;
    timeData.value.minutes = minuteValue.value;
    timeData.value.seconds = secondValue.value;
    emits("change", val);
    if (val === 0) emits("end");
  },
  { deep: true }
);
// 监听start属性，如果为true则执行countDown()
watch(
  () => props.start,
  (val) => {
    if (val) countDown();
  }
);
/* -------------------------------------------------------------function-------------------------------------------------------------- */
// 用于处理显示的时间格式  00:00:00
const formatNum = (num: number) => (num < 10 ? "0" + num : "" + num);

// 倒计时初始化
const init = () => {
  /* 
    根据props接收到的值，检查time是否大于1天 
  */
  if (props.time > 0 && props.time < 1000 * 60 * 60 * 24) {
    // 默认showDays: false, 所以直接给day对应的响应式数据初始化为0
    day.value = 0;
    // 感觉用户倒计时时长，计算出对应的 hour minute second
    hour.value = Math.floor((props.time / 3600 / 1000) % 24);
    minute.value = Math.floor((props.time / 60 / 1000) % 60);
    second.value = Math.floor((props.time / 1000) % 60);
  } else {
    /*     
  如果时间大于1天 
  */
    // 如果刚好是整数天
    if (props.time % (1000 * 60 * 60 * 24) === 0) {
      day.value = props.time / (1000 * 60 * 60 * 24);
      hour.value = 24 * day.value;
      minute.value = 0;
      second.value = 0;
    } else {
      day.value = Math.floor(props.time / (1000 * 60 * 60 * 24));
      hour.value = day.value * 24 + Math.floor((props.time / 3600 / 1000) % 24);
      minute.value = Math.floor((props.time / 60 / 1000) % 60);
      second.value = Math.floor((props.time / 1000) % 60);
    }
  }
  // 最后将倒计时各个时长元素存储在timeData里面
  timeData.value.days = dayValue.value;
  timeData.value.hours = hourValue.value;
  timeData.value.minutes = minuteValue.value;
  timeData.value.seconds = secondValue.value;
};

//倒计时开始
const countDown = () => {
  /* clearInterval() --> 用于取消 setInterval()函数设定的定时执行操作*/
  clearInterval(timer.value);
  /* setInterval是一个实现定时调用的函数，可按照指定的周期（以毫秒计）来调用函数或计算表达式。setInterval方法会不停地调用函数，直到 clearInterval被调用或窗口被关闭。 */
  timer.value = setInterval(() => {
    if (hour.value === 0) {
      if (minute.value !== 0 && second.value === 0) {
        second.value = 59;
        minute.value -= 1;
      } else if (minute.value === 0 && second.value === 0) {
        clearInterval(timer.value);
        timer.value = null;
      } else {
        second.value -= 1;
      }
    } else {
      if (minute.value !== 0 && second.value === 0) {
        second.value = 59;
        minute.value -= 1;
      } else if (minute.value === 0 && second.value === 0) {
        hour.value -= 1;
        minute.value = 59;
        second.value = 59;
      } else {
        second.value -= 1;
      }
    }
    timeValue.value =
      hour.value * 1000 * 3600 + minute.value * 1000 * 60 + second.value * 1000;
  }, 1000);
};


/* -------------------------------------------------------------生命钩子-------------------------------------------------------------- */

// 在该生命阶段对倒计时时长检查转换操作
onMounted(() => {
  /* 判断是否存在插槽 并将插槽内容赋给defaultSlosts响应式对象 */
  if (slots.default) {
    defaultSlots.value = slots.default
  }
  init();// 执行初始化操作
  if (props.start) countDown(); // 如果用户设置为自动开始，则执行countDown函数
});

// onUnmounted：组件注销之前执行 将定时关闭并将timer设置为null
onUnmounted(() => {
  clearInterval(timer.value);
  timer.value = null;
});

</script>

<style scoped lang="scss">
.cc-count-down {
  display: flex;
  align-items: center;
}
</style>
