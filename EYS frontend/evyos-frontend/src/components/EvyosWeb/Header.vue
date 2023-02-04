<template>
    <v-app-bar class="d-flex justify-space-between text-white" color="green-darken-2">
        <v-divider inset vertical></v-divider>
        <v-toolbar-title class="fs-3">Evyos Web App</v-toolbar-title>
        <v-toolbar-items v-for="(item, index) in headerItems" :key="index">
            <v-divider vertical></v-divider>
            <v-btn :width="headerItemWidth" variant="text" class="fs-7">{{ item }}</v-btn>
            <v-divider vertical></v-divider>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-divider vertical></v-divider>
            <v-btn :width="headerItemWidth" variant="text" class="fs-7">Sign In<v-icon
                    class="mx-3">mdi-account-circle</v-icon></v-btn>
        </v-toolbar-items>
    </v-app-bar>

</template>
<script lang="ts" setup>
import { useAppConfigs } from '../../store/app'
const { theme, headerItemWidth, headerItems } = useAppConfigs()


</script>


<!-- <v-main>
    <v-container>Content area</v-container>
    <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="changeTheme">Toggle
        Theme</v-btn>
</v-main> -->