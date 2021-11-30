<template>
  <div class="changelog">
    <div class="container mt-4">
      <h1>Changelog</h1>
      <hr />
      <h3 class="font-weight-bold">0.4.1 (30/11/21)</h3>
      <ul>
        <li>Ajout du support pour excel <span class="badge bg-danger text-white">bug fix</span></li>
        <li>Retrait du mode single search <span class="badge badge-warning text-white">edit</span></li>
        <li>
          Mise à jour du router afin de prendre en compte les 404 <span
            class="badge bg-warning text-white"
        >edit</span
        >
        </li>
      </ul>
      <h3 class="font-weight-bold">0.4 (29/11/21)</h3>
      <ul>
        <li>
          Ajout du multi-query <span
            class="badge bg-success text-white"
        >feature</span
        >
        </li>
      </ul>
      <h3 class="font-weight-bold">0.3 (17/11/21)</h3>
      <ul>
        <li>
          Changement d'API <span class="badge bg-info text-white">bug</span>
        </li>
        <li>
          Mise en place d'un retriever pour bypasser le CORS Origin<span
            class="badge bg-success text-white"
            >feature</span
          >
        </li>
      </ul>
      <h3 class="font-weight-bold">0.2 (19/10/21)</h3>
      <ul>
        <li>
          Correction de l'affichage du loader
          <span class="badge bg-primary text-white">bug</span>
        </li>
        <li>
          Ajout de la page changelog
          <span class="badge bg-success text-white">feature</span>
        </li>
        <li>
          Modification du footer
          <span class="badge bg-info text-white">edit</span>
        </li>
      </ul>
      <h3 class="font-weight-bold">0.1 (17/10/21)</h3>
      <ul>
        <li>Lancement</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Changelog",
};
</script>
