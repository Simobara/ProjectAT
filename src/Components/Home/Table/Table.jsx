import React, { useEffect, useState } from 'react';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import Pagination from "../Pagination/Pagination";
import "./table.css"
import arrowDown from "../../../Assets/Images/black-arrow-down.png"
import MapPage from "../Map/map";
import Search from "../Search/Search";
import ProButton from "../../common/ProButton/ProButton";
// import {tableColumn} from "../MainTable/Columns";
// import {newData} from "../../../store/newData";

let isOpenDetailPanel = false
const Table = ({ handleAddNewRecPopup, rowData = [], columnData = [] }) => {
    const [selectedCell, setSelectedCell] = useState(null)
    const [rowsData, setRowsData] = useState([])
    const [columns, setColumns] = useState([])
    const [isArrowSelected, setIsArrowSelected] = useState(false);

    //USE EFFECT FOR RENDERING
    useEffect(() => {
        setRowsData(rowData)
    }, [rowData])

    useEffect(() => {
        setColumns(columnData)
    }, [columnData])
    //-------------------------

    // Create an instance of the table
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        setGlobalFilter,
        page,
        canPreviousPage,
        canNextPage,
        gotoPage,
        pageOptions,
        nextPage,
        previousPage,
        state: { pageIndex, globalFilter }, //fpr Pagination and global filter
    } = useTable(
        {
            columns,
            data: rowsData,
            initialState: { pageIndex: 0 }, // Initial page index
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );
    //--------------------------------



    const handleDetailPanel = (row) => {
        if (selectedCell?.id === row.id && isOpenDetailPanel) {
            isOpenDetailPanel = false
            setSelectedCell(null);
            setIsArrowSelected(false);
        } else {
            isOpenDetailPanel = true
            setSelectedCell(row);
            setIsArrowSelected(true);
        }
    }

    const renderCellData = (cell) => {
        const headerName = cell.column.id;
        const id = cell.row.id;
        const arrowContainerClass = selectedCell?.id === id && isArrowSelected ? "arrow-container selected" : "arrow-container";

        return (
            <td {...cell.getCellProps()}>
                {headerName === "openDetail" ? (
                    <div className={arrowContainerClass}>
                        <img
                            src={arrowDown}
                            onClick={() => handleDetailPanel(cell.row)}
                            className="arrow-down-btn"
                            alt="imagePic"
                        />
                    </div>
                )
                    :
                    (headerName === "immagine" ?
                        <img src={cell.value} alt="imagePic" className="table-data-img" /> :
                        <span>{cell.value}</span>)
                }
            </td>
        )
    }

    const renderDetailPanel = (row) => {
        if (row?.id !== selectedCell?.id) return;
        // const rowId = row.id
        // if (row)
        const { Quantita, address, classeWaste, descrizione, id, immagine } = row.values;
        return (
            <tr className="detail-wrapper">
                <div className="detail-sections">
                    <section>
                        <span className="color-purple">Id Annuncio : {id}</span>
                        <div className="section-item">
                            <strong className='color-red'></strong>
                        </div>
                        <div className="section-item">
                            <strong className="color-blue">Descrizione:</strong>
                            <span>{descrizione}</span>
                        </div>
                        <div className="section-item">
                            <strong className="color-blue">Quantita:</strong>
                            <span>{Quantita}</span>
                        </div>
                        <div className="section-item">
                            <strong className="color-blue">Offerente:</strong>
                            <span>Camelo</span>
                        </div>
                    </section>
                    <section className="">
                        <div className="section-item">
                            <strong className="color-blue">Classe Waste</strong>
                            <span>{classeWaste}</span>
                        </div>
                        <div className="section-item">
                            <img src={immagine} alt="imagePic" />
                        </div>
                    </section>
                    <section className="map-wrapper">
                        <div className="section-item">
                            <strong className="color-blue">Address</strong>
                            <span>{address}</span>
                        </div>
                        <div className="map-wrapper">
                            <MapPage />
                            {/*<AddressToCoordinates/>*/}
                        </div>
                    </section>
                </div>
            </tr>
        )
    }
    //<<--------------------------------------RETURN------------------------------------------------------>>
    return (
        <div className="h-[100%]">
            <div className="d-flex justify-content-between align-items-center">
                <Search filter={globalFilter} setFilter={setGlobalFilter} />
                <ProButton text="Add New" title="Add New Record" clicked={handleAddNewRecPopup} />
            </div>
            <table {...getTableProps()} className="table">
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr className="table-row" {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column =>
                                        <th className="table-header-item" {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </th>
                                    )
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row);
                            return (
                                <>
                                    <tr {...row.getRowProps()} className="table-row">
                                        {
                                            row.cells.map(cell => renderCellData(cell))
                                        }
                                    </tr>
                                    {
                                        selectedCell && renderDetailPanel(row)
                                    }
                                </>
                            );
                        })
                    }
                </tbody>
            </table>
            <Pagination
                nextPage={nextPage}
                previousPage={previousPage}
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                pageOptions={pageOptions}
                pageIndex={pageIndex}
                gotoPage={gotoPage}
            />
        </div>
    );
};

export default Table;