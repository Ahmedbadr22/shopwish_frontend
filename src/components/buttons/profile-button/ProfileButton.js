import React from 'react';
import {Avatar, Button} from "@mui/material";

const ProfileButton = ({user}) => {
    return (
        <Button
            variant="text"
            color={"primary"}
            className="wishlist action-item"
            startIcon={
                <Avatar
                    sx={{width: 26, height: 26}}
                    alt={user.first_name + ' ' + user.last_name}
                />
            }
        >
            <span>{user.first_name + ' ' + user.last_name}</span>
        </Button>
    );
};

export default ProfileButton;