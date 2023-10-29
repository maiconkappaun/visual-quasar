<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-carousel-slide name="map" class="column no-wrap flex-center" style="height: 95vh; width: 30%;">
        <q-form @submit="submitForm">
          <br>
          <q-input filled label="Usuário" v-model="login.NOME_USUARIO" />
          <br>
          <q-input v-model="login.PASSWORD" label="Senha" filled :type="isPwd ? 'password' : 'text'">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>
          <br>
        </q-form>
        <div>
          <q-btn label="Entrar" type="submit" @click="postLogin(login)" />
        </div>
        <br>
      </q-carousel-slide>
      <div class="column items-center" style="flex: 1; height: 95vh; display: flex;">
        <img style="max-width: 100%; max-height: 100%; width: 100%; height: 100%;"
          src="https://cdn.wizard.com.br/wp-content/uploads/2020/05/06155457/PJ-ou-CLT-qual-o-melhor-regime-de-trabalho.jpg"
          alt="logo">
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions } from 'pinia'
import { useLoginStore } from '../stores/login'
import { ref } from 'vue'

export default defineComponent({
  name: 'LoginPage',

  data: () => ({
    login: {
      NOME_USUARIO: '',
      PASSWORD: '',
    },
  }),

  methods: {
    ...mapActions(useLoginStore, ['postLogin']),
  },

  setup() {
    return {
      password: ref(''),
      isPwd: ref(true),
    }
  },
})
</script>

<style>
.q-focus-helper,
.q-focusable,
.q-manual-focusable,
.q-hoverable {
  outline: 0;
  background-color: #884747;
  color: #fff;
}

.q-field__control {
  color: #884747;
  height: 56px;
  max-width: 100%;
  outline: none;
}
</style>
