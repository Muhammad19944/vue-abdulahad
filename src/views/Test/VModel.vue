<script setup>
import { ref } from "vue"
import AppInput from '../../components/AppInput.vue'
import AppButton from "../../components/AppButton.vue"

const inputModel = ref(null)

function clickButton() {
    console.log("click")
}
</script>

<template>
    <div>
        <h1>Component VModel</h1>

        <app-input v-model.testModifiers="inputModel" />

        {{ inputModel }}

        <hr>

        <app-button @click="clickButton" />
    </div>
</template>