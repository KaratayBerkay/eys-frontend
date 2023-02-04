<template>
    <v-carousel color="white" interval="1700" cycle height="600" hide-delimiter-background show-arrows="hover">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
                <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h1">
                        {{ slide }} Slide
                    </div>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>
<script lang="ts" setup>

const colors = [
    'green',
    'green',
    'green',
    'green',
    'green',
]

const slides = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
]

</script>