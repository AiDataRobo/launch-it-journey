
import React from 'react';
import { Code, Database, LineChart, Server, Globe, Fingerprint, Network, ThumbsUp } from 'lucide-react';
import { SkillCategory, Quiz, LeaderboardItem } from './types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Front-end and back-end web development technologies',
    icon: <Code className="w-5 h-5 text-white" />,
    colorClass: 'bg-blue-500 text-white',
    timeLimit: 20,
    questions: 15,
    difficulty: 'Beginner',
    practiceModeAvailable: true
  },
  {
    id: 'data-structures',
    title: 'Data Structures & Algorithms',
    description: 'Problem solving and algorithmic thinking',
    icon: <LineChart className="w-5 h-5 text-white" />,
    colorClass: 'bg-purple-500 text-white',
    timeLimit: 30,
    questions: 15,
    difficulty: 'Intermediate',
    practiceModeAvailable: true
  },
  {
    id: 'databases',
    title: 'SQL & Databases',
    description: 'Database design, queries, and optimization',
    icon: <Database className="w-5 h-5 text-white" />,
    colorClass: 'bg-orange-500 text-white',
    timeLimit: 25,
    questions: 15,
    difficulty: 'Beginner',
    practiceModeAvailable: true
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    description: 'CI/CD pipelines and cloud infrastructure',
    icon: <Server className="w-5 h-5 text-white" />,
    colorClass: 'bg-green-500 text-white',
    timeLimit: 30,
    questions: 15,
    difficulty: 'Advanced',
    practiceModeAvailable: false
  },
  {
    id: 'frontend',
    title: 'Frontend Frameworks',
    description: 'React, Vue.js, Angular, and more',
    icon: <Globe className="w-5 h-5 text-white" />,
    colorClass: 'bg-blue-400 text-white',
    timeLimit: 25,
    questions: 15,
    difficulty: 'Intermediate',
    practiceModeAvailable: true
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    description: 'Web security practices and concepts',
    icon: <Fingerprint className="w-5 h-5 text-white" />,
    colorClass: 'bg-red-500 text-white',
    timeLimit: 30,
    questions: 15,
    difficulty: 'Advanced',
    practiceModeAvailable: false
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Network protocols and architecture',
    icon: <Network className="w-5 h-5 text-white" />,
    colorClass: 'bg-indigo-500 text-white',
    timeLimit: 20,
    questions: 15,
    difficulty: 'Intermediate',
    practiceModeAvailable: false
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    description: 'Communication and teamwork in tech',
    icon: <ThumbsUp className="w-5 h-5 text-white" />,
    colorClass: 'bg-pink-500 text-white',
    timeLimit: 15,
    questions: 15,
    difficulty: 'Beginner',
    practiceModeAvailable: true
  }
];

