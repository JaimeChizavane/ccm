<template>
  <router-view/>
</template>

<script>


export default {
  name: 'App',
  mounted() {
    document.getElementById('loading').style.display = 'none'
  }
}
</script>
