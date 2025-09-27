import { Button, CircularProgress, Link, TextField, Typography, } from "@mui/material";
import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';

export default function LoginForm() {


    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      setLoading(true);

      
      setTimeout(() => {
        setLoading(false);
        navigate("/redsocial");
      }, 2000);
    } else {
      alert("Debes ingresar tus credenciales");
    }
  };


  return (
    <div className="login-container">
      <div className="login-box">
      
        <h1 className="login-title">facebook</h1>

        <TextField
          placeholder="Correo electrónico"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />

        <TextField
          placeholder="Contraseña"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Iniciar sesión"}
        </Button>

        <Typography align="center" style={{ marginBottom: "1rem" }}>
          <Link href="#" underline="hover" className="forgot-link">
            ¿Olvidaste tu contraseña?
          </Link>
        </Typography>

        <hr style={{ margin: "16px 0" }} />

        <Button
          fullWidth
          variant="contained"
          className="register-btn"
          onClick={() => alert("Registrar nueva cuenta")}
          disabled={loading}
        >
          Crear cuenta nueva
        </Button>
      </div>
    </div>
  
  );
}
