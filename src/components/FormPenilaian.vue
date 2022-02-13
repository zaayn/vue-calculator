<template>
  <div class="container">
    <h2 class="text-center mt-5">
      Formulir Penilaian Kelas Mentoring
    </h2>
     
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th width="30%" scope="col">Nama</th>
          <th width="16%" scope="col">Nilai UTS</th>
          <th width="16%" scope="col">Nilai UAS</th>
          <th width="16%" scope="col">Nilai Angka</th>
          <th width="12%" scope="col">Predikat</th>
          <th width="10%" scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(nilai, index) in formSiswa" :key="index">
          <td>
            <input class="name-siswa" type="text" v-model="nilai.nama">
          </td>
          <td>
            <input type="number" v-model="nilai.uts">
          </td>
          <td>
            <input type="number" v-model="nilai.uas">
          </td>
          <td>
            <span>{{ ((parseInt(nilai.uts) + parseInt(nilai.uas))/2).toFixed(1) }}</span>
          </td>
          <td></td>
          <td>
            <button style="margin-right:5px" @click="delNilai(index)"><i class="fa fa-minus"></i></button>
            <button @click="addNilai"><i class="fa fa-plus"></i></button>
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
          uts: 0,
          uas: 0,
      }]
    };
  },
  methods: {
      addNilai: function(){
          this.formSiswa.push({
            nama: '',
            uts: 0,
            uas: 0,
        })
      },
      delNilai: function(index){
          this.formSiswa.splice(index,1)
      }
  },
};
</script>

<style scoped>
.name-siswa {
    width: -webkit-fill-available;
}
</style>