<template>
  <div class="container">
    <h2 class="text-center mt-5">
      Formulir Penilaian Kelas Mentoring
    </h2>
     
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th width="30%" scope="col">Nama</th>
          <th width="12%" scope="col">Nilai Kuis</th>
          <th width="12%" scope="col">Nilai UTS</th>
          <th width="12%" scope="col">Nilai UAS</th>
          <th width="12%" scope="col">Nilai Angka</th>
          <th width="12%" scope="col">Nilai Huruf</th>
          <th width="10%" scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(nilai, index) in formSiswa" :key="index">
          <td width="30%">
            <input class="name-siswa" type="text" v-model="nilai.nama">
          </td>
          <td width="12%">
            <input type="number" v-model="nilai.kuis">
          </td>
          <td width="12%">
            <input type="number" v-model="nilai.uts">
          </td>
          <td width="12%">
            <input type="number" v-model="nilai.uas">
          </td>
          <td width="12%">
            <span>{{nilai.total}}</span>
          </td>
          <td width="12%">
            <span>{{nilai.huruf}}</span>
          </td>
          <td width="10%">
            <button>Tambah</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'FormPenilaian',
  props: {
  },
  data() {
    return {
      formSiswa: [{
          nama: '',
          kuis: 0,
          uts: 0,
          uas: 0,
          total: 0,
          huruf: ''
      }]
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
.name-siswa {
    width: -webkit-fill-available;
}
</style>