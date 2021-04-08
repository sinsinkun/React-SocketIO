# React-SocketIO

Focus of this project: testing socket implementation under the react framework

(HTML implementation of socketIO is fairly straight forward, but due to
react's virtual DOM, socketIO will require a different approach from how I implemented
the functionality in vanilla HTML/JS)

## Try it for yourself

The most important files are the server.js, which contains the server side code for SocketIO -
and ./client/src/components/Chatroom.js, which contains the client side code for SocketIO.

The repo must be downloaded/cloned to your PC, then run "npm install" to install all server side packages.
"npm install" must also be run *within* the client folder, to install all client side packages.
"npm run dev" in the root folder will allow access to an active react development environment that is also
hooked up to the server. If you would prefer a static client, you must run "npm run build" inside the client folder
then run "npm start" in the root folder.
