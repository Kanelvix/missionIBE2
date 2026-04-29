import pool from "../config/database.js"

export async function getOrders() {
  const [rows] = await pool.query("SELECT * FROM orders")
  return rows
}

export async function getOrder(id) {
  const [rows] = await pool.query(`
    SELECT *
    FROM orders
    WHERE order_id = ?
    `, [id])
  return rows[0]
}

export async function createOrder(user_id, product_id, invoice_number, total_price) {
  const [result] = await pool.query(`
    INSERT INTO orders (user_id, product_id, invoice_number, total_price) VALUES (?, ?, ?, ?)
  `, [user_id, product_id, invoice_number, total_price])
  const order_id = result.insertId
  return getOrder(order_id)
}

export async function deleteOrder(id) {
  const order = await getOrder(id)

  if (!order) return null

  await pool.query(`
    DELETE FROM orders
    WHERE order_id = ?
  `, [id])

  return order
}


// const result = await createTutor('test', 'test', 'test')
const result2 = await getOrders()

// console.log(result);
console.log(result2);