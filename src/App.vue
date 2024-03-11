<template>
  <header class="header">
    <h1>Список задач</h1>
    <nav>
      <router-link to="/"> На главную </router-link>
      <router-link to="/task-list"> К списку задач </router-link>
    </nav>
  </header>
  <div class="container">
    <router-view/>
  </div>
</template>
<style scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 10px ;
  border-bottom: 1px solid #000;
  box-sizing: border-box;
  margin: 0;
}
.header a{
  color: #000;
  text-decoration: none;
}
.header a:hover{
  text-decoration: underline;
}
nav{
  display: flex;
  gap: 1rem;

}
</style>


