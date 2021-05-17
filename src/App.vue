<template>
  <v-app app>
    <v-main class="custom-bg">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html {
  overflow-y: auto !important;
}

.custom-bg {
  background-color: #cccccc;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23cccccc' width='11' height='11'/%3E%3Crect fill='%23cccdcd' x='10' width='11' height='11'/%3E%3Crect fill='%23cdcece' y='10' width='11' height='11'/%3E%3Crect fill='%23cdcecf' x='20' width='11' height='11'/%3E%3Crect fill='%23cecfcf' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23ced0d0' y='20' width='11' height='11'/%3E%3Crect fill='%23cfd1d1' x='30' width='11' height='11'/%3E%3Crect fill='%23cfd1d2' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23d0d2d3' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23d0d3d4' y='30' width='11' height='11'/%3E%3Crect fill='%23d0d4d4' x='40' width='11' height='11'/%3E%3Crect fill='%23d1d5d5' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23d1d5d6' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23d2d6d7' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23d2d7d8' y='40' width='11' height='11'/%3E%3Crect fill='%23d3d8d9' x='50' width='11' height='11'/%3E%3Crect fill='%23d3d9da' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23d4d9da' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23d4dadb' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23d4dbdc' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23d5dcdd' y='50' width='11' height='11'/%3E%3Crect fill='%23d5ddde' x='60' width='11' height='11'/%3E%3Crect fill='%23d6dddf' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23d6dee0' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23d7dfe0' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23d7e0e1' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23d8e1e2' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23d8e1e3' x='70' width='11' height='11'/%3E%3Crect fill='%23d8e2e4' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23d9e3e5' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23d9e4e6' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23dae4e7' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23dae5e7' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23dbe6e8' x='80' width='11' height='11'/%3E%3Crect fill='%23dbe7e9' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23dce8ea' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23dce8eb' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23dce9ec' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23ddeaed' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23ddebed' x='90' width='11' height='11'/%3E%3Crect fill='%23deecee' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23deecef' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23dfedf0' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23dfeef1' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23dfeff2' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23e0f0f3' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23e0f1f4' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23e1f1f4' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23e1f2f5' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23e2f3f6' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23e2f4f7' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23e3f5f8' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23e3f5f9' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23e3f6fa' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23e4f7fb' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23e4f8fb' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23e5f9fc' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23e5f9fd' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23e6fafe' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23e6fbff' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>
