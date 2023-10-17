/* eslint-disable react/no-unescaped-entities */
"use client";

import { Alert, Button, TextInput, Textarea } from "flowbite-react";
import { useRef, useState } from "react";
import { HiMail } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { AiOutlineLoading } from "react-icons/ai";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    color: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_KEY as string
      )
      .then(
        () => {
          setLoading(false);
          setAlert({
            show: true,
            msg: "Thank you. I will get back to you as soon as possible.",
            color: "success",
          });

          form.current?.reset();
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setAlert({
            show: true,
            msg: "Ahh, something went wrong. Please try again.",
            color: "failure",
          });
        }
      );
    setAlert({
      show: false,
      msg: "",
      color: "",
    });
  };
  return (
    <section id="contact" className="py-4">
      <div className="flex flex-col items-center gap-8 py-8 max-[960px]:px-4 max-[640px]:px-4">
        <div className="font-semibold text-5xl text-center text-white">
          Let's <span className="text-[#854CE6]">Connect!</span>
        </div>
        {alert.show ? (
          <Alert
            color={alert.color}
            onDismiss={() => setAlert({ show: false, color: "", msg: "" })}
          >
            <p
              className={`${alert.color === 'failure' ? 'text-[#c72d2d]' : 'text-[#046C4E]'} font-semibold`}
            >
              {alert.msg}
            </p>
          </Alert>
        ) : null}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-[70%] max-w-[600px] bg-[#171721] px-8 py-8 rounded-2xl shadow-[rgba(23,92,230,0.15)_0px_4px_24px]"
        >
          <TextInput
            id="email"
            name="email"
            placeholder="Your Email"
            required
            type="email"
            rightIcon={HiMail}
          />
          <TextInput
            id="name"
            name="name"
            placeholder="Your Name"
            required
            type="text"
          />
          <TextInput
            id="subject"
            name="subject"
            placeholder="Subject"
            required
            type="text"
          />
          <Textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            rows={4}
          />
          <Textarea
            id="comment"
            name="comment"
            placeholder="Leave a comment..."
            rows={4}
          />
          <div className="flex flex-wrap items-center gap-2 self-center">
            <Button
              isProcessing={loading}
              type="submit"
              gradientMonochrome="purple"
              processingSpinner={
                <AiOutlineLoading className="h-6 w-6 animate-spin" />
              }
              size="lg"
            >
              <p>{loading ? "Sending..." : "Send"}</p>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
