// Example API endpoint for user management - mocked for deployment
// import db from '../../config/db';

export default async function handler(req, res) {
  switch(req.method) {
    case 'GET':
      try {
        // Mock response for deployment
        const mockUsers = [
          { id: 1, name: 'Demo User', email: 'demo@example.com' },
          { id: 2, name: 'Test User', email: 'test@example.com' }
        ];
        return res.status(200).json(mockUsers);
      } catch (error) {
        console.error('API error:', error);
        return res.status(500).json({ error: 'Failed to fetch users' });
      }
      
    case 'POST':
      try {
        const { name, email, password } = req.body;
        
        // Basic validation
        if (!name || !email || !password) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
        
        // Mock response for successful creation
        const mockCreatedUser = {
          id: Math.floor(Math.random() * 1000),
          name,
          email
        };
        
        return res.status(201).json(mockCreatedUser);
      } catch (error) {
        console.error('API error:', error);
        return res.status(500).json({ error: 'Failed to create user' });
      }
      
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
