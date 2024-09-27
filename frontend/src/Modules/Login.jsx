import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import styles from './CSS/Login.module.css'; // Import your CSS module

const Login = ({ setUser }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:5000/api/user/login`, formData, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                const loggedUser = res.data.user; 
                setUser(loggedUser); 
                localStorage.setItem("user", JSON.stringify(loggedUser));
                toast.success(res.data.message);
                navigate("/"); 
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email" name="email" value={formData.email} onChange={handleChange} required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select name="role" value={formData.role} onChange={handleChange} required>
                        <option value="">Select Role</option>
                        <option value="Job Seeker">Job Seeker</option>
                        <option value="Employer">Employer</option>
                    </select>
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account?<span><a href="/signup"> Sign up</a></span></p>
        </div>
    );
};

export default Login;
