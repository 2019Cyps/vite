import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", () => {
    // ref变量 → state 属性
    const count = ref('9999');
    // computed计算属性 → getters
    const double = computed(() => {
      return count.value * 2;
    });
    // function函数 → actions
    function increment() {
      count.value++;
    }
  
    return { count, double, increment };
});
  