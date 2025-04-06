
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
    questions: 20,
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
    questions: 20,
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
    questions: 25,
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
    questions: 20,
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
    questions: 25,
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
    questions: 20,
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
      }
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
      }
      // Additional questions would be added here for a real implementation
    ]
  }
];

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
