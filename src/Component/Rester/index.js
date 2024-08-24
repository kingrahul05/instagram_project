// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const mysql = require('mysql2');
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');

// // const app = express();
// // app.use(bodyParser.json());

// // const db = mysql.createConnection({
// //     host: 'localhost',
// //     user: 'root', // replace with your MySQL username
// //     password: 'StrongPassword123!', // replace with your MySQL password
// //     database: 'instagram_clone'
// // });

// // db.connect((err) => {
// //     if (err) throw err;
// //     console.log('Connected to MySQL database');
// // });

// // const secretKey = 'your_secret_key';

// // // Sign Up Route
// // app.post('/api/signup', async (req, res) => {
// //     const { email, username, name, password } = req.body;

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const query = 'INSERT INTO users (email, username, name, password) VALUES (?, ?, ?, ?)';
// //     db.query(query, [email, username, name, hashedPassword], (err, result) => {
// //         if (err) return res.status(500).json({ error: err.message });
// //         res.status(201).json({ message: 'User created successfully' });
// //     });
// // });

// // // Sign In Route
// // app.post('/api/signin', (req, res) => {
// //     const { email, password } = req.body;

// //     const query = 'SELECT * FROM users WHERE email = ?';
// //     db.query(query, [email], async (err, results) => {
// //         if (err) return res.status(500).json({ error: err.message });
// //         if (results.length === 0) return res.status(404).json({ message: 'User not found' });

// //         const user = results[0];
// //         const isMatch = await bcrypt.compare(password, user.password);

// //         if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

// //         const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
// //         res.status(200).json({ token });
// //     });
// // });

// // // Start the server
// // app.listen(5000, () => {
// //     console.log('Server is running on port 5000');
// // });



// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const app = express();
// app.use(bodyParser.json());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root', // replace with your MySQL username
//     password: 'StrongPassword123!', // replace with your MySQL password
//     database: 'instagram_clone'
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL database:', err.message);
//         return;
//     }
//     console.log('Connected to MySQL database');
// });

// const secretKey = 'your_secret_key';

// // Sign Up Route
// app.post('/api/signup', async (req, res) => {
//     const { email, username, name, password } = req.body;

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const query = 'INSERT INTO users (email, username, name, password) VALUES (?, ?, ?, ?)';
//         db.query(query, [email, username, name, hashedPassword], (err, result) => {
//             if (err) {
//                 console.error('Error inserting user:', err.message);
//                 return res.status(500).json({ error: err.message });
//             }
//             res.status(201).json({ message: 'User created successfully' });
//         });
//     } catch (err) {
//         console.error('Error hashing password:', err.message);
//         res.status(500).json({ error: err.message });
//     }
// });

// // Sign In Route
// app.post('/api/signin', (req, res) => {
//     const { email, password } = req.body;

//     const query = 'SELECT * FROM users WHERE email = ?';
//     db.query(query, [email], async (err, results) => {
//         if (err) {
//             console.error('Error querying user:', err.message);
//             return res.status(500).json({ error: err.message });
//         }
//         if (results.length === 0) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const user = results[0];
//         try {
//             const isMatch = await bcrypt.compare(password, user.password);
//             if (!isMatch) {
//                 return res.status(401).json({ message: 'Invalid credentials' });
//             }

//             const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
//             res.status(200).json({ token });
//         } catch (err) {
//             console.error('Error comparing passwords:', err.message);
//             res.status(500).json({ error: err.message });
//         }
//     });
// });

// // Start the server
// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });
