import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Formik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux'
import { login } from '../../redux/actionsCreators/Creators';

class SignIn extends Component {
    state = {
        password: '',
        email: ''
    };
    handleButtonClick() {
        if (this.state.email === 'barsnik96@gmail.com' && this.state.password === '123')
        {
            this.props.login_bool(true);
            if (this.props.logInf)
            {
                this.props.history.push('/main');
            }
        }
        else
        {
            this.props.login_bool(false);
            alert("Неверный пароль");
        }
    }    

    render() {
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
                width: '100%', // Fix IE 11 issue.
                marginTop: theme.spacing(1),
            },
            submit: {
                margin: theme.spacing(3, 0, 2),
            },
        }));
        const classes = useStyles;

        const validationsSchema = yup.object().shape(
            {
            email: yup.string().email('Invalid email').required('Required field'),
            password: yup.string().typeError('Should be a string').required('Required field')
            })

        return (
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                valideateOnBlur
                onSubmit={(values)=>(
                this.setState({
                    email: values.email,
                    password: values.password
                }),
                console.log(this.state), 
                this.handleButtonClick()         
                )}
                validationSchema={validationsSchema}
            >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            type={'text'}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name={'email'}
                            autoComplete="email"
                            value={values.email}
                            onChange={this.handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.email && errors.email && <p>{errors.email}</p>}
                        <TextField
                            variant="outlined"
                            type={'text'}
                            margin="normal"
                            required
                            fullWidth
                            name={'password'}
                            label="Password"
                            // eslint-disable-next-line react/jsx-no-duplicate-props
                            type="password"
                            id="password"
                            value={values.password}
                            autoComplete="current-password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.password && errors.password && <p>{errors.password}</p>}
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            disabled={!isValid && !dirty}
                            type={'submit'}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit}
                        >
                            Sign In
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
                </Container>
            )}
            </Formik>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        logInf: state.auth_reducer.logged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login_bool: (log) => dispatch(login(log))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);