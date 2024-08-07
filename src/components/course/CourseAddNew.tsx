"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Heading from '@/components/typography/Heading'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {useState} from 'react'
import slugify from 'slugify'


const formSchema = z.object({
  title: z.string().min(10, {
    message: "Title must be at least 10 characters.",
  }),
  slug: z.string().optional(),
})

function CourseAddNew() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            slug: "",
        },
      })
      const [isSubmitting, setIsSubmitting] = useState(false)
      function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
          const data = {
            title: values.title,
            slug:
              values.slug ||
              slugify(values.title, {
                lower: true,
                locale: "vi",
              }),
          };
          console.log(data);
          // await createCourse(values);
        } catch (error) {
        } finally {
          setIsSubmitting(false);
        }
      }
    
   
  return (
  <>
    <Form {...form}>
    <Heading>Create a new course</Heading>
      <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
      <div className="grid grid-cols-2 gap-8 mt-10 mb-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course name *</FormLabel>
              <FormControl>
                <Input placeholder="course name" {...field} />
              </FormControl>
              <FormMessage  />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link of course</FormLabel>
              <FormControl>
                <Input placeholder="react-course" {...field} />
              </FormControl>
              <FormMessage  />
            </FormItem>
          )}
        />
        </div>
        <Button isLoading={isSubmitting} type="submit" className="flex items-center justify-center mt-7 text-white font-semibold width-full p-2 rounded bg-blue-500 shadow-slate-900 border border-blue-300 hover:bg-blue-400 w-[120px]" disabled={isSubmitting}>Create course</Button>
      </form>
    </Form>
    </>
  )
}

export default CourseAddNew