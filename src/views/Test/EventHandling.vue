<script setup>
function callP() {
    console.log("P")
}

function callDIV() {
    console.log("DIV")
}

function callFORM() {
    console.log("FORM")
}

function submitText() {
    console.log("Submit")
}
</script>

<template>
    <div>
        <h1>Event Handling</h1>

        <form @click="callFORM" style="border: 1px solid red; padding: 6px">
            FORM

            <div @click="callDIV" style="border: 1px solid blue; padding: 6px">
                DIV

                <p @click="callP" style="border: 1px solid green; padding: 6px">
                    P
                </p>
            </div>
        </form>

        <button @click.alt.exact="submitText">A</button>
    </div>
</template>