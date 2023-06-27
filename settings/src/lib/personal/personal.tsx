import { Box, Divider, Typography } from '@mui/material';
import { useTranslation } from '@picket/localization';
import SettingAvatar from '../setting-avatar/setting-avatar';

export function Personal() {
  const { t } = useTranslation();
  return (
    <Box sx={{ marginTop: 5 }}>
      <Box>
        <Typography variant={'h5'}>{t('settings.account_profile')}</Typography>
        <Divider sx={{ marginTop: 2 }} />
        <SettingAvatar />
      </Box>
    </Box>
  );
}

export default Personal;
