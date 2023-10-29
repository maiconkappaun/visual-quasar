<template>
  <q-page class="flex flex-center">
    <q-page padding>
      <q-form @submit="submitForm">
        <br>
        <div class="q-gutter-md row items-start">
          <q-input filled v-model="epi.COD" label="Código" style="width: 63%;" outlined required />
        </div>
        <br>
        <div class="q-gutter-md row items-start">
          <q-input filled v-model="epi.NOME" label="Nome" style="width: 32%;" outlined required />
        </div>
        <br>
        <div class="q-gutter-md row items-start">
          <q-input filled v-model="epi.QTD_TOTAL" label="Quantidade total" style="width: 40%;" outlined required />
          <q-input filled v-model="epi.VALOR_TOTAL" label="Valor" style="width: 20%;" outlined required />
        </div>
        <br>
        <div class="q-gutter-md row items-start">
          <q-btn filled label="Cancelar" type="submit" to="/epi" />
          <q-btn filled label="Salvar" type="submit" @click="salvar()" />
        </div>
      </q-form>
      {{ counter }}

      <q-dialog v-model="dialog" :position="position">
        <q-card style="width: 250px">
          <q-card-section class="row items-center no-wrap">
            <div>
              <div class="text-weight-bold">Novo item adicionado</div>
            </div>
            <q-space />
            <q-btn flat round icon="done" />
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useEpiStore } from 'src/stores/example-store'
import { mapActions } from 'pinia'

export default defineComponent({
  name: 'EpiNovoPage',

  data: () => ({
    epi: {
      COD: '',
      NOME: '',
      QTD_TOTAL: '',
      VALOR_TOTAL: '',
    }
  }),

  setup() {
    const leftDrawerOpen = ref(false)

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }
    const dialog = ref(false)
    const position = ref('top')

    return {
      dialog,
      position,

      open(pos) {
        position.value = pos
        dialog.value = true
      },

      leftDrawerOpen,
      toggleLeftDrawer,
    }

  },

  methods: {
    ...mapActions(useEpiStore, ['postEpi']),
    salvar() {
      this.postEpi(this.epi)
      this.open('top')
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

