"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { useUploadThing } from "@/lib/uploadthing";
import { isBase64Image } from "@/lib/utils";

import { UserValidation } from "@/lib/validations/user";
import { updateUser } from "@/lib/actions/user.actions";
import { BsPersonFill } from "react-icons/bs";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { startUpload } = useUploadThing("media");

  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image ? user.image : "",
      name: user?.name ? user.name : "",
      username: user?.username ? user.username : "",
      bio: user?.bio ? user.bio : "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    const blob = values.profile_photo;

    const hasImageChanged = isBase64Image(blob);
    if (hasImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].fileUrl) {
        values.profile_photo = imgRes[0].fileUrl;
      }
    }

    await updateUser({
      name: values.name,
      path: pathname,
      username: values.username,
      userId: user.id,
      bio: values.bio,
      image: values.profile_photo,
    });

    if (pathname === "/profile/edit") {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  return (
    <Form {...form}>
      <form
        className='flex flex-col justify-start gap-10'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='profile_photo'
          render={({ field }) => (
            <FormItem className='flex items-center gap-4'>
              <FormLabel className='account-form_image-label'>
                {field.value ? (
                  <Image src={field.value} alt="profile photo" width={96} height={96} priority className=" object-contain w-11 h-11 shrink-0 grow-0 rounded-full"/>
                ) : (
                  <BsPersonFill className="text-6xl p-1 rounded-full border-solid border-2 border-sky-300"/>
                )}
              </FormLabel>
              <FormControl className='flex-1 text-base-semibold text-gray-200'>
                <Input
                  type='file'
                  accept='image/*'
                  placeholder='Add profile photo'
                  className='cursor-pointer border-none outline-none file:text-blue'
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
              <FormDescription className="block">
                  Upload A Picture
                </FormDescription>
                <FormMessage />
            </FormItem>
          )}
        />

<FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full gap-3">
                <FormLabel>
                    Username
                </FormLabel>
                <FormControl className="flex-1 text-black">
                  <Input 
                className = "border border-dark-4 bg-dark-3 text-light-1 text-black no-focus"
                type="text"
                {...field}
/>
                </FormControl>
                <FormDescription>
                  Enter Your Username, Make Sure to make it anonymous.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full gap-3">
                <FormLabel>
                    Bio
                </FormLabel>
                <FormControl className="flex-1 text-black">
                  <Textarea 
                  rows={10}
                className = "border-dark-4 bg-dark-3  no-focus text-black border border-dark-4 bg-dark-3 no-focus"
                {...field}
/>
                </FormControl>
                <FormDescription>
                 Enter your bio
                </FormDescription>

                <FormDescription className="text-[#d9534f]">
                 Remember DO NOT put any information that relates to you under username and bio unless you would like your identity to be known. We won't take any responsibility for the consequence you face by revealing your identity. 
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

        <Button type="submit" className="bg-sky-700">Submit</Button>
      </form>
    </Form>
  );
};

export default AccountProfile;