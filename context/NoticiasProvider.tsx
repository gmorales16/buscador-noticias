"use client";

import axios from "axios";
import React, { useState, useEffect, createContext, ReactNode } from "react";

export interface NoticiasContextProps {
  categoria: string;
  handleChangeCategoria: (event: any) => void;
  noticias: any[]; // Update this type as needed
  totalNoticias: number;
  handleChangePagination: any;
  pagina: number;
}

const NoticiasContext = createContext<NoticiasContextProps | any>({});

const NoticiasProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState<any[]>([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);
  //Primer Llamado al abrir la pagina
  useEffect(() => {
    const consultarApi = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;

        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${apiKey}`;
        const { data } = await axios.get(url);
        setNoticias(data.articles);
        setTotalNoticias(data.totalResults);
        setPagina(1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    consultarApi();
  }, [categoria]);
  // Cambiar de pagina
  useEffect(() => {
    const consultarApi = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${apiKey}`;
        const { data } = await axios.get(url);
        setNoticias(data.articles);
        setTotalNoticias(data.totalResults);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    consultarApi();
  }, [pagina]);

  const handleChangeCategoria = (event: any) => {
    setCategoria(event.target.value as string);
  };

  const handleChangePagination = (event: any) => {
    setPagina(parseInt(event.target.textContent));
  };

  const contextValue: NoticiasContextProps = {
    categoria,
    handleChangeCategoria,
    noticias,
    totalNoticias,
    handleChangePagination,
    pagina,
  };

  return (
    <NoticiasContext.Provider value={contextValue}>
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };
export default NoticiasContext;
