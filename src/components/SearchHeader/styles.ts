import styled from "@emotion/styled";
import {
  FormControl as MuiFormControl,
  FormGroup as MuiFormGroup,
  InputLabel as MuiInputLabel,
  FormControlProps,
  FormGroupProps,
  InputLabelProps,
} from "@mui/material";

export const Wrapper = styled.div`
  position: relative;
  padding: 2.5rem 0;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const FormControl = styled(MuiFormControl)<FormControlProps>`
  width: 200px;
`;

export const InputLabel = styled(MuiInputLabel)<InputLabelProps>`
  &.Mui-focused {
    color: #ffffff;
  }
`;

export const FormGroup = styled(MuiFormGroup)<FormGroupProps>`
  display: flex;
  flex-flow: row nowrap;

  > .MuiTextField-root {
    &:first-of-type {
      margin-right: 0.5rem;
    }

    &:last-of-type {
      margin-left: 0.5rem;
    }
  }
`;
