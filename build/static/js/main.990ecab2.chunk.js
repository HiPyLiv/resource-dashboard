(this["webpackJsonpresource-dashboard"]=this["webpackJsonpresource-dashboard"]||[]).push([[0],{41:function(t,e,i){},47:function(t,e,i){},52:function(t,e,i){"use strict";i.r(e);var n=i(0),o=i.n(n),a=i(17),s=i.n(a),r=(i(41),i(42),i(32)),d=i(12),l=i(3);var c=function(t){return Object(l.jsx)(r.a,{children:Object(l.jsx)(d.a,{children:Object(l.jsx)(r.a.Brand,{children:"HiPy Resources"})})})},h=i(36),u=i(29),p=i(9),m=i(28),g=i(33),y=i(34),b=i(35);i(47);var k=function(t){var e=t.data;return console.log(e),Object(l.jsx)(d.a,{children:Object(l.jsx)(g.a,{children:Object.keys(e).map((function(t,i){return Object(l.jsx)(y.a,{md:6,lg:4,children:Object(l.jsxs)(p.a,{className:"resource-card",children:[Object(l.jsxs)(p.a.Body,{children:[Object(l.jsx)(p.a.Title,{children:e[t].title}),Object(l.jsx)(p.a.Text,{children:e[t].description})]}),Object(l.jsx)(p.a.Body,{className:"resource-button",children:Object(l.jsx)(p.a.Link,{href:e[t].link,children:Object(l.jsx)(b.a,{children:"Get Started"})})})]},i)})}))})})};var f=function(t){var e=t.data;return console.log(e),Object.keys(e).map((function(t,i){return console.log(e[t])})),Object(l.jsx)(d.a,{children:Object(l.jsx)(m.a,{defaultActiveKey:"0",children:Object.keys(e).map((function(t,i){return Object(l.jsxs)(p.a,{children:[Object(l.jsx)(m.a.Toggle,{as:p.a.Header,eventKey:i.toString(),children:e[t].name}),Object(l.jsx)(m.a.Collapse,{eventKey:i.toString(),children:Object(l.jsx)(k,{data:e[t].cards})})]},i)}))})})},w={python:{Basics:{id:0,name:"Basics",description:"Your Python journey starts here! These resources will provide a solid introduction to Python that will have you automating boring tasks in no time!",cards:{"Getting Started 1":{id:0,title:"Getting Started with Python 1",description:"An introduction to fundamental programing concepts in Python",link:""},"Getting Started 2":{id:1,title:"Getting Started with Python 2",description:"The next steps with Python - getting Python to automate the boring bits!",link:""},"Numpy and Pandas":{id:2,title:"numpy and pandas",description:"Now it's time to learn two of the most powerful Python libraries - numpy and pandas.",link:""}}},"Pure Python":{id:1,name:"Pure Python",description:"An alternative pathway for learning Python that dives deeper into conceptual ideas in the language. Start here if you really want a solid foundation!",cards:{"Getting Started":{id:0,title:"Getting Started",description:"Learn how to get started with Python in your favourite programming environment",link:""},"Numbers and Variables":{id:1,title:"Numbers and Variables",description:"A deep dive into numbers and variables in Python",link:""},"Logic and Flow":{id:2,title:"Logic and Flow",description:"An introduction into using control flow and logical operators with Python",link:""},"Importing Modules":{id:3,title:"Importing Modules",description:"An overview in how modules and project structure works in Python",link:""},"Defining Functions":{id:4,title:"Defining Functions",description:"We take a look at how to define our own functions, some common pitfalls in doing so and some best practices",link:""},"Data Structures":{id:5,title:"Data Structures",description:"Some of the native Python data structures we can use for our projects",link:""},"Command Line Interlude":{id:6,title:"The Command Line",description:"We take a break from Python to take a look at the command line, and how to use it to make our lives easier.",link:""},"Strings and Text":{id:7,title:"Strings and Text",description:"Python is fantastic at manipulating, chopping up and searching for text in a file. In this guide, we take a look how to do that.",link:""},"Importing Data":{id:8,title:"Importing Data",description:"Data comes in all sizes, shapes and formats. Here we look at how we can use Python to import data for use in our code.",link:""},"Advanced Control Flow":{id:9,title:"Advanced Control Flow",description:"We revisit the previous work on control flow and dig a little deeper!",link:""},"Advanced Functions":{id:10,title:"Advanced Functions",description:"We take another look at functions, and how to get the most out of them.",link:""},"Object Orientated Programming":{id:11,title:"Object Orientated Programming Part 1",description:"Object Orientated Programming is a common programming paradigm. In this resource we take a look at it, and begin to use its principles to become master programmers.",link:""},"Object Orientated Programming 2":{id:12,title:"Object Orientated Programming Part 2",description:"OOP is a huge topic, so we had to split it over two guides. Here we finish off looking at what makes OOP so great!",link:""}}},Visualisation:{id:2,name:"Visualisation",description:"A look at some of the data visualisation options within Python to proudly display your findings.",cards:{"Deeper Look at matplotlib":{id:0,title:"A Deeper Look at matplotlib",description:"We take a deeper look at the grandfather Python visualisation library: matplotlib",link:""},"Pandas Builtin":{id:1,title:"Built-in pandas Plotting",description:"Sometimes we want to make a super quick plot without doing a lot of work. Enter pandas' plotting functionality!",link:""},Seaborn:{id:2,title:"Statistical Plotting with seaborn",description:"seaborn allows super suave statistical plots in very little code. Here we look at how to get neat plots from seaborn.",link:""},Bokeh:{id:3,title:"Interactive Plotting with Bokeh",description:"We look at how to make interactive, dynamic plots using bokeh - a library that translates Python code into d3.js visualisations",link:""}}},Sourcing:{id:3,name:"Data Sourcing",description:"A series of different tutorials on how to obtain data from various sources",cards:{"Data from Files":{id:0,title:"Sourcing Data from Files",description:"We look at some of the neat ways Python can help us import data from common file types, by using vanilla Python as well as libraries.",link:""},"Data from Web":{id:1,title:"Sourcing Data from the Web",description:"Sometimes we don't have the data at hand, and want to turn to the internet to gather some. We look at some neat ways to fetch data from internet sources.",link:""}}},Statistics:{id:4,name:"Statistics",description:"A look at traditional statistical analysis using Python",cards:{Intro:{id:0,title:"Introduction to Statistical Analysis in Python",description:"A slow and steady introduction to doing statistics using Python, and the differences between statistics and machine learning.",link:""},"Hypothesis Testing":{id:1,title:"Hypothesis Testing in Python",description:"We look at how to perform perhaps the most common statistical query in Python - the hypothesis test, using scipy.stats.",link:""},ANOVA:{id:2,title:"ANOVA models in Python",description:"We look at more complex statistical models, developing our understanding of scipy.stats and introducing a new library: statsmodels",link:""},Regression:{id:3,title:"Regression models in Python",description:"A very common statistical problem is finding a linear trend using known data. We learn how to do this using Python, scipy.stats and statsmodels.",link:""}}},"Machine Learning":{id:5,name:"Machine Learning",description:"A gentle introduction into the world of machine learning. Train and test models to build programs that save the world!",cards:{Intro:{id:0,title:"Introduction to Machine Learning in Python",description:"We look at what we need to know to start our machine learning journey in Python, and how these methods differ from statistical ones.",link:""},"K Means Clustering":{id:1,title:"K Means Clustering",description:"K Means Clustering is a very common clustering algorithm for grouping unlabelled data. Here we look at how it works and some applications",link:""},"K Nearest Neighbours":{id:2,title:"K Nearest Neighbours",description:"The K Nearest Neighbours algorithm is a super simple algorithm for classification of data. We look at how it works, how to use it and how to choose a value of k.",link:""},"Decision Trees":{id:3,title:"Decision Trees",description:"Decision trees are an intepretable model that has a unique classification footprint. Here we look at what they are and how to use them!",link:""},SVM:{id:4,title:"Support Vector Machines",description:"Support Vector Machines are classification models that split our feature space using a hyperplane. What does any of that mean, and how can we use it? We take a look!",link:""}}}}};var j=function(){return Object(l.jsx)(d.a,{children:Object(l.jsxs)(h.a,{defaultActiveKey:"Python",children:[Object(l.jsxs)(u.a,{eventKey:"Python",title:"Python",children:[Object(l.jsx)("br",{}),Object(l.jsx)(f,{data:w.python})]}),Object(l.jsx)(u.a,{eventKey:"R",title:"R",disabled:!0,children:Object(l.jsx)("br",{})}),Object(l.jsx)(u.a,{eventKey:"JavaScript",title:"JavaScript",disabled:!0,children:Object(l.jsx)("br",{})})]})})};var P=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(c,{}),Object(l.jsx)(j,{})]})},v=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,54)).then((function(e){var i=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,s=e.getTTFB;i(t),n(t),o(t),a(t),s(t)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root")),v()}},[[52,1,2]]]);
//# sourceMappingURL=main.990ecab2.chunk.js.map