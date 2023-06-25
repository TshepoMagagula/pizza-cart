
function pizzaCart(){
    return{
        smallTotal: 0,
        mediumTotal: 0,
        largeTotal: 0,
        totalCost: 0,
        addPizza(){

        },
        subPizza(){

        },
        pizzaTotalCost(){
            this.totalCost = this.smallTotal + this.mediumTotal + this.largeTotal;
            
        }

    }
}