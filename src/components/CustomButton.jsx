import React, { Fragment } from 'react';
import { Button, styled } from "@mui/material";

const CustomButton = () => {
    const CustomButton = styled(Button)(({ theme }) => ({}));
    return (
        
        <Fragment>
            <CustomButton></CustomButton>
        </Fragment>
    );
};

export default CustomButton;