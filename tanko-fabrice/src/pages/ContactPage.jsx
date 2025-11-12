
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";


function ContactMe (){
    const [feedback, setFeedback] = useState({ message: "", type: ""});
    const validationSchema = Yup.object({
        subject: Yup.string().required("please enter the subject"),
        name: Yup.string().required("Please enter your name"),
        email: Yup.string().email("Invalid email").required("Please enter your email address"),
        message: Yup.string().required("kindly type a message here")
    });
    const handleSubmit = (values, {resetForm}) => {
       return  emailjs.send("service_uwha1w8","template_pjtonnp", {
            subject: values.subject,
            name: values.name,
            email: values.email,
            message: values.message
        }, "3kdCnhCXQKGhdwuus"
           )
            .then(
                (result) => {
                    setFeedback({message: "Message sent successfully ✅", type: "success"});
                    resetForm();
                    setTimeout(() => setFeedback({message: "", type: ""}) , 3000);
                }, 
                (error) => {
                    setFeedback({ message: "Failed to send message ❌, Try again", type: "error"});
                    console.error(error?.text || error?.message || error);
                    setTimeout(() => setFeedback({message: "", type: ""}) , 3000);
                }
            ); 
    };


    return (
        <div className="bg-white  min-h-screen dark:bg-gray-900 dark:text-gray-200 text-gray-900  font-poppins">
        <Formik 
        initialValues={{ subject: '', name: '', email: '', message: ''}}
        validationSchema={ validationSchema }
        validateOnChange={false}
        validateOnBlur={true}
        onSubmit={handleSubmit}>
            {({ touched, errors })=> (
                
                 <Form className="flex flex-col space-y-4 justify-center  items-center" >
                    <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-xl text-center mt-8 font-bold mb-10">Let's connect!</h1>
                    <div className="flex flex-col">
                        <label htmlFor="subject" className="md:text-xl sm:text-lg text-base font-bold mb-2">Subject</label>
                        <Field id="subject" type="text" name="subject" 
                          className="dark:bg-gray-900  border-2 border-primary dark:border-primary
                           px-4 py-2 w-60 md:w-96 focus:outline-none rounded-xl "/>
                        <ErrorMessage name="subject" component="p" className="md:text-xl text-base text-red-500 text-center" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="md:text-xl sm:text-lg text-base font-bold  mb-2">Name</label>
                        <Field id="name" type="text" name="name" 
                         className="dark:bg-gray-900  px-4 py-2 w-60 md:w-96 sm:w-64 mb-6 border-2 border-primary dark:border-primary
                           focus:outline-none rounded-xl " />
                        <ErrorMessage name="name" component="p" className="md:text-xl text-base text-red-600 text-center" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="md:text-xl sm:text-lg text-base font-bold mb-2">Email</label>
                        <Field id="email" type="email" name="email" 
                         className="px-4 py-2 w-60 md:w-96 sm:w-64 mb-6 border-2  border-primary dark:border-primary
                          dark:bg-gray-900 focus:outline-none rounded-xl "  />
                        <ErrorMessage name="email" component="p" className="md:text-xl text-base text-red-500 text-center" />
                    </div>
                    <div className="flex flex-col " >
                        <label htmlFor="message" className="md:text-xl sm:text-lg text-base font-bold mb-2">Message</label>
                         <Field id="message" as="textarea" name="message"  maxLength="2000"
                          className="p-10 w-60 md:w-96 sm:w-64 mb-6 border-2 border-primary dark:border-primary
                         dark:bg-gray-900 focus:outline-none rounded-lg " />
                         <ErrorMessage name="message" component="p" className="md:text-xl text-base  text-red-500 text-center"  />
                    </div>
                    {feedback.message && (
                        <div className={`text-center font-semibold md:text-xl sm:text-lg text-base
                            ${feedback.type === "success" ? "text-green-600" : "text-red-500"}`}>
                            {feedback.message}
                       </div>
                   )}
                   <div>
                    <button className="px-2 py-2 bg-primary dark:bg-primary text-gray-300 dark:text-gray-300  md:text-2xl smtext:xl text-lg w-60 md:w-80 sm:w-64 
                    rounded-2xl font-bold flex  mb-16 gap-2 " type="submit">
                        
                        Send message <Send className="w-8 h-8"  />
                        </button>
                    </div>
                    
                </Form>
            )}
         </Formik>
         
    </div>
    );
}

export default ContactMe;