// Sample quiz questions
export const quizzes: Quiz[] = [
  {
    id: 'web-dev-quiz',
    categoryId: 'web-development',
    title: 'Web Development Assessment',
    description: 'Test your knowledge of HTML, CSS, and JavaScript',
    timeLimit: 20,
    passingScore: 70,
    questions: [
      // Web Development questions - starting with original 8 questions
      {
        question: 'Which CSS property is used to change the text color?',
        answers: [
          { id: 'a', text: 'text-style' },
          { id: 'b', text: 'color' },
          { id: 'c', text: 'font-color' },
          { id: 'd', text: 'text-color' }
        ],
        correctAnswer: 'b',
        explanation: 'The CSS property "color" is used to set the color of text.'
      },
      {
        question: 'Which HTML element is used to create a hyperlink?',
        answers: [
          { id: 'a', text: '<link>' },
          { id: 'b', text: '<a>' },
          { id: 'c', text: '<href>' },
          { id: 'd', text: '<url>' }
        ],
        correctAnswer: 'b',
        explanation: 'The <a> element with an href attribute creates a hyperlink.'
      },
      {
        question: 'What does the following JavaScript code return? Array(3).fill().map((_, i) => i)',
        code: 'Array(3).fill().map((_, i) => i)',
        answers: [
          { id: 'a', text: '[0, 1, 2]' },
          { id: 'b', text: '[1, 2, 3]' },
          { id: 'c', text: '[undefined, undefined, undefined]' },
          { id: 'd', text: '[null, null, null]' }
        ],
        correctAnswer: 'a',
        explanation: 'This creates an array with 3 elements, fills it with undefined values, then maps each element to its index.'
      },
      {
        question: 'Which of the following is NOT a valid CSS selector?',
        answers: [
          { id: 'a', text: '.class-name' },
          { id: 'b', text: '#id-name' },
          { id: 'c', text: '*element' },
          { id: 'd', text: 'div > p' }
        ],
        correctAnswer: 'c',
        explanation: '*element is not a valid CSS selector. The universal selector is just the asterisk (*) by itself.'
      },
      {
        question: 'What is the output of the following JavaScript code?',
        code: 'console.log(typeof null)',
        answers: [
          { id: 'a', text: '"null"' },
          { id: 'b', text: '"undefined"' },
          { id: 'c', text: '"object"' },
          { id: 'd', text: '"string"' }
        ],
        correctAnswer: 'c',
        explanation: 'In JavaScript, typeof null returns "object", which is considered a historical bug in the language.'
      },
      {
        question: 'Which CSS property is used to create space around an element\'s content, inside of any defined borders?',
        answers: [
          { id: 'a', text: 'margin' },
          { id: 'b', text: 'padding' },
          { id: 'c', text: 'spacing' },
          { id: 'd', text: 'border-spacing' }
        ],
        correctAnswer: 'b',
        explanation: 'The padding property creates space around an element\'s content, inside of any defined borders.'
      },
      {
        question: 'What is the correct way to write a JavaScript array?',
        answers: [
          { id: 'a', text: 'var colors = "red", "green", "blue"' },
          { id: 'b', text: 'var colors = (1:"red", 2:"green", 3:"blue")' },
          { id: 'c', text: 'var colors = ["red", "green", "blue"]' },
          { id: 'd', text: 'var colors = {red, green, blue}' }
        ],
        correctAnswer: 'c',
        explanation: 'JavaScript arrays are written with square brackets, and array items are separated by commas.'
      },
      {
        question: 'Which function is used to parse a string to an integer in JavaScript?',
        answers: [
          { id: 'a', text: 'Integer.parse()' },
          { id: 'b', text: 'parseInt()' },
          { id: 'c', text: 'parseInteger()' },
          { id: 'd', text: 'Number.parseInt()' }
        ],
        correctAnswer: 'b',
        hint: 'This is a common function used for converting strings to numbers.',
        explanation: 'parseInt() parses a string and returns an integer. Note that Number.parseInt() also works in modern JavaScript.'
      },
      // Additional Web Development Questions (42 more)
      {
        question: 'What does DOM stand for in web development?',
        answers: [
          { id: 'a', text: 'Document Object Model' },
          { id: 'b', text: 'Data Object Model' },
          { id: 'c', text: 'Document Oriented Markup' },
          { id: 'd', text: 'Digital Output Method' }
        ],
        correctAnswer: 'a',
        explanation: 'DOM stands for Document Object Model, which is a programming interface for web documents.'
      },
      {
        question: 'What is the purpose of the "viewport" meta tag in HTML?',
        answers: [
          { id: 'a', text: 'To control the layout on mobile browsers' },
          { id: 'b', text: 'To define the main content of a page' },
          { id: 'c', text: 'To add keywords for search engines' },
          { id: 'd', text: 'To specify the character encoding' }
        ],
        correctAnswer: 'a',
        explanation: 'The viewport meta tag gives the browser instructions on how to control the page\'s dimensions and scaling for different devices.'
      },
      {
        question: 'What is the correct HTML for creating a checkbox?',
        answers: [
          { id: 'a', text: '<checkbox>' },
          { id: 'b', text: '<check>' },
          { id: 'c', text: '<input type="check">' },
          { id: 'd', text: '<input type="checkbox">' }
        ],
        correctAnswer: 'd',
        explanation: 'The correct HTML for creating a checkbox is <input type="checkbox">.'
      },
      {
        question: 'Which event is triggered when a user clicks on an HTML element?',
        answers: [
          { id: 'a', text: 'onmouseover' },
          { id: 'b', text: 'onchange' },
          { id: 'c', text: 'onclick' },
          { id: 'd', text: 'onmouseclick' }
        ],
        correctAnswer: 'c',
        explanation: 'The onclick event is triggered when a user clicks on an HTML element.'
      },
      {
        question: 'What is the purpose of the "alt" attribute in an image tag?',
        answers: [
          { id: 'a', text: 'To define alternative text for an image' },
          { id: 'b', text: 'To specify image alignment' },
          { id: 'c', text: 'To set the image width' },
          { id: 'd', text: 'To create an image caption' }
        ],
        correctAnswer: 'a',
        explanation: 'The alt attribute provides alternative text for an image if it cannot be displayed or for accessibility purposes.'
      },
      {
        question: 'Which of the following methods can be used to add an element at the end of an array in JavaScript?',
        answers: [
          { id: 'a', text: 'push()' },
          { id: 'b', text: 'unshift()' },
          { id: 'c', text: 'append()' },
          { id: 'd', text: 'concat()' }
        ],
        correctAnswer: 'a',
        explanation: 'The push() method adds one or more elements to the end of an array and returns the new length of the array.'
      },
      {
        question: 'Which CSS property defines the space between the element\'s border and its content?',
        answers: [
          { id: 'a', text: 'margin' },
          { id: 'b', text: 'padding' },
          { id: 'c', text: 'border-spacing' },
          { id: 'd', text: 'spacing' }
        ],
        correctAnswer: 'b',
        explanation: 'The padding property defines the space between the element\'s border and its content.'
      },
      {
        question: 'What is the correct way to include an external JavaScript file?',
        answers: [
          { id: 'a', text: '<script href="script.js">' },
          { id: 'b', text: '<script name="script.js">' },
          { id: 'c', text: '<script src="script.js">' },
          { id: 'd', text: '<script file="script.js">' }
        ],
        correctAnswer: 'c',
        explanation: 'The correct way to include an external JavaScript file is using the src attribute in the script tag.'
      },
      {
        question: 'What does CSS stand for?',
        answers: [
          { id: 'a', text: 'Creative Style Sheets' },
          { id: 'b', text: 'Computer Style Sheets' },
          { id: 'c', text: 'Cascading Style Sheets' },
          { id: 'd', text: 'Colorful Style Sheets' }
        ],
        correctAnswer: 'c',
        explanation: 'CSS stands for Cascading Style Sheets, which is a language used for describing the presentation of a document written in HTML.'
      },
      {
        question: 'What is the default value of the position property in CSS?',
        answers: [
          { id: 'a', text: 'relative' },
          { id: 'b', text: 'fixed' },
          { id: 'c', text: 'absolute' },
          { id: 'd', text: 'static' }
        ],
        correctAnswer: 'd',
        explanation: 'The default value of the position property in CSS is static.'
      },
      {
        question: 'Which JavaScript method is used to remove the last element from an array?',
        answers: [
          { id: 'a', text: 'pop()' },
          { id: 'b', text: 'push()' },
          { id: 'c', text: 'shift()' },
          { id: 'd', text: 'removeLast()' }
        ],
        correctAnswer: 'a',
        explanation: 'The pop() method removes the last element from an array and returns that element.'
      },
      {
        question: 'What is the correct HTML for making a text input field?',
        answers: [
          { id: 'a', text: '<textfield>' },
          { id: 'b', text: '<input type="text">' },
          { id: 'c', text: '<input type="textfield">' },
          { id: 'd', text: '<textinput>' }
        ],
        correctAnswer: 'b',
        explanation: 'The correct HTML for making a text input field is <input type="text">.'
      },
      {
        question: 'Which property is used to change the background color of an element in CSS?',
        answers: [
          { id: 'a', text: 'bgcolor' },
          { id: 'b', text: 'color' },
          { id: 'c', text: 'background-color' },
          { id: 'd', text: 'background' }
        ],
        correctAnswer: 'c',
        explanation: 'The background-color property is used to change the background color of an element in CSS.'
      },
      {
        question: 'How do you declare a JavaScript variable?',
        answers: [
          { id: 'a', text: 'var carName;' },
          { id: 'b', text: 'variable carName;' },
          { id: 'c', text: 'v carName;' },
          { id: 'd', text: 'declare carName;' }
        ],
        correctAnswer: 'a',
        explanation: 'In JavaScript, variables can be declared using var, let, or const keywords. Using var is one of the ways to declare a variable.'
      },
      {
        question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
        answers: [
          { id: 'a', text: 'title' },
          { id: 'b', text: 'src' },
          { id: 'c', text: 'alt' },
          { id: 'd', text: 'longdesc' }
        ],
        correctAnswer: 'c',
        explanation: 'The alt attribute provides alternative text for an image if it cannot be displayed.'
      },
      {
        question: 'Which CSS property controls the text size?',
        answers: [
          { id: 'a', text: 'text-style' },
          { id: 'b', text: 'font-size' },
          { id: 'c', text: 'text-size' },
          { id: 'd', text: 'font-style' }
        ],
        correctAnswer: 'b',
        explanation: 'The font-size property controls the text size in CSS.'
      },
      {
        question: 'How do you select an element with id "demo" in CSS?',
        answers: [
          { id: 'a', text: '.demo' },
          { id: 'b', text: '#demo' },
          { id: 'c', text: '*demo' },
          { id: 'd', text: 'demo' }
        ],
        correctAnswer: 'b',
        explanation: 'In CSS, you select an element with a specific id using the # symbol followed by the id name.'
      },
      {
        question: 'What is the correct way to write a comment in JavaScript?',
        answers: [
          { id: 'a', text: '<!-- This is a comment -->' },
          { id: 'b', text: '/* This is a comment */' },
          { id: 'c', text: '// This is a comment' },
          { id: 'd', text: '-- This is a comment --' }
        ],
        correctAnswer: 'c',
        explanation: 'In JavaScript, single-line comments start with //. For multi-line comments, /* and */ are used.'
      },
      {
        question: 'Which property is used to change the font of an element?',
        answers: [
          { id: 'a', text: 'font-family' },
          { id: 'b', text: 'font-style' },
          { id: 'c', text: 'font-weight' },
          { id: 'd', text: 'font-type' }
        ],
        correctAnswer: 'a',
        explanation: 'The font-family property is used to change the font of an element in CSS.'
      },
      {
        question: 'What is the correct syntax for referring to an external script called "script.js"?',
        answers: [
          { id: 'a', text: '<script href="script.js">' },
          { id: 'b', text: '<script src="script.js">' },
          { id: 'c', text: '<script name="script.js">' },
          { id: 'd', text: '<script link="script.js">' }
        ],
        correctAnswer: 'b',
        explanation: 'The correct syntax for referring to an external script is using the src attribute in the script tag.'
      },
      {
        question: 'How do you create a function in JavaScript?',
        answers: [
          { id: 'a', text: 'function myFunction()' },
          { id: 'b', text: 'function:myFunction()' },
          { id: 'c', text: 'function = myFunction()' },
          { id: 'd', text: 'create myFunction()' }
        ],
        correctAnswer: 'a',
        explanation: 'In JavaScript, a function is defined using the function keyword, followed by a name, followed by parentheses ().'
      },
      {
        question: 'Which event occurs when a user clicks on an HTML element?',
        answers: [
          { id: 'a', text: 'onchange' },
          { id: 'b', text: 'onclick' },
          { id: 'c', text: 'onmouseover' },
          { id: 'd', text: 'onmouseclick' }
        ],
        correctAnswer: 'b',
        explanation: 'The onclick event occurs when a user clicks on an HTML element.'
      },
      {
        question: 'What is the default display property value for a div element?',
        answers: [
          { id: 'a', text: 'inline' },
          { id: 'b', text: 'block' },
          { id: 'c', text: 'inline-block' },
          { id: 'd', text: 'flex' }
        ],
        correctAnswer: 'b',
        explanation: 'The default display property value for a div element is block.'
      },
      {
        question: 'Which HTML tag is used to define an internal style sheet?',
        answers: [
          { id: 'a', text: '<css>' },
          { id: 'b', text: '<style>' },
          { id: 'c', text: '<script>' },
          { id: 'd', text: '<stylesheet>' }
        ],
        correctAnswer: 'b',
        explanation: 'The <style> tag is used to define an internal style sheet in HTML.'
      },
      {
        question: 'How do you select all paragraph elements in CSS?',
        answers: [
          { id: 'a', text: 'p { }' },
          { id: 'b', text: '.p { }' },
          { id: 'c', text: '#p { }' },
          { id: 'd', text: 'paragraph { }' }
        ],
        correctAnswer: 'a',
        explanation: 'In CSS, you select all paragraph elements using the p selector.'
      },
      {
        question: 'What is the purpose of JSON in web development?',
        answers: [
          { id: 'a', text: 'To format HTML documents' },
          { id: 'b', text: 'To style web pages' },
          { id: 'c', text: 'To exchange data between a server and a web application' },
          { id: 'd', text: 'To create interactive animations' }
        ],
        correctAnswer: 'c',
        explanation: 'JSON (JavaScript Object Notation) is a lightweight data-interchange format used to exchange data between a server and a web application.'
      },
      {
        question: 'Which CSS property is used to control the spacing between lines of text?',
        answers: [
          { id: 'a', text: 'line-height' },
          { id: 'b', text: 'spacing' },
          { id: 'c', text: 'line-spacing' },
          { id: 'd', text: 'text-spacing' }
        ],
        correctAnswer: 'a',
        explanation: 'The line-height property in CSS is used to control the spacing between lines of text.'
      },
      {
        question: 'What is the purpose of the localStorage object in JavaScript?',
        answers: [
          { id: 'a', text: 'To store data on the server' },
          { id: 'b', text: 'To store data with no expiration date in the browser' },
          { id: 'c', text: 'To store data for a single session in the browser' },
          { id: 'd', text: 'To store data in cookies' }
        ],
        correctAnswer: 'b',
        explanation: 'localStorage is a web storage object that allows JavaScript sites and apps to store key-value pairs in a web browser with no expiration date.'
      },
      {
        question: 'What is the purpose of z-index in CSS?',
        answers: [
          { id: 'a', text: 'To set the transparency of an element' },
          { id: 'b', text: 'To specify the stack order of an element' },
          { id: 'c', text: 'To rotate an element' },
          { id: 'd', text: 'To set the width of an element' }
        ],
        correctAnswer: 'b',
        explanation: 'The z-index property specifies the stack order of an element, which elements should be placed in front of or behind others.'
      },
      {
        question: 'Which HTML tag is used to define a table?',
        answers: [
          { id: 'a', text: '<table>' },
          { id: 'b', text: '<tab>' },
          { id: 'c', text: '<tbl>' },
          { id: 'd', text: '<grid>' }
        ],
        correctAnswer: 'a',
        explanation: 'The <table> tag is used to define a table in HTML.'
      },
      {
        question: 'What is the output of the following JavaScript code? console.log(10 + "20")',
        answers: [
          { id: 'a', text: '30' },
          { id: 'b', text: '"1020"' },
          { id: 'c', text: '1020' },
          { id: 'd', text: 'Error' }
        ],
        correctAnswer: 'c',
        explanation: 'In JavaScript, when a number is added to a string, the result is a string concatenation. So 10 + "20" results in "1020".'
      },
      {
        question: 'What is the difference between "==" and "===" operators in JavaScript?',
        answers: [
          { id: 'a', text: 'No difference' },
          { id: 'b', text: '"==" compares values, "===" compares both values and types' },
          { id: 'c', text: '"==" compares types, "===" compares values' },
          { id: 'd', text: '"===" is a syntax error in JavaScript' }
        ],
        correctAnswer: 'b',
        explanation: 'The "==" operator compares values (with type conversion if needed), while "===" compares both values and types (no type conversion).'
      },
      {
        question: 'Which CSS property controls the text color of an element?',
        answers: [
          { id: 'a', text: 'font-color' },
          { id: 'b', text: 'text-color' },
          { id: 'c', text: 'color' },
          { id: 'd', text: 'text-style' }
        ],
        correctAnswer: 'c',
        explanation: 'The color property is used to set the text color of an element in CSS.'
      },
      {
        question: 'What is the purpose of the preventDefault() method in JavaScript?',
        answers: [
          { id: 'a', text: 'To stop the browser from loading images' },
          { id: 'b', text: 'To prevent the default action of an element from happening' },
          { id: 'c', text: 'To prevent variables from being changed' },
          { id: 'd', text: 'To prevent functions from being called' }
        ],
        correctAnswer: 'b',
        explanation: 'The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.'
      },
      {
        question: 'What is the purpose of the meta tag with charset attribute?',
        answers: [
          { id: 'a', text: 'To define keywords for search engines' },
          { id: 'b', text: 'To specify the character encoding for the HTML document' },
          { id: 'c', text: 'To refresh the document every few seconds' },
          { id: 'd', text: 'To specify the author of the document' }
        ],
        correctAnswer: 'b',
        explanation: 'The meta tag with charset attribute specifies the character encoding for the HTML document.'
      },
      {
        question: 'Which method is used to add new elements at the beginning of an array in JavaScript?',
        answers: [
          { id: 'a', text: 'unshift()' },
          { id: 'b', text: 'push()' },
          { id: 'c', text: 'prepend()' },
          { id: 'd', text: 'addStart()' }
        ],
        correctAnswer: 'a',
        explanation: 'The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.'
      },
      {
        question: 'What is the correct syntax for creating a JavaScript object?',
        answers: [
          { id: 'a', text: 'var person = Object();' },
          { id: 'b', text: 'var person = {};' },
          { id: 'c', text: 'var person = new Object();' },
          { id: 'd', text: 'All of the above' }
        ],
        correctAnswer: 'd',
        explanation: 'All of these syntaxes can be used to create a JavaScript object.'
      },
      {
        question: 'What does the CSS property "float" do?',
        answers: [
          { id: 'a', text: 'It makes an element float in the middle of the page' },
          { id: 'b', text: 'It specifies whether an element should float to the left, right, or not at all' },
          { id: 'c', text: 'It creates a floating animation' },
          { id: 'd', text: 'It makes text wrap around an image' }
        ],
        correctAnswer: 'b',
        explanation: 'The float property specifies whether an element should float to the left, right, or not at all.'
      },
      {
        question: 'Which HTML tag is used for creating a hyperlink?',
        answers: [
          { id: 'a', text: '<link>' },
          { id: 'b', text: '<a>' },
          { id: 'c', text: '<href>' },
          { id: 'd', text: '<hyperlink>' }
        ],
        correctAnswer: 'b',
        explanation: 'The <a> (anchor) tag is used to create a hyperlink in HTML.'
      },
      {
        question: 'What is the correct way to write a JavaScript array?',
        answers: [
          { id: 'a', text: 'var colors = (1:"red", 2:"green", 3:"blue")' },
          { id: 'b', text: 'var colors = ["red", "green", "blue"]' },
          { id: 'c', text: 'var colors = "red", "green", "blue"' },
          { id: 'd', text: 'var colors = {"red", "green", "blue"}' }
        ],
        correctAnswer: 'b',
        explanation: 'In JavaScript, arrays are written with square brackets, and array items are separated by commas.'
      },
      {
        question: 'How do you add a comment in CSS?',
        answers: [
          { id: 'a', text: '// This is a comment' },
          { id: 'b', text: '/* This is a comment */' },
          { id: 'c', text: '<!-- This is a comment -->' },
          { id: 'd', text: '# This is a comment' }
        ],
        correctAnswer: 'b',
        explanation: 'In CSS, comments are written with /* and */.'
      },
      {
        question: 'Which property is used to change the left margin of an element?',
        answers: [
          { id: 'a', text: 'margin-left' },
          { id: 'b', text: 'padding-left' },
          { id: 'c', text: 'indent' },
          { id: 'd', text: 'left-margin' }
        ],
        correctAnswer: 'a',
        explanation: 'The margin-left property is used to change the left margin of an element in CSS.'
      },
      {
        question: 'What is the purpose of async attribute in script tag?',
        answers: [
          { id: 'a', text: 'To specify that the script should be executed asynchronously' },
          { id: 'b', text: 'To make AJAX requests in the script' },
          { id: 'c', text: 'To load the script from a different domain' },
          { id: 'd', text: 'To prevent script execution' }
        ],
        correctAnswer: 'a',
        explanation: 'The async attribute specifies that the script is executed asynchronously (only for external scripts).'
      },
      {
        question: 'Which HTML attribute is used to define inline styles?',
        answers: [
          { id: 'a', text: 'style' },
          { id: 'b', text: 'class' },
          { id: 'c', text: 'styles' },
          { id: 'd', text: 'css' }
        ],
        correctAnswer: 'a',
        explanation: 'The style attribute is used to specify inline CSS styles for an HTML element.'
      },
      {
        question: 'What is the purpose of media queries in CSS?',
        answers: [
          { id: 'a', text: 'To perform database queries' },
          { id: 'b', text: 'To create responsive designs that adapt to different screen sizes' },
          { id: 'c', text: 'To query the user\'s permission to use media' },
          { id: 'd', text: 'To embed videos and audio in a webpage' }
        ],
        correctAnswer: 'b',
        explanation: 'Media queries are used in CSS to create responsive designs that adapt to different screen sizes and devices.'
      },
      {
        question: 'How do you call a function named "myFunction" in JavaScript?',
        answers: [
          { id: 'a', text: 'call myFunction()' },
          { id: 'b', text: 'myFunction()' },
          { id: 'c', text: 'call function myFunction()' },
          { id: 'd', text: 'function.myFunction()' }
        ],
        correctAnswer: 'b',
        explanation: 'In JavaScript, you call a function by using its name followed by parentheses, like myFunction().'
      },
      {
        question: 'What is the purpose of the rel attribute in the link tag?',
        answers: [
          { id: 'a', text: 'To specify the relationship between the current document and the linked document' },
          { id: 'b', text: 'To indicate if the link is relative or absolute' },
          { id: 'c', text: 'To specify the reliability of the link' },
          { id: 'd', text: 'To define related keywords for search engines' }
        ],
        correctAnswer: 'a',
        explanation: 'The rel attribute specifies the relationship between the current document and the linked document.'
      },
      {
        question: 'What does API stand for?',
        answers: [
          { id: 'a', text: 'Application Programming Interface' },
          { id: 'b', text: 'Automated Program Integration' },
          { id: 'c', text: 'Application Process Integration' },
          { id: 'd', text: 'Automated Programming Interface' }
        ],
        correctAnswer: 'a',
        explanation: 'API stands for Application Programming Interface, which allows different software applications to communicate with each other.'
      },
      {
        question: 'Which method is used to remove the first element of an array in JavaScript?',
        answers: [
          { id: 'a', text: 'shift()' },
          { id: 'b', text: 'pop()' },
          { id: 'c', text: 'remove()' },
          { id: 'd', text: 'delete()' }
        ],
        correctAnswer: 'a',
        explanation: 'The shift() method removes the first element from an array and returns that removed element.'
      },
    ]
  },
  {
    id: 'databases-quiz',
    categoryId: 'databases',
    title: 'SQL & Databases Assessment',
    description: 'Test your knowledge of SQL queries and database concepts',
    timeLimit: 25,
    passingScore: 70,
    questions: [
      // Original SQL questions from the database
      {
        question: 'Which SQL command is used to retrieve data from a database?',
        answers: [
          { id: 'a', text: 'GET' },
          { id: 'b', text: 'SELECT' },
          { id: 'c', text: 'FETCH' },
          { id: 'd', text: 'RETRIEVE' }
        ],
        correctAnswer: 'b',
        explanation: 'The SELECT statement is used to select data from a database.'
      },
      {
        question: 'What is the primary key in a database table?',
        answers: [
          { id: 'a', text: 'A key that can have duplicate values' },
          { id: 'b', text: 'A key that can only contain numeric values' },
          { id: 'c', text: 'A key that uniquely identifies each record in a table' },
          { id: 'd', text: 'A key that is automatically generated for each record' }
        ],
        correctAnswer: 'c',
        explanation: 'A primary key is a field that uniquely identifies each record in a table.'
      },
      // Add more SQL & Database questions (50 total)
      {
        question: 'Which SQL keyword is used to filter data?',
        answers: [
          { id: 'a', text: 'FILTER' },
          { id: 'b', text: 'WHERE' },
          { id: 'c', text: 'HAVING' },
          { id: 'd', text: 'CONDITION' }
        ],
        correctAnswer: 'b',
        explanation: 'The WHERE clause is used to filter records in SQL.'
      },
      {
        question: 'Which SQL statement is used to update data in a database?',
        answers: [
          { id: 'a', text: 'SAVE' },
          { id: 'b', text: 'MODIFY' },
          { id: 'c', text: 'UPDATE' },
          { id: 'd', text: 'EDIT' }
        ],
        correctAnswer: 'c',
        explanation: 'The UPDATE statement is used to modify existing records in a table.'
      },
      {
        question: 'Which SQL statement is used to delete data from a database?',
        answers: [
          { id: 'a', text: 'DELETE' },
          { id: 'b', text: 'REMOVE' },
          { id: 'c', text: 'ERASE' },
          { id: 'd', text: 'DROP' }
        ],
        correctAnswer: 'a',
        explanation: 'The DELETE statement is used to delete existing records in a table.'
      },
      {
        question: 'What is a foreign key?',
        answers: [
          { id: 'a', text: 'A key that is unique in a table' },
          { id: 'b', text: 'A key used to link two tables together' },
          { id: 'c', text: 'A key imported from another database' },
          { id: 'd', text: 'The main key in a table' }
        ],
        correctAnswer: 'b',
        explanation: 'A foreign key is a key used to link two tables together by referencing the primary key of another table.'
      },
      {
        question: 'Which SQL statement is used to create a new table?',
        answers: [
          { id: 'a', text: 'NEW TABLE' },
          { id: 'b', text: 'ADD TABLE' },
          { id: 'c', text: 'CREATE TABLE' },
          { id: 'd', text: 'INSERT TABLE' }
        ],
        correctAnswer: 'c',
        explanation: 'The CREATE TABLE statement is used to create a new table in a database.'
      },
      {
        question: 'What does SQL stand for?',
        answers: [
          { id: 'a', text: 'Structured Query Language' },
          { id: 'b', text: 'Simple Query Language' },
          { id: 'c', text: 'Standard Query Language' },
          { id: 'd', text: 'System Query Language' }
        ],
        correctAnswer: 'a',
        explanation: 'SQL stands for Structured Query Language, which is used for managing relational databases.'
      },
      {
        question: 'Which SQL function is used to count the number of rows in a result set?',
        answers: [
          { id: 'a', text: 'SUM()' },
          { id: 'b', text: 'COUNT()' },
          { id: 'c', text: 'TOTAL()' },
          { id: 'd', text: 'NUM()' }
        ],
        correctAnswer: 'b',
        explanation: 'The COUNT() function returns the number of rows that matches a specified criteria.'
      },
      {
        question: 'What is a database transaction?',
        answers: [
          { id: 'a', text: 'A unit of work performed against a database' },
          { id: 'b', text: 'A financial payment for using a database' },
          { id: 'c', text: 'A type of table in a database' },
          { id: 'd', text: 'A connection to a database' }
        ],
        correctAnswer: 'a',
        explanation: 'A database transaction is a unit of work performed within a database management system that is treated in a coherent and reliable way independent of other transactions.'
      },
      {
        question: 'Which of the following is not a type of SQL join?',
        answers: [
          { id: 'a', text: 'INNER JOIN' },
          { id: 'b', text: 'LEFT JOIN' },
          { id: 'c', text: 'MIDDLE JOIN' },
          { id: 'd', text: 'FULL OUTER JOIN' }
        ],
        correctAnswer: 'c',
        explanation: 'MIDDLE JOIN is not a type of SQL join. The common types are INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.'
      },
      // Additional questions to reach 50
      {
        question: 'Which operator is used in SQL to match a pattern?',
        answers: [
          { id: 'a', text: 'SAME AS' },
          { id: 'b', text: 'LIKE' },
          { id: 'c', text: 'MATCH' },
          { id: 'd', text: 'PATTERN' }
        ],
        correctAnswer: 'b',
        explanation: 'The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.'
      },
      {
        question: 'What is the result of the SQL statement: SELECT DISTINCT?',
        answers: [
          { id: 'a', text: 'It returns all rows' },
          { id: 'b', text: 'It returns only unique values' },
          { id: 'c', text: 'It returns only non-null values' },
          { id: 'd', text: 'It returns only the first row' }
        ],
        correctAnswer: 'b',
        explanation: 'The SELECT DISTINCT statement is used to return only distinct (different) values.'
      },
      {
        question: 'Which SQL command is used to add new data to a database?',
        answers: [
          { id: 'a', text: 'ADD' },
          { id: 'b', text: 'INSERT' },
          { id: 'c', text: 'UPDATE' },
          { id: 'd', text: 'CREATE' }
        ],
        correctAnswer: 'b',
        explanation: 'The INSERT INTO statement is used to add new records to a database table.'
      },
      {
        question: 'What does DDL stand for in the context of SQL?',
        answers: [
          { id: 'a', text: 'Data Definition Language' },
          { id: 'b', text: 'Data Design Language' },
          { id: 'c', text: 'Database Definition Language' },
          { id: 'd', text: 'Data Description Language' }
        ],
        correctAnswer: 'a',
        explanation: 'DDL stands for Data Definition Language, which includes commands like CREATE, ALTER, DROP, etc.'
      },
      {
        question: 'What does DML stand for in the context of SQL?',
        answers: [
          { id: 'a', text: 'Data Model Language' },
          { id: 'b', text: 'Database Manipulation Language' },
          { id: 'c', text: 'Data Manipulation Language' },
          { id: 'd', text: 'Data Management Language' }
        ],
        correctAnswer: 'c',
        explanation: 'DML stands for Data Manipulation Language, which includes commands like SELECT, INSERT, UPDATE, DELETE, etc.'
      },
      {
        question: 'Which SQL clause is used to sort the result set?',
        answers: [
          { id: 'a', text: 'SORT BY' },
          { id: 'b', text: 'ORDER BY' },
          { id: 'c', text: 'ARRANGE BY' },
          { id: 'd', text: 'GROUP BY' }
        ],
        correctAnswer: 'b',
        explanation: 'The ORDER BY clause is used to sort the result set in ascending or descending order.'
      },
      {
        question: 'What is a database schema?',
        answers: [
          { id: 'a', text: 'A graphical representation of a database' },
          { id: 'b', text: 'A collection of tables' },
          { id: 'c', text: 'A description of the structure of a database' },
          { id: 'd', text: 'A security mechanism for a database' }
        ],
        correctAnswer: 'c',
        explanation: 'A database schema is a description of the structure of a database, including tables, columns, data types, and the relationships between them.'
      },
      {
        question: 'What is the purpose of the SQL GROUP BY statement?',
        answers: [
          { id: 'a', text: 'To join multiple tables' },
          { id: 'b', text: 'To filter records that have the same values into summary rows' },
          { id: 'c', text: 'To sort records in ascending or descending order' },
          { id: 'd', text: 'To update multiple records at once' }
        ],
        correctAnswer: 'b',
        explanation: 'The GROUP BY statement groups rows that have the same values into summary rows, often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG).'
      },
      {
        question: 'Which SQL function returns the current date?',
        answers: [
          { id: 'a', text: 'DATE()' },
          { id: 'b', text: 'GETDATE()' },
          { id: 'c', text: 'NOW()' },
          { id: 'd', text: 'CURRENTDATE()' }
        ],
        correctAnswer: 'c',
        explanation: 'The NOW() function returns the current date and time. Note that the specific function may vary by database system.'
      },
      {
        question: 'What is a database view?',
        answers: [
          { id: 'a', text: 'A graphical interface to a database' },
          { id: 'b', text: 'A virtual table based on the result-set of an SQL statement' },
          { id: 'c', text: 'A software tool to view database contents' },
          { id: 'd', text: 'A dashboard showing database performance' }
        ],
        correctAnswer: 'b',
        explanation: 'A database view is a virtual table based on the result-set of an SQL statement. It contains rows and columns, just like a real table.'
      },
      // More database questions to reach 50 total
      {
        question: 'What is a NULL value in SQL?',
        answers: [
          { id: 'a', text: 'A value of 0' },
          { id: 'b', text: 'An empty string' },
          { id: 'c', text: 'A value that represents missing or unknown data' },
          { id: 'd', text: 'A default value for all columns' }
        ],
        correctAnswer: 'c',
        explanation: 'A NULL value in SQL represents missing or unknown data. It is not the same as zero or an empty string.'
      },
      {
        question: 'Which SQL constraint ensures that a column cannot have NULL values?',
        answers: [
          { id: 'a', text: 'NOT NULL' },
          { id: 'b', text: 'NO NULL' },
          { id: 'c', text: 'NOT EMPTY' },
          { id: 'd', text: 'DEFAULT' }
        ],
        correctAnswer: 'a',
        explanation: 'The NOT NULL constraint ensures that a column cannot have NULL values.'
      },
      {
        question: 'Which SQL statement is used to delete a table?',
        answers: [
          { id: 'a', text: 'DELETE TABLE' },
          { id: 'b', text: 'DROP TABLE' },
          { id: 'c', text: 'REMOVE TABLE' },
          { id: 'd', text: 'CLEAR TABLE' }
        ],
        correctAnswer: 'b',
        explanation: 'The DROP TABLE statement is used to delete a table in SQL.'
      },
      {
        question: 'Which SQL clause is used to filter groups?',
        answers: [
          { id: 'a', text: 'WHERE' },
          { id: 'b', text: 'HAVING' },
          { id: 'c', text: 'GROUP FILTER' },
          { id: 'd', text: 'FILTER BY' }
        ],
        correctAnswer: 'b',
        explanation: 'The HAVING clause is used to filter groups based on specified conditions in SQL.'
      },
      {
        question: 'What is the purpose of the SQL UNION operator?',
        answers: [
          { id: 'a', text: 'To combine rows from two or more tables' },
          { id: 'b', text: 'To join columns from two or more tables' },
          { id: 'c', text: 'To create a union between databases' },
          { id: 'd', text: 'To combine two WHERE conditions' }
        ],
        correctAnswer: 'a',
        explanation: 'The UNION operator is used to combine the result set of two or more SELECT statements.'
      },
      {
        question: 'What is the difference between CHAR and VARCHAR data types?',
        answers: [
          { id: 'a', text: 'CHAR is for characters, VARCHAR is for variable characters' },
          { id: 'b', text: 'CHAR is fixed length, VARCHAR is variable length' },
          { id: 'c', text: 'CHAR is case sensitive, VARCHAR is not' },
          { id: 'd', text: 'There is no difference' }
        ],
        correctAnswer: 'b',
        explanation: 'CHAR is a fixed-length data type, while VARCHAR is a variable-length data type. CHAR always uses the allocated space, while VARCHAR uses only the space needed for the actual value.'
      },
      {
        question: 'What is a stored procedure?',
        answers: [
          { id: 'a', text: 'A data structure for storing large amounts of data' },
          { id: 'b', text: 'A set of SQL statements that can be saved and reused' },
          { id: 'c', text: 'A method for backing up a database' },
          { id: 'd', text: 'A way to store database credentials securely' }
        ],
        correctAnswer: 'b',
        explanation: 'A stored procedure is a prepared SQL code that can be saved and reused. It can accept parameters, perform operations, and return a result.'
      },
      {
        question: 'Which SQL function rounds a number to a specified number of decimal places?',
        answers: [
          { id: 'a', text: 'ROUND()' },
          { id: 'b', text: 'DECIMAL()' },
          { id: 'c', text: 'FORMAT()' },
          { id: 'd', text: 'TRUNCATE()' }
        ],
        correctAnswer: 'a',
        explanation: 'The ROUND() function rounds a number to a specified number of decimal places in SQL.'
      },
      {
        question: 'What is a database index?',
        answers: [
          { id: 'a', text: 'A list of all tables in a database' },
          { id: 'b', text: 'A table of contents for a database' },
          { id: 'c', text: 'A data structure that improves the speed of data retrieval operations' },
          { id: 'd', text: 'A unique identifier for a database' }
        ],
        correctAnswer: 'c',
        explanation: 'A database index is a data structure that improves the speed of data retrieval operations on a database table, similar to an index in a book.'
      },
      {
        question: 'What is a composite key?',
        answers: [
          { id: 'a', text: 'A key made up of multiple columns' },
          { id: 'b', text: 'A key that can be edited after creation' },
          { id: 'c', text: 'A key that contains encrypted data' },
          { id: 'd', text: 'A backup of the primary key' }
        ],
        correctAnswer: 'a',
        explanation: 'A composite key is a primary key that consists of multiple columns used together to uniquely identify a row in a table.'
      },
      {
        question: 'Which SQL statement is used to modify the structure of an existing table?',
        answers: [
          { id: 'a', text: 'MODIFY TABLE' },
          { id: 'b', text: 'ALTER TABLE' },
          { id: 'c', text: 'CHANGE TABLE' },
          { id: 'd', text: 'UPDATE TABLE' }
        ],
        correctAnswer: 'b',
        explanation: 'The ALTER TABLE statement is used to add, delete, or modify columns in an existing table in SQL.'
      },
      {
        question: 'What is the purpose of the SQL TRUNCATE statement?',
        answers: [
          { id: 'a', text: 'To delete all rows in a table without logging the individual row deletions' },
          { id: 'b', text: 'To delete a table and its structure' },
          { id: 'c', text: 'To round numeric values in a column' },
          { id: 'd', text: 'To remove duplicate rows in a table' }
        ],
        correctAnswer: 'a',
        explanation: 'The TRUNCATE statement quickly removes all rows from a table or specified partitions of a table, without logging the individual row deletions.'
      },
      {
        question: 'Which database model organizes data into tables with rows and columns?',
        answers: [
          { id: 'a', text: 'Hierarchical model' },
          { id: 'b', text: 'Network model' },
          { id: 'c', text: 'Relational model' },
          { id: 'd', text: 'Object-oriented model' }
        ],
        correctAnswer: 'c',
        explanation: 'The relational model organizes data into tables (relations) with rows (tuples) and columns (attributes).'
      },
      {
        question: 'What is normalization in database design?',
        answers: [
          { id: 'a', text: 'The process of optimizing database performance' },
          { id: 'b', text: 'The process of organizing data to reduce redundancy' },
          { id: 'c', text: 'The process of converting data to a standard format' },
          { id: 'd', text: 'The process of securing a database' }
        ],
        correctAnswer: 'b',
        explanation: 'Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.'
      },
      {
        question: 'Which SQL keyword is used to exclude duplicate values?',
        answers: [
          { id: 'a', text: 'UNIQUE' },
          { id: 'b', text: 'DISTINCT' },
          { id: 'c', text: 'DIFFERENT' },
          { id: 'd', text: 'EXCLUDE' }
        ],
        correctAnswer: 'b',
        explanation: 'The DISTINCT keyword is used in a SELECT statement to return only different (distinct) values.'
      },
      // More questions to reach 50 for SQL & Databases
      {
        question: 'What is a deadlock in database systems?',
        answers: [
          { id: 'a', text: 'When a database is permanently locked' },
          { id: 'b', text: 'When two transactions are waiting for each other to release locks' },
          { id: 'c', text: 'When a database server crashes' },
          { id: 'd', text: 'When a user forgets their password' }
        ],
        correctAnswer: 'b',
        explanation: 'A deadlock occurs when two or more transactions are waiting for each other to release locks, resulting in a standstill where none can proceed.'
      },
      {
        question: 'What is the purpose of the SQL CASE expression?',
        answers: [
          { id: 'a', text: 'To perform case-sensitive searches' },
          { id: 'b', text: 'To convert text to uppercase or lowercase' },
          { id: 'c', text: 'To add conditional logic to SQL statements' },
          { id: 'd', text: 'To create switch statements in stored procedures' }
        ],
        correctAnswer: 'c',
        explanation: 'The CASE expression adds conditional logic to SQL statements, similar to if-then-else statements in other programming languages.'
      },
      {
        question: 'What is a self-join?',
        answers: [
          { id: 'a', text: 'A join that combines a table with itself' },
          { id: 'b', text: 'A join that does not require a condition' },
          { id: 'c', text: 'A join between a table and its backup' },
          { id: 'd', text: 'A join that is performed automatically' }
        ],
        correctAnswer: 'a',
        explanation: 'A self-join is a regular join, but the table is joined with itself, typically using aliases to distinguish between instances of the same table.'
      },
      {
        question: 'What is the purpose of the SQL BETWEEN operator?',
        answers: [
          { id: 'a', text: 'To check if a value is between two tables' },
          { id: 'b', text: 'To check if a value is between two columns' },
          { id: 'c', text: 'To check if a value is between two specified values' },
          { id: 'd', text: 'To join tables that have values in common' }
        ],
        correctAnswer: 'c',
        explanation: 'The BETWEEN operator selects values within a given range, inclusive of the begin and end values.'
      },
      {
        question: 'What is a database constraint?',
        answers: [
          { id: 'a', text: 'A limitation on database size' },
          { id: 'b', text: 'A rule that restricts the data that can be stored in a table' },
          { id: 'c', text: 'A security measure that prevents unauthorized access' },
          { id: 'd', text: 'A licensing restriction on database usage' }
        ],
        correctAnswer: 'b',
        explanation: 'A database constraint is a rule that restricts the data that can be stored in a table, ensuring data integrity and consistency.'
      },
      {
        question: 'What is the purpose of the SQL GRANT statement?',
        answers: [
          { id: 'a', text: 'To give privileges to a database user' },
          { id: 'b', text: 'To create new user accounts' },
          { id: 'c', text: 'To allocate additional storage space' },
          { id: 'd', text: 'To provide funding for database operations' }
        ],
        correctAnswer: 'a',
        explanation: 'The GRANT statement gives specific privileges to users or roles on database objects.'
      },
      {
        question: 'What is a trigger in a database?',
        answers: [
          { id: 'a', text: 'A mechanism to restart a crashed database' },
          { id: 'b', text: 'A special stored procedure that executes automatically in response to certain events' },
          { id: 'c', text: 'A tool to optimize query performance' },
          { id: 'd', text: 'A timing device for scheduled backups' }
        ],
        correctAnswer: 'b',
        explanation: 'A trigger is a special type of stored procedure that automatically executes when an event (such as INSERT, UPDATE, or DELETE) occurs in the database.'
      },
      {
        question: 'What is ACID in the context of database transactions?',
        answers: [
          { id: 'a', text: 'A database security protocol' },
          { id: 'b', text: 'A measure of database performance' },
          { id: 'c', text: 'A set of properties that guarantee database transactions are processed reliably' },
          { id: 'd', text: 'A type of database corruption' }
        ],
        correctAnswer: 'c',
        explanation: 'ACID stands for Atomicity, Consistency, Isolation, and Durability, which are properties that guarantee database transactions are processed reliably.'
      },
      {
        question: 'What is the difference between a clustered and a non-clustered index?',
        answers: [
          { id: 'a', text: 'Clustered indexes are faster, non-clustered indexes are slower' },
          { id: 'b', text: 'Clustered indexes determine the physical order of data in a table, non-clustered indexes don\'t' },
          { id: 'c', text: 'Clustered indexes can only be created on primary keys, non-clustered indexes can be created on any column' },
          { id: 'd', text: 'Clustered indexes use hash tables, non-clustered indexes use B-trees' }
        ],
        correctAnswer: 'b',
        explanation: 'A clustered index determines the physical order of data in a table. A table can have only one clustered index. A non-clustered index creates a separate structure that references the original table.'
      },
      {
        question: 'What is a subquery in SQL?',
        answers: [
          { id: 'a', text: 'A query that runs more efficiently than a regular query' },
          { id: 'b', text: 'A query nested inside another query' },
          { id: 'c', text: 'A partial query that must be completed by the user' },
          { id: 'd', text: 'A query that runs at a lower priority' }
        ],
        correctAnswer: 'b',
        explanation: 'A subquery (or nested query) is a query nested inside another query such as SELECT, INSERT, UPDATE, or DELETE.'
      },
      {
        question: 'What does INNER JOIN return?',
        answers: [
          { id: 'a', text: 'All records from both tables' },
          { id: 'b', text: 'Records that match in both tables' },
          { id: 'c', text: 'Records from the first table only' },
          { id: 'd', text: 'Records from the second table only' }
        ],
        correctAnswer: 'b',
        explanation: 'INNER JOIN returns records that have matching values in both tables involved in the join.'
      },
      {
        question: 'What does LEFT JOIN return?',
        answers: [
          { id: 'a', text: 'All records from the left table and matched records from the right table' },
          { id: 'b', text: 'All records from the right table and matched records from the left table' },
          { id: 'c', text: 'Only the records that match in both tables' },
          { id: 'd', text: 'The leftmost records from each table' }
        ],
        correctAnswer: 'a',
        explanation: 'LEFT JOIN returns all records from the left table and the matched records from the right table. If there is no match, the result is NULL on the right side.'
      },
      {
        question: 'What is a cursor in database programming?',
        answers: [
          { id: 'a', text: 'A pointer used to navigate through database tables' },
          { id: 'b', text: 'A mouse pointer used to select database objects' },
          { id: 'c', text: 'A visual indicator of the selected row in a query result' },
          { id: 'd', text: 'A database object that points to the result set of a query and allows row-by-row processing' }
        ],
        correctAnswer: 'd',
        explanation: 'A cursor is a database object that points to the result set of a query and allows row-by-row processing of the results.'
      }
      // Additional SQL & Database questions to reach 50 would be added here
    ]
  }
  // Additional quiz categories (Data Structures, DevOps, Frontend Frameworks, Security, etc.) would be added here
];

