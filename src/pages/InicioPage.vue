<template>
  <q-page class="flex flex-center">
    incio
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
// import { usePessoaStore } from 'src/stores/pessoa'
import { useMenuStore } from 'src/stores/menu'
import { mapActions } from 'pinia'

const columns = [
  { name: 'nome', align: 'center', label: 'Nome', field: 'nome', sortable: true },
  { name: 'cpfcnpj', align: 'center', label: 'CPF/CNPJ', field: 'cpfcnpj', sortable: true },
  { name: 'municipio', align: 'center', label: 'Município', field: 'municipio', sortable: true },
  { name: 'noufme', align: 'center', label: 'UF', field: 'uf', sortable: true },
  { name: 'edit', align: 'center', label: '', field: 'edit' },
]

export default defineComponent({
  name: 'InicioPage',

  data: () => ({
    pessoa: {
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
    // ...mapState(usePessoaStore, ['listaPessoa'])
  },

  methods: {
    // ...mapActions(usePessoaStore, ['getPessoa']),
    ...mapActions(useMenuStore, ['updateMenu']),
  },

  mounted() {
    // this.getPessoa()
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

