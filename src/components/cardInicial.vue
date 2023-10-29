<template>
  <q-card class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
    <q-card-section>
      <div class="text-h6">Card Teste Clicks</div>
      <div class="text-subtitle2">Quantos clicks você executou?</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ qtdeClicks }}
    </q-card-section>

    <q-card-section class="q-pt-none">
      <!-- <q-btn @click="qtdeClicks++"> Click-me! </q-btn> -->
      <q-btn @click="$emit('update:qtdeClicks', qtdeClicks + 1)"> Click-me! </q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'cardInicial',
  // data: () => ({
  //   qtdeClicks: 0
  // })
  props: {
    qtdeClicks: {
      type: Number,
      default: 0
    }
  }
})

</script>
