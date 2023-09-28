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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const AdminOrderStatus = () => {
    const actions = ["Edit", "View", "Update"];
    
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

    const [editingOrderNumber, setEditingOrderNumber] = useState("");
    const [orders, setOrders] = useState([]);

    const getAllOrders = async () => {
        await axios({
            method: "GET",
            url: "http://localhost:8000/orders",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log(response);
            setOrders(response.data.orders);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getAllOrders();
    }, []);


    const handleStatusChange = (event, orderId) => {
        setOrders(prevOrders => 
            prevOrders.map(order => 
                order.orderId === orderId ? { ...order, status: event.target.value } : order
            )
        );
    };

    // handle update button which post request to backend to update status !!!

    const handleEdit = (orderNumber) => {
        console.log("Editing order " + editingOrderNumber)
        if (editingOrderNumber === orderNumber) {
            setEditingOrderNumber("");  // disable editing for this order if it's currently being edited
        } else {
            setEditingOrderNumber(orderNumber);  // enable editing for this order
        }
    };

    return (
        <div style={{ flexGrow: "1", display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
                            <TableRow key={order.orderId}>
                                <TableCell>{order.orderId}</TableCell>
                                <TableCell align="right">{order.createdAt.slice(0, 10)}</TableCell>
                                <TableCell align="right">{order.totalPrice.toFixed(2)}</TableCell>
                                <TableCell align="right">{order.orderItems.length}</TableCell>
                                <TableCell align="right">
                                    <Select
                                        disabled={editingOrderNumber !== order.orderId}
                                        value={order.status}
                                        onChange={(event) => handleStatusChange(event, order.orderId)}
                                    >
                                        <MenuItem value="Pending">Pending</MenuItem>
                                        <MenuItem value="Shipped">Shipped</MenuItem>
                                        <MenuItem value="Delivered">Delivered</MenuItem>
                                        <MenuItem value="Canceled">Canceled</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell align="right">
                                    {actions.map(action => (
                                        <Button key={action}
                                            onClick={action === "Edit" ? () => handleEdit(order.orderId) : 
                                                action === "Update" ? () => console.log("Updating order " + order.orderId) :
                                                action === "Delete" ? () => console.log("Deleting order " + order.orderId) :
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
        </div>
    );
}

export default AdminOrderStatus;
