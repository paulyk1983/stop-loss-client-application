<script>

export default {
  name: 'portfolioMethods', //this is the name of the component
  
  methods: {
    toggleExpand: function (holding) {
      // `this` inside methods points to the Vue instance
      // alert('Hello ' + this.owner + '!')

      if(holding.expanded){
         holding.expanded = false;
       }else{
         holding.expanded = true;
       }
    },


    // LOGIC TO BE REPLACED BY API
    calculateStopLossPrice: function (lastHighPrice, stopLossPercent) {
      var stopLossPrice = (lastHighPrice - (lastHighPrice * (stopLossPercent/100)));
      return stopLossPrice;
    },

    setColorAlert: function (currentPrice, stopLossPrice) {
      var warningPercent = 0.2;
      var warningPrice = (stopLossPrice * warningPercent) + stopLossPrice;
      if (currentPrice <= stopLossPrice) {
        return "danger"
      } else if (currentPrice <= warningPrice) {
        return "warning"
      } else {
        return "good"
      }

      // if current price is 30 percent away from stoploss price
      // 10 * .5 = 5
      // WHERE STOPLOSS IS 5 AND CURRENT IS 10
      // IF STOPLOSS <= (CURRENT - (CURRENT * .3))
      //
    }
  }
}
</script>