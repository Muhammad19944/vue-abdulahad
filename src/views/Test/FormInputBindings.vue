<script setup>
import { ref, shallowRef } from 'vue'
import FormBasic from '../../components/FormBasic.vue'
import FormContact from '../../components/FormContact.vue'
import FormOrder from '../../components/FormOrder.vue'

const componentsList = ref([
    {
        title: "Form Basic",
        value: "formBasic",
        component: 'FormBasic'
    },
    {
        title: "Form Contact",
        value: "formContact",
        component: 'FormContact'
    },
    {
        title: "Form Order",
        value: "formOrder",
        component: 'FormOrder'
    },
])
const componentSelected = ref('FormBasic')
</script>

<template>
    <div>
        <h1>Form Input Bindings</h1>

        <select v-model="componentSelected">
            <option v-for="item in componentsList" :value="item.component">{{ item.title }}</option>
        </select>

        <!-- <pre>{{ componentSelected }}</pre> -->

        <hr />

        <component is="FormOrder"></component>

        <hr>
        

        <template v-if="componentSelected === 'FormBasic'">
            <form-basic />
        </template>

        <template v-if="componentSelected === 'FormContact'">
            <form-contact />
        </template>

        <template v-if="componentSelected === 'FormOrder'">
            <form-order />
        </template>
    </div>
</template>