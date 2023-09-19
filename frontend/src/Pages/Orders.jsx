import {Grid} from "@mui/material"
import Stack from '@mui/system/Stack';
import SidePanel from "../Components/SidePanel";
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";


const Orders = () => {

    // function createData(number, date, status, total, view) {
    //     return { number, date, status, total, view };
    //   }
      
    //   const rows = [
    //     createData('12345', '2 Sep 2023', 'processing', 59.90, 'view'),
    //     createData('23456', '23 Aug 2023', 'shipped', 37.90, 'view'),
    //     createData('34567', '18 Aug 2023', 'completed', 24.50, 'view'),
    //     createData('45678', '10 Aug 2023', 'completed', 67.60, 'view'),
    //     createData('56789', '2 Aug 2023', 'completed', 49.80, 'view'),
    //   ];

    const columns = [
        { field: 'id', headerName: 'Order No.', width: 150, headerAlign: 'center', align: 'center'  },
        { field: 'date', headerName: 'Date', width: 200 },
        { field: 'status', headerName: 'Status', width: 200 },
        {
          field: 'total',
          headerName: 'Total',
          type: 'number',
          width: 200,
          align: 'center',
          headerAlign: 'center' 
        },
        {
            field: 'view',
            headerName: '',
            width: 200,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => {
              return (
                <button
                  onClick={() => viewOrder(params.row.id)} 
                >
                  View
                </button>
              );}
        },
      ];
      
      const rows = [
        { id: 1, date: '20 Sep 2023', status: 'processing', total: 35},
        { id: 2, date: '10 Sep 2023', status: 'shipped', total: 42 },
        { id: 3, date: '18 Sep 2023', status: 'completed', total: 45 },
        { id: 4, date: '16 Aug 2023', status: 'completed', total: 16 },
        { id: 5, date: '12 Jun 2023', status: 'completed', total: 110 },
        { id: 6, date: '19 May 2023', status: 'completed', total: 150 },
        { id: 7, date: '21 Mar 2023', status: 'completed', total: 44 },
        { id: 8, date: '23 Mar 2022', status: 'completed', total: 36 },
        { id: 9, date: '1 Mar 2022', status: 'completed', total: 65 },
      ];

    const navigate = useNavigate();

    const viewOrder = (orderId) => {
        navigate(`/orders/${orderId}`)
    };
      

  return (
    <>
        <Grid container spacing={0} style={{height: '80vh' }}>
            <SidePanel page={"orders"} route={"orders"}/>
            <Grid item xs={8.5}>
                <Stack 
                    direction={{ xs: 'column'}}
                    spacing={{ xs: 4}}
                    alignItems={"center"}
                    marginTop={2}
                    marginRight={5}
                    paddingTop={5}
                    style={{ backgroundColor: '#f3efe7', 
                                    height: '75vh',
                                    borderRadius: "30px"
                           }}
                    justifyContent={"flex-start"}
                    
                >
                    <h3>orders</h3>
                    <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                        }}
                        pageSizeOptions={[5, 10]}
                    />
                    </div>
                </Stack>
            </Grid>
        </Grid>
    </>
  )
}

export default Orders