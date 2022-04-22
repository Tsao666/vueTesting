<template>
  <nav>
    <a id="home">Home</a>
    <a id="profile" v-if="isLoggin">My Profile</a>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      isLoggin: false
    }
  }
}
</script>