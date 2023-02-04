<template>
    <div class="d-flex justify-content-evenly" justify="space-around">

        <v-card color="" class="text-center m-3 justify-content-evenly" width="90%" elevation="5">
            <div class="fs-1 text-center m-3">Iletişim</div>
            <div class="fs-5 text-center m-3">Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid
                fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                suscipit
                alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</div>
            <v-divider />
            <v-container>
                <form @submit.prevent="submit">
                    <v-row>
                        <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                            label="E-mail"></v-text-field>
                        <v-divider />
                        <v-btn class="my-2" color="green-darken-2" block type="submit">
                            submit
                        </v-btn>
                        <v-btn class="my-2" color="teal-lighten-2" block @click="handleReset">
                            clear
                        </v-btn>
                        <v-divider />
                    </v-row>
                </form>
            </v-container>
        </v-card>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';


const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value) {
            if (value?.length >= 2) return true
            return 'Name needs to be at least 2 characters.'
        },
        email(value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
            return 'Lutfen dogru bir e-mail giriniz.'
        }
    },
})
const email = useField('email')
const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})



</script>