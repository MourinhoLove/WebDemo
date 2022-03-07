<!--
 * @Author: Zhangqilei
 * @Date: 2022-03-05 13:01:45
 * @LastEditors: Zhangqilei
 * @LastEditTime: 2022-03-07 14:40:24
 * @Description: 
 * 
-->
<template>
  <v-dialog v-model="show" width="530">
    <!-- 这里创建卡片 -->
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>{{
          isEdit ? "编辑人员" : "创建人员"
        }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            name="name"
            label="名称"
            id="name"
            type="text"
            hint="请输入用户名称"
            v-model="user.name"
            clearable
          ></v-text-field>
          <v-text-field
            name="age"
            label="年龄"
            id="age"
            type="number"
            hint="请输入用户年龄"
            v-model.number="user.age"
            clearable
          ></v-text-field>
          <v-text-field
            name="address"
            label="地址"
            id="address"
            type="text"
            hint="请输入用户地址"
            v-model="user.address"
            clearable
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn dark color="pink" @click="createPerson">创建</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { eventBus } from "../main";

export default {
  props: {
    // 这里你也可以直接写 isEdit: Boolean，我这么写的目的是为了告诉vue这是父组件必须传过来的数据
    editUser: Object, // 为了暴露给父组件这里定义了一个user.
    // value是让父组件控制自己是否显示的.它的值根据父组件来定
    value: Boolean,
  },
  data() {
    return {
      //这里定义一个对象
      user: this.editUser,
      isEdit: false,
    };
  },
  methods: {
    createPerson() {
      const axios = require("axios");
      if (this.isEdit) {
        axios
          .post("https://localhost:7109/api/Person/update", {
            name: this.user.name,
            age: this.user.age,
            address: this.user.address,
            id: this.user.id,
          })
          .then((response) => {
            this.show = false;
            eventBus.$emit("update");
          });
      } else {
        axios
          .post("https://localhost:7109/api/Person/create", {
            name: this.user.name,
            age: this.user.age,
            address: this.user.address,
            id: 0,
          })
          .then((response) => {
            console.log(response.data);
            this.show = false;
            eventBus.$emit("update");
          });
      }
    },
  },
  computed: {
    // 计算属性
    // 这个属性 是我自己控制我自己要不要显示
    // 因为我需要比如添加成功后,我要把弹窗消失,我需要改变value.可是vue里面,我子组件永远不能在本身去改变它
    // 所以需要定义一个Show去追踪value
    show: {
      get() {
        return this.value;
      },
      set(value) {
        // 发送一个自定义事件,由父组件去定义它
        this.$emit("myEvent", value);
      },
    },
  },
  watch: {
    // 监听属性 这里监听父组件传过来的user数据
    editUser(val) {
      this.user = val;
      // 判断是编辑还是新增
      this.isEdit = Object.keys(val).length === 0 ? false : true;
    },
  },
};
</script>