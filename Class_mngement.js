// Text_msg = "Class Management"

// console.log(Text_msg);

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    { id: 1, lastName: 'Doe', firstName: 'John', section: 'BSIT4C', status: 'present' },
    { id: 2, lastName: 'Smith', firstName: 'Jane', section: 'BSIT4C', status: 'absent' },
];

app.post('/users', (req, res) => {
    console.log('POST request received for /users');

    const { firstName, lastName, section, status } = req.body;

    const userIndex = users.findIndex(user => user.lastName === lastName && user.firstName === firstName);

    if (userIndex !== 1) {
        users[userIndex].status = status;
        console.log(`Updated attendance for ${lastName} ${firstName} to: ${status}`);
        res.status(200).json({ message: `Attendance for ${lastName} ${firstName} has been updated to ${status}` });
    } else {
        const newUser = {
            id: users.length + 1,
            firstName,
            lastName,
            section,
            status
        };
        users.push(newUser);
        console.log(`New user successfully added ${lastName} ${firstName} with: ${status}`);
        res.status(201).json({ message: `New user successfully added` });
    }
});


app.get('/users', (req, res) => {
    res.status(200).json(users);
});


app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Management</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #0a0a0a;
            font-family: 'Courier New', Courier, monospace;
            color: #ff0000;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
            font-size: 24px;
            flex-direction: column;
            text-align: center;
        }

        h1 {
            text-transform: uppercase;
            letter-spacing: 6px;
            font-size: 4rem;
            color: #ff0000;
            text-shadow: 0 0 25px rgba(255, 0, 0, 0.9), 0 0 50px rgba(255, 0, 0, 0.6), 0 0 100px rgba(255, 0, 0, 0.3);
            opacity: 0;
            animation: fadeIn 3s ease-in-out forwards, glitch 1.5s infinite, flicker 0.5s infinite;
            font-weight: bold;
            margin-bottom: 30px;
        }

        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        @keyframes glitch {
            0% {
                text-shadow: 0 0 25px rgba(255, 0, 0, 0.9), 0 0 50px rgba(255, 0, 0, 0.6), 0 0 100px rgba(255, 0, 0, 0.3);
                transform: translate(0);
            }
            20% {
                text-shadow: 4px 0 25px rgba(255, 0, 0, 0.9), -4px 0 35px rgba(255, 0, 0, 0.7), 4px 0 50px rgba(255, 0, 0, 0.4);
                transform: translate(-5px, 5px);
            }
            40% {
                text-shadow: -4px 0 25px rgba(255, 0, 0, 0.9), 4px 0 35px rgba(255, 0, 0, 0.7), -4px 0 50px rgba(255, 0, 0, 0.4);
                transform: translate(5px, -5px);
            }
            60% {
                text-shadow: 3px 0 25px rgba(255, 0, 0, 0.9), -3px 0 35px rgba(255, 0, 0, 0.7), 3px 0 50px rgba(255, 0, 0, 0.4);
                transform: translate(-2px, 2px);
            }
            80% {
                text-shadow: -3px 0 25px rgba(255, 0, 0, 0.9), 3px 0 35px rgba(255, 0, 0, 0.7), -3px 0 50px rgba(255, 0, 0, 0.4);
                transform: translate(2px, -2px);
            }
            100% {
                text-shadow: 0 0 25px rgba(255, 0, 0, 0.9), 0 0 50px rgba(255, 0, 0, 0.6), 0 0 100px rgba(255, 0, 0, 0.3);
                transform: translate(0);
            }
        }

        @keyframes flicker {
            0% { opacity: 1; }
            20% { opacity: 0.4; }
            40% { opacity: 1; }
            60% { opacity: 0.3; }
            80% { opacity: 1; }
            100% { opacity: 0.5; }
        }

        .btn {
            background-color: #ff0000;
            color: #fff;
            border: none;
            padding: 20px 40px;
            font-size: 30px;
            font-weight: bold;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 2px;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.6);
            border-radius: 10px;
            margin-top: 20px;
            opacity: 0.9;
            transition: all 0.4s ease;
        }

        .btn:hover {
            opacity: 1;
            transform: scale(1.2);
            box-shadow: 0 0 30px rgba(255, 0, 0, 1);
        }

        .btn:active {
            transform: scale(0.95);
        }

        .jump-scare {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 1000;
            text-align: center;
            padding-top: 20%;
        }

        .jump-scare img {
            width: 80%;
            max-width: 700px;
            border-radius: 10px;
            animation: shake 0.5s infinite;
        }

        @keyframes shake {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            50% { transform: rotate(5deg); }
            75% { transform: rotate(-5deg); }
            100% { transform: rotate(0deg); }
        }
    </style>
</head>
<body>
    <h1>Server is up and running</h1>
    <button class="btn" id="scareButton">Click to Check Server Status</button>
    
    <div class="jump-scare" id="jumpScare">
        <img src="https://i.imgur.com/6V6yZkD.png" alt="Jump Scare Image">
    </div>

    <audio id="scareSound" src="https://www.soundjay.com/button/beep-07.wav"></audio>

    <script>
        const scareButton = document.getElementById('scareButton');
        const jumpScare = document.getElementById('jumpScare');
        const scareSound = document.getElementById('scareSound');

        scareButton.addEventListener('click', () => {
            scareButton.innerText = "Server Error... Please Wait...";

            scareSound.play();

            setTimeout(() => {
                scareButton.innerText = "Click to Check Server Status";
                jumpScare.style.display = 'block';
            }, 1500);

            setTimeout(() => {
                jumpScare.style.display = 'none';
            }, 3000);
        });
    </script>
</body>
</html>


    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
