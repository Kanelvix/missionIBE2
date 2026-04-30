import pool from "../config/database.js"


export async function getProducts() {
  const [rows] = await pool.query("SELECT * FROM produk")
  return rows
}

export async function getProduct(id) {
  const [rows] = await pool.query(`
    SELECT *
    FROM produk
    WHERE product_id = ?
    `, [id])
  return rows[0]
}

export async function createProduct(title, price, description, thumbnail_url, tutor_id, category_id, duration, lang) {
  const [result] = await pool.query(`
    INSERT INTO produk (title, price, description, thumbnail_url, tutor_id, category_id, duration, lang)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `, [title, price, description, thumbnail_url, tutor_id, category_id, duration, lang])
  const product_id = result.insertId
  return getProduct(product_id)
}


export async function updateProduct(id, title, price, description, thumbnail_url, category_id, duration, lang) {
  await pool.query(`
    UPDATE produk
    SET title = ?, price = ?, description = ?, thumbnail_url = ?, category_id = ?, duration = ?, lang = ?
    WHERE product_id = ?
  `, [title, price, description, thumbnail_url, category_id, duration, lang, id])

  return getProduct(id)
}


export async function deleteProduct(id) {
  const product = await getProduct(id)

  if (!product) return null

  await pool.query(`
    DELETE FROM produk
    WHERE product_id = ?
  `, [id])

  return product
}