<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle>
            {{ name }}님 환영합니다~
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
      <v-btn @click="logout">로그아웃</v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
      푸터!!
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { text: "Home", icon: "home", to: "/" },
      { text: "About", icon: "info", to: "/about" },
      { text: "Board", icon: "table_rows", to: "/board" },
    ],
  }),

  computed: {
    ...mapGetters("user", ["name"]),
  },

  methods: {
    ...mapActions("user", ["initUser"]),

    logout() {
      if (confirm("로그아웃 하시겠습니까?")) {
        this.initUser();
      }
    },
  },
};
</script>

<style></style>
