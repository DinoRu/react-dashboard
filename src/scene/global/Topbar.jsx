import { Box, IconButton, useTheme, Select, MenuItem } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useTranslation } from "react-i18next";
import { FlagIcon } from "react-flag-kit";

const languageOptions = [
  { code: "en", label: "English", flag: "GB" },
  { code: "ru", label: "Русский", flag: "RU" },
  { code: "fr", label: "Francais", flag: "FR" },
];

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleChangeLang = (event) => {
    const newLan = event.target.value;
    setLanguage(newLan);
    i18n.changeLanguage(newLan);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex" alignItems="center" gap={0.5}>
        <Select value={language} onChange={handleChangeLang} displayEmpty>
          {languageOptions.map((option) => (
            <MenuItem
              key={option.code}
              value={option.code}
              sx={{
                border: "none",
              }}
            >
              <FlagIcon code={option.flag} size={15} />
            </MenuItem>
          ))}
        </Select>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
