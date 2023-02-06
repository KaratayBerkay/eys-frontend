<template>
    <div class="d-flex justify-content-evenly" justify="space-around">
        <v-card color="" class="text-center m-3 justify-content-evenly" width="90%" elevation="5">
            <v-divider />
            <v-sheet color=" mt-5 mx-5">
                <v-card style="background-color:#C8E6C9" class="align-center">
                    <h1 class="my-5 green lighten-4">Yetkili Servislerimiz</h1>
                </v-card>
            </v-sheet>
            <div class="fs-5 text-center m-3">Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid
                fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                suscipit
                alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</div>
            <v-divider />
            <v-container style="height:600px">
                <v-row>
                    <v-col v-for="(employee, index) in service_employee" :key="index" cols="12" md="4">
                        <v-card>
                            <v-card-item>
                                <img class="rounded-img" :src="employee.picture" />
                            </v-card-item>
                            <v-card-title>
                                {{ employee.name }}
                            </v-card-title>

                            <v-card-subtitle>
                                {{ employee.job }}
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn color="orange-lighten-2" variant="text">
                                    Detayları inceleyin
                                </v-btn>

                                <v-spacer></v-spacer>

                                <v-btn :icon="!employee.visible ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                    @click="set_visible_cards_true(index)"></v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-if="service_employee[index].visible">
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
            <v-divider />
        </v-card>
    </div>
    <!--  -->
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useAppConfigs } from '../../store/app'

const useAppConfig = useAppConfigs()

const service_employee = reactive([
    {
        name: "Servis Yetkilsi 1",
        visible: false,
        work: "",
        job: "A Yetkilisi",
        picture: "https://www.evyos.com.tr/static/img/team/team-1.jpg"
    },
    {
        name: "Servis Yetkilsi 2",
        visible: false,
        work: "",
        job: "B Yetkilisi",
        picture: "https://www.evyos.com.tr/static/img/team/team-1.jpg"
    },
    {
        name: "Servis Yetkilsi 3",
        visible: false,
        work: "",
        job: "C Yetkilisi",
        picture: "https://www.evyos.com.tr/static/img/team/team-1.jpg"
    },
]
)

function set_visible_cards_true(index: any) {
    service_employee[index].visible = !service_employee[index].visible
}

</script>

<style scoped>
.rounded-img {
    border-radius: 50%;
    align-content: space-around;
    height: 150px;

}
</style>