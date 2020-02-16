<template>
  <footer>
    <span class="upper-text">from</span>
    <span class="bottom-text">FACEBOOK</span>
  </footer>
</template>

<script>
export default {
  name: 'IcAuthFooter'
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-top: 1px solid $ic-the-lightest-grey-color;
  background-color: $ic-snow-color;
}
.upper-text {
  color: $ic-grey-color;
  font-size: $ic-font-size-xs;
}
.bottom-text {
  font-weight: 600;
}
</style>
