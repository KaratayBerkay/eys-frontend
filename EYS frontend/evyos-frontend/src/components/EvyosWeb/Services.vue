<template>
    <div class="d-flex justify-content-evenly" justify="space-around">
        <v-card color="" class="text-center m-3 justify-content-evenly" width="90%" elevation="5">
            <div class="fs-1 text-center m-3">Yetkili Servislerimiz</div>
            <div class="fs-5 text-center m-3">Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid
                fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                suscipit
                alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</div>
            <v-divider />
            <v-container>
                <v-row>
                    <v-col v-for="elevation in elevations" :key="elevation" cols="12" md="4">
                        <v-card>
                            <v-img class="rounded-img" src="https://www.evyos.com.tr/static/img/team/team-1.jpg"
                                height="200px" circle></v-img>

                            <v-card-title>
                                Top western road trips
                            </v-card-title>

                            <v-card-subtitle>
                                1,000 miles of wonder
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn color="orange-lighten-2" variant="text">
                                    Explore
                                </v-btn>

                                <v-spacer></v-spacer>

                                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                    @click="show = !show"></v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-show="show">
                                    <v-divider></v-divider>

                                    <v-card-text>
                                        I'm a thing. But, like most politicians, he promised more than he could
                                        deliver.
                                        You won't have time for sleeping, soldier, not with all the bed making
                                        you'll be
                                        doing. Then we'll go with that data file! Hey, you add a one and two zeros
                                        to
                                        that or we walk! You're going to do his laundry? I've got to find a way to
                                        escape.
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
    <!--  -->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const elevations = ref([6, 12, 18])
const show = ref(false)
</script>

<style scoped>
.rounded-img {
    border-radius: 50%;
}
</style>