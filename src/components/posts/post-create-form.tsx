"use client";

import { useFormState } from "react-dom";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions/actions";
import FormButton from "../common/form-button";

export default function PostCreateForm() {
  const [formState, action] = useFormState(actions.createPost, {
    errors: {},
  });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent className="mt-16">
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
            />
            <Textarea
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
              name="body"
              label="Body"
              labelPlacement="outside"
              placeholder="Body"
            />
            <FormButton>Submit</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
