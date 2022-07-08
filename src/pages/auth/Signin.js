import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { userLogin } from "src/app/slices/user";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const checkRes = (res) => {
    if (res?.status === 200) {
      navigate("/app");
      enqueueSnackbar("Login Success!", { variant: "success" });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Valid Email is Required")
        .min(4, "Atleast 4 Letter Required")
        .required("Email is Required"),
      password: Yup.string()
        .trim()
        .min(6, "Atleast 6 Letter Required")
        .required("Password is Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(userLogin(values, checkRes));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <FormikProvider value={formik}>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...formik.getFieldProps("email")}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...formik.getFieldProps("password")}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Typography
                component={Link}
                to="/auth/signup"
                variant="body"
                gutterBottom
                noWrap
                color={"inherit"}
                sx={{ textDecoration: "none" }}
              >
                Forgot password?
              </Typography> */}
              </Grid>
              <Grid item>
                <Typography
                  component={Link}
                  to="/auth/signup"
                  variant="body"
                  gutterBottom
                  noWrap
                  color={"inherit"}
                  sx={{ textDecoration: "none" }}
                >
                  {"Don't have an account? Sign Up"}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </FormikProvider>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
