import { useState } from "react";

const ContactForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(fullname, email, massage);
    setFullName("");
    setEmail("");
    setMassage("");
  };

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");

  return (
    <div className="flex flex-wrap justify-center items-center h-auto p-5 pl-[6%] pt-[9%]">
      <div className="w-full md:w-2/5 p-4">
        <h2 className="text-xl md:text-7xl font-semibold mb-5">
          GET IN TOUCH!
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius
          rem sit, tenetur ipsam ratione. Provident, error dolorem consequuntur
          earum necessitatibus aut laboriosam tenetur nemo nesciunt excepturi
          ratione quos quia amet!
        </p>
        <form
          onClick={(e) => {
            submitHandler(e);
          }}
          className="space-y-4 mt-5"
        >
          <div>
            <input
              value={fullname}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              className="mt-1 p-4 w-full border rounded-md"
            />
          </div>
          <div>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="mt-1 p-4 w-full border rounded-md"
            />
          </div>
          <div>
            <textarea
              value={massage}
              onChange={(e) => {
                setMassage(e.target.value);
              }}
              id="message"
              name="message"
              placeholder="Message"
              className="mt-1 p-4 w-full border rounded-md"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-black text-white hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 p-4 flex justify-center">
        <div className="rounded-full overflow-hidden w-[35rem] h-[35rem]">
          <iframe
            className="w-[35rem] h-[35rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d-74.25986568785095!3d40.697670063849574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUxLjYiTiA3NMKwMTUnMzUuNyJX!5e0!3m2!1sen!2sus!4v1652901957916"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
