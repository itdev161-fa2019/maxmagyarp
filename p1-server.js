import express from 'express';
import connectP1Database from './config/P1DB';
import { check, validationResult } from 'express-validator';

//Express application
const app = express();
const port = '3000';
const proj = 'Project 1';

// Connect to Project 1 Database
connectP1Database();

// Project 1 Middleware
app.use(express.json({ extended: false }));

//Api endpoints
/**
 * @route Get /
 * @desc Test endpoint
 */
app.get('/', (req, res) => 
    res.send(`Project 1 api return displayed in browser after connecting to port ${port}.`)
    );

/**
 * @route POST api/P1users
 * @desc Register P1user
 */
app.post(
    '/api/users', 
    [
        check('name', 'Please enter your name')
            .not()
            .isEmpty(),
        check('email', 'Please enter a valid email').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 })
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
          return res.send(req.body);
        }
    }
);

//Listener
app.listen(`${port}`, () => console.log(`${proj} server running on port ${port}.`));