import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from "react-redux";
import { actionLogin } from "../actions/ActionAuth";
import { createMuiTheme, useTheme, MuiThemeProvider } from '@material-ui/core/styles';

const unsplashimg = {
    src: 'https://source.unsplash.com/400x500/?',
    alt: 'random unsplash image'
  };

  const Randompic = () => {
      return (
        <div>
          <img 
            src = {unsplashimg.src}
            alt = {unsplashimg.alt} 
          />
        </div>
      );
    }

const custom_theme = createMuiTheme({
    palette: {
      primary: {
        light: '#f7e7f4',
        main: '#eb9bd0',
        dark: '#ab9da9',
        contrastText: '#000',
      },
      secondary: {
        light: '#ffcc80',
        main: '#b286d1',
        dark: '#b28643',
        contrastText: '#000',
      },
    },
  });

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



 const LoginForm = ({ onLogin }) => {
    const classes = useStyles();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");


    return (
        <MuiThemeProvider theme={custom_theme}>
        <Container component="main" >
            <CssBaseline />
            <Box display="flex" flexDirection="row">
                <Box className={classes.paper}  width="70%">
                    <Randompic />
                </Box>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={login} onChange={(e) => setLogin(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                            onClick={() => onLogin(login, password)}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Box>
        </Container>
        </MuiThemeProvider>
    );
}

const CLoginForm = connect(null, { onLogin: actionLogin })(LoginForm);

export const PageLogin = () => (
    <div className="PageLogin">
    <CLoginForm />
    </div>
);
