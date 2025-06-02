// src/components/BlogList/BlogList.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMode } from '../../contexts/ModeContext';
import BlogCard from '../BlogCard/BlogCard';

// (Same arrays for simplePosts and funnyPosts as before, each with 30 entries. 
// For brevity, I'm showing only the first few items; include all 30 as in your previous code.)

const simplePosts = [
  {
    id: 1,
    title: 'How to Write Clean Code',
    excerpt:
      'Keep functions short, name variables clearly, and follow the Single Responsibility Principle.',
    imageUrl: 'https://picsum.photos/seed/simple1/400/200',
    content: `
## How to Write Clean Code

Writing clean code means:
- Functions should do one thing (Single Responsibility).
- Name variables/functions clearly.
- Write tests to maintain quality as code grows.
- Keep each file small and focused.

This is your “entire blog” content for post #1 in Simple mode.
    `.trim(),
  },
  {
    id: 2,
    title: 'Understanding SOLID Principles',
    excerpt:
      'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion — five pillars of robust software.',
    imageUrl: 'https://picsum.photos/seed/simple2/400/200',
    content: `
## Understanding SOLID Principles

1. **Single Responsibility**: A class/module should have one reason to change.
2. **Open/Closed**: Code should be open for extension, closed for modification.
3. **Liskov Substitution**: Subclasses must substitute base classes without altering correctness.
4. **Interface Segregation**: Prefer many specific interfaces over a single general one.
5. **Dependency Inversion**: Depend on abstractions, not concretions.

This is your “entire blog” content for post #2 in Simple mode.
    `.trim(),
  },
  {
    id: 3,
    title: 'DRY vs. KISS: Striking the Right Balance',
    excerpt:
      'Don’t Repeat Yourself and Keep It Simple. Reusable code is great, but over-engineering leads to complexity.',
    imageUrl: 'https://picsum.photos/seed/simple3/400/200',
    content: `
## DRY vs. KISS: Striking the Right Balance

- **DRY** (Don’t Repeat Yourself): Eliminate duplication.
- **KISS** (Keep It Simple, Stupid): Avoid unnecessary complexity.
- Balance between abstraction and readability is key to maintainable code.

This is your “entire blog” content for post #3 in Simple mode.
    `.trim(),
  },
  {
    id: 4,
    title: 'Effective Debugging Techniques',
    excerpt:
      'Use breakpoints, logging, and step-through debugging to find and fix bugs efficiently.',
    imageUrl: 'https://picsum.photos/seed/simple4/400/200',
    content: `
## Effective Debugging Techniques

- Set breakpoints to inspect variables at runtime.
- Use console logging judiciously for quick insights.
- Step-through code in an IDE to pinpoint errors.
- Check edge cases and invalid inputs systematically.

This is your “entire blog” content for post #4 in Simple mode.
    `.trim(),
  },
  {
    id: 5,
    title: 'Version Control Best Practices',
    excerpt:
      'Commit often, write clear messages, and use feature branches to keep history clean.',
    imageUrl: 'https://picsum.photos/seed/simple5/400/200',
    content: `
## Version Control Best Practices

- **Commit Early & Often**: Keep history granular.
- **Descriptive Messages**: Explain “why,” not just “what.”
- **Branching Strategy**: Use feature branches, rebase vs. merge carefully.
- **Code Reviews**: Peer review changes before merging to main.

This is your “entire blog” content for post #5 in Simple mode.
    `.trim(),
  },
  {
    id: 6,
    title: 'Writing Meaningful Comments',
    excerpt:
      'Comments should explain “why,” not “what.” Keep them up to date and concise.',
    imageUrl: 'https://picsum.photos/seed/simple6/400/200',
    content: `
## Writing Meaningful Comments

- **Explain “Why,” Not “What”**: Code often tells what is happening; comments clarify intent.
- **Avoid Redundancy**: Don’t repeat code in comments.
- **Keep Them Updated**: Outdated comments are misleading.
- **Use TODOs Sparingly**: Mark future improvements clearly.

This is your “entire blog” content for post #6 in Simple mode.
    `.trim(),
  },
  {
    id: 7,
    title: 'Refactoring Legacy Code',
    excerpt:
      'Start with tests, then refactor small pieces at a time. Keep functionality intact.',
    imageUrl: 'https://picsum.photos/seed/simple7/400/200',
    content: `
## Refactoring Legacy Code

1. **Write Tests First**: Ensure existing behavior is captured.
2. **Small Steps**: Refactor in tiny increments.
3. **Use Automated Tools**: Linters and IDE refactoring tools help safely rename or restructure.
4. **Maintain Functionality**: Run tests after every change.

This is your “entire blog” content for post #7 in Simple mode.
    `.trim(),
  },
  {
    id: 8,
    title: 'Optimizing Performance in React',
    excerpt:
      'Use memoization, avoid unnecessary renders, and code-split for faster load times.',
    imageUrl: 'https://picsum.photos/seed/simple8/400/200',
    content: `
## Optimizing Performance in React

- **Memoization**: \`React.memo\` and \`useMemo\` to prevent expensive recalculations.
- **Avoid Unnecessary Renders**: Use \`useCallback\` for stable function references.
- **Code Splitting**: Load components dynamically with \`React.lazy\` and \`Suspense\`.
- **Virtualization**: For long lists, use libraries like \`react-window\`.

This is your “entire blog” content for post #8 in Simple mode.
    `.trim(),
  },
  {
    id: 9,
    title: 'Introduction to Unit Testing',
    excerpt:
      'Write tests for individual units of code using Jest, Mocha, or any testing framework.',
    imageUrl: 'https://picsum.photos/seed/simple9/400/200',
    content: `
## Introduction to Unit Testing

- **What is a Unit Test?**: Tests for the smallest testable part of an application.
- **Popular Frameworks**: Jest, Mocha, Jasmine.
- **Test Structure**: Arrange-Act-Assert pattern.
- **Mocking Dependencies**: Use mocks to isolate units under test.

This is your “entire blog” content for post #9 in Simple mode.
    `.trim(),
  },
  {
    id: 10,
    title: 'Design Patterns Explained',
    excerpt:
      'Study common patterns like Singleton, Factory, Strategy, and Observer to solve recurring problems.',
    imageUrl: 'https://picsum.photos/seed/simple10/400/200',
    content: `
## Design Patterns Explained

- **Singleton**: Ensures a class has only one instance.
- **Factory**: Creates objects without specifying the exact class.
- **Strategy**: Encapsulates algorithms and makes them interchangeable.
- **Observer**: Defines a one-to-many dependency between objects.

This is your “entire blog” content for post #10 in Simple mode.
    `.trim(),
  },
  {
    id: 11,
    title: 'Working with REST APIs',
    excerpt:
      'Use fetch or Axios to make HTTP requests, handle JSON, and manage errors gracefully.',
    imageUrl: 'https://picsum.photos/seed/simple11/400/200',
    content: `
## Working with REST APIs

- **HTTP Methods**: GET, POST, PUT, DELETE.
- **Handling Responses**: Check status codes, parse JSON.
- **Error Handling**: Use try/catch or \`.then().catch()\` to catch network errors.
- **Authentication**: Send tokens in headers for protected routes.

This is your “entire blog” content for post #11 in Simple mode.
    `.trim(),
  },
  {
    id: 12,
    title: 'Async/Await in JavaScript',
    excerpt:
      'Simplify promise-based code with \`async\` and \`await\` for cleaner asynchronous flows.',
    imageUrl: 'https://picsum.photos/seed/simple12/400/200',
    content: `
## Async/Await in JavaScript

- **Promises vs Async/Await**: Async/await is syntactic sugar over promises.
- **Syntax**: \`async function fetchData() { const res = await fetch(url); }\`
- **Error Handling**: Use try/catch around await calls.
- **Parallelism**: Use \`Promise.all\` for concurrent awaits.

This is your “entire blog” content for post #12 in Simple mode.
    `.trim(),
  },
  {
    id: 13,
    title: 'CSS Flexbox & Grid Layout',
    excerpt:
      'Master Flexbox for one-dimensional layouts and Grid for two-dimensional layouts in modern CSS.',
    imageUrl: 'https://picsum.photos/seed/simple13/400/200',
    content: `
## CSS Flexbox & Grid Layout

- **Flexbox**: \`display: flex; justify-content: center; align-items: center;\`
- **Grid**: \`display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\`
- **Use Cases**: Flexbox for nav bars, Grid for complex layouts.
- **Responsive**: Combine media queries with grid/flex properties.

This is your “entire blog” content for post #13 in Simple mode.
    `.trim(),
  },
  {
    id: 14,
    title: 'Accessibility in Web Design',
    excerpt:
      'Ensure your sites are usable by everyone: semantic HTML, ARIA roles, and keyboard navigation.',
    imageUrl: 'https://picsum.photos/seed/simple14/400/200',
    content: `
## Accessibility in Web Design

- **Semantic HTML**: Use \`<header>\`, \`<main>\`, \`<button>\` properly.
- **ARIA Roles**: Provide additional context for assistive technologies.
- **Keyboard Navigation**: Ensure all interactive elements can be focused.
- **Contrast & Alt Text**: Provide sufficient color contrast and descriptive alt attributes.

This is your “entire blog” content for post #14 in Simple mode.
    `.trim(),
  },
  {
    id: 15,
    title: 'Responsive Design Fundamentals',
    excerpt:
      'Use fluid grids, media queries, and flexible images to build mobile-friendly experiences.',
    imageUrl: 'https://picsum.photos/seed/simple15/400/200',
    content: `
## Responsive Design Fundamentals

- **Fluid Grids**: Use percentage (%) widths instead of fixed px.
- **Media Queries**: Target breakpoints (e.g., \`@media (min-width: 768px)\`).
- **Flexible Images**: Use \`max-width: 100%; height: auto;\` to scale images.
- **Mobile-First**: Design for small screens first, then progressively enhance.

This is your “entire blog” content for post #15 in Simple mode.
    `.trim(),
  },
  {
    id: 16,
    title: 'Webpack Configuration Basics',
    excerpt:
      'Learn entry points, loaders, and plugins to bundle modern JavaScript applications.',
    imageUrl: 'https://picsum.photos/seed/simple16/400/200',
    content: `
## Webpack Configuration Basics

- **Entry**: \`entry: "./src/index.js"\`
- **Output**: \`output: { filename: "bundle.js", path: path.resolve(__dirname, "dist") }\`
- **Loaders**: Process JS/JSX (\`babel-loader\`), CSS (\`css-loader\`).
- **Plugins**: Optimize bundles (\`MiniCssExtractPlugin\`, \`HtmlWebpackPlugin\`).

This is your “entire blog” content for post #16 in Simple mode.
    `.trim(),
  },
  {
    id: 17,
    title: 'TypeScript for JavaScript Developers',
    excerpt:
      'Add static typing with TypeScript to catch errors early and improve code maintainability.',
    imageUrl: 'https://picsum.photos/seed/simple17/400/200',
    content: `
## TypeScript for JavaScript Developers

- **Installation**: \`npm install --save-dev typescript ts-loader\`
- **tsconfig.json**: Configure compiler options (e.g., \`strict: true\`).
- **Type Annotations**: \`let count: number = 5;\`
- **Interfaces & Types**: Define shapes of objects for better intellisense.

This is your “entire blog” content for post #17 in Simple mode.
    `.trim(),
  },
  {
    id: 18,
    title: 'Managing State in React',
    excerpt:
      'Use \`useState\`, \`useReducer\`, or Context API to manage component and global state effectively.',
    imageUrl: 'https://picsum.photos/seed/simple18/400/200',
    content: `
## Managing State in React

- **useState**: For local component state (\`const [count, setCount] = useState(0)\`).
- **useReducer**: When state logic is complex or involves multiple sub-values.
- **Context API**: Share state globally without prop drilling.
- **Third-Party**: Redux, MobX, or Zustand for larger applications.

This is your “entire blog” content for post #18 in Simple mode.
    `.trim(),
  },
  {
    id: 19,
    title: 'Writing Secure Web Applications',
    excerpt:
      'Protect against XSS, CSRF, and SQL injection by validating input, escaping output, and using tokens.',
    imageUrl: 'https://picsum.photos/seed/simple19/400/200',
    content: `
## Writing Secure Web Applications

- **XSS Prevention**: Escape user input before rendering in HTML.
- **CSRF Protection**: Use anti-CSRF tokens for form submissions.
- **SQL Injection**: Use parameterized queries or ORM methods.
- **Authentication**: Store passwords hashed (bcrypt) and use HTTPS.

This is your “entire blog” content for post #19 in Simple mode.
    `.trim(),
  },
  {
    id: 20,
    title: 'Error Handling in Node.js',
    excerpt:
      'Use try/catch, promise \`.catch()\`, and centralized error middleware to handle exceptions gracefully.',
    imageUrl: 'https://picsum.photos/seed/simple20/400/200',
    content: `
## Error Handling in Node.js

- **Synchronous Errors**: Use \`try { ... } catch (err) { ... }\`.
- **Async/Await Errors**: Wrap await calls in try/catch.
- **Promises**: Use \`.catch()\` to handle rejected promises.
- **Express Middleware**: Create error-handling middleware (\`app.use((err, req, res, next) => { ... });\`).

This is your “entire blog” content for post #20 in Simple mode.
    `.trim(),
  },
  {
    id: 21,
    title: 'Building Progressive Web Apps',
    excerpt:
      'Use service workers, manifest files, and responsive design to create installable PWAs.',
    imageUrl: 'https://picsum.photos/seed/simple21/400/200',
    content: `
## Building Progressive Web Apps

- **Service Workers**: Cache assets for offline use.
- **Web App Manifest**: Add app icons, name, and theme colors.
- **HTTPS Required**: Service workers only run on secure origins.
- **Responsive UI**: Ensure the app adapts to various screen sizes.

This is your “entire blog” content for post #21 in Simple mode.
    `.trim(),
  },
  {
    id: 22,
    title: 'Optimizing Images for the Web',
    excerpt:
      'Compress images, serve modern formats (WebP/AVIF), and use \`srcset\` for responsive loading.',
    imageUrl: 'https://picsum.photos/seed/simple22/400/200',
    content: `
## Optimizing Images for the Web

- **Compression**: Use tools like ImageOptim or Squoosh.
- **Modern Formats**: Serve WebP or AVIF when supported.
- **Responsive Images**: Use \`<img srcset>\` or \`<picture>\`.
- **Lazy Loading**: Add \`loading="lazy"\` attribute to defer offscreen images.

This is your “entire blog” content for post #22 in Simple mode.
    `.trim(),
  },
  {
    id: 23,
    title: 'Creating Custom Hooks in React',
    excerpt:
      'Extract reusable logic into custom hooks to keep components clean and DRY.',
    imageUrl: 'https://picsum.photos/seed/simple23/400/200',
    content: `
## Creating Custom Hooks in React

- **Rule of Hooks**: Only call hooks at the top level of a function component or another hook.
- **Returning Values**: Custom hooks can return state and functions (\`return [value, setValue];\`).
- **Use Cases**: Form handling, data fetching, or any shared logic.
- **Example**: \`function useWindowWidth() { const [w, setW] = useState(window.innerWidth); ... }\`.

This is your “entire blog” content for post #23 in Simple mode.
    `.trim(),
  },
  {
    id: 24,
    title: 'Debugging with Chrome DevTools',
    excerpt:
      'Use breakpoints, network panel, and performance tabs to diagnose front-end issues quickly.',
    imageUrl: 'https://picsum.photos/seed/simple24/400/200',
    content: `
## Debugging with Chrome DevTools

- **Elements Panel**: Inspect & modify DOM/CSS live.
- **Console**: Log variables and catch runtime errors.
- **Sources Panel**: Set JS breakpoints and step through code.
- **Network Panel**: Monitor API calls, status codes, and load times.

This is your “entire blog” content for post #24 in Simple mode.
    `.trim(),
  },
  {
    id: 25,
    title: 'Implementing Dark Mode',
    excerpt:
      'Use CSS custom properties and a toggle button to switch between light and dark themes.',
    imageUrl: 'https://picsum.photos/seed/simple25/400/200',
    content: `
## Implementing Dark Mode

- **CSS Variables**: Define colors as \`--bg-color: #fff; --text-color: #000;\`.
- **Media Query**: \`@media (prefers-color-scheme: dark) { ... }\`.
- **Toggle Button**: Update a root class (e.g., \`class="dark"\`) to switch themes.
- **Tailwind**: Use the \`dark\` variant for styling (\`dark:bg-black dark:text-white\`).

This is your “entire blog” content for post #25 in Simple mode.
    `.trim(),
  },
  {
    id: 26,
    title: 'Server-Side Rendering with Next.js',
    excerpt:
      'Use Next.js \`getServerSideProps\` or \`getStaticProps\` for faster time-to-first-byte.',
    imageUrl: 'https://picsum.photos/seed/simple26/400/200',
    content: `
## Server-Side Rendering with Next.js

- **getStaticProps**: Fetch data at build time for static generation.
- **getServerSideProps**: Fetch data on each request for dynamic content.
- **API Routes**: Create backend endpoints within Next.js.
- **Image Optimization**: Use \`<Image>\` component for automatic resizing and formatting.

This is your “entire blog” content for post #26 in Simple mode.
    `.trim(),
  },
  {
    id: 27,
    title: 'Introduction to GraphQL',
    excerpt:
      'Query exactly what you need from the server. Use Apollo Client or Relay for integrations.',
    imageUrl: 'https://picsum.photos/seed/simple27/400/200',
    content: `
## Introduction to GraphQL

- **Single Endpoint**: All queries and mutations go to a single /graphql endpoint.
- **Schema Definition**: Define types, queries, and mutations on the server.
- **Client Libraries**: Apollo Client simplifies caching and state management.
- **Advantages**: Fetch multiple resources in a single request.

This is your “entire blog” content for post #27 in Simple mode.
    `.trim(),
  },
  {
    id: 28,
    title: 'Building RESTful APIs with Express',
    excerpt:
      'Use Express router, middleware, and controllers to create scalable REST endpoints.',
    imageUrl: 'https://picsum.photos/seed/simple28/400/200',
    content: `
## Building RESTful APIs with Express

- **Express Router**: Organize routes in separate modules.
- **Middleware**: Use \`app.use(express.json())\` to parse JSON.
- **Controllers**: Keep logic separate from route definitions.
- **Error Handling**: Create an error-handling middleware for centralization.

This is your “entire blog” content for post #28 in Simple mode.
    `.trim(),
  },
  {
    id: 29,
    title: 'Deploying to AWS',
    excerpt:
      'Use services like EC2, S3, and Lambda to host your web applications in the cloud.',
    imageUrl: 'https://picsum.photos/seed/simple29/400/200',
    content: `
## Deploying to AWS

- **EC2**: Provision virtual servers and deploy Node/React manually.
- **S3 + CloudFront**: Host static sites (React build) with a CDN.
- **Lambda**: Deploy serverless functions for backend logic.
- **Elastic Beanstalk**: Simplify orchestration of web apps.

This is your “entire blog” content for post #29 in Simple mode.
    `.trim(),
  },
  {
    id: 30,
    title: 'Continuous Integration with GitHub Actions',
    excerpt:
      'Automate tests, builds, and deployments by defining workflows in \`.github/workflows/*.yml\`.',
    imageUrl: 'https://picsum.photos/seed/simple30/400/200',
    content: `
## Continuous Integration with GitHub Actions

- **Workflows**: YML files defining jobs and steps (e.g., \`ci.yml\`).
- **Actions Marketplace**: Reuse community-created actions (lint, test, build).
- **Secrets**: Store sensitive environment variables securely.
- **Triggers**: Run workflows on push, pull_request, or schedule.

This is your “entire blog” content for post #30 in Simple mode.
    `.trim(),
  },
];

