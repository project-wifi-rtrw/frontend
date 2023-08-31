import React from "react";

function History() {
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
                  <th className="pb-3 text-white">Pemakaian</th>
                  <th className="pb-3 text-white">Status Pembayaran</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {/* row 1 */}
                <tr>
                  {/* <th>1</th> */}
                  <td className="pb-2">Februari</td>
                  <td className="pb-2">5 Mbps</td>
                  <td className="pb-2 flex justify-center">{renderStatus("terbayar")}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td className="pb-2">Maret</td>
                  <td className="pb-2">3 Mbps</td>
                  <td className="pb-2 flex justify-center">{renderStatus("terbayar")}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td className="pb-2">Mei</td>
                  <td className="pb-2">5 Mbps</td>
                  <td className="pb-2 flex justify-center">{renderStatus("belum")}</td>
                </tr>

                <tr>
                  <td className="pb-2">Juni</td>
                  <td className="pb-2">5 Mbps</td>
                  <td className="pb-2 flex justify-center"> {renderStatus("terbayar")}</td>
                </tr>

                <tr>
                  <td className="pb-2">Juli</td>
                  <td className="pb-2">5 Mbps</td>
                  <td className="pb-2 flex justify-center">{renderStatus("belum")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
