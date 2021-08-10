import React from "react";


function Dashboard() {
  return (
    <div className={" overflow-hidden md:rounded-md p-2"}>
      <div className={" flex justify-between mb-5 flex-wrap"}>
        <div className={" bg-white shadow-md m-1 overflow-hidden flex-grow rounded-md flex flex-col  items-center justify-center"}>
          <div className={" w-full p-2 flex justify-start font-bold bg-red-200 text-red-800"}>Penjualan</div>
          <span className={" font-bold text-4xl p-3"}>60</span>
        </div>
        <div className={" bg-white shadow-md m-1 overflow-hidden flex-grow rounded-md flex flex-col  items-center justify-center"}>
          <div className={" w-full p-2 flex justify-start font-bold bg-blue-200 text-blue-800"}>Barang</div>
          <span className={" font-bold text-4xl p-3"}>800</span>
        </div>
        <div className={" bg-white  shadow-md m-1 overflow-hidden flex-grow rounded-md flex flex-col  items-center justify-center"}>
          <div className={" w-full p-2 flex justify-start font-bold bg-green-200 text-green-800"}>Stok</div>
          <span className={" font-bold text-4xl p-3"}>199K</span>
        </div>
        <div className={" bg-white shadow-md m-1 overflow-hidden flex-grow rounded-md flex flex-col  items-center justify-center"}>
          <div className={" w-full p-2 flex justify-start font-bold bg-yellow-200 text-yellow-800"}>Omset</div>
          <span className={" font-bold text-4xl p-3"}>20K</span>
        </div>

      </div>

      <div className={" p-5 bg-white"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque earum
        eligendi asperiores vitae culpa esse nisi iste quisquam, minus reiciendis,
        necessitatibus vel eos provident dolorum magni deleniti! Expedita,
        voluptatem.
      </div>
    </div>
  );
}


export default Dashboard;