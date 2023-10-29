import CardIklan from "@/app/components/CardIklan";
import CardServices from "@/app/components/CardServices";
import Cards from "@/app/components/Cards";
import History from "@/app/components/History";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faWrench, faWifi } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col relative">
        <div className="min-h-[20vh] w-screen bg-[#0A1128] p-5">
          <div className="flex items-center gap-2">
            <div className="bg-sky-300 rounded-full h-10 w-10"></div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Kastawi WIFI</h1>
              <div className="bg-gradient-to-b from-sky-500 to-indigo-500 rounded-lg text-center">
                <h1 className="font-semibold text-black">PLATINUM</h1>
              </div>
            </div>
          </div>
        </div>
        <Cards paket={3} />
        <div className="w-screen z-0 bg-white pt-28 px-5 pb-8">
          <History />

          {/* IKLAN */}
          <div className="iklan mt-5 relative top-16 flex flex-col gap-2">
            <h1 className="font-bold text-xl text-black">Special Untukmu</h1>

            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full">
                <CardIklan />
              </div>
              <div id="item2" className="carousel-item w-full">
                <CardIklan />
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item1" className="btn btn-xs rounded-full">
                1
              </a>
              <a href="#item2" className="btn btn-xs rounded-full">
                2
              </a>
            </div>
          </div>
          {/* END OF IKLAN */}

          {/* OUR SERVICES */}
          <div className="wrapper mt-5 text-black mb-6 relative top-8">
            <h1 className="font-bold text-xl mb-3">Layanan Kami</h1>
            <div className="wrapper flex flex-col gap-3">
              <CardServices icon={faPrint} title={'Cetak Print'} description={'Kami melayani percetakan print bagi anda yang membutuhkan jasa printer'}/>
              <CardServices icon={faWrench} title={'Service Elektronik'} description={'Kami melayani Service Elektronik bagi anda yang memiliki masalah dengan barang elektronik'}/>
              <CardServices icon={faWifi} title={'Pemasanagan Wifi'} description={'Kami melayani pemasangan wifi bagi anda yang membutuhkan internet dirumah anda'}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
