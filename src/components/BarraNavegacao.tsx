import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HubIcon from "@mui/icons-material/Hub";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function BarraNavegacao() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const irParaInicio = () => {
    navigate("/Inicio");
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleClose();
  };

  const irParaAssistente = () => {
    if (window.location.pathname === "/Inicio") {
      const elemento = document.getElementById("secao-pesquisa");
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      localStorage.setItem("rolarPara", "pesquisa");
      navigate("/Inicio");
    }
    handleClose();
  };

  return (
    <AppBar position="fixed" color="inherit" elevation={1}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          py: 2, // Altura da barra
        }}
      >
        {/* Lado esquerdo */}
        <Box
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            cursor: "pointer",
          }}
        >
          <TrendingUpIcon
            sx={{
              fontSize: 40, // Tamanho do primeiro logo 
              color: "#05467f",
            }}
          />
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
          <HubIcon
            sx={{
              fontSize: 40, // Tamanho do segundo logo
              color: "#05467f",
            }}
          />
          <Box sx={{ ml: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#05467f",
                fontSize: "1rem", // Tamanho da letra
              }}
            >
              Rede Licitações
            </Typography>
            <Typography
              variant="body2"
              sx={(theme) => ({
                color: "#05467f",
                fontSize:  "0,9rem",
                display: "block",
                [theme.breakpoints.down(388)]: {
                  display: "none",
                },
              })}
            >
              Conquiste mais licitações, preocupe-se menos.
            </Typography>
          </Box>
        </Box>

        {/* Menu para desktop */}
        <Box sx={(theme) => ({
                  display: "flex",
                  gap: 3,
                  [theme.breakpoints.down(750)]: {
                    display: "none",
                  },
                })}>
          <Button sx={{ color: "#05467f" }} onClick={irParaInicio}>
            Início
          </Button>
          <Button sx={{ color: "#05467f" }} onClick={irParaAssistente}>
            Assistente IA
          </Button>
        </Box>

        {/* Ícone de menu para mobile */}
        <Box    sx={(theme) => ({
                  display: "none",
                  [theme.breakpoints.down(750)]: {
                    display: "flex",
                  },
                })}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleMenu}
          >
            <MenuIcon sx={{ color: "#05467f" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={irParaInicio}>Início</MenuItem>
            <MenuItem onClick={irParaAssistente}>Assistente IA</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}