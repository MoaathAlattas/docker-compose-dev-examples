const express = require('express')
const { Pool } = require('pg')
const app = express()
const pool = new Pool({
  host: 'postgres',
  user: 'example',
  database: 'example',
  password: 'example',
  port: 5432,
})
const port = 3000

app.get('/',  async (req, res) => {
  const query = await pool.query('SELECT NOW()')
  res.send(`Hello World! ${query.rows[0].now}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

