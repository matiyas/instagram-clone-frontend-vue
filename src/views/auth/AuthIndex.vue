<template>
  <b-container class="ic-auth-container">
    <div class="ic-auth-box">
      <h1 class="ic-app-logo margin-bottom">{{ $root.appName }}</h1>
      <div class="top-text margin-bottom">
        {{ $t('views.auth.AuthIndex.topText') }}
      </div>
      <b-button size="sm" variant="primary" class="login-btn margin-bottom">
        {{ $t('general.logIn') }}
      </b-button>
      <ic-separator-with-text :text="$t('general.or')" class="margin-bottom" />
      <b-link :to="{ name: 'auth_signup_path' }" class="signup-link">
        {{ $t('views.auth.AuthIndex.signupText') }}
      </b-link>
      <ic-auth-footer />
    </div>
  </b-container>
</template>

<script>
import IcSeparatorWithText from '@/components/IcSeparatorWithText';
import IcAuthFooter from '@/components/auth/IcAuthFooter';

export default {
  name: 'AuthIndex',
  components: { IcSeparatorWithText, IcAuthFooter }
};
</script>

<style lang="scss" scoped>
.margin-bottom {
  margin-bottom: $ic-space-4;
}
.top-text {
  color: $ic-grey-color;
}
.login-btn {
  width: 100%;
}
.signup-link {
  font-weight: 600;
}
</style>
