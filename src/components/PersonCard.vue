<template>
  <v-dialog v-model="dialog" width="530">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="red lighten-2" v-bind="attrs" v-on="on"> 新增 </v-btn>
    </template>
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
export default {
  props: {
    // 该属性判断是否是新增还是编辑
    // 这里你也可以直接写 isEdit: Boolean，我这么写的目的是为了告诉vue这是父组件必须传过来的数据
    isEdit: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      dialog: false,
      //这里定义一个对象
      user: {
        name: "",
        age: null,
        address: "",
      },
    };
  },
  methods: {
    createPerson() {
      const axios = require("axios");
      axios
        .post("https://localhost:7109/api/Person/create", {
          name: this.user.name,
          age: this.user.age,
          address: this.user.address,
          id: 0
        })
        .then((response) => {
            console.log(response.data);
            alert("新增成功");
        });
    },
  },
};
</script>