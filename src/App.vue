<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <person-card  class="mt-5" :isEdit="isEdit"></person-card>
    </v-app-bar>
    <v-main>
      <table-view />
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
    isEdit: false
  }),
  methods: {
    // 绑定了按钮点击事件
    showPop() {
      alert("Test");
    }
  }
};
</script>
