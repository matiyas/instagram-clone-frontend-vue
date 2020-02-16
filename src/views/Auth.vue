<template>
  <div>
    <ic-auth-navbar />
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
