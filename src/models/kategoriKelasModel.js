import pool from "../config/database.js"

export async function getCategories() {
  const [rows] = await pool.query("SELECT * FROM kategori_kelas")
  return rows
}

export async function getCategory(id) {
  const [rows] = await pool.query(`
    SELECT *
    FROM kategori_kelas
    WHERE category_id = ?
    `, [id])
  return rows[0]
}

export async function createCategory(category_name) {
  const [result] = await pool.query(`
    INSERT INTO kategori_kelas (category_name) VALUES (?)
  `, [category_name])
  const category_id = result.insertId
  return getCategory(category_id)
}


export async function updateCategory(id, category_name) {
  await pool.query(`
    UPDATE kategori_kelas
    SET category_name = ?
    WHERE category_id = ?
  `, [category_name, id])

  return getCategory(id)
}


export async function deleteCategory(id) {
  const category = await getCategory(id)

  if (!category) return null

  await pool.query(`
    DELETE FROM kategori_kelas
    WHERE category_id = ?
  `, [id])

  return category
}


// const result = await createCategory('')
const result2 = await getCategories()

// console.log(result);
console.log(result2);