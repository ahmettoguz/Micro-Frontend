import LanguageIcon from "@mui/icons-material/Language";
import { Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { LanguageEnum } from "../../../enum/LanguageEnum";
import { setLanguage } from "../../../store/slice/languageSlice";
import { RootState } from "../../../store/store";
import { useSnackbarUtils } from "../../../utils/useSnackbarUtils";

export default function XToggleLanguage() {
  const { showSnackbar } = useSnackbarUtils();
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language);
  const { t } = useTranslation();

  const handleToggle = () => {
    const newLanguage =
      language === LanguageEnum.Tr ? LanguageEnum.En : LanguageEnum.Tr;
    dispatch(setLanguage(newLanguage));

    showSnackbar(
      t("appbar.snackbar.language", {
        language:
          language === LanguageEnum.Tr
            ? t("common.english")
            : t("common.turkish"),
      })
    );
  };

  return (
    <Tooltip
      placement="bottom"
      title={t(
        language === LanguageEnum.En ? "common.turkish" : "common.english"
      )}
    >
      <Box sx={{ maxWidth: "32px" }}>
        <Button
          variant="text"
          onClick={handleToggle}
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
