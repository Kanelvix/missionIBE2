import pool from "../config/database.js"

export async function getMaterials() {
  const [rows] = await pool.query("SELECT * FROM material")
  return rows
}

export async function getMaterial(id) {
  const [rows] = await pool.query(`
    SELECT *
    FROM material
    WHERE material_id = ?
    `, [id])
  return rows[0]
}

export async function createMaterial(modul_id, title, duration, type, caption, file_url, material_video_url, sequence) {
  const [result] = await pool.query(`
    INSERT INTO material (modul_id, title, duration, type, caption, file_url, material_video_url, sequence) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `, [modul_id, title, duration, type, caption, file_url, material_video_url, sequence])
  const material_id = result.insertId
  return getMaterial(material_id)
}


export async function updateMaterial(id, title, type, caption, file_url, material_video_url, sequence) {
  await pool.query(`
    UPDATE material
    SET title = ?, type = ?, caption = ?, file_url = ?, material_video_url = ?, sequence = ?
    WHERE material_id = ?
  `, [title, type, caption, file_url, material_video_url, sequence, id])

  return getMaterial(id)
}


export async function deleteMaterial(id) {
  const material = await getMaterial(id)

  if (!material) return null

  await pool.query(`
    DELETE FROM material
    WHERE material_id = ?
  `, [id])

  return material
}


// const result = await createTutor('test', 'test', 'test')
const result2 = await getMaterials()

// console.log(result);
console.log(result2);