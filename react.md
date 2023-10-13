1.What is React?
=> React is a javaScript library that helps user to do code with efficient  and flexibly. It gives isolated work in the one single piece of code "Components".

2.Who made React?
=>React was created by Jordan Walke and He was working on facebook.

3.What is Babel?
=> Bable is JavaScript compilier that helps to understand ECMAscript code into normal language that work in every plateform .


4.How does Babel convert html code in React into valid code?
=> Bable is javaScript Extension (JSX) it convert react code into javaScript code that looks like Html but it is not html it is a javaScript . that work in every browser.


5.What is ReactDOM used for? Write an example?
=> ReactDOM is javaScript library, It helps to render and update usear-interface in web.

   example:-
   function self() {
  return <h1>Hello My Name is Shubham</h1>;
}

ReactDOM.render(
  <self />,
  document.getElementById('root')
);



6.What are the packages that you need to import for react to work with?
=> ReactDOM , Bable 


7.How do you add react to a web application?
=> with the help of exernal library  hrough script tag reactDom, bable and other needed for react.


8.What is React.createElement?
=> React.createElement is used for html code blocks in jsx syntax . 
      example

   const element = React.createElement('div', null, 'Carpe Diem');


9.What are the three properties that createElement accept?
=>  
     React.createElement("tag which you want to creat", props , text )

     const element = React.createElement('div', {className="mySelf"}, 'Carpe Diem');



10.What is the meaning of render and root?
=> Render : it is a method that help jsx code to process for visulization .
  Root : root is a html element in that we have to push our html code through react .
