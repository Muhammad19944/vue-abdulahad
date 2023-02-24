<script setup>
import { ref, computed } from 'vue'

const booksList = ref([
    {
        id: 1,
        title: "Book 1",
        isSold: false
    },
    {
        id: 2,
        title: "Book 2",
        isSold: false
    },
    {
        id: 3,
        title: "Book 3",
        isSold: false
    },
    {
        id: 4,
        title: "Book 4",
        isSold: false
    },
    {
        id: 5,
        title: "Book 5",
        isSold: false
    },
])
const bookSelected = ref(null)

let bookComputedList = computed(() => booksList.value.filter(item => item.isSold === false))

function selectBook() {
    let book = booksList.value.find(book => book.id === bookSelected.value)

    book.isSold = true
}

</script>

<template>
    <div>
        <h1>Computed</h1>

        <template v-for="item in bookComputedList">
            <div>{{ item.id }}. {{ item.title }}</div>
        </template>

        <br>

        <select v-model="bookSelected" @change="selectBook">
            <option v-for="item in booksList" :value="item.id">{{ item.title }}</option>
        </select>

        <div>{{ bookSelected }}</div>
    </div>
</template>