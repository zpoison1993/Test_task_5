<template lang="pug">
    header.header
        .container.header__container
            .header__column.header__column--left
                .user-info.header__col-content
                    .user-info__avatar-frame
                        img(src="../../images/content/user_logo.png" alt="Логотип горного клуба").avatar
                    .user-info__text
                    .user-info__name CARABIN
                    // a(href="").quit-btn.quit-btn--phone Выйти
                .admin-desc Горный клуб
            .header__column.header__column--right
                // a(href="#" @click='exit').quit-btn Выйти
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {

  methods: {
    exit() {
    localStorage.removeItem("token");
    window.location.href= '/login';
    location.reload()

    
    }
  }
}
</script>