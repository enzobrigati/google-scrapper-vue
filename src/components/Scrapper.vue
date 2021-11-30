<template>
  <div class="scrapper">
    <div class="container mt-4">
      <h1>Effectuer une recherche</h1>
      <hr />
      <div v-if="loading">
        <div class="alert alert-info">
          <Loader v-if="loading" />
          Veuillez patienter pendant que nous générons votre fichier
        </div>
      </div>
      <div class="col-12 mt-2 mb-2" v-if="organicResults">
        <download-csv
          class="btn btn-secondary"
          :data="organicResults"
          :name="
            this.notFormattedQuery
              ? this.notFormattedQuery + '.csv'
              : 'report.csv'
          "
        >
          Télécharger le rapport
        </download-csv>
      </div>
      <FormulateForm
        v-model="formData"
        @submit="handleSubmit"
        name="scrapperForm"
        class="row"
      >
        <div class="col-12 col-md-6">
          <FormulateInput
            label="Requête à effectuer"
            v-model="query"
            name="query"
            type="text"
            validation="required"
            validation-name="La requête"
            placeholder="Votre requête"
          />
        </div>
        <div class="col-12 col-md-6">
          <FormulateInput
            label="Nombre de résultat à afficher"
            v-model="resultNumber"
            name="resultNumber"
            type="number"
            validation="required"
            validation-name="Le nombre de résultat"
            placeholder="Nombre de résultat"
          />
        </div>
        <div class="col-12 col-md-2">
          <FormulateInput
            type="submit"
            label="Scrapper !"
            :input-class="['btn btn-primary']"
            :disabled="loading"
          />
        </div>
      </FormulateForm>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/Ui/Loader";

export default {
  name: "Scrapper",
  components: {
    Loader,
  },
  data: function() {
    return {
      query: null,
      resultNumber: 10,
      loading: false,
      formData: null,
      organicResults: null,
      notFormattedQuery: null,
    };
  },
  methods: {
    handleSubmit: async function() {
      this.loading = true;
      this.notFormattedQuery = this.query;
      await axios
        .get(
          "https://lab.deob.fr/g-scrapper-api/request.php?query=" +
            this.query +
            "&num=" +
            this.resultNumber
        )
        .then((res) => {
          this.organicResults = res.data.results[0].content.results.organic;
          this.query = null;
        })
        .catch((e) => console.warn(e.response));
      this.loading = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
