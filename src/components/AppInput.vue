<script setup>
import { computed } from "vue"

const props = defineProps({
    modelValue: {
        type: String,
        default: ""
    },
    modelModifiers: {
        default: () => ({})
    }
})
const emit = defineEmits({
    ["update:modelValue"] : null
})

const value = computed({
    get() {
        return props.modelValue
    },
    set(newValue) {
        emit("update:modelValue", newValue)
    }
})

console.log(props.modelModifiers)
</script>

<template>
    <div>
        <h1>App Input component</h1>

        <input
            v-model="value"
            placeholder="Input text"
        />
    </div>
</template>