"use client";

import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import useNoticias from "@/hooks/useNoticias";
import { NoticiasContextProps } from "@/context/NoticiasProvider";

const CATEGORIAS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];

const Formulario = () => {
  const { categoria, handleChangeCategoria } =
    useNoticias() as NoticiasContextProps;

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoria</InputLabel>
        <Select
          label="Categoria"
          value={categoria}
          onChange={handleChangeCategoria}
        >
          {CATEGORIAS.map((cat) => (
            <MenuItem key={cat.value} value={cat.value}>
              {cat.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default Formulario;
