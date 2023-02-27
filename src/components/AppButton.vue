<script setup>
function innerClick() {
    console.log('inner')
}
</script>

<template>
    <div>
        <button @click="innerClick">App button</button>
    </div>
</template>