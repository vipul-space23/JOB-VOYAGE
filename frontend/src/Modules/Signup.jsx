import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; 
import { useNavigate } from 'react-router-dom';
import styles from './CSS/Signup.module.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        number: '',
        password: '',
        role: '',
        file: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const fileHandler = (e) => {
        setFormData({ ...formData, file: e.target.files?.[0] });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullname, email, number, password, role, file } = formData;

        const data = new FormData();
        data.append('fullname', fullname);
        data.append('email', email);
        data.append('number', number);
        data.append('password', password);
        data.append('role', role);
        if (file) {
            data.append('file', file);
        }
        try {
            const res = await axios.post('http://localhost:5000/api/user/post', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            console.log(res.data);

            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error('Error registering user:', error.response?.data?.message || error.message);
        }
    };

    return (
        <div className={styles.container}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label>Full Name:</label>
                    <input
                        type="text" 
                        name="fullname" 
                        value={formData.fullname} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                        title="Please enter a valid email address"
                    />
                </div>
                <div>
                    <label>Number:</label>
                    <input
                        type="text" 
                        name="number" 
                        value={formData.number} 
                        onChange={handleChange} 
                        required
                        maxLength="10" 
                        pattern="\d{10}" 
                        title="Please enter a 10-digit phone number"
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select 
                        name="role" 
                        value={formData.role} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select Role</option>
                        <option value="Job Seeker">Job Seeker</option>
                        <option value="Employer">Employer</option>
                    </select>
                </div>
                <div>
                    <label>Profile Photo:</label>
                    <input
                        type="file" 
                        name="file" 
                        accept="image/*" 
                        onChange={fileHandler}
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account?<span ><a href="/login">Login</a></span></p>
        </div>
    );
};

export default Signup;
