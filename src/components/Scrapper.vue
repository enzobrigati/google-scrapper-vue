<template>
  <div class="scrapper">
    <div class="container mt-4">
      <h1>Effectuer une recherche</h1>
      <hr>
      <Loader v-if="loading"/>
      <FormulateForm v-model="formData" @submit="handleSubmit" name="scrapperForm" class="row">
        <div class="col-12 col-md-6">
          <FormulateInput label="Requête à effectuer"
                          v-model="query"
                          name="query"
                          type="text"
                          validation="required"
                          validation-name="La requête"
                          placeholder="Votre requête"
          />
        </div>
        <div class="col-12 col-md-6">
          <FormulateInput label="Nombre de résultat à afficher"
                          v-model="resultNumber"
                          name="resultNumber"
                          type="number"
                          validation="required"
                          validation-name="Le nombre de résultat"
                          placeholder="Nombre de résultat"
          />
        </div>
        <div class="col-12 col-md-2">
          <FormulateInput type="submit" label="Scrapper !"
                          :input-class="['btn btn-primary']"
                          :disabled="loading"/>
        </div>
      </FormulateForm>
      <div class="col-12 mt-2 mb-2" v-if="organicResults">
        <download-csv class="btn btn-secondary" :data="organicResults" name="report.csv">
          Télécharger le rapport
        </download-csv>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/Ui/Loader";

export default {
  name: 'Scrapper',
  components: {
    Loader
  },
  data: function () {
    return {
      query: null,
      resultNumber: 10,
      loading: false,
      formData: null,
      organicResults: null
    }
  },
  methods: {
    handleSubmit: async function () {
      this.loading = true
      const parsedQuery = new URLSearchParams({
        query: this.query
      })
      let url = 'http://api.serpstack.com/search?access_key=' + process.env.VUE_APP_SERPSTACK_APIKEY + '&' + parsedQuery + '&engine=google&hl=fr&gl=fr&num=' + this.resultNumber
      await axios.get(url)
          .then(res => {
            this.organicResults = res.data['organic_results']
            console.log(res)
          }).catch(e => console.warn(e))
      this.loading = false
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
