SLASHMOBILITY CODILITY TEST

CLIENT:

React shop mockup

Layout Components:
 1. Navbar
     Props:
      None
 2. Footer
     Props:
      None

Components:
 1. Button
     Props: 
      1. Children.
      2. Any for default html button tag props.
 2. Modal
     Props:
      None
 3. ItemCard
     Props:
      1. name: name of the article.
      2. price: price of the article.
      3. image: image url.
      4. backgroundColor: buttons backgroundColor.
      5. buttonType: buttons type.
      6. onClick. callback for eventlistener on click


Views:
 1. ShopGrid:
     Props:
      None
    Logic Container: Displays array ItemCards

scripts: 
    yarn sart: runs client in localhost:3000

SERVER:
  
  Express REST API

Routes:
 
 GET --> /items --> returns array with all items
 GET --> /items/:id --> returns signle item
 POST --> /items --> returns array with newly created article in it
 PUT --> /items/:id --> returns array with updated article in it
 DELETE --> /items/:id --> return array without deleted article

 scripts 
  node index.js run server in localhost:5000