function getRandomQuestions(allQuestions: any[], count: number) {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Sample leaderboard data
export const leaderboardData: LeaderboardItem[] = [
  {
    id: '1',
    categoryId: 'web-development',
    category: 'Web Development',
    name: 'Alex Johnson',
    title: 'Frontend Developer',
    score: 96,
    level: 'Expert',
    completedDate: 'Apr 2, 2025'
  },
  {
    id: '2',
    categoryId: 'web-development',
    category: 'Web Development',
    name: 'Sarah Kim',
    title: 'Full Stack Developer',
    score: 92,
    level: 'Expert',
    completedDate: 'Apr 1, 2025'
  },
  {
    id: '3',
    categoryId: 'web-development',
    category: 'Web Development',
    name: 'Michael Chen',
    title: 'UI/UX Developer',
    score: 88,
    level: 'Advanced',
    completedDate: 'Mar 29, 2025'
  },
  {
    id: '4',
    categoryId: 'web-development',
    category: 'Web Development',
    name: 'Emily Davis',
    title: 'React Developer',
    score: 86,
    level: 'Advanced',
    completedDate: 'Mar 28, 2025'
  },
  {
    id: '5',
    categoryId: 'web-development',
    category: 'Web Development',
    name: 'James Wilson',
    title: 'Junior Developer',
    score: 82,
    level: 'Advanced',
    completedDate: 'Mar 27, 2025'
  },
  {
    id: '6',
    categoryId: 'databases',
    category: 'SQL & Databases',
    name: 'Priya Patel',
    title: 'Database Administrator',
    score: 98,
    level: 'Expert',
    completedDate: 'Apr 3, 2025'
  },
  {
    id: '7',
    categoryId: 'databases',
    category: 'SQL & Databases',
    name: 'David Thompson',
    title: 'Backend Developer',
    score: 94,
    level: 'Expert',
    completedDate: 'Apr 1, 2025'
  },
  {
    id: '8',
    categoryId: 'databases',
    category: 'SQL & Databases',
    name: 'Linda Martinez',
    title: 'Data Analyst',
    score: 90,
    level: 'Expert',
    completedDate: 'Mar 30, 2025'
  },
  {
    id: '9',
    categoryId: 'databases',
    category: 'SQL & Databases',
    name: 'Robert Johnson',
    title: 'Full Stack Developer',
    score: 84,
    level: 'Advanced',
    completedDate: 'Mar 28, 2025'
  },
  {
    id: '10',
    categoryId: 'databases',
    category: 'SQL & Databases',
    name: 'Susan Lee',
    title: 'Junior Developer',
    score: 76,
    level: 'Proficient',
    completedDate: 'Mar 25, 2025'
  }
];
