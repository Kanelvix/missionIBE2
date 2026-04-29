import pool from "../config/database.js"

export async function getClassModules() {
  const [rows] = await pool.query("SELECT * FROM modul_kelas")
  return rows
}

export async function getClassModule(id) {
  const [rows] = await pool.query(`
    SELECT *
    FROM modul_kelas
    WHERE modul_id = ?
    `, [id])
  return rows[0]
}

export async function createClassModule(title, product_id, sequence) {
  const [result] = await pool.query(`
    INSERT INTO modul_kelas (title, product_id, sequence) VALUES (?, ?, ?)
  `, [title, product_id, sequence])
  const modul_id = result.insertId
  return getClassModule(modul_id)
}

export async function updateClassModule(id, title, sequence) {
  await pool.query(`
    UPDATE modul_kelas
    SET title = ?, sequence = ?
    WHERE modul_id = ?
  `, [title, sequence, id])

  return getClassModule(id)
}


export async function deleteClassModule(id) {
  const module = await getClassModule(id)

  if (!module) return null

  await pool.query(`
    DELETE FROM modul_kelas
    WHERE modul_id = ?
  `, [id])

  return module
}

// const result = await createTutor('test', 'test', 'test')
const result2 = await getClassModules()

// console.log(result);
console.log(result2);