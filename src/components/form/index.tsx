import {
  createFormHook,
  createFormHookContexts
} from "@tanstack/react-form-start";

import { SubmitButton } from "./button";
import { TextField } from "./text-field";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  formComponents: {
    SubmitButton
  },
  fieldComponents: {
    TextField
  }
});
