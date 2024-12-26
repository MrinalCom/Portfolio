import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import Input, { TextArea } from "../components/Input";
import PageTitle from "../components/PageTitle";
import Title from "../components/Title";
import { useHeadingAnimation, useSectionAnimation } from "../hooks/usePageAnimation";

export default function Contact() {
  const headRef = useHeadingAnimation();
  const sectionRef = useSectionAnimation();

  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null); // For error handling

  const sendMessage = async (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    setLoading(true);
    setError(null); // Reset any previous error

    // Validation check
    if (!message.name || !message.email || !message.message) {
      alert("Please fill out all fields.");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: message.name,
          email: message.email,
          message: message.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      setMessageSent(true); // Set the message sent state to true
    } catch (error) {
      console.error("Could not send message!", error.message);
      setError("Sorry, something went wrong. Please try again later."); // Show error message
    } finally {
      setLoading(false);
      setMessage({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      {isLoading ? (
        <span>Sending message...</span>
      ) : messageSent ? (
        <motion.div
          className="mt-20 fixed flex flex-col justify-center items-start text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            <b>Thank You!!</b> Your message has been sent successfully.
          </p>
          <p>I'll get back to you shortly.</p>
          <button
            onClick={() => setMessageSent(false)} // Allow users to reset the form
            className="mt-4 text-highlight font-semibold"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <>
          <PageTitle ref={headRef} text1="let's work" text2="together" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 text-sm sm:text-base md:text-lg"
          >
            I will be happy to get a direct email at{" "}
            <span className="text-fontColor2 font-semibold dark:font-normal dark:text-highlight">
              <a href="mailto:mrinalanandiem@gmail.com">
                mrinalanandiem@gmail.com
              </a>
            </span>
          </motion.span>
          <form
            className="w-full md:w-3/4 lg:w-11/12 mt-10"
            ref={sectionRef}
            onSubmit={sendMessage} // Trigger sendMessage on form submit
          >
            <div className="w-full grid lg:grid-cols-2 md:gap-6">
              <Input
                label="Name"
                value={message.name}
                onValueChange={(e) =>
                  setMessage({ ...message, name: e.target.value })
                }
              />
              <Input
                label="Email"
                value={message.email}
                onValueChange={(e) =>
                  setMessage({ ...message, email: e.target.value })
                }
              />
              <TextArea
                label="Write your message here..."
                value={message.message}
                onValueChange={(e) =>
                  setMessage({ ...message, message: e.target.value })
                }
              />
            </div>
            {error && (
              <div className="mt-4 text-red-500">
                <b>{error}</b> {/* Display error message if exists */}
              </div>
            )}
            <button
              type="submit"
              className="mt-8 bg-highlight2 dark:bg-highlight text-bgColor focus:ring-4 focus:outline-none font-semibold text-lg w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Send Message
            </button>
          </form>
        </>
      )}

      <Title title="contact." left="left-44" />
    </>
  );
}
