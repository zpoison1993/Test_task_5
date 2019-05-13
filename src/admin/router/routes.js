export default [
    {
      path: "/",
      component: () => import("../components/pages/aboutMe.vue"),
      meta: {
        title: "Добро пожаловать в элитный горный клуб CARABIN",
        public: true
      }
    },
    {
      path: "/works",
      component: () => import("../components/pages/works2.vue"),
      meta: {
        title: "Регистрация"
      }
    },
    {
      path: "/reviews",
      component: () => import("../components/pages/reviews2.vue"),
      meta: {
        title: "Наша Команда"
      }
    },
    {
      path: "/login",
      component: () => import("../components/pages/login.vue"),
      meta: {
        title: "Авторизация"
        // public: true
      }
    }
  ];