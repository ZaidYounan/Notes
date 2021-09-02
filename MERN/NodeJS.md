<h1>Initial Node.js Notes</h1>

- First released in 2009 by Ryan Dahl in reaction to slower, operation blocking web servers
- Node.js allows for JavaScript to be run outside of the browser
- Makes all tasks asynchronous (can occur at the same time)
- Powered by Google's V8 engine for JavaScript, it offloads slow input/output (I/O) tasks to the operating system so that it can perform other work until it is ready. It will then receive a signal.
- The signalling is done through the JavaScript mechanisms of callbacks, promises and async/await.