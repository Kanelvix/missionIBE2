import pool from "../config/database.js"

export async function getTutors() {
  const [rows] = await pool.query("SELECT * FROM tutor")
  return rows
}

export async function getTutor(id) {
  const [rows] = await pool.query(`
    SELECT *
    FROM tutor
    WHERE tutor_id = ?
    `, [id])
  return rows[0]
}

export async function createTutor(profession, company, user_id) {
  const [result] = await pool.query(`
    INSERT INTO tutor (profession, company, user_id) VALUES (?, ?, ?)
  `, [profession, company, user_id])
  const tutor_id = result.insertId
  return getTutor(tutor_id)
}


export async function updateTutor(id, profession, company) {
  await pool.query(`
    UPDATE tutor
    SET profession = ?, company = ?
    WHERE tutor_id = ?
  `, [profession, company, id])

  return getTutor(id)
}


export async function deleteTutor(id) {
  const tutor = await getTutor(id)

  if (!tutor) return null

  await pool.query(`
    DELETE FROM tutor
    WHERE tutor_id = ?
  `, [id])

  return tutor
}


// const result = await createTutor('test', 'test', 'test')
const result2 = await getTutors()

// console.log(result);
console.log(result2);