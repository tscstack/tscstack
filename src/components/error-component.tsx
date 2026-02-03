import { Link } from "@tanstack/react-router";

import { AlertCircleIcon } from "lucide-react";

import { Button } from "./ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "./ui/empty";

type Props = {
  message?: string;
};

export const ErrorComponent = ({ message }: Props) => {
  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

  let errorMessage = "An unexpected error occurred.";

  if (VITE_BASE_URL.includes("localhost")) {
    errorMessage = message || "An unexpected error occurred.";
  }

  return (
    <div className="min-h-screen relative">
      <Empty className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <AlertCircleIcon />
          </EmptyMedia>
          <EmptyTitle>Oops! Something went wrong</EmptyTitle>
          <EmptyDescription className="text-destructive">
            {errorMessage}
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link to="/">Go to home</Link>
            </Button>
            <Button asChild>
              <Link to="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
};
