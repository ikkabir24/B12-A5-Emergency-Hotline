### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans: 
.getElementById('') selects an element in JavaScript file on the basis of an unique id attribute of an element. It selects a single element as id attribute is unique in a whole web page. If nothing is found by searching with it, it returns null.

getElementsByClassName('') selects all of the elements in basis of the same class name existing in a webpage in JavaScript file. If found it returns HTML collection which is an Array like Object, that means not actually Array but acts like one. If nothing is found, it returns empty HTML collection. HTML collection is live.

querySelector('') selects only the first matched css selector. If found it returns an object with only one element. if nothing is found it returns null. 

querySelectorAll('') is similar to querySelector the difference is it selects all the found matches and returns them as a Nodelist, which is also an Array like Object similar to HTML collection but not live rather Nodelist is static. If any match is not found it returns an empty Nodelist.


2. How do you **create and insert a new element into the DOM**?
ans:
first method:

first step: Create an html element with createElement()
    ex- const newPara = document.createElement('p');

second step: Add content on that element
    ex- newPara.innerText = 'DOM r Event a amar dom ber korar event banaya charche vai.';

third step: append the new element in the html file (here I'm adding it to the body of an HTML file)
    ex- document.body.appendChild(newPara);

another method:

first step: create an element
    ex- const div = document.createElement('div');

second step: use innerHTML
    ex- div.innerHTML = `<p>DOM r Event a amar dom ber korar event banaya charche vai.</p>`

third step: append the element into the html file (same as before)
    ex- document.body.appendChild(div)


3. What is **Event Bubbling** and how does it work?
ans-
Event bubbling means an event starting from the target element that triggered it and then gradually propagating through the parent elements in the DOM higherarchy untill it reaches at the document object.

    ex- 
    (bubbling phase)
    (target) button > div > body > html > document

    (capturing phase)
    (target) button < div < body < html < document 

4. What is **Event Delegation** in JavaScript? Why is it useful?
ans:
Event Delegation means putting one event listener on a parent element to handle events that happen on its children. this pattern is made possible by event bubbling. Without it, each child of a common parent must have a separate event listener which might be troublesome if a parent element has suppose two or three child elements.

It is efficient and saves memory. It works for dynamic element. Moreover it's easier to manage.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
ans:
Calling for preventDefault stops the default behavior of browser, whereas calling for stopPropagation prevents an event to bubble up the dom tree.

    ex- 
    preventDefault(): A button element on a form usually makes a webpage reload when clicked, this is a default behavior of a browser. Calling for preventDefault prevents this default behavior.

    stopPropagation(): If you click a button inside a div element, the click event will bubble up to the div then the body then so on... etc. Calling for stop propagation in the button is like to command the button, "Don't tell your parent that you were clicked."

