import { Box, Divider, Typography } from '@mui/material';
import { useTranslation } from '@picket/localization';

export function Personal() {
  const { t } = useTranslation();
  return (
    <Box sx={{ marginTop: 5 }}>
      <Box>
        <Typography>{t('settings.account_profile')}</Typography>
        <Divider sx={{ marginTop: 2 }} />
      </Box>
    </Box>
  );
}

export default Personal;