const funnyPosts = [
  {
    id: 1,
    title: '🤣 Clean Code Ka Masaledar Tadka',
    excerpt:
      'Code chhota rakhna, lekin masaledar—jaise hero ka dialogue! Single Responsibility, samjhe? 😉',
    imageUrl: 'https://picsum.photos/seed/funny1/400/200',
    content: `
## 🤣 Clean Code Ka Masaledar Tadka

- Code chhota rakho, lekin masaledar—jaise hero ka dialogue!
- Har function sirf ek kaam kare: Single Responsibility Principle.
- Naam aisa chuno, sabko yaad rahe—hero jaise.
- Tests likho, warna code cake jaisa gir jaayega!

(Yeh poora blog content hai Funny mode post #1 ke liye.)
    `.trim(),
  },
  {
    id: 2,
    title: '😂 SOLID Principles – Filmy Style',
    excerpt:
      'Single Responsibility se lekar Dependency Inversion tak—yeh guidelines aapke code ko box office hit banayengi!',
    imageUrl: 'https://picsum.photos/seed/funny2/400/200',
    content: `
## 😂 SOLID Principles – Filmy Style

1. **Single Responsibility** – Har class ek hi kaam kare, varna villain ban jaayega.
2. **Open/Closed** – Code ko extend karo, modify mat karo—hero ki entry jaisa feel chahiye.
3. **Liskov Substitution** – Subclass base class ka double role—don’t spoil the twist!
4. **Interface Segregation** – Chhote interfaces do, na ki ek bada blockbuster interface.
5. **Dependency Inversion** – Abstractions ko hero banao, concretion ko cameo role.

(Yeh poora blog content hai Funny mode post #2 ke liye.)
    `.trim(),
  },
  {
    id: 3,
    title: '😜 DRY vs. KISS: Masla Aa Gaya!',
    excerpt:
      'Don’t Repeat Yourself aur Keep It Simple—dono mila do, code screen pe dance karne lagega!',
    imageUrl: 'https://picsum.photos/seed/funny3/400/200',
    content: `
## 😜 DRY vs. KISS: Masla Aa Gaya!

- **DRY**: Ek hi cheez baar baar repeat mat karo—varna code flop ho jaayega.
- **KISS**: Simple rakho, varna complex dialogue se audience bore ho jaayegi.
- Dono sahi se mil jaayein, code screen pe gaana gaayega!

(Yeh poora blog content hai Funny mode post #3 ke liye.)
    `.trim(),
  },
  {
    id: 4,
    title: '😅 Debugging Ka Jalwa',
    excerpt:
      'Breakpoints, console.log aur patience—debugging tab hi mazaa aata hai jab bug milta hai!',
    imageUrl: 'https://picsum.photos/seed/funny4/400/200',
    content: `
## 😅 Debugging Ka Jalwa

- **Breakpoints**: Jaise interval chahiye hero ki scene break—breakpoints use karo.
- **console.log**: Code ki dil ki baat console pe bolega.
- **Step-through**: Ek ek step dekhna, varna bug hero ko haarayega.
- **Patience**: Debugging me patience se kaam lo, tab bug khud declare karega “Main villain hoon.”

(Yeh poora blog content hai Funny mode post #4 ke liye.)
    `.trim(),
  },
  {
    id: 5,
    title: '😂 Version Control Ki Dhoom',
    excerpt:
      'Commit karte raho, branches banao, aur conflict se bachke rehna—varna code ka drama dekhna padega!',
    imageUrl: 'https://picsum.photos/seed/funny5/400/200',
    content: `
## 😂 Version Control Ki Dhoom

- **Commit Early & Often**: Jaise hero entry sequence—har moment record karo.
- **Branching Strategy**: Feature branch banana = side character introduce karna.
- **Merge Conflicts**: Hero vs Villain fight—resolve karo pehle, phir merge karo.
- **Pull Requests**: Code review = critics ka review—sab pasand karein!

(Yeh poora blog content hai Funny mode post #5 ke liye.)
    `.trim(),
  },
  {
    id: 6,
    title: '😜 Meaningful Comments Ka Jugaad',
    excerpt:
      'Comments me explain karo “kyun,” “kya” to pata hi hai—koi filmy commentary mat likho!',
    imageUrl: 'https://picsum.photos/seed/funny6/400/200',
    content: `
## 😜 Meaningful Comments Ka Jugaad

- **Kyoon, Kya**: Code already “kya” kar raha hai; comment me “kyoon” batao.
- **Aise Filmy Mat**: “Hero is in a hurry”—koi. Filmy. Comments. Mat. Likho.
- **Update Rakho**: Comments purane ho gaye? Wapas rewrite karo, warna confusion badega.
- **TODOs**: Future ke “missions” comment me likh do, reviewer khush ho jayega.

(Yeh poora blog content hai Funny mode post #6 ke liye.)
    `.trim(),
  },
  {
    id: 7,
    title: '😆 Legacy Code Ka Rescue Mission',
    excerpt:
      'Tests likhkar start karo, fir chhote chhote steps me refactor karo—tabhi “legacy” se “legend” banega!',
    imageUrl: 'https://picsum.photos/seed/funny7/400/200',
    content: `
## 😆 Legacy Code Ka Rescue Mission

1. **Tests Pehle**: Pehle likho test, tabhi pata chale bug hero hai ya villain.
2. **Chhote Steps**: Ek saath sab refactor mat karo, warna code ka “Pataka” phat sakta hai!
3. **Tool Ka Use**: Linters aur IDE refactoring tools se hero bano, villain nahi.
4. **Functionality Maintain**: Har step ke baad test run karo—varna code “drama” karega!

(Yeh poora blog content hai Funny mode post #7 ke liye.)
    `.trim(),
  },
  {
    id: 8,
    title: '😀 React Performance Ka Hero',
    excerpt:
      'Memoization, avoid re-renders, code-split karo—tabhi React app blockbuster banega!',
    imageUrl: 'https://picsum.photos/seed/funny8/400/200',
    content: `
## 😀 React Performance Ka Hero

- **Memoization**: \`React.memo\` aur \`useMemo\` se expensive calc save karo.
- **Avoid Unnecessary Renders**: \`useCallback\` use karo, warna component bar bar render hoga.
- **Code Splitting**: \`React.lazy\` + \`Suspense\` se app ko segment me load karo.
- **Virtualization**: Long lists ke liye \`react-window\` jaise library use karo.

(Yeh poora blog content hai Funny mode post #8 ke liye.)
    `.trim(),
  },
  {
    id: 9,
    title: '😅 Unit Testing Ka Khel',
    excerpt:
      'Jest, Mocha se tests likho—fail hote hi “Hamari Film” flop hogi, varna hit!',
    imageUrl: 'https://picsum.photos/seed/funny9/400/200',
    content: `
## 😅 Unit Testing Ka Khel

- **Unit Test Kya Hai?**: Code ka sabse chhota “scene” test hota hai.
- **Frameworks**: Jest, Mocha—jaise alag alag directors hain.
- **Arrange-Act-Assert**: Movie ka “setup-action-climax” pattern.
- **Mocking**: Dependencies ko celebrity cameo ki tarah treat karo—pinpoint karo test target.

(Yeh poora blog content hai Funny mode post #9 ke liye.)
    `.trim(),
  },
  {
    id: 10,
    title: '🤣 Design Patterns Ka Popcorn',
    excerpt:
      'Singleton se Observer tak—ye patterns hain code ke “snack,” taste isliye banta hai.',
    imageUrl: 'https://picsum.photos/seed/funny10/400/200',
    content: `
## 🤣 Design Patterns Ka Popcorn

- **Singleton**: Ek hi instance—jaise film ka lead hero.
- **Factory**: Objects create karo bina class naam directly ghoshit kiye.
- **Strategy**: Algorithms ko interchangeable banao—jaise item item pe dance moves change karo.
- **Observer**: Ek notification ka scene—jab lead update hota hai, sab side characters update ho jaate hain.

(Yeh poora blog content hai Funny mode post #10 ke liye.)
    `.trim(),
  },
  {
    id: 11,
    title: '😂 REST APIs Ka Hungama',
    excerpt:
      'Fetch/Axios se HTTP requests bhejo, JSON sambhalo aur errors se dosti mat karo—fix karo!',
    imageUrl: 'https://picsum.photos/seed/funny11/400/200',
    content: `
## 😂 REST APIs Ka Hungama

- **HTTP Methods**: GET, POST, PUT, DELETE—jaise film ke alag alag scenes.
- **Responses**: Status codes se pata chalega “hero” safe hai ya “villain” network failure.
- **Error Handling**: \`.then().catch()\` use karo, varna console me “drama” aayega.
- **Authentication**: Header me token bhejo—vensh nahi.

(Yeh poora blog content hai Funny mode post #11 ke liye.)
    `.trim(),
  },
  {
    id: 12,
    title: '😜 Async/Await Ka Masala',
    excerpt:
      'Promises se bhaago, Async/Await se milo—code aise chalega jaise “hero ki bike chase”!',
    imageUrl: 'https://picsum.photos/seed/funny12/400/200',
    content: `
## 😜 Async/Await Ka Masala

- **Promises vs Async/Await**: Promises ko ek side character banao, async/await hero ki tarah shine karega.
- **Syntax**: \`async function getData() { const res = await fetch(url); }\`
- **Error Handling**: Try/catch se “plot twist” handle karo.
- **Parallelism**: \`Promise.all\` use karo, jaise parallel car chase sequence.

(Yeh poora blog content hai Funny mode post #12 ke liye.)
    `.trim(),
  },
  {
    id: 13,
    title: '😎 Flexbox & Grid Ka Dance',
    excerpt:
      'Flexbox ek-dimensional hai, Grid two-dimensional—dance floor dono pe equally dhamaka!',
    imageUrl: 'https://picsum.photos/seed/funny13/400/200',
    content: `
## 😎 Flexbox & Grid Ka Dance

- **Flexbox**: \`display: flex; justify-content: center; align-items: center;\`
- **Grid**: \`display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\`
- **Use Case**: Navbars me Flexbox, complex layouts me Grid.
- **Responsive**: Dono me media queries ka use karo for smooth choreography.

(Yeh poora blog content hai Funny mode post #13 ke liye.)
    `.trim(),
  },
  {
    id: 14,
    title: '😂 Web Accessibility Ki Tamasha',
    excerpt:
      'Semantic HTML, ARIA roles, keyboard navigation—varna screen reader “lifeline” ka magar ho jayega!',
    imageUrl: 'https://picsum.photos/seed/funny14/400/200',
    content: `
## 😂 Web Accessibility Ki Tamasha

- **Semantic HTML**: \`<header>\`, \`<main>\`, \`<button>\`—sab sahi jagah.
- **ARIA Roles**: Assistive tech ko star cast information do.
- **Keyboard Navigation**: Tab sequence ko choreographer ki tarah set karo.
- **Contrast & Alt Text**: Image ke dialogue me description mat bhoolna.

(Yeh poora blog content hai Funny mode post #14 ke liye.)
    `.trim(),
  },
  {
    id: 15,
    title: '😆 Responsive Design Ka Jadoo',
    excerpt:
      'Fluid grids, media queries, flexible images—mobile pe bollywood jaisa hit feel!',
    imageUrl: 'https://picsum.photos/seed/funny15/400/200',
    content: `
## 😆 Responsive Design Ka Jadoo

- **Fluid Grids**: Percentage widths se layout adjust karo.
- **Media Queries**: \`@media (min-width: 768px)\` jaise scene breaks.
- **Flexible Images**: \`max-width: 100%; height: auto;\` se screen pe fit.
- **Mobile-First**: Small screen pe design shuru karo, phir bada karo.

(Yeh poora blog content hai Funny mode post #15 ke liye.)
    `.trim(),
  },
  {
    id: 16,
    title: '🙂 Webpack Ki Factory',
    excerpt:
      'Entry, loaders, plugins—Webpack ka configuration aise set karo jaise studio crew!',
    imageUrl: 'https://picsum.photos/seed/funny16/400/200',
    content: `
## 🙂 Webpack Ki Factory

- **Entry**: \`entry: "./src/index.js"\` jaise hero ka starting scene.
- **Output**: \`output: { filename: "bundle.js", path: __dirname + "/dist" }\` jaise box office hit.
- **Loaders**: JS/JSX ke liye \`babel-loader\`, CSS ke liye \`css-loader\`.
- **Plugins**: Production build ke liye \`MiniCssExtractPlugin\`, \`HtmlWebpackPlugin\`.

(Yeh poora blog content hai Funny mode post #16 ke liye.)
    `.trim(),
  },
  {
    id: 17,
    title: '😎 TypeScript Ka Dhamaka',
    excerpt:
      'Static typing se code secure banao—TypeScript ka superpower check karo!',
    imageUrl: 'https://picsum.photos/seed/funny17/400/200',
    content: `
## 😎 TypeScript Ka Dhamaka

- **Installation**: \`npm install --save-dev typescript ts-loader\` jaise hero ka weapon.
- **tsconfig.json**: \`strict: true\` rakho—varna villain bugs aayenge.
- **Type Annotations**: \`let count: number = 5;\` jaise hero ka helmet.
- **Interfaces & Types**: Objects ki shape define karo—intellisense ka magic milega.

(Yeh poora blog content hai Funny mode post #17 ke liye.)
    `.trim(),
  },
  {
    id: 18,
    title: '😆 React State Ka Tamasha',
    excerpt:
      'useState, useReducer, Context API—React me state manage karna aise filmy script!',
    imageUrl: 'https://picsum.photos/seed/funny18/400/200',
    content: `
## 😆 React State Ka Tamasha

- **useState**: Local state maintain karo (\`const [count, setCount] = useState(0)\`).
- **useReducer**: Jab logic complex ho, ye help karega.
- **Context API**: Prop drilling se bachne ka shortcut—globally state share karo.
- **Third-Party**: Redux ya Zustand—jab film ka budget bada ho.

(Yeh poora blog content hai Funny mode post #18 ke liye.)
    `.trim(),
  },
  {
    id: 19,
    title: '😂 Secure Web Ka Circuit',
    excerpt:
      'XSS, CSRF, SQL injection ko leave mat karo—varna code villain ban jaayega!',
    imageUrl: 'https://picsum.photos/seed/funny19/400/200',
    content: `
## 😂 Secure Web Ka Circuit

- **XSS Prevention**: Escape user input before rendering in HTML.
- **CSRF Protection**: Anti-CSRF token use karo—forms me secret passcode.
- **SQL Injection**: Parameterized queries use karo—varna DB ka villain aayega.
- **Authentication**: Passwords ko hashed rakhho (bcrypt)—actor ka identity protect hoti hai.

(Yeh poora blog content hai Funny mode post #19 ke liye.)
    `.trim(),
  },
  {
    id: 20,
    title: '😅 Node.js Error Ka Sidedish',
    excerpt:
      'Try/catch, promise \`.catch()\`, express middleware—error ka tarka dalke code tasty banao!',
    imageUrl: 'https://picsum.photos/seed/funny20/400/200',
    content: `
## 😅 Node.js Error Ka Sidedish

- **Synchronous Errors**: \`try { ... } catch (err) { ... }\` jaise safe stunt.
- **Async/Await Errors**: \`try { await something(); } catch (err) { ... }\`—hero moves carefully.
- **Promises**: \`.catch()\` me drama control karo.
- **Express Error Middleware**: \`app.use((err, req, res, next) => { ... })\`—final boss fight.

(Yeh poora blog content hai Funny mode post #20 ke liye.)
    `.trim(),
  },
  {
    id: 21,
    title: '😁 Progressive Web App Ki Pathshala',
    excerpt:
      'Service workers, manifest, responsive design—PWA bana ke “Install” button ka drama enjoy karo!',
    imageUrl: 'https://picsum.photos/seed/funny21/400/200',
    content: `
## 😁 Progressive Web App Ki Pathshala

- **Service Workers**: Offline caching ka hero—content hamesha accessible.
- **Web App Manifest**: Icons, name, theme colors define karo—app store jaisa feel.
- **HTTPS Required**: Hero sirf secure origins pe dikhai dega.
- **Responsive UI**: Mobile pe bhi blockbuster UX.

(Yeh poora blog content hai Funny mode post #21 ke liye.)
    `.trim(),
  },
  {
    id: 22,
    title: '😎 Image Optimization Ka Scene',
    excerpt:
      'Compress karo images, WebP/AVIF serve karo, responsive images use karo—fast loading ka dance!',
    imageUrl: 'https://picsum.photos/seed/funny22/400/200',
    content: `
## 😎 Image Optimization Ka Scene

- **Compression**: Squoosh aur TinyPNG se lossy/lossless compression.
- **Modern Formats**: WebP/AVIF use karo—picture quality + fast load.
- **Responsive Images**: \`<img srcset>\` ya \`<picture>\` tag.
- **Lazy Loading**: \`loading="lazy"\` attribute lagao—offscreen images wait karo.

(Yeh poora blog content hai Funny mode post #22 ke liye.)
    `.trim(),
  },
  {
    id: 23,
    title: '🤣 Custom Hooks Ka Hungama',
    excerpt:
      'Custom hooks likho, logic reuse karo—code me party lagao!',
    imageUrl: 'https://picsum.photos/seed/funny23/400/200',
    content: `
## 🤣 Custom Hooks Ka Hungama

- **Rule of Hooks**: Hooks sirf top-level pe banao—no loops/conditions.
- **Return Values**: Custom hooks me state aur functions return karo (\`return [value, setValue];\`).
- **Use Cases**: Form handling, data fetching, localStorage sync.
- **Example**: \`function useWindowWidth() { const [w, setW] = useState(window.innerWidth); … }\`.

(Yeh poora blog content hai Funny mode post #23 ke liye.)
    `.trim(),
  },
  {
    id: 24,
    title: '😅 Chrome DevTools Ka Drama',
    excerpt:
      'Elements, Console, Sources, Network—Debugging ka “stage” set karo!',
    imageUrl: 'https://picsum.photos/seed/funny24/400/200',
    content: `
## 😅 Chrome DevTools Ka Drama

- **Elements Panel**: Live DOM/CSS inspect kar ke scene set karo.
- **Console**: Logs se villain trace karo.
- **Sources Panel**: Breakpoints set karo, code step-through karo.
- **Network Panel**: API requests dekh ke load time ka suspense banao.

(Yeh poora blog content hai Funny mode post #24 ke liye.)
    `.trim(),
  },
  {
    id: 25,
    title: '🤩 Dark Mode Ka Lalkara',
    excerpt:
      'CSS custom properties aur toggle button se light/dark theme ka dhamaka!',
    imageUrl: 'https://picsum.photos/seed/funny25/400/200',
    content: `
## 🤩 Dark Mode Ka Lalkara

1. **CSS Variables**: \`--bg-color: #fff; --text-color: #000;\` define karo.
2. **Media Query**: \`@media (prefers-color-scheme: dark) { … }\` use karo.
3. **Toggle Button**: Root class (\`class="dark"\`) update karo.
4. **Tailwind Variants**: \`dark:bg-black dark:text-white\` se styling karo.

(Yeh poora blog content hai Funny mode post #25 ke liye.)
    `.trim(),
  },
  {
    id: 26,
    title: '😂 Next.js Ka Filmi Andaaz',
    excerpt:
      'getServerSideProps, getStaticProps — Next.js me blockbuster SSR/SSG banayo!',
    imageUrl: 'https://picsum.photos/seed/funny26/400/200',
    content: `
## 😂 Next.js Ka Filmi Andaaz

- **getStaticProps**: Build time pe data fetch karo—plot set ho gaya.
- **getServerSideProps**: Runtime pe data fetch—dynamic script likho.
- **API Routes**: Next.js me backend endpoints banado.
- **Image Optimization**: \`<Image>\` component se images compress/hide karo.

(Yeh poora blog content hai Funny mode post #26 ke liye.)
    `.trim(),
  },
  {
    id: 27,
    title: '😎 GraphQL Ka Tamasha',
    excerpt:
      'Single endpoint, exact queries—GraphQL se data fetching me drama kam, control zyada!',
    imageUrl: 'https://picsum.photos/seed/funny27/400/200',
    content: `
## 😎 GraphQL Ka Tamasha

- **Single Endpoint**: \`/graphql\` par sab queries/mutations.
- **Schema Definition**: Types, queries, mutations define karo.
- **Client**: Apollo Client ya Relay se real-time caching.
- **Advantages**: Multiple resources ek request me mil jaate hain.

(Yeh poora blog content hai Funny mode post #27 ke liye.)
    `.trim(),
  },
  {
    id: 28,
    title: '🤣 Express REST API Ka Hungama',
    excerpt:
      'Router, middleware, controllers—Express me RESTful API bana ke sabko entertain karo!',
    imageUrl: 'https://picsum.photos/seed/funny28/400/200',
    content: `
## 🤣 Express REST API Ka Hungama

- **Express Router**: Alag routes ka drama alag files me rakho.
- **Middleware**: \`app.use(express.json())\` se JSON parse karo—story smooth chalegi.
- **Controllers**: Business logic route se alag—spy sequence jaisa.
- **Error Handling**: Error middleware se hero errors ko defeat karo.

(Yeh poora blog content hai Funny mode post #28 ke liye.)
    `.trim(),
  },
  {
    id: 29,
    title: '😅 AWS Deployment Ka Shor',
    excerpt:
      'EC2, S3, Lambda — AWS me deploy karke cloud me dhamaka machao!',
    imageUrl: 'https://picsum.photos/seed/funny29/400/200',
    content: `
## 😅 AWS Deployment Ka Shor

- **EC2**: Virtual machines pe code host karo—manual control.
- **S3 + CloudFront**: Static site CDN se serve karo—fast loading.
- **Lambda**: Serverless functions deploy karo—zero server highway.
- **Elastic Beanstalk**: Pura orchestration manage karo—auto-scale hero feel.

(Yeh poora blog content hai Funny mode post #29 ke liye.)
    `.trim(),
  },
  {
    id: 30,
    title: '😎 GitHub Actions Ka Magic',
    excerpt:
      'Tests, builds, aur deployments automate karo—GitHub Actions se workflow blockbuster banao!',
    imageUrl: 'https://picsum.photos/seed/funny30/400/200',
    content: `
## 😎 GitHub Actions Ka Magic

- **Workflows**: YML files me define karo steps (\`ci.yml\`).
- **Actions Marketplace**: Community actions reuse karo—cheat code mat karo!
- **Secrets**: Environment variables secure rakho.
- **Triggers**: Push, pull_request, ya schedule pe workflows chalao.

(Yeh poora blog content hai Funny mode post #30 ke liye.)
    `.trim(),
  },
];

