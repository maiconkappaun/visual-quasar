<template>
  <div class="flex flex-center">
    <div padding>
      <div class="q-pa-md" style="">
        <div class="q-gutter-md row items-start">
          <q-input filled label="Nome" v-model="pessoa.NOME" style="width: 63%;" />
        </div>
        <br>
        <div class="q-gutter-md row items-start">
          <q-input filled label="CPF/CNPJ" v-model="pessoa.CPFCNPJ" style="width: 32%;" />
        </div>
        <br>
        <div class="q-gutter-md row items-start">
          <q-input filled label="Logradouro" v-model="pessoa.LOGRADOURO" style="width: 40%;" />
          <q-input filled label="Número" v-model="pessoa.NUMERO" style="width: 20%;" />

        </div>
        <br>
        <div class="q-gutter-md row items-start">
          <q-input filled label="Bairro" v-model="pessoa.BAIRRO" style="width: 20%;" />
          <q-input filled label="Município" v-model="pessoa.MUNICIPIO" style="width: 40%;" />

        </div>
        <br>
        <div class="q-gutter-md row items-start">
          <q-input filled label="CEP" v-model="pessoa.CEP" style="width: 20%;" />
          <q-input filled label="UF" v-model="pessoa.UF" style="width: 10%;" />
        </div>
        <br>
        <div class="q-gutter-md row items-start">
          <q-input filled :label="cargo" style="width: 32%;" readonly />
          <q-btn flat dense round aria-label="editar" icon="edit" a href="/" />
        </div>
      </div>
      <div class="q-gutter-md row items-start">
        <q-btn label="Cancelar" type="submit" />
        <q-btn label="Salvar" type="submit" @click="salvar()" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { usePessoaStore } from 'src/stores/example-store'
import { mapActions } from 'pinia'

export default defineComponent({
  name: 'PessoaEditarPage',

  data: () => ({
    pessoa: {
      NOME: '',
      CPFCNPJ: '',
      LOGRADOURO: '',
      NUMERO: '',
      BAIRRO: '',
      MUNICIPIO: '',
      CEP: '',
      UF: '',
    },
    cargo: 'cargoteste'
  }),

  setup() {
    const leftDrawerOpen = ref(false)

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer
    }
  },

  methods: {
    ...mapActions(usePessoaStore, ['postPessoa']),
    salvar() {
      this.postPessoa(this.pessoa)
    },
  },
})
</script>

<style>
.q-layout__section--marginal {
  background-color: #743d3d;
  color: #fff;
}

.bg-grey-2 {
  background: #ffffff !important;
}

.q-item__label--header {
  color: #884747;
  padding: 16px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.01786em;
  text-align: center;
  margin-top: 2em;
}

.q-focus-helper,
.q-focusable,
.q-manual-focusable,
.q-hoverable {
  outline: 0;
  background-color: #884747;
  color: #fff;
}

.buton-menu {
  margin: 2em;
}

.footer {
  font-size: 8pt;
  text-align: center;
}

.title-site {
  margin-left: 1em;
}

.btn-menu {
  margin-left: 1em;
}

.q-field__control {
  color: #884747;
  height: 56px;
  max-width: 100%;
  outline: none;
}
</style>

