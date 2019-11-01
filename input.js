function getValue(){
    var customerOrder = document.getElementById('fastFoodApp');
    var x = document.getElementById('food').value;
    var z = document.getElementById('qty').value;
    customerOrder.innerHTML=x +  z;
    console.log(customerOrder);
    var customerOrder = "food, qty";
    var myArray = customerOrder.split(",");
}


function clearText()  
{
    document.getElementById('food').value = "";
    document.getElementById('qty').value = "";
}  
//object named menu, properties i.e. string like "fries", number as the value
var menu = new Object();
menu.fries = 45;
menu.hamburger = 50;
menu.cheeseburger= 30;
menu.shakes= 25;


/*Fast Food app Frontend - Exercise 1
Create an html text input box, our customers are going to put their orders in here. Their orders are going to look like: "1: french fries, 2: shakes"
Add an order button. When we click this button it will send our order to the kitchen.
Attach a Javascript event listener to the order button and listen for the click event. We are going to need to query the order button and then attach the event listener to it.
In the listener take the customer's order and save it to a variable named customerOrder. log the customer's order to the console.
Clear the contents in the input box. We want to free it up for the next customer's order
Bonus Make a string with the customer's order in it and repeat back to the customer what they ordered. */

/*Fast Food app Frontend - Exercise 2
Create an object named menu where we'll save the menu for the restaurant. For each property Each property should be a string like "fries" and add a number as the value. That will be the amount of stock the store has.
Take the customerOrder variable, which should be a string and split it on the comma character. Save the result to the order array variable. This will turn it into an array that is comma delimeted. Because usually there is a space after a comma we are going to need to trim the white space. This will make it so there is no extra white space.
Create a loop can be any kind of loop, while, for, foreach whatever you are comfortable with. Loop through the entire order array from 0 to the length of the array
In the loop split each item of this array on the colon character. You will probably have to trim the leading and trailing whitespace again.
Now that we have the customer's item they would like to order, create a conditional if statement and check to see if the customer actually ordered something off of the menu. This is going to require a for...in loop to loop through the menu object. Just check to see if the property exists. If it doesn't exist log to the console how the customer did not order something off of the menu.
If the previous statement was true make another conditional statement that checks to see if there is enough stock in the restaurant to fulfill the customer's order. If there is not enough, then let the customer know that you can not fulfill that particular order.
If the customer ordered something on the menu and it is in stock then deduct the number the customer ordered from the restaurant's stock.
Bonus Create a button that you could click to display the restaurant's inventory. */