import { capitalizeFirstLetter } from "~/utils";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useFieldContext } from ".";

type Props = {
  type: "input" | "textarea";
  label?: string;
  placeholder?: string;
  hideLabel?: boolean;
};

export const TextField = ({ type, label, placeholder, hideLabel }: Props) => {
  const field = useFieldContext<string>();

  return (
    <div className="flex w-full flex-col gap-2">
      {!hideLabel && (
        <Label htmlFor={field.name}>
          {label ?? capitalizeFirstLetter(field.name)}
        </Label>
      )}

      {type === "input" ? (
        <Input
          id={field.name}
          name={field.name}
          value={field.state.value}
          placeholder={placeholder}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          aria-invalid={field.state.meta.errors.length > 0}
        />
      ) : (
        <Textarea
          id={field.name}
          name={field.name}
          value={field.state.value}
          placeholder={placeholder}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          aria-invalid={field.state.meta.errors.length > 0}
        />
      )}

      {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
        <Label className="text-sm text-destructive" role="alert">
          {field.state.meta.errors.map((e) => e.message).join(", ")}
        </Label>
      )}
    </div>
  );
};
