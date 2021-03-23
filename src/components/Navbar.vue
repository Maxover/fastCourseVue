<template>
    <v-container fluid>
      <v-app-bar
          color="orange"
          dark
      >
        <v-spacer/> <!--Заполняет всё пространство и сдвинет наши кнопки вправо-->
        <v-btn outlined class="ml-3">
          <router-link to="/">Главная</router-link>  <!--оживляем наши кнопки-->
        </v-btn> <!--outlined убирает цвет фона кнопки а ml-3 margin-left-->
        <v-btn outlined class="ml-3">
          <router-link to="/photo">Фотографии</router-link>  <!--оживляем наши кнопки-->
        </v-btn>

      </v-app-bar>
    </v-container>

</template>

<script>
export default {

}
</script>

<style scoped>

</style>