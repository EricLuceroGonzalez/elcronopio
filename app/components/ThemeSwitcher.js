"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";
import styled from "styled-components";

const SunIcon = styled(TbSunFilled)`
  cursor: pointer;
  background-color: var(--bg);
`;
const MoonIcon = styled(TbMoonFilled)`
  cursor: pointer;
`;

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  if (!mounted) return null;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SunIcon
        onClick={() => setTheme("light")}
        color="white"
        size={30}
      ></SunIcon>
      <MoonIcon
        onClick={() => setTheme("dark")}
        size={30}
        color="#343434"
      ></MoonIcon>
    </div>
  );
};

export default ThemeSwitcher;
