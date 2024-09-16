const db = require('../config/db'); // Importa a conexão com o banco de dados 

// Função para obter todas as transações 
const getAllProducts = (require, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error('Erro ao obter os produtos:', err);
            res.status(500).send('Erro ao obter produtos');
            return;
        }
        res.json(results);
    });
};
// Função para adicionar uma nova transação 
const addProducts = (req, res) => { 
    const {purchase_date, price, details, category, payment, register_id } = req.body; 
    db.query( 
      'INSERT INTO products (purchase_date, price, details, category, payment, register_id) VALUES  (?, ?, ?, ?, ?, ?)', 
      [purchase_date, price, details, category, payment, register_id], 
      (err, results) => { 
        if (err) { 
          console.error('Erro ao adicionar novo produto:', err); 
          res.status(500).send('Erro ao adicionar  novo produto'); 
          return; 
        } 
        res.status(201).send('Novo produto adicionada com sucesso'); 
      } 
      
    ); 
  };

// Função para atualizar uma transação existente (substituição completa) 
const updateProductsPut = (req, res) => {
    const { id } = req.params;
    const { purchase_date, price, details, category, payment, register_id } = req.body;
    db.query(
      'UPDATE products SET purchase_date = ?, price = ?, details = ?, category = ?, payment = ?, register_id = ? WHERE id = ?',
      [purchase_date, price, details, category, payment, register_id, id], 
      (err, results) => {
        if (err) {
          console.error('Erro ao atualizar o produto', err);
          res.status(500).send('Erro ao atualizar o produto');
          return;
        }
        res.send('Produto atualizado com sucesso');
      }
    );
  };
   
   
  // Função para atualizar uma transação existente (atualização parcial) 
  const updateProductsPatch = (req, res) => { 
    const { id } = req.params; 
    const fields = req.body; 
    const query = []; 
    const values = []; 
   
    for (const [key, value] of Object.entries(fields)) { 
      query.push(`${key} = ?`); 
      values.push(value); 
    } 
   
    values.push(id); 
   
    db.query( 
      `UPDATE products SET ${query.join(', ')} WHERE id = ?`, values, 
      (err, results) => { 
        if (err) { 
          console.error('Erro ao atualizar produto:', err); 
          res.status(500).send('Erro ao atualizar produto'); 
          return; 
        } 
        res.send('Produto atualizado com sucesso'); 
      } 
    ); 
  };

// Função para deletar uma transação existente 
const deleteProducts = (req, res) => { 
    const { id } = req.params; 
    db.query('DELETE FROM products WHERE id = ?', [id], (err, results) => { 
      if (err) { 
        console.error('Erro ao deletar produto:', err); 
        res.status(500).send('Erro ao deletar produto'); 
        return; 
      } 
      res.send('Produto deletada com sucesso'); 
    }); 
  }; 
   
 
module.exports = {
    getAllProducts,
    addProducts,
    updateProductsPut,
    updateProductsPatch,
    deleteProducts
};