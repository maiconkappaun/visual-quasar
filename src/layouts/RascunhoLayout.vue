<template>
  teste
  {{ counter }}
  <q-btn @click="increment()">increment</q-btn>
</template>

<script>
import { ref } from 'vue'
// import cardInicial from '../components/cardInicial.vue'
export default {
  name: 'MainLayout',
  components: {
    // cardInicial
  },
  data: () => ({
    // message: 'Data...',
    // mudou: false,
    // qtdeClicks: 0,
    // btns: [
    //   'Salvar',
    //   'Editar',
    //   'Cancelar',
    //   'Inserir',
    //   'Excluir'
    // ],
    // btns2: [
    //   { title: 'Salvar', exibe: true },
    //   { title: 'Editar', exibe: true },
    //   { title: 'Cancelar', exibe: false },
    //   { title: 'Inserir', exibe: false },
    //   { title: 'Excluir', exibe: true }
    // ],
    // show: true
  }),
  computed: {
    // getMessage() {
    //   return 'ola mundo computado ' + this.message
    // }
  },
  methods: {
    // getMessageMet() {
    //   return 'ola mundo methods ' + this.message
    // },
    // change() {
    //   this.message = 'new...'
    // }
  },
  watch: {
    // message() {
    //   this.mudou = true
    // }
  }
}
</script>
