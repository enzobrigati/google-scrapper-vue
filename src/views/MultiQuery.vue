<template>
  <div class="multiquery">
    <div class="container mt-4">
      <h1>Recherche avec plusieurs mots clés</h1>
      <hr/>
      <div v-if="loading">
        <div class="alert alert-info">
          <Loader v-if="loading"/>
          Veuillez patienter pendant que nous générons votre fichier
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-2 mb-2" v-if="organicResults.length > 0 && loading == false">
          <div v-for="result in organicResults" :key="result.index" class="mb-2">
            <download-csv
                class="btn btn-secondary"
                :data="result.data"
                :name="result.keyword + '.csv'"
                encoding="utf-8"
                delimiter=";"
            >
              Télécharger le rapport
            </download-csv>
          </div>
          <p>Les rapports sont générés dans l'ordres des mots clés renseignés.</p>
        </div>
        <div class="col-12 mt-2 mb-2" v-if="keywords.length > 0">
          <p class="font-weight-bold">Liste des mots clés ajoutés : </p>
          <div v-for="keyword in keywords" :key="keyword.index" class="d-inline">
            {{ keyword }} <i class="fa fa-times text-danger cursor-pointer" @click="handleRemoveKeyword(keyword)"></i> ,
          </div>
        </div>
      </div>
      <FormulateForm
          v-model="formData"
          @submit="handleAddKeyword"
          name="scrapperForm"
          class="row"
      >
        <div class="col-12 col-md-6">
          <FormulateInput
              label="Mot clé à ajouter"
              v-model="query"
              name="query"
              type="text"
              validation="required"
              validation-name="Le mot clé"
              placeholder="Entrez un mot nouveau mot clé"
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
              label="Ajouter le mot clé"
              :input-class="['btn btn-success']"
              :disabled="loading"
          />
        </div>
      </FormulateForm>
      <div class="row">
        <div class="col-12 col-md-6">
          <button class="btn btn-primary" @click="handleScrappe" :disabled="loading">Lancer le scrapping !</button>
          <button class="btn btn-dark ml-3" @click="handleReset" :disabled="loading">Réinitialiser les rapports et les
            mots clés
          </button>
        </div>
        <div class="col-12 mt-4">
          <h3><strong>À lire avant d'effectuer une recherche</strong></h3>
          <ul>
            <li>1. J'ajouter mes mots clés, un seul à la fois et je valide l'enregistrement.</li>
            <li>2. J'entre le nombre de résultat à récupérer ou je laisse <strong>10</strong> par défaut.</li>
            <li>3. Je lance le scrapping !</li>
            <li>4. Je patiente, plus il y a de mots clés, plus les rapports sont lents à générer.</li>
            <li>5. Je télécharge mes rapports, ils apparaissents dans l'ordre dans lequel j'ai renseigné mes mots
              clés.
            </li>
            <li>?. Ça ne fonctionne pas ? Je refresh la page et je réessaye.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/Ui/Loader";
import axios from "axios";
//import axios from "axios";

export default {
  name: "MultiQuery",
  components: {
    Loader,
  },
  data: function () {
    return {
      query: null,
      resultNumber: 10,
      loading: false,
      formData: null,
      organicResults: [],
      keywords: [],
    };
  },
  methods: {
    handleAddKeyword: function () {
      this.keywords.push(this.query)
      this.query = null
    },
    handleRemoveKeyword: function (keyword) {
      let index = this.keywords.indexOf(keyword)
      this.keywords.splice(index, 1)
    },
    handleReset: function () {
      this.formData = null;
      this.organicResults = [];
      this.keywords = [];
      this.query = null;
    },
    handleScrappe: async function () {
      this.loading = true;
      if (this.keywords.length > 0) {
        this.keywords.map(async keyword => {
          await axios
              .get(
                  "https://lab.deob.fr/g-scrapper-api/request.php?query=" +
                  keyword +
                  "&num=" +
                  this.resultNumber
              )
              .then((res) => {
                this.organicResults.push({data: res.data.results[0].content.results.organic, keyword: keyword});
                console.log(this.organicResults)
              })
              .catch((e) => console.warn(e.response));
          if (this.organicResults.length === this.keywords.length) {
            this.loading = false
          }
        })
      }
    },
  }
};
</script>
