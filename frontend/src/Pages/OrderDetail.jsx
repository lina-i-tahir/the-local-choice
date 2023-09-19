import { Grid } from "@mui/material"
import Stack from '@mui/system/Stack';
import SidePanel from "../Components/SidePanel";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate, useParams } from "react-router-dom";
import ordersList from "../orderslist";

const OrderDetail = () => {

    function ccyFormat(num) {
    return `${num.toFixed(2)}`;
    }

    function priceRow(qty, unit) {
    return qty * unit;
    }

    function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
    }

    function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    }

    const rows = [
    createRow('Rose Sakura Earrings - Pink', 1, 19.99),
    createRow('Cherry Blossoms Sticker Pack - Digital', 10, 5.99),
    createRow('Yellow Sunflower Rings', 2, 17.99),
    ];

    const invoiceSubtotal = subtotal(rows);

    // const navigate = useNavigate();

    // const { id } = useParams();
    // const currentOrder = ordersList.find((order) => order._id === id);


  return (
    <>
    <Grid container spacing={0} style={{height: '80vh' }}>
            <SidePanel page={"orders"} route={"orders"}/>
            <Grid item xs={8.5}>
                <Stack 
                    direction={{ xs: 'column'}}
                    spacing={{ xs: 3}}
                    alignItems={"center"}
                    marginTop={2}
                    marginRight={5}
                    paddingTop={3}
                    style={{ backgroundColor: '#f3efe7', 
                                    height: '75vh',
                                    borderRadius: "30px"
                           }}
                    justifyContent={"flex-start"}
                    
                >
                    <p style={{ color: '#99958c',
                                fontSize: '13px' }}>Order #23336 was placed on December 20, 2020 and is currently Completed.</p>
                    <h3>Order Details</h3>
                    <TableContainer component={Paper}
                                    sx={{ width: "80%",
                                            backgroundColor: "transparent", 
                                            boxShadow: "none",
                                            paddingBottom: "80px"}}>
                    <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Qty</TableCell>
                            <TableCell align="right">Unit Price</TableCell>
                            <TableCell align="right">Total</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.desc}>
                            <TableCell>{row.desc}</TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">{row.unit}</TableCell>
                            <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={4} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Shipping</TableCell>
                            <TableCell align="right">Free</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Discount</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right"
                                        style={{ fontWeight: 'bold' }}>{ccyFormat(invoiceSubtotal)}</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Stack>
            </Grid>
        </Grid>
     </>
  )
}

export default OrderDetail