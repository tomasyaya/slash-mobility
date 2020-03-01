import React from "react";
import { CustomButton } from "./styles";

const Button = ({ children, ...props }) => (
  <CustomButton {...props}>{children}</CustomButton>
);

export default Button;
