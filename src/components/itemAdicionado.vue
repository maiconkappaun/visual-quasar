<template>
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
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'itemAdicionado',
})

</script>
