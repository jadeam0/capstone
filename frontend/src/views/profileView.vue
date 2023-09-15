<template>
  <div class="background">
    <h2>Profile</h2>
    <img class="img-fluid" :src="userProfile">
    <div class="profile">
      <h4>Welcome, {{ fullName }}</h4>
      <h4>{{ emailAdd }}</h4>
      <h4>{{ userRole }}</h4>
      <router-link to="/login" @click="logout()">Logout</router-link>
    </div>
  </div>
</template>

<script>
import router from '@/router';
export default {
  computed: {
    userProfile() {
      return this.$store.state.user?.userProfile || '';
    },
    fullName() {
      const user = this.$store.state.user;
      return user ? `${user.firstName} ${user.lastName}` : '';
    },
    emailAdd() {
      return this.$store.state.user?.emailAdd || '';
    },
    userRole() {
      return this.$store.state.user?.userRole || '';
    },
  },

  mounted: {
    logout() {
      this.$store.dispatch("logout", id);
      this.$router.push('/profile')
    }
  }
};
</script>

<style scoped>
img {
  width: 50vh;
  height: auto;
  border-radius: 30px;
}

.profile {
  padding-top: 30px;
}
</style>