import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo";

const QRCodeGenerator = () => {
  const [text, setText] = useState(""); // یوزر ان پٹ کو اسٹور کرنے کے لیے سٹیٹ
  const [qrText, setQrText] = useState(""); // QR کوڈ کے ڈیٹا کو ہینڈل کرنے کے لیے سٹیٹ

  const generateQRCode = () => {
    setQrText(text); // یوزر کے ان پٹ کو QR کوڈ میں تبدیل کریں
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold text-center mb-6">QR Code Generator</h1>

      {/* ان پٹ باکس */}
      <div className="text-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL"
          className="border border-gray-300 rounded px-4 py-2 w-1/2"
        />
        <button
          disabled={text && text.trim() !== "" ? false : true}
          onClick={generateQRCode}
          className="bg-blue-500 text-white px-4 py-2  rounded ml-4"
        >
          Generate QR Code
        </button>
      </div>

      {/* QR کوڈ کو دکھائیں */}
      {qrText && (
        <div className="text-center items-center mt-8">
          <div className=" flex items-center justify-center">
            <QRCode value={qrText} size={200} />
          </div>
          <p className="mt-4 text-lg ">QR Code for: {qrText}</p>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
