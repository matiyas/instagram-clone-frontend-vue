<template>
  <nav>
    <b-icon icon="three-dots" variant="secondary" class="menu-btn" />
    <ic-locale-select class="w-100" />
  </nav>
</template>

<script>
import IcLocaleSelect from '@/components/IcLocaleSelect';

export default {
  name: 'IcAuthNavbar',
  components: { IcLocaleSelect }
};
</script>

<style lang="scss" scoped>
nav {
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-btn {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 0;
  height: 20px;
  width: 20px;
}
</style>
