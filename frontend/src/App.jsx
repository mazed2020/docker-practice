import React, { useState, useEffect } from 'react';
import axios from 'axios';
  // optional, for styling

const  App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/user/userRead');
      setUsers(res.data.data); // ✅ correctly access the array
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Fetch users on component load
  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/v1/user/createUser', formData);
      setMessage('User created successfully!');
      setFormData({ name: '', email: '', password: '' });
      fetchUsers(); // refresh user list
    } catch (error) {
      setMessage('Error creating user.');
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form className="user-form" onSubmit={handleSubmit}>
          <h2>Create User</h2>

          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit">Create Account</button>

          {message && <p className="message">{message}</p>}
        </form>

        <div className="user-list">
          <h3>Registered Users</h3>
          {users.length === 0 ? (
            <p>No users found.</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user._id}>
                  <strong>{user.name}</strong> — {user.email}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
