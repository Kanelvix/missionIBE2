import bcrypt from "bcrypt"
import pool from "../config/database.js"


export async function getUsers() {
  const [rows] = await pool.query("SELECT * FROM users")
  return rows
}

export async function getUser(id) {
  const [rows] = await pool.query(`
    SELECT *
    FROM users
    WHERE user_id = ?
    `, [id])
  return rows[0]
}



export async function createUser(name, pwd, email, profile_picture, phone_number) {
  const hashedPassword = await bcrypt.hash(pwd, 10)
  
  const [result] = await pool.query(`
    INSERT INTO users (name, pwd, email, profile_picture, phone_number) VALUES (?, ?, ?, ?, ?)
  `, [name, hashedPassword, email, profile_picture, phone_number])
  const user_id = result.insertId
  return getUser(user_id)
}


export async function updateUser(id, name, pwd, email, profile_picture, phone_number) {
  const hashedPassword = await bcrypt.hash(pwd, 10)

  await pool.query(`
    UPDATE users
    SET name = ?, pwd = ?, email = ?, profile_picture = ?, phone_number = ?
    WHERE user_id = ?
  `, [name, hashedPassword, email, profile_picture, phone_number, id])

  return getUser(id)
}


export async function deleteUser(id) {
  const user = await getUser(id)

  if (!user) return null

  await pool.query(`
    DELETE FROM users
    WHERE user_id = ?
  `, [id])

  return user
}


// const result = await createUser('test', 'test', 'test', 'test', 'test')
const result2 = await getUsers()
// const result3 = await deleteUser(1)

// console.log(result);
console.log(result2);
// console.log(result3);