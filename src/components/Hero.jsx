import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { Fragment } from 'react';
import CustomButton from './CustomButton';
import Navbar from "./Navbar";
import heroimg from '../assets/hero_illustration.png'

const Hero = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        }
    }));
    const Title = styled(Typography)(({ theme }) => ({
        fontSize: '64px',
        color: '#000336',
        fontWeight: 'bold',
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down('sm')]:{
            fontSize: '40px',

        }
    }));

    return (
       <Fragment>
        <Box sx={{background: "#E6F0FF", minHeight:'80vh'}}>
            <Container>
                <Navbar/>
                <CustomBox>
                    <Box sx={{flex:'1'}}>
                        <Typography variant='body2' 
                            sx={{fontSize:'18px',
                            color:"#687690",
                            fontWeight:'500',
                            mt:10,
                            mb:4}}>
                            Welcome To TWIT travel agency
                        </Typography>
                        <Title variant='h1'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, error?
                        </Title>
                        <Typography variant='body2' sx={{fontSize:'18px',color: '#5A6473',my: 4}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam adipisci dolore impedit beatae tempora obcaecati corrupti odio, suscipit, aperiam hic temporibus sed voluptatem voluptate? Inventore pariatur odit nobis animi laborum!
                        </Typography>
                        <CustomButton 
                            backgroundColor='#0F1B4C'
                            color='#fff'
                            buttonText='More about us' 
                            heroBtn={true}
                        />
                    </Box>

                    <Box sx={{flex:'1.25'}}>
                    <img src={heroimg} alt=""
                    style={{maxWidth:'100%', marginBottom:'2rem'}} 
                    />

                    </Box>
                </CustomBox>
            </Container>
        </Box>
       </Fragment>
    );
};

export default Hero;