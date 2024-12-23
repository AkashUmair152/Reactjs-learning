// import { useState } from "react";

// const Accordion = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const questionsAnswers = [
//     {
//       question: "What is React?",
//       answer:
//         "Ans: React is a JavaScript library for building user interfaces.",
//     },
//     {
//       question: "How do I create a component?",
//       answer:
//         "Ans: You can create a component by defining a function that returns JSX.",
//     },
//     {
//       question: "What is JSX?",
//       answer:
//         "Ans: JSX is a syntax extension for JavaScript that looks similar to XML or HTML.",
//     },
//     {
//       question: "What is state in React?",
//       answer:
//         "Ans: State is an object that represents the dynamic parts of a component.",
//     },
//     {
//       question: "How do I manage state?",
//       answer:
//         "Ans: State can be managed using the useState hook in functional components.",
//     },
//   ];

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className=" container bg-pink-100 max-w-[1200px] mx-auto flex flex-col justify-center p-32">
//       <h2 className="text-2xl font-bold text-center py-6">FAQ</h2>
//       {questionsAnswers.map((item, index) => (
//         <div key={index}>
//           <div
//             onClick={() => toggleAccordion(index)}
//             className=" text-base font-semibold my-3 cursor-pointer "
//           >
//             {item.question}
//           </div>
//           {activeIndex === index && (
//             <div className=" text-base font-semibold">{item.answer}</div>
//           )}
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;

import { useState } from "react";

const Accordion = () => {
  // activeIndex کو array کے طور پر initialize کریں
  const [activeIndex, setActiveIndex] = useState([]);

  const questionsAnswers = [
    {
      question: "What is React?",
      answer:
        "Ans: React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How do I create a component?",
      answer:
        "Ans: You can create a component by defining a function that returns JSX.",
    },
    {
      question: "What is JSX?",
      answer:
        "Ans: JSX is a syntax extension for JavaScript that looks similar to XML or HTML.",
    },
    {
      question: "What is state in React?",
      answer:
        "Ans: State is an object that represents the dynamic parts of a component.",
    },
    {
      question: "How do I manage state?",
      answer:
        "Ans: State can be managed using the useState hook in functional components.",
    },
  ];

  // toggleAccordion کو اپڈیٹ کریں تاکہ ایک سے زیادہ انڈیکس ہینڈل ہو سکیں
  const toggleAccordion = (index) => {
    if (activeIndex.includes(index)) {
      // اگر انڈیکس پہلے سے array میں ہو، تو اسے ہٹا دیں (بند کرنے کے لیے)
      setActiveIndex(activeIndex.filter((i) => i !== index));
    } else {
      // اگر انڈیکس array میں نہیں ہو، تو اسے array میں شامل کریں (کھولنے کے لیے)
      setActiveIndex([...activeIndex, index]);
    }
  };

  return (
    <div className="container bg-pink-100 max-w-[1200px] mx-auto flex flex-col justify-center p-32">
      <h2 className="text-2xl font-bold text-center py-6">FAQ</h2>
      {questionsAnswers.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => toggleAccordion(index)}
            className="text-base font-semibold my-3 cursor-pointer"
          >
            {item.question}
          </div>
          {/* چیک کریں کہ آیا انڈیکس activeIndex array میں موجود ہے */}
          {activeIndex.includes(index) && (
            <div className="text-base font-semibold">{item.answer}</div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
