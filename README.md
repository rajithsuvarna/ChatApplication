Run the server using: npm start

This application will contain two pages 1)login chat room page and chat room

**Login Chat room page:**

![image](https://github.com/rajithsuvarna/ChatApplication/assets/109891044/ee7bc204-93d1-4459-87f9-c6f161df2654)

![image](https://github.com/rajithsuvarna/ChatApplication/assets/109891044/abfc591c-4e67-4f49-b81d-ce439441c64e)

![image](https://github.com/rajithsuvarna/ChatApplication/assets/109891044/6afd20da-88ca-403b-ba72-bf8b1d91ded0)

**Chat Room:**

![image](https://github.com/rajithsuvarna/ChatApplication/assets/109891044/dfd20c95-e51f-422f-b1ce-6f5da5a6a745)



A chat room using Socket.IO is a real-time messaging application that allows multiple users to communicate with each other instantly over the internet. Socket.IO is a JavaScript library that enables bidirectional communication between web clients and servers, making it an ideal choice for building real-time applications like chat rooms.

Here's a description of how a chat room using Socket.IO typically works:

1)Server Setup: You start by setting up a backend server using Node.js along with a framework like Express.js. Socket.IO is then integrated into the server to handle WebSocket connections.

2)Client-Side Setup: On the client-side, you build a web interface using HTML, CSS, and JavaScript, React. You include the Socket.IO client library in your HTML or import it into your JavaScript code.

3)Establishing Connection: When a user visits the chat application in their browser, their client (browser) establishes a WebSocket connection with the server via Socket.IO. This connection allows real-time communication between the client and the server.

4)Joining a Chat Room: Users typically join specific chat rooms or channels to participate in conversations related to specific topics or with specific groups of people.

5)Sending and Receiving Messages: Users can send messages to the chat room by typing into an input field and pressing "send". When a message is sent, it is transmitted to the server through the WebSocket connection. The server then broadcasts the message to all other users in the same chat room, allowing everyone to see it instantly.

6)Displaying Messages: As messages are received from the server, they are displayed in the chat interface in real-time. Each message typically includes information about the sender (e.g., username, timestamp) along with the message content and a timestamp.
