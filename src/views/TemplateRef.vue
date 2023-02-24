<template>
    <div>
        <h1>Template Ref</h1>

        <input
            ref="inputRef"
            type="text"
            placeholder="Text"
        />

        <my-button ref="buttonRef" />

        <button @click="buttonRef.clickButton()">Click</button>
    </div>
</template>

<script setup>
import { ref, unref, onMounted, nextTick } from 'vue'
import MyButton from '../components/MyButton.vue'

const inputRef = ref(null)
const buttonRef = ref(null)

nextTick(() => {
    inputRef.value.focus()

    let buttonUnRef = unref(buttonRef)

    buttonUnRef.clickButton()
})
</script>