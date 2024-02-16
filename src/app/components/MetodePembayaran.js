import React, { useState } from "react";

const Accordion = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [eWallet, setEWallet] = useState(null);
  const [bank, setBank] = useState(null);
  const [supermarket, setSupermarket] = useState(null);

  const handlePaymentMethodChange = (method) => {
    // Jika yang diklik adalah yang sedang terbuka, maka tutup accordion.
    setSelectedPaymentMethod((prevMethod) => (prevMethod === method ? null : method));
    console.log(selectedPaymentMethod);
  };

  const handleEwalletChange = (value) => {
    setEWallet(value);
    // Reset other payment states to null when selecting e-wallet
    setBank(null);
    setSupermarket(null);
  };

  const handleBankTransferChange = (value) => {
    setBank(value);
    // Reset other payment states to null when selecting bank transfer
    setEWallet(null);
    setSupermarket(null);
  };

  const handleSupermarketChange = (value) => {
    setSupermarket(value);
    // Reset other payment states to null when selecting supermarket
    setEWallet(null);
    setBank(null);
  };

  const handlePaymentChange = (value) => {
    setSelectedPayment(value);
    console.log(selectedPayment);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="bg-gray-200 py-2 px-4 cursor-pointer" onClick={() => handlePaymentMethodChange("ewallet")}>
            <div className="flex justify-between items-center">
              <span className="text-black font-bold">
                E-wallet <span className=" font-normal">{eWallet == null ? "" : `- ${eWallet}`}</span>
              </span>
              {selectedPaymentMethod === "ewallet" && <span className="text-blue-500">▼</span>}
            </div>
          </div>
          {selectedPaymentMethod === "ewallet" && (
            <div className="px-4 py-2">
              <label className="flex justify-between cursor-pointer">
                <span className="text-black">DANA</span>
                <input type="radio" value="DANA" name="ewalletOptions" onChange={(e) => handleEwalletChange(e.target.value)} className="appearance-none h-5 w-5 border-4 border-black rounded-full bg-white checked:bg-white checked:border-8" />
              </label>
              <label className="flex justify-between  cursor-pointer">
                <span className="text-black">ShopeePay</span>
                <input type="radio" value="ShopeePay" name="ewalletOptions" onChange={(e) => handleEwalletChange(e.target.value)} className="appearance-none h-5 w-5 border-4 border-black rounded-full bg-white checked:bg-white checked:border-8" />
              </label>
              <label className="flex justify-between  cursor-pointer">
                <span className="text-black">Gopay</span>
                <input type="radio" value="Gopay" name="ewalletOptions" onChange={(e) => handleEwalletChange(e.target.value)} className="appearance-none h-5 w-5 border-4 border-black rounded-full bg-white checked:bg-white checked:border-8" />
              </label>
              <label className="flex justify-between  cursor-pointer">
                <span className="text-black">OVO</span>
                <input type="radio" value="OVO" name="ewalletOptions" onChange={(e) => handleEwalletChange(e.target.value)} className="appearance-none h-5 w-5 border-4 border-black rounded-full bg-white checked:bg-white checked:border-8" />
              </label>
            </div>
          )}
        </div>

        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="bg-gray-200 py-2 px-4 cursor-pointer" onClick={() => handlePaymentMethodChange("bankTransfer")}>
            <div className="flex justify-between items-center">
              <span className="text-black font-bold">
                Transfer Bank <span className=" font-normal">{bank == null ? "" : `- ${bank}`}</span>
              </span>
              {selectedPaymentMethod === "bankTransfer" && <span className="text-blue-500">▼</span>}
            </div>
          </div>
          {selectedPaymentMethod === "bankTransfer" && (
            <div className="px-4 py-2">
              <label className="flex justify-between  cursor-pointer">
                <span className="text-black">BCA</span>
                <input type="radio" value="BCA" name="bankTransferOptions" onChange={(e) => handleBankTransferChange(e.target.value)} className="appearance-none h-5 w-5 border-4 border-black rounded-full bg-white checked:bg-white checked:border-8" />
              </label>
              <label className="flex justify-between  cursor-pointer">
                <span className="text-black">BRI</span>
                <input type="radio" value="BRI" name="bankTransferOptions" onChange={(e) => handleBankTransferChange(e.target.value)} className="appearance-none h-5 w-5 border-4 border-black rounded-full bg-white checked:bg-white checked:border-8" />
              </label>
              <label className="flex justify-between  cursor-pointer">
                <span className="text-black">Mandiri</span>
                <input type="radio" value="Mandiri" onChange={(e) => handleBankTransferChange(e.target.value)} className="appearance-none h-5 w-5 border-4 border-black rounded-full bg-white checked:bg-white checked:border-8" name="bankTransferOptions" />
              </label>
              <label className="flex justify-between cursor-pointer">
                <span className="text-black">Bank Syariah Indonesia (BSI)</span>
                <input type="radio" value="BSI" name="bankTransferOptions" onChange={(e) => handleBankTransferChange(e.target.value)} className="appearance-none h-5 w-5 border-4 border-black rounded-full bg-white checked:bg-white checked:border-8" />
              </label>
            </div>
          )}
        </div>

        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="bg-gray-200 py-2 px-4 cursor-pointer" onClick={() => handlePaymentMethodChange("alfamartIndomart")}>
            <div className="flex justify-between items-center">
              <span className="text-black font-bold">
                Alfamart / Indomart <span className=" font-normal">{supermarket == null ? "" : `- ${supermarket}`}</span>
              </span>
              {selectedPaymentMethod === "alfamartIndomart" && <span className="text-blue-500">▼</span>}
            </div>
          </div>
          {selectedPaymentMethod === "alfamartIndomart" && (
            <div className="px-4 py-2">
              <label className="flex justify-between  cursor-pointer">
                <span className="text-black">Indomart</span>
                <input
                  type="radio"
                  value="Indomart"
                  name="alfamartIndomartOptions"
                  className="appearance-none h-5 w-5 border-4 border-black rounded-full bg-white checked:bg-white checked:border-8"
                  onChange={(e) => handleSupermarketChange(e.target.value)}
                />
              </label>
              <label className="flex justify-between  cursor-pointer">
                <span className="text-black">Alfamart</span>
                <input
                  type="radio"
                  value="Alfamart"
                  name="alfamartIndomartOptions"
                  className="appearance-none h-5 w-5 border-4 border-black rounded-full bg-white checked:bg-white checked:border-8"
                  onChange={(e) => handleSupermarketChange(e.target.value)}
                />
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
