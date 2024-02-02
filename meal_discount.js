/* 
problem:
12 down age get free meal
60 up age get 50% discount 
others give full price 
*/

const age = 61;
const mealPrice = 1000;

if(age < 12){
    // if age under 12 year then get free meal 
    const discountMealPrice = mealPrice * 100 / 100;
    const payMealPrice = mealPrice - discountMealPrice;
    console.log("Your bill:", payMealPrice);
}else if(age >= 50 && age <= 60){
    // if age between 50 to 60 year then get 25% discount 
    const discountMealPrice = mealPrice * 25 / 100;
    const payMealPrice = mealPrice - discountMealPrice;
    console.log("Your bill:", payMealPrice);
}
else if(age > 60){
    // if age upper 60 year then get 50% discount 
    const discountMealPrice = mealPrice * 50 / 100;
    const payMealPrice = mealPrice - discountMealPrice;
    console.log("Your bill:", payMealPrice);
}else{
    console.log("Your bill:", mealPrice);
}