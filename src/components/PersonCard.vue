<!--
 * @Author: Zhangqilei
 * @Date: 2022-03-05 13:01:45
 * @LastEditors: Zhangqilei
 * @LastEditTime: 2022-03-05 13:20:07
 * @Description: 
 * 
-->
<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="purple">
          <v-toolbar-title>创建人员</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              name="name"
              label="名称"
              id="name"
              type="text"
            ></v-text-field>
            <v-text-field
              name="age"
              label="年龄"
              id="age"
              type="number"
            ></v-text-field>
            <v-text-field
              name="address"
              label="地址"
              id="address"
              type="text"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark color="pink">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>