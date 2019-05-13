<template lang="pug">
    section.tabs
        .container.tabs__container
            ul.tabs
                router-link.tabs__item(
                v-for="(route, index) in routes"
                :key="index"
                tag="li"
                :to="route.path"
                )
                    a(href="").tabs__link {{route.title}}
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          title: "Главная",
          path: "/"
        },
        {
          title: "Регистрация",
          path: "/works"
        },
        {
          title: "Вход",
          path: "/login"
        },
        {
          title: "Команда",
          path: "/reviews"
        }
      ]
    };
  }
};
</script>

<style lang="postcss">
.router-link-exact-active {
        font-weight: 600;
        color:#676e80;
        border-style: solid;
        border-width: 0px 0px 5px 0px;
        border-color: $carabin-color;
}
    
</style>