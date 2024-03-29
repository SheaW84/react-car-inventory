import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetData } from "../custom-hooks/FetchData";


const columns: GridColDef[]=[
  { field: 'id', headerName:'ID', width:90, hide:true },
  { field: 'make', headerName:'Car Make', flex: 1 },
  { field: 'model', headerName: 'Car Model',flex: 1 },
  { field: 'year', headerName: 'Car Year', flex: 1 },
  { field: 'car_type', headerName: 'Car Type',flex: 1 }
]

function DataTable() {
  let [ open, setOpen ] = useState(false);
  const { carData, getData} = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
      server_calls.delete(selectionModel[0])
      getData();
      console.log(`Selection model: ${selectionModel}`)
      setTimeout( () => {window.location.reload()}, 500)
  }

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-green-800 hover:text-white
                    shadow-sm shadow-white hover:shadow-lg hover:shadow-green-400"
                    onClick={() => handleOpen()}
                >
                    Add New Car
                </button>
            </div> 
            <Button onClick={ handleOpen } className="p-3 bg-slate-300 rounded m-3 hover:bg-yellow-800 hover:text-white
            shadow-sm shadow-white hover:shadow-lg hover:shadow-yellow-400">Update Car</Button>
            <Button onClick={ deleteData } className="p-3 bg-slate-300 rounded m-3 hover:bg-red-800 hover:text-white
            shadow-sm shadow-white hover:shadow-lg hover:shadow-red-400" >Delete Car</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col" }
            style={{ height: 400, width: '100%'}}>
                <div className="justify-center">
                    <h2 className="p-3 bg-slate-800 text-white my-2 rounded font-display">My Cars</h2>
                </div>
            <DataGrid 
            rows={carData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            sx={{
                borderColor:'',
                color:'primary.light'
            }}
            />
        </div>
        </>
  )
}

export default DataTable

