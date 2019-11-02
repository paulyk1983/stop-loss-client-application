<template>
  <div>
    <nav>
      <router-link class="spacing" v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Hello World',
          page:'/hello-world'
        },
        {
          id: 1,
          text: 'Home',
          page:'/'
        },
        {
          id: 2,
          text: 'Portfolio 1',
          page:'/portfolio/1'
        },
        {
          id: 3,
          text: 'Portfolio 2',
          page:'/portfolio/2'
        }
      ]
    }
  }
}
</script>
<style>
.spacing {
  margin-right: 10px;
}
</style>