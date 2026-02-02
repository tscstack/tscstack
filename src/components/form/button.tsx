import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { useFormContext } from "./index";

type Props = {
  label: string;
};

export const SubmitButton = ({ label }: Props) => {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? <Spinner /> : label}
        </Button>
      )}
    </form.Subscribe>
  );
};
