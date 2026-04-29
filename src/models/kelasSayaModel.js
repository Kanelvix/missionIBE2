import pool from "../config/database.js"

export async function getMyClasses() {
  const [rows] = await pool.query("SELECT * FROM kelas_saya")
  return rows
}

export async function getMyClass(id) {
  const [rows] = await pool.query(`
    SELECT *
    FROM kelas_saya
    WHERE myclass_id = ?
    `, [id])
  return rows[0]
}

export async function createMyClass(product_id, user_id) {
  const [result] = await pool.query(`
    INSERT INTO kelas_saya (product_id, user_id) VALUES (?, ?)
  `, [product_id, user_id])
  const myclass_id = result.insertId
  return getMyClass(myclass_id)
}

// const result = await createTutor('test', 'test', 'test')
const result2 = await getMyClasses()

// console.log(result);
console.log(result2);