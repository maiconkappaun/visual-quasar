<template>
  <q-page class="flex flex-center">
    <q-page padding>
      <!-- <q-form @submit="submitForm"> -->
      <br>
      <div class="q-gutter-md row items-start">
        <q-input filled label="Nome" v-model="epi.NOME" style="width: 63%;" outlined required />
      </div>
      <br>
      <div class="q-gutter-md row items-start">
        <q-btn filled label="Pesquisar" type="submit" @click="getPessoa(pessoa)" />
        <q-btn filled label="Novo" type="submit" to="/epi/novo" />
      </div>
      <!-- </q-form> -->
      <br>
      <div class="q-pa-md">
        <q-card class="my-card" flat bordered style="height: 42em; overflow-y: auto;">
          <q-table :rows="listaEpi" :columns="column" row-key="name" />
        </q-card>
      </div>
      <br>
      <!-- {{ counter }}
      <q-btn @click="increment()">increment</q-btn> -->
    </q-page>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useEpiStore } from 'src/stores/epi'
import { useMenuStore } from 'src/stores/menu'
import { mapActions, mapState } from 'pinia'

const columns = [
  { name: 'cod', align: 'center', label: 'Código', field: 'codigo', sortable: true },
  { name: 'nome', align: 'center', label: 'Nome', field: 'nome', sortable: true },
  { name: 'qtd_total', align: 'center', label: 'Quantidade total', field: 'qtdTotal', sortable: true },
  { name: 'valor_total', align: 'center', label: 'Valor total', field: 'valorTotal', sortable: true },
  { name: 'edit', align: 'center', label: '', field: 'edit' },
]

export default defineComponent({
  name: 'EpiInicioPage',

  data: () => ({
    epi: {
      NOME: '',
    }
  }),

  setup() {
    let column = ref(columns)
    const leftDrawerOpen = ref(false)
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }
    return {
      leftDrawerOpen,
      toggleLeftDrawer
    }
  },

  computed: {
    ...mapState(useEpiStore, ['listaEpi']),
    // ...mapState(useEpiStore, ['counter'])
  },

  methods: {
    ...mapActions(useEpiStore, ['getEpi']),
    ...mapActions(useMenuStore, ['updateMenu']),
    // ...mapActions(useEpiStore, ['increment'])
  },

  mounted() {
    this.getEpi()
    this.updateMenu(this.$route.path)
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

thead {
  background-color: #884747;
  color: white;
}
</style>

