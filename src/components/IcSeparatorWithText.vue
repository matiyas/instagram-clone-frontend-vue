<template>
  <div class="separator">
    <div class="line" />
    <div class="or-text">{{ text }}</div>
    <div class="line" />
  </div>
</template>

<script>
export default {
  name: 'IcSeparatorWithText',
  props: {
    text: String
  }
};
</script>

<style lang="scss" scoped>
.separator {
  display: flex;
  align-items: center;
}
.line {
  background-color: $ic-the-lightest-grey-color;
  height: 1px;
  flex-grow: 1;
}
.or-text {
  color: $ic-grey-color;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 $ic-space-3;
}
</style>
