import { useTable } from 'react-table';
import React, { createRef, useEffect, useState } from 'react';
import { column, bdata } from './BarangProps';

function AddBarangView(props) {

    let namaRef = createRef();
    let tipeRef = createRef();

    const addB = () => {
        // console.log(namaRef.current.value,tipeRef.current.value);
        props.xclick()
        props.addB({ col1: namaRef.current.value, col2: tipeRef.current.value });
    }

    return (
        <div className={(props.active ? " opacity-100" : "opacity-0 pointer-events-none") + " transition-all flex justify-center items-center fixed top-0 right-0 bottom-0 left-0"}>

            <div className={(props.active ? "transform-none " : "transform translate-y-8 opacity-0") + " transition-all z-10 absolute bg-white rounded-md opacity-100 p-3 w-3/4 md:w-2/4 flex flex-col space-y-4"}>

                <button onClick={props.xclick} className={"bg-red-300 font-semibold text-red-800 rounded-full absolute p-3 right-2 transform -translate-y-8"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>


                <div className={" "}>
                    <label htmlFor="nama" className={" font-semibold"}>Nama</label>
                    <input ref={namaRef} type="text" id="nama" className={" w-full border px-3 py-2 rounded-md focus:ring-4 focus:border-blue-500 focus:outline-none"} />
                </div>
                <div className={" "}>
                    <label htmlFor="nama" className={" font-semibold"}>Tipe</label>
                    <input ref={tipeRef} type="text" id="nama" className={" w-full border px-3 py-2 rounded-md focus:ring-4 focus:border-blue-500 focus:outline-none"} />
                </div>
                <div className={" "}>
                    <button onClick={addB} className={" px-3 py-2 font-semibold text-white rounded-md bg-gradient-to-t from-green-500 to-green-400 w-full"}>Save</button>
                </div>
            </div>
            <div onClick={props.xclick} className={" w-screen h-screen  fixed bg-gray-600 opacity-50"} />
        </div>
    );
}


function Barang(props) {
    const [data, fdata] = useState([]);

    useEffect(() => {
        let dt = localStorage.getItem('barang');

        if (dt) {
            dt = JSON.parse(dt);
            fdata(dt)
        } else {
            fdata(bdata);
            localStorage.setObject('barang', JSON.stringify(bdata));
        }

    }, []);

    const columns = React.useMemo(() => column, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    const [addb, addbf] = useState(false);

    const add = (ddt) => {
        // data();
        fdata([...data, ddt]);
        localStorage.setItem('barang', JSON.stringify([...data, ddt]))

    }

    return (
        <div className={" bg-white px-5 py-10 md:rounded-md flex flex-col text-gray-600"}>
            <div className="flex justify-between space-x-3">
                <button onClick={() => addbf(!addb)} className={" flex items-center focus:ring-4 ring-green-300 text-sm p-3 font-semibold rounded-full bg-green-200 text-green-800"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Tambah
                </button>
                <div className={" flex items-center md:w-5/12 w-full"}>
                    <input className={" focus:ring-4 focus:border-blue-500 focus:outline-none h-full w-full border rounded-full pl-4 pr-11 "} type="text" />
                    <button className={"  transform -translate-x-12 rounded-full p-1"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            <table {...getTableProps()} className={"w-full border rounded-lg overflow-hidden mt-3"} >
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} className={" p-3 text-left"} >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            className={((row.id % 2) === 0 ? " bg-gray-50 " : "bg-white") + " p-3"}
                                        >
                                            {cell.render('Cell')}

                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <AddBarangView addB={add} xclick={() => addbf(false)} active={addb} />
        </div>);
}

export default Barang;