export default function BlogList() {
  const { mode } = useMode();
  const posts = mode === 'simple' ? simplePosts : funnyPosts;

  // === PAGINATION LOGIC ===
  const postsPerPage = 9; // show 9 cards per page
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // State: current page (1-based)
  const [currentPage, setCurrentPage] = useState(1);

  // Compute index range for current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  // Handler: go to a specific page
  const goToPage = (pageNum) => {
    if (pageNum < 1 || pageNum > totalPages) return;
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: previous page
  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  // Handler: next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* GRID OF CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.map((post) => {
          const basePath = mode === 'simple' ? '/simple' : '/funny';
          return (
            <motion.div
              key={post.id}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (post.id % postsPerPage) * 0.05 }}
            >
              <Link to={`${basePath}/${post.id}`} className="h-full">
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  imageUrl={post.imageUrl}
                />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* PAGINATION CONTROLS */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        {/* Previous button */}
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`
            px-3 py-1 rounded-md
            ${currentPage === 1
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'}
          `}
        >
          Previous
        </button>

        {/* Page number buttons */}
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => goToPage(pageNum)}
              className={`
                px-3 py-1 rounded-md
                ${currentPage === pageNum
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
              `}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next button */}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`
            px-3 py-1 rounded-md
            ${currentPage === totalPages
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'}
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
}
