import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CSS/Navigation.css';

const Navigation = ({ user, setUser }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const logoutHandler = async () => {
        try {
            const res = await axios.post(`http://localhost:5000/api/user/logout`, { withCredentials: true });

            if (res.data.success) {
                localStorage.removeItem("user");
                setUser(null);
                toast.success(res.data.message);
                navigate("/");
            } else {
                toast.error("Logout failed. Please try again.");
            }
        } catch (error) {
            console.log("Logout Error:", error);
            toast.error(error.response?.data?.message || "Logout request failed");
        }
    };

    const open = Boolean(anchorEl);

    return (
        <div className="nav-container">
            <div className="nav-logo">
                <h1>Job<span>Voyage</span></h1>
            </div>
            <div className="nav-links">
                <ul>
                    {user && user.role === 'Employer' ? (
                        <>
                            <li><Link to="/compdash">Companies</Link></li>
                            <li><Link to="/jobdash">Jobs</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/jobs">Jobs</Link></li>
                        </>
                    )}
                </ul>
            </div>
            <div className="nav-actions">
                {!user ? (
                    <>
                        <Link to="/login"><Button class="login-button" variant="contained">Login</Button></Link>
                        <Link to="/signup"><Button class="signup-button" variant="contained">Signup</Button></Link>
                    </>
                ) : (
                    <>
                        <Avatar
                            alt={user?.fullname}
                            src={user?.profile?.photo}
                            className="nav-avatar"
                            onClick={handlePopoverOpen}
                        />
                        <Popover
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handlePopoverClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                        >
                            <div className="popover-content">
                                <div className="popover-header">
                                    <Avatar
                                        alt={user?.fullname}
                                        src={user?.profile?.photo}
                                        className="popover-header-avatar"
                                    />
                                    <div>
                                        <Typography variant="h6">{user?.fullname}</Typography>
                                        <Typography variant="body2">{user?.profile?.bio}</Typography>
                                    </div>
                                </div>
                                <div className="popover-body">
                                    {user &&  (
                                        <Button fullWidth onClick={handlePopoverClose}>
                                            <Link to="/profile">View Profile</Link>
                                        </Button>
                                    )}
                                    <Button
                                        fullWidth
                                        className="popover-button"
                                        onClick={() => {
                                            handlePopoverClose();
                                            logoutHandler();
                                        }}
                                    >
                                        Logout
                                    </Button>
                                </div>
                            </div>
                        </Popover>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navigation;
