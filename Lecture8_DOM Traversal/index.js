
const headings = document.querySelectorAll("h2")
undefined
headings
// NodeList(2) [h2, h2]0: h21: h2length: 2[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
// const firstHeading = headings[0]
undefined

firstHeading
{/* <h2 style=​"user-select:​ auto;​">​List of amazing Fruits​</h2>​
const secondHeading = headings[1] */}
undefined

secondHeading
{/* <h2 style=​"user-select:​ auto;​">​Amazing places in Kenya​</h2>​
document.querySelector(".orange").innerHTML
'Oranges' */}

const appleList = document.querySelector(".apple-list")
undefined
appleList.children
// HTMLCollection(5) [li.apple, li.orange, li.avocado, li.grape, li.banana]
// appleList.childNodes
// NodeList(11) [text, li.apple, text, li.orange, text, li.avocado, text, li.grape, text, li.banana, text]
// appleList.firstChild
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:5500/Lecture8_DOM%20Traversal/index.html"childNodes: NodeList []data: "\n                    "firstChild: nullisConnected: truelastChild: nulllength: 21nextElementSibling: li.applenextSibling: li.applenodeName: "#text"nodeType: 3nodeValue: "\n                    "ownerDocument: documentparentElement: ul.apple-listparentNode: ul.apple-listpreviousElementSibling: nullpreviousSibling: nulltextContent: "\n                    "wholeText: "\n                    "[[Prototype]]: Text

appleList.firstChild.inner
undefined
appleList.last
undefined
appleList.lastChild
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:5500/Lecture8_DOM%20Traversal/index.html"childNodes: NodeList []data: "\n                "firstChild: nullisConnected: truelastChild: nulllength: 17nextElementSibling: nullnextSibling: nullnodeName: "#text"nodeType: 3nodeValue: "\n                "ownerDocument: documentparentElement: ul.apple-listparentNode: ul.apple-listpreviousElementSibling: li.bananapreviousSibling: li.bananatextContent: "\n                "wholeText: "\n                "[[Prototype]]: Text
// appleList.parentElement
// <div class=​"wrapper-1" style=​"user-select:​ auto;​">​<ul class=​"apple-list" style=​"user-select:​ auto;​">​…​</ul>​<button class=​"btn-1" fdprocessedid=​"y5shyq" style=​"user-select:​ auto;​">​Read full list ​</button>​</div>​
// appleList.parentNode
// <div class=​"wrapper-1" style=​"user-select:​ auto;​">​<ul class=​"apple-list" style=​"user-select:​ auto;​">​…​</ul>​<button class=​"btn-1" fdprocessedid=​"y5shyq" style=​"user-select:​ auto;​">​Read full list ​</button>​</div>​

const btn1 = document.querySelector(".btn-1")
undefined
btn1.closest
// ƒ closest() { [native code] }
btn1
{/* <button class=​"btn-1" fdprocessedid=​"y5shyq" style=​"user-select:​ auto;​">​Read full list ​</button>​ */}

const orange = document.querySelector(".orange")
undefined
const avocado = orange.nextElementSibling
undefined

avocado
{/* <li class=​"avocado" style=​"user-select:​ auto;​">​::marker​"Avaocado"</li>​ */}