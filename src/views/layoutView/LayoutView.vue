<template>
  <v-app>
    <v-navigation-drawer app>
      asdasdsaasddasads
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
      v-app-bar
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      main!!
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
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { text: "Home", icon: "home", to: "/" },
      { text: "About", icon: "info", to: "/about" },
    ],
  }),
};
</script>

<style></style>
