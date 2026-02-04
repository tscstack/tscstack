import { Link } from "@tanstack/react-router";

import { FileQuestionMarkIcon } from "lucide-react";

import { Button } from "./ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "./ui/empty";

export const NotFoundComponent = () => {
  return (
    <div className="min-h-screen">
      <Empty className="absolute top-1/3 left-1/2 -translate-1/2">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FileQuestionMarkIcon />
          </EmptyMedia>
          <EmptyTitle>Page not found</EmptyTitle>
          <EmptyDescription>
            Oops! The page you are looking for does not exist.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link to="/">Go to home</Link>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
};
