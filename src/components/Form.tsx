import React from "react";
import { FieldError, useForm, UseFormRegister } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  contact: z
    .string()
    .min(10, { message: "Contact number must be at least 10 digits" }),
  photo: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Photo is required"),
  cv: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "CV is required"),
});

const InputField = ({
  register,
  name,
  type,
  placeholder,
  error,
}: {
  register: UseFormRegister<z.infer<typeof schema>>;
  name: keyof z.infer<typeof schema>;
  type: string;
  placeholder: string;
  error: FieldError | undefined;
}) => (
  <div className="mb-4">
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && <p className="mt-1 text-red-500 text-sm">{error.message}</p>}
  </div>
);

const Form = () => {
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  
const FileInputField = ({
  register,
  name,
  accept,
  error,
}: {
  register: UseFormRegister<z.infer<typeof schema>>;
  name: keyof z.infer<typeof schema>;
  accept: string;
  error: FieldError | undefined;
}) => (
  <div className="mb-4">
    <input
      {...register(name)}
      type="file"
      accept={accept}
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && <p className="mt-1 text-red-500 text-sm">{error.message}</p>}
  </div>
);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md mb-28"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 uppercase tracking-wide">
        <span className="bg-blue-100 px-4 py-2 rounded-lg shadow-sm">Submission Form</span>
      </h2>
      <InputField
        register={register}
        name="name"
        type="text"
        placeholder="Name"
        error={errors.name}
      />
      <InputField
        register={register}
        name="address"
        type="text"
        placeholder="Address"
        error={errors.address}
      />
      <InputField
        register={register}
        name="email"
        type="email"
        placeholder="Email"
        error={errors.email}
      />
      <InputField
        register={register}
        name="contact"
        type="tel"
        placeholder="Contact"
        error={errors.contact}
      />
      <FileInputField
        register={register}
        name="photo"
        accept="image/*"
        error={errors.photo}
      />
      <FileInputField
        register={register}
        name="cv"
        accept=".pdf,.doc,.docx"
        error={errors.cv}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
      >
        Submit
      </button>
    </form>
  );
};




export default Form;
