import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Controller, useForm } from 'react-hook-form';
import {
  AppResponse,
  LoginForm,
  LoginRequest,
  LoginResponse,
} from '@picket/shared-type';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from '@picket/localization';
import { useMemo } from 'react';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { fetchLogin } from '@picket/services';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const { t } = useTranslation();
  const schema = useMemo(() => {
    return yup.object().shape({
      email: yup
        .string()
        .email(t('auth.validation.email.format')!)
        .required(t('auth.validation.email.required')!),
      password: yup
        .string()
        .min(6, t('auth.validation.password.min', { min: 6 })!)
        .required(t('auth.validation.password.required')!),
    });
  }, [t]);
  const { handleSubmit, control } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const { mutate } = useMutation<
    LoginResponse,
    AxiosError<AppResponse>,
    LoginRequest
  >({
    mutationFn: fetchLogin,
    mutationKey: 'login',
    onSuccess(data) {
      localStorage.setItem('token', data.access_token);
      navigate('/');
    },
    onError: console.log,
  });

  const submit = (data: LoginForm) => {
    mutate(data);
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('auth.login')}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(submit)}
            sx={{ mt: 1 }}
          >
            <Controller
              control={control}
              name={'email'}
              render={({ field, fieldState: { error, invalid } }) => (
                <TextField
                  {...field}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={t('auth.email')}
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={invalid}
                  helperText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name={'password'}
              render={({ field, fieldState: { error, invalid } }) => (
                <TextField
                  {...field}
                  error={invalid}
                  helperText={error?.message}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label={t('auth.password')}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              )}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t('auth.remember_me')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {t('auth.login')}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {t('auth.forgot_password') + '?'}
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {t('auth.register')}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
