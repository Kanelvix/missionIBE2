import pool from "../config/database.js"

export async function getPretests() {
  const [rows] = await pool.query("SELECT * FROM pretest")
  return rows
}

export async function getPretest(id) {
  const [rows] = await pool.query(`
    SELECT *
    FROM pretest
    WHERE pretest_id = ?
    `, [id])
  return rows[0]
}

export async function createPretest(material_id, question, answer_a, answer_b, answer_c, answer_d, correct_answer) {
  const answers = ['answer_a', 'answer_b', 'answer_c', 'answer_d']
  if (!answers.includes(correct_answer)) {
    throw new Error(`Invalid type. Must be one of: ${answers.join(', ')}`)
  }
  
  const [result] = await pool.query(`
    INSERT INTO pretest (material_id, question, answer_a, answer_b, answer_c, answer_d, correct_answer) VALUES (?, ?, ?, ?, ?, ?, ?)
  `, [material_id, question, answer_a, answer_b, answer_c, answer_d, correct_answer])
  const pretest_id = result.insertId
  return getPretest(pretest_id)
}


export async function updatePretest(id, question, answer_a, answer_b, answer_c, answer_d, correct_answer) {
  const answers = ['answer_a', 'answer_b', 'answer_c', 'answer_d']
  if (!answers.includes(correct_answer)) {
    throw new Error(`Invalid type. Must be one of: ${answers.join(', ')}`)
  }

  await pool.query(`
    UPDATE pretest
    SET question = ?, answer_a = ?, answer_b = ?, answer_c = ?, answer_d = ?, correct_answer = ?
    WHERE pretest_id = ?
  `, [question, answer_a, answer_b, answer_c, answer_d, correct_answer, id])

  return getPretest(id)
}


export async function deletePretest(id) {
  const pretest = await getPretest(id)

  if (!pretest) return null

  await pool.query(`
    DELETE FROM pretest
    WHERE pretest_id = ?
  `, [id])

  return pretest
}