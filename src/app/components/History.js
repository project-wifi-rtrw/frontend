import React from "react";

function History() {
  // Dummy data
  const data = [
    { month: "Februari", tgl_pembayaran: "13/05/23", status: "terbayar" },
    { month: "Maret", tgl_pembayaran: "26/06/23", status: "terbayar" },
    { month: "Mei", tgl_pembayaran: "17/07/23", status: "belum" },
    { month: "Juni", tgl_pembayaran: "13/08/23", status: "terbayar" },
    { month: "Juli", tgl_pembayaran: "07/09/23", status: "belum" }
  ];

  const renderStatus = (status) => {
    if (status === "terbayar") {
      return (
        <div className="border-2 border-[#4CCE49] bg-[#81FF7E] rounded-lg py-1 w-[80%]">
          <h1 className="font-semibold">TERBAYAR</h1>
        </div>
      );
    } else if (status === "belum") {
      return (
        <div className="border-2 border-[#FF4C4C] bg-[#FF7E7E] rounded-lg py-1 w-[80%]">
          <h1 className="font-semibold">BELUM</h1>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="container text-black relative top-8 flex flex-col gap-2">
        <h1 className="font-bold text-lg">History Penggunaan</h1>

        {/* table */}
        <div className="container">
          <div className="overflow-x-auto h-48">
            <table className="table w-full table-pin-rows leading-4 ">
              {/* head */}
              <thead className="">
                <tr>
                  {/* <th></th> */}
                  <th className="pb-3 text-white">Bulan</th>
                  <th className="pb-3 text-white text-center">Tanggal<br/>Pembayaran</th>
                  <th className="pb-3 text-white">Status Pembayaran</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {/* Mapping data to rows */}
                {data.map((item, index) => (
                  <tr key={index}>
                    {/* <th>{index + 1}</th> */}
                    <td className="pb-2">{item.month}</td>
                    <td className="pb-2">{item.tgl_pembayaran}</td>
                    <td className="pb-2 flex justify-center">{renderStatus(item.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
