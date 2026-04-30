import pool from "../config/database.js"

export async function getReviews() {
  const [rows] = await pool.query("SELECT * FROM review")
  return rows
}

export async function getReview(id) {
  const [rows] = await pool.query(`
    SELECT *
    FROM review
    WHERE review_id = ?
    `, [id])
  return rows[0]
}

export async function createReview(user_id, product_id, rating, review_text) {
  const [result] = await pool.query(`
    INSERT INTO review (user_id, product_id, rating, review_text) VALUES (?, ?, ?, ?)
  `, [user_id, product_id, rating, review_text])
  const review_id = result.insertId
  return getReview(review_id)
}


export async function updateReview(id, rating, review_text) {
  await pool.query(`
    UPDATE review
    SET rating = ?, review_text = ?
    WHERE review_id = ?
  `, [rating, review_text, id])

  return getReview(id)
}


export async function deleteReview(id) {
  const review = await getReview(id)

  if (!review) return null

  await pool.query(`
    DELETE FROM review
    WHERE review_id = ?
  `, [id])

  return review
}