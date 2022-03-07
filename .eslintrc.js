/*
 * @Author: Zhangqilei
 * @Date: 2022-03-07 09:29:07
 * @LastEditors: Zhangqilei
 * @LastEditTime: 2022-03-07 10:08:13
 * @Description: 
 * 
 */

module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/vue3-recommended',
        // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {

        'vue/valid-v-slot': ['error', {
            allowModifiers: true,
        }],

    }
}