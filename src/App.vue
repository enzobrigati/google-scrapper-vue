<template>
  <div id="app">
    <nav class="nav navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand brand" :to="{ name: 'home' }">
          <span class="brand_start">G</span>
          <span class="brand_end">scrapper</span>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'home' }"
              >MultiQuery</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="text-center mt-4">
      <img src="@/assets/image/logo-full.svg" height="80px" />
      <p>
        © Copyright Google-Scrapper -
        <a href="https://avenanceagency.com" target="_blank">Avenance Agency</a> - Tous droits
        réservés -
        <router-link class="text-primary" :to="{ name: 'changelog' }"
          >Changelog</router-link
        >
      </p>
    </footer>
  </div>
</template>

<style>
.cursor-pointer {
  cursor: pointer;
}
.router-link-exact-active {
  color: white !important;
}
</style>
