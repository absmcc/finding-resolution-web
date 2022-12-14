import "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
//import  Typography  from "@mui/material/Typography";
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import TextField from "@mui/material/TextField"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
//import { json } from "express";

const theme = createTheme()

export default function Signup() {
  const [email, setEamil] = useState("")
  const [passwpord, setPassword] = useState("")
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [onlineid, setOnLineId] = useState("")
  const navigate = useNavigate()
  const auth = getauth()
  ;``
}

const createUser = (uid) => {
  const user = {
    email: email,
    fname: fname,
    lname: lname,
    onlineid: onlineid,
    uid,
  }

  fetch("https://express-deployed-mr.web.app/rest/newusers", {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => alert(err))
}

const handleSignUp = (event) => {
  event.preventDefault()
  createUserWithEmailAndPassword(auth, email, passwpord)
    .then((res) => {
      const json = JSON.stringify(res.user)
      console.log(res.user)
      createUser(res.user.uid)
    })
    .catch((err) => alert(err.message))
}

return (
  <>
    <ThemeProvier theme={theme}>
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5" className="entry">
          Sign Up
        </Typography>
        <form
          onSubmit={(e) => {
            handleSignUp(e)
          }}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          label="First Name"
          name="fname"
          type="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          autoComplete="current-fname"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          label="Online ID"
          name="onlineid"
          type="onlineid"
          value={onlineid}
          onChange={(e) => setOnLineId(e.target.value)}
          autoComplete="current-onlineid"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="current-email"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <Button
          onClick={(e) => handleSignUp(e)}
          type="submit"
          value="Sign Up"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Link href="/login" variant="body2">
          {"Already have an account? Sign In"}
        </Link>
      </Container>
    </ThemeProvier>
  </>
)
