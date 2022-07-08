import { Container, Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getProducts } from "../app/slices/product";
import Posts from "../components/posts";

export default function Home() {
  return (
    <Fragment>
      <Posts />
    </Fragment>
  );
}
