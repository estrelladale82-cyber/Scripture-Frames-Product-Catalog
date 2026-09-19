import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { CATEGORIES } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const DEFAULT_VALUES = {
  title: "",
  description: "",
  price: "",
  category: CATEGORIES[0].value,
  imageUrl: "",
};

export default function ProductForm({ onAddProduct }) {
  const [confirmation, setConfirmation] = useState("");

  const isResettingRef = useRef(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    mode: "onChange",
  });

  useEffect(() => {
    const subscription = watch(() => {
      if (isResettingRef.current) {
        isResettingRef.current = false;
        return;
      }
      setConfirmation("");
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data) => {
    onAddProduct({
      title: data.title.trim(),
      description: data.description.trim(),
      price: Number(data.price),
      category: data.category,
      imageUrl: data.imageUrl.trim(),
    });

    setConfirmation(`"${data.title.trim()}" was added to the catalog.`);
    isResettingRef.current = true;
    reset(DEFAULT_VALUES);
  };

  return (
    <form
      id="add-frame"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-labelledby="add-frame-heading"
      className="flex flex-col gap-4 rounded-sm border border-brass/30 bg-card p-6"
    >
      <h2 id="add-frame-heading" className="font-display text-lg font-medium">
        Add a Frame
      </h2>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? "title-error" : undefined}
          {...register("title", { required: "Title is required." })}
        />
        {errors.title && (
          <p id="title-error" role="alert" className="text-xs text-brick">
            {errors.title.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          aria-invalid={Boolean(errors.description)}
          aria-describedby={
            errors.description ? "description-error" : undefined
          }
          {...register("description", {
            required: "Description is required.",
          })}
        />
        {errors.description && (
          <p id="description-error" role="alert" className="text-xs text-brick">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="price">Price (USD)</Label>
        <Input
          id="price"
          inputMode="decimal"
          aria-invalid={Boolean(errors.price)}
          aria-describedby={errors.price ? "price-error" : undefined}
          {...register("price", {
            required: "Price is required.",
            validate: (value) => {
              const num = Number(value);
              return (
                (!Number.isNaN(num) && num > 0) ||
                "Price must be a positive number."
              );
            },
          })}
        />
        {errors.price && (
          <p id="price-error" role="alert" className="text-xs text-brick">
            {errors.price.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="category">Category</Label>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
              name={field.name}
            >
              <SelectTrigger id="category">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="imageUrl">Image URL </Label>
        <Input
          id="imageUrl"
          placeholder="https://…"
          aria-invalid={Boolean(errors.imageUrl)}
          aria-describedby={errors.imageUrl ? "imageUrl-error" : undefined}
          {...register("imageUrl", {
            required: "Image URL is required.",
            validate: (value) => {
              try {
                new URL(value);
                return true;
              } catch {
                return "Please enter a valid URL.";
              }
            },
          })}
        />
        {errors.imageUrl && (
          <p id="imageUrl-error" role="alert" className="text-xs text-brick">
            {errors.imageUrl.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="brass" className="mt-2">
        Add to catalog
      </Button>

      <p aria-live="polite" className="text-xs text-forest">
        {confirmation}
      </p>
    </form>
  );
}
