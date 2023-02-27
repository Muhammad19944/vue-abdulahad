<!-- <script>
import { reactive } from 'vue'

export default {
  // `setup` is a special hook dedicated for composition API.
  setup() {
    const state = reactive({ count: 0 })

    function count() {
      state.count++
    }

    // expose the state to the template
    return {
      state,
      count
    }
  }
}
</script> -->

<!-- <script>
export default {
  data() {
    return {
      count: {
        user: {
          name: "",
          age: ""
        }
      },
      fullName: ""
    }
  }
}
</script> -->

<script setup>
import { reactive, ref, nextTick } from "vue"

// const obj = reactive({
//   nested: { count: 0 },
//   arr: ['foo', 'bar']
// })

// function mutateDeeply() {
//   // these will work as expected.
//   obj.nested.count++
//   obj.arr.push('baz')
// }

// const state = reactive({ count: 0 })

// let n = state.count
// let { count } = state

// function count2() {
//   count++
// }

const state = ref(0)
const buttonId = ref(null)
const myButtonRef = ref(null)

function count() {
  state.value++
}

// console.log(buttonId)
// console.log(myButtonRef)
</script>

<template>
  <RouterView />
  <!-- <div>TEST - {{ obj }}</div> -->
  <!-- <div>COUNT - {{ count }}</div> -->
  <!-- <button @click="mutateDeeply">Click</button> -->
  <!-- <div>count - {{ count }}</div> -->
  <!-- <button @click="count2">Click</button> -->
  <!-- <div>{{ state }}</div>
  <button @click="count" ref="buttonId">Count</button>
  <my-button ref="myButtonRef"></my-button> -->
</template>