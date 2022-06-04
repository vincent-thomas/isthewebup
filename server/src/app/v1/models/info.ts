export class Information {
  name = 'Vincent Thomas';
  email = 'vincent.nathan.thomas@gmail.com';
  hobbies = [
    'coding',
    'listening to music',
    'sailing',
    'hanging out with friends',
  ];
  codingSkills = [
    'react',
    'express.js',
    'nest.js',
    'angular',
    'typescript',
    'javascript',
    'tiny bit of rust',
    'postgres',
    'mongodb',
    'docker',
    'git',
  ];

  get age() {
    return new Date().getFullYear() - 2006;
  }
}
