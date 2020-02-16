<template>
  <div>
    <div class="toggle">
      {{ getLocaleName($i18n.locale) }}
      <b-icon icon="chevron-down" variant="dark" class="ml-1 arrow" />
    </div>
    <select v-model="$i18n.locale">
      <option
        v-for="locale in $i18n.availableLocales.sort()"
        :key="locale"
        :value="locale"
        >{{ getLocaleName(locale) }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  name: 'IcLocaleSelect',
  data() {
    return {
      localesNamesDict: {
        en: 'English',
        pl: 'Polski'
      }
    };
  },
  methods: {
    getLocaleName(locale) {
      return this.localesNamesDict[locale] || locale;
    }
  }
};
</script>

<style lang="scss" scoped>
select,
.toggle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 100%;
  text-transform: uppercase;
  font-weight: 600;
  font-size: $ic-font-size-sm;
  font-family: Arial, Helvetica, sans-serif;
  color: $ic-navy-blue-color;
}
select {
  opacity: 0;
}
.arrow {
  height: 10px;
  width: 10px;
}
</style>
