import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../app/slices/product";
import LoadingScreen from "../../pages/LoadingScreen";
import PostCard from "./PostCard";

export default function Posts() {
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log("ppp", products);
  return (
    <Container component="main" maxWidth="md">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        !isLoading &&
        products?.length > 0 && (
          <Grid container spacing={2} direction="row" marginY={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={product?.id}>
                <PostCard product={product} />
              </Grid>
            ))}
          </Grid>
        )
      )}
    </Container>
  );
}
