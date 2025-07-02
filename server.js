const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'laerson',
    database: 'site'
});


app.get('/api/bilhetes', (req, res) => {
    const sql = 'SELECT * FROM bilhetes';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

app.get('/api/bilhetes/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const sql = 'SELECT * FROM bilhete WHERE codigo = ?';
    
    db.query(sql, [codigo], (err, results) => {
        if (err) {
            console.error("Erro ao buscar bilhete:", err);
            return res.status(500).json({ error: 'Erro interno' });
        }
        if (results.length > 0) {
            res.json({ valid: true, bilhete: results[0] });
        } else {
            res.json({ valid: false });
        }
    });
});


app.use(express.json()); // para interpretar JSON no corpo da requisição

app.post('/api/bilhetes', (req, res) => {
    const { code, game, quantity, total, method, date,dateGame,buyer,email } = req.body;

    const sql = 'INSERT INTO bilhete (codigo, jogo, quantidade, total, metodo_pagamento, data_compra,Buyer,Email,data_jogo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [code, game, quantity, total, method, date,buyer,email,dateGame];

    db.query(sql, values, async (err, result) => {
        if (err) {
            console.error("Erro ao inserir bilhete:", err);
            return res.status(500).json({ error: 'Erro ao salvar bilhete no banco.' });
        }

        // Send email
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or use SMTP for production
        auth: {
            user: 'laersonrui@gmail.com',
            pass: 132214
        },
    });

    const mailOptions = {
        from: 'laersonrui@gmail.com',
        to: email,
        subject: 'Seu bilhete foi confirmado 🎟️',
        text: `
Olá ${buyer},

Seu bilhete para o jogo ${game} foi confirmado com sucesso!

📅 Data do Jogo: ${dateGame}
🔢 Código do Bilhete: ${code}
🎟️ Quantidade: ${quantity}
💳 Método de Pagamento: ${method}
💰 Total: ${total}

Obrigado por sua compra!

- Equipe de Gestão de Bilhetes
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
       res.json({ success: true, id: result.insertId });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return res.json({ success: false, message: 'Falha ao enviar email.' });
    }
        
    });
});
app.listen(3001, () => {
    console.log('API rodando em http://localhost:3001');
});
