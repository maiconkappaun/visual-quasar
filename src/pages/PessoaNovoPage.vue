<template>
  <q-page class="flex flex-center">
    <q-page padding>
      <q-form @submit="submitForm">
        <br>
        <div class="q-gutter-md row items-start">
          <q-input filled v-model="pessoa.NOME" label="Nome" style="width: 63%;" outlined required />
        </div>
        <br>
        <div class="q-gutter-md row items-start">
          <q-input filled v-model="pessoa.CPFCNPJ" label="CPF/CNPJ" style="width: 32%;" outlined required />
        </div>
        <br>
        <div class="q-gutter-md row items-start">
          <q-input filled v-model="pessoa.LOGRADOURO" label="Logradouro" style="width: 40%;" outlined />
          <q-input filled v-model="pessoa.NUMERO" label="Número" style="width: 20%;" outlined />
        </div>
        <br>
        <div class="q-gutter-md row items-start">
          <q-input filled v-model="pessoa.BAIRRO" label="Bairro" style="width: 20%;" outlined />
          <q-input filled v-model="pessoa.MUNICIPIO" label="Município" style="width: 40%;" outlined />
        </div>
        <br>
        <div class="q-gutter-md row items-start">
          <q-input filled v-model="pessoa.CEP" label="CEP" style="width: 20%;" outlined />
          <q-input filled v-model="pessoa.UF" label="UF" style="width: 10%;" outlined />
        </div>
        <br>
        <div class="q-gutter-md row items-start">
          <q-btn filled label="Cancelar" type="submit" to="/pessoa" />
          <q-btn filled label="Salvar" type="submit" @click="salvar()" />
        </div>
      </q-form>
    </q-page>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { usePessoaStore } from 'src/stores/pessoa'
import { useMenuStore } from 'src/stores/menu'
import { mapActions } from 'pinia'

export default defineComponent({
  name: 'PessoaNovoPage',
  mounted() {
    this.updateMenu(this.$route.path)
  },

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
    }
  }),

  methods: {
    ...mapActions(usePessoaStore, ['postPessoa']),
    ...mapActions(useMenuStore, ['updateMenu']),
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

