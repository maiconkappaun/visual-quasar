<template>
  <div>a</div>
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
    titulo: "Início",
    rodape: "by Maicon Felipe Kappaun"
  }),

  methods: {
    ...mapActions(useLoginStore, ['postLogin']),
  },
  setup() {
    const leftDrawerOpen = ref(false)

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      password: ref(''),
      isPwd: ref(true),

      email: ref(''),
      search: ref(''),
      tel: ref(''),
      url: ref(''),
      time: ref(''),
      date: ref('')
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
