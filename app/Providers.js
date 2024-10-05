"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import GlobalStyle from './GlobalStyle.js'

const Providers = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {};
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider>
    <GlobalStyle/>
    {children}</ThemeProvider>;
};

export default Providers;
