import React, { useState } from "react";
import { tableColumn } from "./MainTable/Columns";
import Table from "./Table/Table";
import "./home.css";
import AddNewRecordForm from "./AddNewRecord/AddNewRecord";
import { newData } from "../../Data/newData";

// import { dummy } from "../../store/TableData";
// import {
//     useTable,
//     useSortBy,
//     usePagination,
//     useGlobalFilter,
// } from "react-table";
// import MainTable from "./MainTable/MainTable";
// import Pagination from "./Pagination/Pagination";
// import Search from "./Search/Search";
// import Map from "./Map/map";
// import AggiungiAzienda from "../AggiungiAzienda/aggiungiAzienda";
// import car2 from "../../Assets/Images/car2.jpg";

const Home = () => {
    const [showAddNewRecPopup, setShowAddNewRecPopup] = useState(false)
    const [rowsData, setRowsData] = useState([...newData])
    // const [tableColumns, setTableColumns] = useState([...tableColumn])

    const handleAddNewRecPopup = () => {
        setShowAddNewRecPopup(p => !p)
    }
    const onClosePopup = () => {
        setShowAddNewRecPopup(false)
    }
    const onSubmitForm = (formData) => {
        const data = [...rowsData]
        data.push({ ...formData })
        setRowsData(data)
        onClosePopup()
    }
    return (
        <>
            <div className="container" style={{ minWidth: '80%', fontSize: '1.9rem' }}>
                <div className="container-fluid">
                    <div className="row row-overflow">
                        {/*<Search filter={globalFilter} setFilter={setGlobalFilter} />*/}
                        <Table
                            columnData={[...tableColumn]}
                            rowData={rowsData}
                            handleAddNewRecPopup={handleAddNewRecPopup}
                        />
                        {/*<MainTable*/}
                        {/*    getTableProps={getTableProps}*/}
                        {/*    getTableBodyProps={getTableBodyProps}*/}
                        {/*    headerGroups={headerGroups}*/}
                        {/*    prepareRow={prepareRow}*/}
                        {/*    page={page} //rows was replaced by page for pagination*/}
                        {/*/>*/}
                    </div>
                    {/*<div className="container-fluid">*/}
                    {/*    <div className="row row-overflow">*/}
                    {/*        <Map/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                {
                    showAddNewRecPopup &&
                    <AddNewRecordForm
                        rowsLength={rowsData?.length || undefined}
                        onClosePopup={onClosePopup}
                        onCancel={onClosePopup}
                        onSubmitForm={onSubmitForm}
                    />

                }
            </div>
        </>
    );
};

export default Home;
