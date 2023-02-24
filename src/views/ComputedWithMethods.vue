<script setup>
import { ref, computed, onUpdated } from 'vue'

const booksList = ref([
    'Book 1',
    // 'Book 2',
    // 'Book 3',
    // 'Book 4',
])

const booksLengt = computed(() => booksList.value.length)
const booksMessage = computed(() => booksList.value.length > 0 ? "Yes" : "No")

function booksListMethod() {
    console.log("booksListMethod")
    return booksList.value
}

function addBook() {
    booksList.value.push("Book 5")
}

// ****************************

const phoneList = ref(['Phone 1'])

function phoneListMethod() {
    console.log("phoneListMethod")
    return phoneList.value
}

onUpdated(() => {
    console.log("updated")
})
</script>

<template>
    <div>
        <h1>Computed with methods</h1>

        <div>
            Book - {{ booksLengt }} - Message - {{ booksMessage }}
        </div>

        <div>
            <template v-for="item in booksListMethod()">
                <p>{{ item }}</p>
            </template>
        </div>

        <button @click="addBook">Push books</button>

        <hr>

        <div>
            <template v-for="item in phoneListMethod()">
                <p>{{ item }}</p>
            </template>
        </div>
    </div>
</template>