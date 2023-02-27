<script setup>
import { reactive, ref, watch, watchEffect } from "vue"

// const counter = ref(0)
// const counter2 = ref(1)
// const state = reactive({
//     counter: 0,
//     list: {
//         name: "John",
//         name2: "John",
//         name3: {
//             fullName: "sssss"
//         },
//     }
// })


// function counterClick() {
//     // state.counter++
//     state.list.name3.fullName = "aaaaa"
//     // state.counter++
//     // counter.value++
//     // counter2.value = counter2.value + 3
// }

// Single ref
// watch(() => state.list.name3.fullName, (newVal) => {
//     console.log(newVal)
// }, { immediate: true })

// Getter
// watch(
//     () => counter.value,
//     (newValue) => {
//         console.log("newValue", newValue)
//     }
// )

// Array
// watch([counter, counter2], ([newCounter, newCounter2], [oldCounter, oldCounter2]) => {
//     console.log("newCounter", newCounter)
//     console.log("newCounter2", newCounter2)
//     console.log("oldCounter", oldCounter)
//     console.log("oldCounter2", oldCounter2)
// })


// WatchEffect
// watchEffect(() => {
//     console.log("Effect", state.list.name3.fullName)
// })

///////////////////////////// Misol //////////////////////
const pathSelect = ref("posts")
const pathList = ['posts', 'comments']
const data = ref([])

// watchEffect(async () => {
//     const response = await fetch(
//     `https://jsonplaceholder.typicode.com/${pathSelect.value}/`
//   )
//   data.value = await response.json()
// })

watch(pathSelect, async () => {
    const response = await fetch(
    `https://jsonplaceholder.typicode.com/${pathSelect.value}/`
  )
  data.value = await response.json()
}, { immediate: true })
</script>

<template>
    <div>
        <h1>Watch & WatchEffect</h1>
        <!-- <div>Counter - {{ state.counter }}</div>

        <button @click="counterClick">Click</button> -->

        <select v-model="pathSelect">
            <option v-for="item in pathList" :value="item">{{ item }}</option>
        </select>

        <pre>{{ pathSelect }}</pre>

        <template v-for="item in data">
            <div v-if="item.hasOwnProperty('title')">{{ item.title }}</div>
            <div v-else>{{ item.name }}</div>
        </template>
    </div>
</template>