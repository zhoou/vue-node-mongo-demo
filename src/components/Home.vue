<template>
  <div class="container">
    <mt-header title="long long long long title">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'VHome',
  data () {
    return {}
  }
}
</script>
