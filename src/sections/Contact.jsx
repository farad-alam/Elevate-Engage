import React from "react";
import Input from "../component/Input";
import { useFormik } from "formik";
import { number, object, string } from "yup";

let contactFormValidationSchema = object({
  name: string()
    .max(30, "Name can not be greater than 10 charecter")
    .required("Name is Required"),
  email: string().email("Invalid Email").required("Email is Required"),
  company: string()
    .required("Company is Rewuired")
    .max(20, "Not More That 20 Charecter"),
  phone: number().required().positive().integer(),
  message: string().max(100, "Not more thatn 100 charecter"),
});

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
    validationSchema: contactFormValidationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(JSON.stringify(values));
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        console.log("makinf is submiting false");
        resetForm();
      }, 2000);
    },
  });

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
  } = formik;

  return (
    <section className="bg-base-200 text-base-content border-b-1 border-gray-800">
      <div className="section width">
        <div className="">
          <div className="lg:mb-8">
            <h2 className="subtitle leading-tight">Contact us</h2>
            <p className="mt-1 text-lighter">
              Whatever your goal - we will get you there.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
            <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <Input
                    type="text"
                    label="Name"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name ? (
                    <p className="text-red-800 text-[14px]">{errors.name}</p>
                  ) : null}
                  <Input
                    type="email"
                    label="Email"
                    id={"email"}
                    name={"email"}
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email ? (
                    <p className="text-red-800 text-[14px]">{errors.email}</p>
                  ) : null}
                  <Input
                    type="text"
                    label="Company"
                    id={"company"}
                    name={"company"}
                    value={values.company}
                    onChange={handleChange}
                  />
                  {errors.company ? (
                    <p className="text-red-800 text-[14px]">{errors.company}</p>
                  ) : null}
                  <Input
                    type="number"
                    label="Phone"
                    id={"phone"}
                    name={"phone"}
                    value={values.phone}
                    onChange={handleChange}
                  />
                  {errors.number ? (
                    <p className="text-red-800 text-[14px]">{errors.number}</p>
                  ) : null}
                  <Input
                    type="message"
                    label="Tell Us About Your Project"
                    id={"message"}
                    name={"message"}
                    value={values.message}
                    onChange={handleChange}
                  />
                  {errors.message ? (
                    <p className="text-red-800 text-[14px]">{errors.message}</p>
                  ) : null}
                </div>

                <div className="mt-2">
                  <p className="mt-5">
                    <button
                      type="submit"
                      className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden"
                      disabled={!isValid || isSubmitting}
                    >
                      {isSubmitting ? "Submitting...." : "Submit"}
                      <svg
                        className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </p>
                </div>
              </form>
            </div>
            {/* Details */}
            <div className="space-y-14">
              <div className="flex gap-x-5">
                <svg
                  className="shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="grow">
                  <h4 className="font-semibold text-light">Our address:</h4>

                  <address className="mt-1 text-sm not-italic text-lighter">
                    1st Floor, Afroza Tower, <br /> Uposhohor Newmarket, <br />{" "}
                    Rajshahi-6202, Bangladesh
                  </address>
                </div>
              </div>

              <div className="flex gap-x-5">
                <svg
                  className="shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                  <h4 className=" font-semibold text-light">Email us:</h4>

                  <a
                    className="mt-1  text-sm text-lighter focus:outline-hidden focus:text-neutral-200"
                    href="#mailto:example@site.co"
                    target="_blank"
                  >
                    hello@example.so
                  </a>
                </div>
              </div>

              <div className="flex gap-x-5">
                <svg
                  className="shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 11 18-5v12L3 14v-3z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
                <div className="grow">
                  <h4 className="font-semibold text-light">We're hiring</h4>
                  <p className="mt-1 text-lighter">
                    We're thrilled to announce that we're expanding our team and
                    looking for talented individuals like you to join us.
                  </p>
                  <p className="mt-2">
                    <a
                      className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#ff0] decoration-2 hover:underline focus:outline-hidden focus:underline"
                      href="#"
                    >
                      Job openings
                      <svg
                        className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
