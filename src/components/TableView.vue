<template>
  <v-data-table
    :headers="headers"
    :items="vlaues"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Calories", value: "name" },
        { text: "Fat (g)", value: "age" },
        { text: "Carbs (g)", value: "address" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      vlaues: [
        {
          name: '测试名称',
          id: 99,
          address: '测试地址',
          age:'测试年龄'
        }
      ]
    };
  },
  methods: {
    getList() {
      const axios = require("axios");
      axios
        .post("https://localhost:7109/api/Person/getAll", {
          pageSize: 0,
          index: 0,
        })
        .then(response => {
          this.vlaues = response.data
          console.log(this.value);
        })
    },
  },
  created() {
    this.getList();
  },
};
</script>