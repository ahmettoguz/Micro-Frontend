import { Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { LanguageEnum } from "../../../enum/LanguageEnum";

interface ToggleLanguageProps {
  language: string;
  toggleLanguage: () => void;
}

export default function XToggleLanguage({
  language,
  toggleLanguage,
}: ToggleLanguageProps) {
  const { t } = useTranslation();

  return (
    <Tooltip
      placement="bottom"
      title={t(
        language === LanguageEnum.En
          ? "appbar.tooltip.languageTurkish"
          : "appbar.tooltip.languageEnglish"
      )}
    >
      <Box sx={{ maxWidth: "32px" }}>
        <Button
          variant="text"
          onClick={toggleLanguage}
          size="small"
          aria-label="button to toggle language"
          sx={{ minWidth: "32px", height: "32px", p: "4px" }}
        >
          <LanguageIcon fontSize="medium" />
        </Button>
      </Box>
    </Tooltip>
  );
}
