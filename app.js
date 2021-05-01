var cartvalue =document.getElementById("cart-value") ;
var cartbutton=document.getElementById("cart") ;

var book1add=document.getElementById("book 1") ;
var book2add=document.getElementById("book 2") ;
var book3add=document.getElementById("book 3") ;
var book4add=document.getElementById("book 4") ;
var book5add=document.getElementById("book 5") ;
var book6add=document.getElementById("book 6") ;

var game1add=document.getElementById("game 1") ;
var game2add=document.getElementById("game 3") ;
var game3add=document.getElementById("game 3") ;
var game4add=document.getElementById("game 4") ;

var craft1add=document.getElementById("craft 1") ;
var craft2add=document.getElementById("craft 2") ;
var craft3add=document.getElementById("craft 3") ;
var craft4add=document.getElementById("craft 4") ;


console.log(book1Add) ;


var book1 = {
    name:"This was pact" ,
    quantity : 0,
    dollars : 7,
    cents :49,
} ;

var book2 = {
    name:"The famous five " ,
    quantity : 0,
    dollars : 4 ,
    cents :59,
} ;

var book3 = {
    name:"Matlida" ,
    quantity : 0,
    dollars :  6,
    cents :80 ,
} ;

var book4 = {
    name:"Harry potter" ,
    quantity : 0,
    dollars : 10,
    cents :0 ,
} ;

var book5 = {
    name:"For Young Readers" ,
    quantity : 0,
    dollars : 7 ,
    cents : 29 ,
} ;

var book6 = {
    name:"Wimpy Kid - DIY" ,
    quantity : 0,
    dollars : 4,
    cents :99,
} ;




var game1 = {
    name:"Dart Board" ,
    quantity : 0,
    dollars : 17 ,
    cents :49,
} ;


var game2 = {
    name:"Connect 4" ,
    quantity : 0,
    dollars : 19 ,
    cents : 99,
} ;


var game3 = {
    name:"Jenga" ,
    quantity : 0,
    dollars :20  ,
    cents : 99 ,
} ;


var game4 = {
    name:"Monopoly" ,
    quantity : 0,
    dollars : 19 ,
    cents : 49 ,
} ;



var craft1 = {
    name:"BOOK MARKS" ,
    quantity : 0,
    dollars : 14 ,
    cents : 29 ,
} ;

var craft2 = {
    name: " Birthday Card " ,
    quantity : 0,
    dollars : 19 ,
    cents : 99 ,
} ;

var craft3 = {
    name:"Stuffed toys" ,
    quantity : 0,
    dollars : 15 ,
    cents : 99 ,
} ;

var craft4 = {
    name:"Dream catcher drawing" ,
    quantity : 0,
    dollars : 18 ,
    cents : 49  ,
} ;


function updateCart() 
 {
    cart = 
      book1.quantity +
      book2.quantity +
      book3.quantity +
      book4.quantity +
      book5.quantity +
      book6.quantity +       
      game1.quantity +
      game2.quantity +
      game3.quantity +
      game4.quantity +
      craft1.quantity +
      craft2.quantity +
      craft3.quantity +
      craft4.quantity;
    cartValue.innerHTML = cart;  
             
 }




book1Add.onclick=(e) => {
    book1.quantity++;
    updateCart();
} ;                


book2Add.onclick=(e) => {
    book2.quantity++;
    updateCart();
} ;  

book3Add.onclick=(e) => {
    book3.quantity++;
    updateCart();
} ;  

book4Add.onclick=(e) => {
    book4.quantity++;
    updateCart();
} ;  
book5Add.onclick=(e) => {
    book5.quantity++;
    updateCart();
} ;  
book6Add.onclick=(e) => {
    book6.quantity++;
    updateCart();
} ;  



  
game1Add.onclick=(e) => {
    game1.quantity++;
    updateCart();
} ;
  
game2Add.onclick = (e)  => {
    game2.quantity++;
    updateCart();
} ;
  
game3Add.onclick = (e) => {
    game3.quantity++;
    updateCart();
} ;
  
game4Add.onclick = (e) => {
    game4.quantity++;
    updateCart();
} ;


  
craft1Add.onclick = (e) => {
     craft1.quantity++;
    updateCart();
} ;
  
craft2Add.onclick = (e) => {
     craft2.quantity++;
    updateCart();
} ;
  
craft3Add.onclick = (e) => {
     craft3.quantity++;
    updateCart();
} ;
  
craft4Add.onclick = (e) => {
     craft4.quantity++;
    updateCart();
} ;

 




