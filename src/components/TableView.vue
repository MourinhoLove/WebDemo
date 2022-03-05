
<template>
  <v-data-table
    :headers="headers"
    :items="vlaues"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import {eventBus} from "../main";
export default {
  data() {
    return {
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "名称", value: "name" },
        { text: "年龄", value: "age" },
        { text: "地址", value: "address" },
        { text: "操作", value: "" },
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
    /**
     * @description: 该方法获取服务端的列表数据 
     * @param {*}
     * @return {*}
     */
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
    // 这里的created是Vue提供的生命周期的其中一个
    this.getList();
    // 这里创建一个监听
     eventBus.$on('update', () => {
            this.getList();
    })
  },
};
</script>