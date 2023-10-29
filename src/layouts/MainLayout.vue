<template>
  <q-layout view="hHh LpR lFf" class="bg-white">
    <q-header elevated>
      <q-toolbar>
        <q-btn class="btn-menu" flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" />
        <q-toolbar-title class="title-site">
          RH
        </q-toolbar-title>
        <q-toolbar-title>{{ menuAtivo }}</q-toolbar-title>
        <q-btn style="margin: 1em;" flat dense round aria-label="home" icon="home" to="/inicio" />
        <q-btn style="margin: 1em;" flat dense round aria-label="Saie" icon="logout" to="/login" />
      </q-toolbar>
    </q-header>
    <q-drawer style="box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 10px;" v-model="leftDrawerOpen" show-if-above bordered
      class="bg-grey-2">
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-item style="box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 10px;" v-for="item in btn_menu_lateral" :key="item"
          clickable rel="noopener" :to="item.to" class="buton-menu">
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <routerView />
    </q-page-container>
    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title class="footer">{{ rodape }}</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { useMenuStore } from 'src/stores/menu'
import { mapState } from 'pinia'

export default {
  name: 'MainLayout',
  components: {
  },

  data: () => ({
    btn_menu_lateral: [
      { title: "Início", icon: "home", to: "/inicio" },
      { title: "Pessoas", icon: "people", to: "/pessoa" },
      { title: "EPI", icon: "security", to: "/epi" },
      { title: "Treinamento", icon: "school", to: "/" },
    ],
    rodape: "by Maicon Felipe Kappaun",
  }),

  setup() {
    const leftDrawerOpen = ref(false)

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
    }
  },

  computed: {
    ...mapState(useMenuStore, ['menuAtivo']),
  },

  methods: {
    // rotaViaFuncao() {
    //   this.$route.push('/pessoa/novo')
    // },
  },

}
</script>
<style>
.q-layout-padding {
  padding: 16px;
  width: 90%;
}

.q-item.q-router-link--active,
.q-item--active {
  color: white;
}
</style>
