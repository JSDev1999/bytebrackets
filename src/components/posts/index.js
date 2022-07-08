import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getLocalUser } from "src/helpers/localStorageFIles";
import { getProducts } from "../../app/slices/product";
import LoadingScreen from "../../pages/LoadingScreen";
import PostCard from "./PostCard";

export default function Posts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, products, loggedUser } = useSelector(
    (state) => state.product
  );
  const handleLogout = () => {
    window.localStorage.removeItem("user");
    navigate("/auth/signin");
  };
  return (
    <Container component="main" maxWidth="xs">
      {isLoading && <LoadingScreen />}
      {!isLoading && getLocalUser && (
        <Typography component="h1" variant="h5">
          user Name: {getLocalUser?.firstName} {getLocalUser?.lastName}
        </Typography>
      )}
      <Button onClick={handleLogout}>logout</Button>
    </Container>
  );
}
