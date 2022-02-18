<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-on:click="add"> 按我添加物品 </button>
    <button v-on:click="minus"> 按我减少物品 </button>
    <div>
      <ul id="myList">
        <li v-for="item in items" v-bind:key="item.message">
          {{item.message}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import 'element-ui/lib/theme-chalk/index.css'



export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      count : 1,
      items : [  ]
    }
  },

  methods : {
      add() {
        this.count++;
        let obn = {message : "物品" + this.count};
        console.log(obn)
        this.items.push(obn)
      },
      minus() {
        this.count--;
      //  let obn = {message : "物品" + this.count};
        this.items.pop();
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
