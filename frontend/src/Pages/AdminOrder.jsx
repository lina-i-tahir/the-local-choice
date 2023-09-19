import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const AdminOrderStatus = () => {
    const initialOrders = [
        {
            orderNumber: "123456",
            date: "2023-09-12",
            totalAmount: "$200.00",
            totalItems: "5",
            status: "Shipped",
            actions: ["Edit", "View", "Update"]
        },
        {
            orderNumber: "789012",
            date: "2023-09-13",
            totalAmount: "$300.00",
            totalItems: "3",
            status: "Pending",
            actions: ["Edit", "View", "Update"]
        },
    ];

    const [editingOrderNumber, setEditingOrderNumber] = useState(null);
    const [orders, setOrders] = useState(initialOrders);

    const handleStatusChange = (event, orderNumber) => {
        setOrders(prevOrders => 
            prevOrders.map(order => 
                order.orderNumber === orderNumber ? { ...order, status: event.target.value } : order
            )
        );
    };

    // handle update button which post request to backend to update status !!!

    const handleEdit = (orderNumber) => {
        if (editingOrderNumber === orderNumber) {
            setEditingOrderNumber(null);  // disable editing for this order if it's currently being edited
        } else {
            setEditingOrderNumber(orderNumber);  // enable editing for this order
        }
    };

    return (
        <TableContainer component={Paper} sx={{
            marginTop: "20px",
            backgroundColor: "#EFEAE0",
            borderRadius: "10px",
            alignItems: "center",
            margin: "30px auto",
            width: "80%",
        }}>
            <Table>
                <TableHead sx={{
                    width: "100%",
                    margin: "auto",
                }}>
                    <TableRow sx={{ width: "100%", margin: "auto" }}>
                        <TableCell sx={{ fontWeight: "600" }}>Order Number</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "600" }}>Date</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "600" }}>Total Amount</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "600" }}>Total Items</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "600" }}>Status</TableCell>
                        <TableCell align="right" sx={{ fontWeight: "600" }}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.orderNumber}>
                            <TableCell>{order.orderNumber}</TableCell>
                            <TableCell align="right">{order.date}</TableCell>
                            <TableCell align="right">{order.totalAmount}</TableCell>
                            <TableCell align="right">{order.totalItems}</TableCell>
                            <TableCell align="right">
                                <Select
                                    disabled={editingOrderNumber !== order.orderNumber}
                                    value={order.status}
                                    onChange={(event) => handleStatusChange(event, order.orderNumber)}
                                >
                                    <MenuItem value="Pending">Pending</MenuItem>
                                    <MenuItem value="Shipped">Shipped</MenuItem>
                                    <MenuItem value="Delivered">Delivered</MenuItem>
                                    <MenuItem value="Canceled">Canceled</MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell align="right">
                                {order.actions.map(action => (
                                    <Button key={action}
                                        onClick={action === "Edit" ? () => handleEdit(order.orderNumber) : 
                                            action === "View" ? () => console.log("Viewing order " + order.orderNumber) :
                                            action === "Update" ? () => console.log("Updating order " + order.orderNumber) :
                                            () => console.log("Unknown action " + action)}
                                        variant="contained" color="primary" size="small" style={{ marginRight: "8px" }}>
                                        {action}
                                    </Button>
                                ))}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default AdminOrderStatus;
