const express = require('express');
const mssql = require('mssql');
const bodyParser = require('body-parser');
const dotenv = require ('dotenv')
dotenv.config()

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const pool = new mssql.ConnectionPool(config);
const poolConnect = pool.connect();


app.post('/register', async (req, res) => {
  try {
    await poolConnect;

    const { name, email, password, cohort } = req.body;

    const request = pool.request();
    const query = `
      INSERT INTO Members (Name, Email, Password, Cohort)
      VALUES (@Name, @Email, @Password, @Cohort)
    `;

    request.input('Name', mssql.NVarChar, name);
    request.input('Email', mssql.NVarChar, email);
    request.input('Password', mssql.NVarChar, password);
    request.input('Cohort', mssql.NVarChar, cohort);

    await request.query(query);

    res.status(201).json({ message: 'Member registered successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
