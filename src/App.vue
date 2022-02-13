<template>
  <div id="app">
    <form-nilai/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FormNilai from './components/FormPenilaian.vue'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
    })
    
  },
  components: {
    FormNilai
  }
}
</script>
