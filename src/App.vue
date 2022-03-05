<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="showPop"> 新增人员 </v-btn>
    </v-app-bar>

    <v-main>
      <table-view />
      <person-card  class="mt-5"></person-card>
    </v-main>
  </v-app>
</template>

<script>
import TableView from "./components/TableView.vue";
import PersonCard from "./components/PersonCard.vue"
export default {
  name: "App",
  components: {
    TableView,
    PersonCard
  },
  data: () => ({
    //
  }),
  methods: {
    // 绑定了按钮点击事件
    showPop() {
      alert("Test")
    }
  }
};
</script>
