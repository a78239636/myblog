<template>
  <li> "代办事项：" +  {{ todo.text }}  + "紧急程度" + {{ todo.level }} </li>
</template>

<script>
export default {
  name: "toDoItem",
  props: ['todo']
}
</script>

<style scoped>
</style>