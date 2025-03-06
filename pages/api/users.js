// Example API endpoint for user management
import db from '../../config/db';

export default async function handler(req, res) {
  switch(req.method) {
    case 'GET':
      try {
        const result = await db.query('SELECT id, name, email FROM users');
        return res.status(200).json(result.rows);
      } catch (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Failed to fetch users' });
      }
      
    case 'POST':
      try {
        const { name, email, password } = req.body;
        
        // Basic validation
        if (!name || !email || !password) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
        
        const result = await db.query(
          'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email',
          [name, email, password] // In production, password should be hashed
        );
        
        return res.status(201).json(result.rows[0]);
      } catch (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Failed to create user' });
      }
      
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
