<template>
  <div>
    <ic-auth-navbar />
    <h1 class="ic-app-logo">{{ $root.appName }}</h1>
    <router-view />
  </div>
</template>

<script>
import IcAuthNavbar from '@/components/auth/IcAuthNavbar';

export default {
  name: 'Auth',
  components: { IcAuthNavbar }
};
</script>

<style lang="scss" scoped></style>
