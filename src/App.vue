<!--
 * @Author: Zhangqilei
 * @Date: 2022-03-05 08:40:05
 * @LastEditors: Zhangqilei
 * @LastEditTime: 2022-03-07 15:57:26
 * @Description: 
 * 
-->
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <v-btn color="red lighten-2" @click="addPerson"> 新增 </v-btn>
      <person-card
        class="mt-5"
        :value="isShow"
        :editUser="user"
        @myEvent="changeStatus"
      ></person-card>
    </v-app-bar>
    <v-main>
      <table-view @onEmitIndex="setPerson"> </table-view>
    </v-main>
  </v-app>
</template>

<script>
import TableView from "./components/TableView.vue";
import PersonCard from "./components/PersonCard.vue";
export default {
  name: "App",
  components: {
    TableView,
    PersonCard,
  },
  data: () => ({
    // 用来控制对话框的显示和消失
    isShow: false,
    // 这里我定义一个对象.因为编辑的时候我需要从TableView那边拿到一个Object.所以这里定义user是为了追踪这个变量
    // 追踪的目的有很多种.这里是为了.当我打开对话框的时候.如果user是有内容的,我就会把它传递给对话框的子组件
    user: {
      name: "",
      age: null,
      address: "",
    },
  }),
  methods: {
    // 绑定了按钮点击事件
    setPerson(item) {
      this.user = item;
      this.isShow = true;
    },
    // 新增用户
    addPerson() {
      this.user = {};
      this.isShow = true;
    },
    // 当对话框消失的时候 会发出一个通知,这里监听这个通知,目的是因为对话框是当前组件的子组件
    // 所以我把对话框的显示和消失,让当前组件来控制
    // 其实你也可以让组件自己控制,等我再研究研究vue和再来考虑最合适的做法
    // 这里为了演示就先不去管他
    changeStatus(isShow) {
      this.isShow = isShow;
    },
  },
};
</script>
