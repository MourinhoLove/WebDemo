<!--
 * @Author: Zhangqilei
 * @Date: 2022-03-05 08:43:05
 * @LastEditors: Zhangqilei
 * @LastEditTime: 2022-03-07 11:37:09
 * @Description: 
 * 
-->
  <template>
  <div>
    <v-data-table
      :headers="headers"
      :items="vlaues"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>


<script>
import { eventBus } from "../main";
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
        { text: "操作", value: "action" },
      ],
      vlaues: [
        {
          name: "测试名称",
          id: 99,
          address: "测试地址",
          age: "测试年龄",
        },
      ],
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
        .then((response) => {
          this.vlaues = response.data;
          console.log(this.value);
        });
    },
    editItem(item) {
      // 通知卡片组件进行弹窗的更新
      this.$emit('onEmitIndex', item)
      // this.editedIndex = this.desserts.indexOf(item)
      // this.editedItem = Object.assign({}, item)
      // this.dialog = true
    },
    deleteItem(item) {
      console.log(item);
      // this.editedIndex = this.desserts.indexOf(item)
      // this.editedItem = Object.assign({}, item)
      // this.dialogDelete = true
    },
  },
  created() {
    // 这里的created是Vue提供的生命周期的其中一个
    this.getList();
    // 这里创建一个监听
    eventBus.$on("update", () => {
      this.getList();
    });
  },
};
</script>