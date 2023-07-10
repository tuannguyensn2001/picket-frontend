/* eslint-disable-next-line */
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import { useTranslation } from '@picket/localization';
import { useUser } from '@picket/auth';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { AppError, AppResponse } from '@picket/shared-type';
import { updateAvatar, uploadFile } from '@picket/services';
import { toast } from 'react-toastify';

const BaseAvatar = styled(Avatar)`
  &:hover {
    cursor: pointer;
  }
`;

const CustomAvatar = styled(BaseAvatar)`
  &:hover {
    -webkit-filter: brightness(40%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    cursor: pointer;
  }
`;

export function SettingAvatar() {
  const { t } = useTranslation();

  const { data: user } = useUser();
  const [avatar, setAvatar] = useState(user?.profile?.avatar_url);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const [file] = acceptedFiles;
      const form = new FormData();
      form.append('file', file);
      mutateUploadAvatar(form);
    },
    multiple: false,
  });

  const { mutate: mutateUploadAvatar } = useMutation<
    string,
    AppError,
    FormData
  >({
    mutationFn: uploadFile,
    mutationKey: 'uploadAvatar',
    onSuccess: (url) => setAvatar(url),
  });

  const { mutate: mutateUpdateAvatar } = useMutation<null, AppError, string>({
    mutationKey: 'updateAvatar',
    mutationFn: updateAvatar,
    onSuccess: () => {
      setOn(false);
      toast.success(t('settings.avatar_update_success'));
    },
    onError: () => {
      toast.error(t('settings.avatar_update_error'));
    },
  });

  const [on, setOn] = useState(false);
  const cancel = () => {
    setOn(false);
    setAvatar(user?.profile?.avatar_url);
  };

  const handleSave = () => {
    if (!avatar) return;
    mutateUpdateAvatar(avatar);
  };

  return (
    <div>
      <Box>
        <Typography variant={'h6'}>{t('settings.avatar')}</Typography>
      </Box>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Stack justifyContent={'center'}>
          <Typography>{t('settings.avatar_description')}</Typography>
        </Stack>
        {on && (
          <Box {...getRootProps()}>
            <CustomAvatar sx={{ width: 50, height: 50 }} src={avatar}>
              {<input {...getInputProps()} />}
            </CustomAvatar>
          </Box>
        )}
        {!on && (
          <Box>
            <BaseAvatar
              sx={{ width: 50, height: 50 }}
              onClick={() => setOn(true)}
              src={avatar}
            />
          </Box>
        )}
        <Stack justifyContent={'center'}>
          {!on && (
            <Button onClick={() => setOn(true)}>{t('settings.edit')}</Button>
          )}
          {on && (
            <Stack direction={'row'}>
              <Button onClick={handleSave}>{t('settings.save')}</Button>
              <Button onClick={cancel}>{t('settings.cancel')}</Button>
            </Stack>
          )}
        </Stack>
      </Stack>
    </div>
  );
}

export default SettingAvatar;
