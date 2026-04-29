import pool from "../config/database.js";


async function seed() {
  await pool.query(`
    INSERT INTO users (name, pwd, email, profile_picture, phone_number)
    VALUES
      ('Raka Pratama', 'password123', 'raka1@gmail.com', 'https://i.pravatar.cc/150?img=1', '081111111001'),
      ('Kevin Wijaya', 'password123', 'kevin2@gmail.com', 'https://i.pravatar.cc/150?img=2', '081111111002'),
      ('Dimas Saputra', 'password123', 'dimas3@gmail.com', 'https://i.pravatar.cc/150?img=3', '081111111003'),
      ('Arif Nugroho', 'password123', 'arif4@gmail.com', 'https://i.pravatar.cc/150?img=4', '081111111004'),
      ('Ayu Lestari', 'password123', 'ayu5@gmail.com', 'https://i.pravatar.cc/150?img=5', '081111111005'),
      ('Nadia Putri', 'password123', 'nadia6@gmail.com', 'https://i.pravatar.cc/150?img=6', '081111111006'),
      ('Salsa Maharani', 'password123', 'salsa7@gmail.com', 'https://i.pravatar.cc/150?img=7', '081111111007'),
      ('Rizky Adinata', 'password123', 'rizky8@gmail.com', 'https://i.pravatar.cc/150?img=8', '081111111008'),
      ('Maya Santoso', 'password123', 'maya9@gmail.com', 'https://i.pravatar.cc/150?img=9', '081111111009'),
      ('Indra Mahendra', 'password123', 'indra10@gmail.com', 'https://i.pravatar.cc/150?img=10', '081111111010'),
      ('Clara Widyastuti', 'password123', 'clara11@gmail.com', 'https://i.pravatar.cc/150?img=11', '081111111011'),
      ('Fajar Hidayat', 'password123', 'fajar12@gmail.com', 'https://i.pravatar.cc/150?img=12', '081111111012'),
      ('Ratna Kusuma', 'password123', 'ratna13@gmail.com', 'https://i.pravatar.cc/150?img=13', '081111111013'),
      ('Andre Saputra', 'password123', 'andre14@gmail.com', 'https://i.pravatar.cc/150?img=14', '081111111014'),
      ('Melisa Hartono', 'password123', 'melisa15@gmail.com', 'https://i.pravatar.cc/150?img=15', '081111111015'),
      ('Aditya Ramadhan', 'password123', 'aditya16@gmail.com', 'https://i.pravatar.cc/150?img=16', '081111111016'),
      ('Fikri Maulana', 'password123', 'fikri17@gmail.com', 'https://i.pravatar.cc/150?img=17', '081111111017'),
      ('Bima Prakoso', 'password123', 'bima18@gmail.com', 'https://i.pravatar.cc/150?img=18', '081111111018'),
      ('Naufal Akbar', 'password123', 'naufal19@gmail.com', 'https://i.pravatar.cc/150?img=19', '081111111019'),
      ('Hendra Wijaya', 'password123', 'hendra20@gmail.com', 'https://i.pravatar.cc/150?img=20', '081111111020')
  `)

  console.log('seed done');
}

seed()