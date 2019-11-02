<template>
  <div>
    <h2>{{portfolioName}} Portfolio</h2>
  <p>Owner: {{owner}}
  </p>
  </div>
</template>

<script>
export default {
  name: 'portfolio-2',
  data(){
    return {
      portfolioName: "Vanguard",
      owner: "Kathy",
      allocation: "tba",     
    }
  }
}
</script>