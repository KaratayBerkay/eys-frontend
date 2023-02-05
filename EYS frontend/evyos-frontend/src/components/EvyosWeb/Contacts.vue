<template>
    <div class="d-flex justify-content-evenly" justify="space-around">

        <v-card class="px-5 m-3" width="90%" style="height:1100px" elevation="5">
            <v-divider />
            <div>
                <v-sheet color="green-darken-1">
                    <v-card color="green-darken-2 text-center" title="İletişim Bilgilerimiz"
                        class=" fs-1 align-center white--text"></v-card>
                </v-sheet>
            </div>
            <div class="fs-5 text-center m-3">Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid
                fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                suscipit
                alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</div>
            <v-divider />
            <v-row class="px-2 m-1" width="90%">
                <v-col cols="12" md="6">
                    <v-row>
                        <v-container>
                            <v-card class="mx-auto d-block" tile>
                                <v-card-title class="white--text">
                                    <div class="text-center fs-3" color="green-darken-4">
                                        <p color="black" disabled active>
                                            İletişim Bilgilerimiz
                                        </p>
                                    </div>
                                </v-card-title>

                                <v-list>
                                    <v-list-item v-for="(item, i) in socialitems" :key="i">,
                                        <v-row>
                                            <v-col cols="12" md="4">
                                                <v-row>
                                                    <v-col cols="12" md="4">
                                                        <v-avatar>
                                                            <v-icon class="icon fit-content" color="green-darken-2"
                                                                :icon="item.icon"></v-icon>
                                                        </v-avatar>
                                                    </v-col>
                                                    <v-col cols="12" md="8">
                                                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                            <v-col cols="12" md="8">
                                                <v-list-item>
                                                    <v-list-item-title>{{ item.subtext }}</v-list-item-title>
                                                </v-list-item>
                                            </v-col>
                                        </v-row>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-container>
                    </v-row>
                    <v-row>
                        <v-container>
                            <v-col cols="12" md="6">
                                <div color="success" title="Satellite Map" class="px-5 py-3">
                                    <v-card-text class="px-0 pb-0" width="100%">
                                        <v-sheet>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15831228695!2d-74.11976206978034!3d40.697663747508045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1566158235149!5m2!1sen!2sus"
                                                width="220%" height="300" frameborder="0" style="border:0"
                                                allowfullscreen />
                                        </v-sheet>
                                    </v-card-text>
                                </div>
                            </v-col>
                        </v-container>
                    </v-row>
                </v-col>

                <v-col cols="12" md="6">
                    <v-form @submit.prevent="handleSubmit" lazy-validation>
                        <v-row justify="space-around">
                            <v-col cols="12" md="6">
                                <v-text-field v-model="firstname.name" :counter="counter"
                                    :rules="[firstname.rules.required]" label="First name" required
                                    clearable></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="lastname.name" :counter="counter"
                                    :rules="[lastname.rules.required]" label="Last name" required
                                    clearable></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12">
                                <v-text-field v-model.trim="email.name" label="Email" required
                                    :rules="[email.rules.required, email.rules.validation]" clearable />
                                <v-select v-model="subjectSelection" :items="items" label="Konu" solo></v-select>
                                <v-textarea v-model="descriptionText.name"
                                    :rules="[descriptionText.rules.required, descriptionText.rules.validation]" solo
                                    name="input-7-4" label="Açıklama" clearable></v-textarea>
                            </v-col>
                            <v-col cols="12" md="12">
                                <v-btn height="50px" :disabled="submitDisabled || isSend" :loading="submitLoads"
                                    class="my-4" :color="!submitDisabled ? 'green-darken-2' : 'red lighten-4'" block
                                    type="submit">
                                    {{ !isSend ? 'Gönder' : 'Gönderildi' }}
                                </v-btn>
                                <v-btn height="50px" class="my-2" color="teal-lighten-2" block type="reset"
                                    @Click="clearForm">
                                    Temizle
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>
            <v-divider />
        </v-card>
    </div>






</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

const counter = ref(10)
const items = ref(['Talep Mesajı', 'Fiyatlandırma hakkında bilgi', 'item3', 'item4', 'item5'])
const subjectSelection = ref(items?.value[0])
const subjectSelection_ = computed(() => {
    return items?.value[0]
})

const defaults = ref({
    global: {
        elevation: 10,
    },
    VCard: {
        color: 'secondary',
    }
})

const submitLoads = ref(false)
const isSend = ref(false)

const selectedItem = 1
const socialitems = [
    { text: 'Adresimiz', subtext: "Cankaya ANKARA TURKIYE", icon: 'mdi-map-marker' },
    { text: 'E Posta', subtext: "evyos@mehmetkaratay.com.tr", icon: 'mdi-email' },
    { text: 'Telefon', subtext: "+90 (111) 11 11 222", icon: 'mdi-cellphone-check' },
]

const firstname = reactive({
    name: '',
    rules: {
        required: v => !!v || "Lutfen bir isim giriniz. Boş bırakılamaz",
    },
})
const lastname = reactive({
    name: '',
    rules: {
        required: v => !!v || "Lutfen bir soy isim giriniz. Boş bırakılamaz",
    },
})
const email = reactive({
    name: '',
    rules: {
        required: v => !!v || "Lutfen bir e-mail giriniz. Boş bırakılamaz",
        validation: v => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(v) || "Lutfen dogru bir e-mail giriniz. @ ve . symbolleri bulunmalı";
        }
    },
});

const descriptionText = reactive({
    name: '',
    rules: {
        required: v => !!v || "Lutfen bir açıklama giriniz. Boş bırakılamaz",
        validation: v => {
            return v.length > 10 || "Lutfen dogru bir açıklama giriniz. 10 karakterden büyük olmalı";
        }
    },
});

const submitDisabled = computed(() => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var myBool: boolean = (pattern.test(email.name) && lastname.name !== "" && firstname.name !== "")
    myBool = myBool && Boolean(subjectSelection.value) && Boolean(descriptionText.name.length > 10)
    return myBool ? false : true
})

function clearForm() {
    isSend.value = false;
    setTimeout(() => subjectSelection.value = items.value[0], 200);
}

function handleSubmit() {
    submitLoads.value = true
    const formInputs = {
        firstname: firstname.name,
        lastname: lastname.name,
        email: email.name,
        subjectSelection: subjectSelection.value,
        descriptionText: descriptionText.name
    }
    if (submitDisabled.value == false) {

        setTimeout(() => submitLoads.value = false, 2000);
        setTimeout(() => console.log(formInputs, 2000));
        setTimeout(() => isSend.value = true, 2000);

        items?.value[0] == "Talep Mesajı"
    }
}

</script>

<style scoped>
.icon {
    transform: scale(1.4);
    background-color: whitesmoke;
}
</style>
