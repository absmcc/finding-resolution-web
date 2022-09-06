import "Firebase/firestore";
import {initializeApp } from "Firebase/app";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Button, Typography } from "@mui/material";
import Link from "@mui/material";
import TextField from "@mui/material";
import Container from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material";
import { UserContext } from "../App";

const theme = createTheme();


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { user, setUsers } = useContext(UserContext);


    const  userLogin = () => {
        signInWithEmailAndPassword(email, password)
        .then((res) => {
            const json = JSON.stringify(res.user.uid);
            localStorage.setItem("user", json);
            console.log("user in Login", res.users)
            setUsers(rs.user.uid);
            navigate("/");
        })
        catch.((err) => alert(err.message));
    }
    return (
        <>
        <ThemeProvider themes = { theme } className="page-id-35">
            <Container component = "main" maxWidth = "xs">
                <Typography component="h1" variant = "h5" className = "entry"
                Sign inlist
                ></Typography>
                <form
                onSubmit = {() => {
                    userLogin(e);
                }}
                
                />
                <TextField
                margin = "normal"
                required
                fullWidth
                label = "Email Address"
                name = "email"
                type = "email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                autoComplete = "current-email"
                />

                <TextField
                margin = " normal"
                required
                fullWidth
                label = "Password"
                type = "password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                />

                <Button
                onClick={(e) => userLogin(e)}
                type = "submit"
                value = "Login"
                fullWidth
                variant = "contained"
                sx={{ mt: 3, mb: 2 }}
                >
                    Login
                    </Button>
                    <Link href = "signup" variant = "body2">
                        {"Don't an account? Sign Up"}
                    </Link>
                    </Container>
                    </ThemeProvider>
                    </>
    );
}