<template>
  <div id="portfolio1">
    <h1>{{portfolioName}} Portfolio</h1>
    <p>Owner: {{owner}}</p>
    <h2>Holdings:</h2>
    <div :key="holding.id" v-for="holding in holdings" align="left" class="holding-container" v-bind:class="setColorAlert(holding.currentPrice, calculateStopLossPrice(holding.lastHighPrice, holding.stopLossPercent))" v-on:click="toggleExpand(holding)">
      <strong>{{holding.ticker}}</strong><br><span v-bind:class="[holding.expanded ? '' : 'hidden']">Current Price: {{holding.currentPrice}}<br>Stop-loss Price: {{calculateStopLossPrice(holding.lastHighPrice, holding.stopLossPercent)}}<br>Stop-loss %: {{holding.stopLossPercent}}</span>
    </div>
  </div>
</template>

<script>
import PortfolioMethods from './PortfolioMethods'

export default {
  name: 'portfolio1', //this is the name of the component
  extends: PortfolioMethods,
  data(){
    return {
      portfolioName: "Fidelity",
      owner: "Paul",
      allocation: "tba",
      holdings: [
        {
          id: 0,
          ticker: 'EAF',
          lastHighPrice: 100,
          currentPrice: 75.00,
          stopLossPercent: 25,          
          expanded: false   
        },
        {
          id: 1,
          ticker: 'TCEHY',
          lastHighPrice: 100,
          currentPrice: 90.00,
          stopLossPercent: 25,          
          expanded: false 
        },
        {
          id: 2,
          ticker: 'NGD',
          lastHighPrice: 100,
          currentPrice: 101.00,
          stopLossPercent: 25,          
          expanded: false 
        },
        {
          id: 3,
          ticker: 'AG',
          lastHighPrice: 100,
          currentPrice: 10.00,
          stopLossPercent: 25,          
          expanded: false 
        },
        {
          id: 4,
          ticker: 'OSTK',
          lastHighPrice: 100,
          currentPrice: 10.00,
          stopLossPercent: 25,          
          expanded: false 
        },
        {
          id: 5,
          ticker: 'TRQ',
          lastHighPrice: 100,
          currentPrice: 10.00,
          stopLossPercent: 25,          
          expanded: false 
        },
        {
          id: 6,
          ticker: 'CCJ',
          lastHighPrice: 100,
          currentPrice: 10.00,
          stopLossPercent: 25,          
          expanded: false 
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>
<style>
.holding-container {
  margin-bottom:10px;
  padding: 5px;
}
.good {
  background-color:#BDFCB9;
}
.warning {
  background-color:#FCF5B9;
}
.danger {
  background-color:#FCB9B9;
}
.hidden {
  display:none;
}
</style>