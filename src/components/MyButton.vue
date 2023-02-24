<script setup>
import { ref } from "vue"

const name = ref("name")
const fullName = ref("Muhammad")
const count = ref(0)

function clickButton() {
    console.log("Button clicked")
    count.value++
}

defineExpose({
    name,
    fullName,
    clickButton
})
</script>

<template>
    <div>Button - {{ count }}</div>
</template>