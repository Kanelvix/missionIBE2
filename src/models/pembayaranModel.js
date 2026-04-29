import pool from "../config/database.js"

export async function getPayments() {
  const [rows] = await pool.query("SELECT * FROM pembayaran")
  return rows
}

export async function getPayment(id) {
  const [rows] = await pool.query(`
    SELECT *
    FROM pembayaran
    WHERE payment_id = ?
    `, [id])
  return rows[0]
}

export async function createPayment(order_id, method, payment_status) {
  const [result] = await pool.query(`
    INSERT INTO pembayaran (order_id, method, payment_status) VALUES (?, ?, ?)
  `, [order_id, method, payment_status])
  const payment_id = result.insertId
  return getPayment(payment_id)
}


export async function updatePayment(id, method) {
  await pool.query(`
    UPDATE pembayaran
    SET method = ?
    WHERE payment_id = ?
  `, [method, id])

  return getPayment(id)
}


// const result = await createTutor('test', 'test', 'test')
const result2 = await getPayments()

// console.log(result);
console.log(result2);