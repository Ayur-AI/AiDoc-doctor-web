import React from 'react'
import Table from '@mui/material/Table';
import { useState, useContext } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { SearchOutlined } from '@mui/icons-material'
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter'

import { contextAPI } from './Context';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SideBar from './SideBar'
function Dashboard() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [Search, setsearch] = useState('')
  const [about, setAbout] = useState('')
  const [open, setOpen] = useState(false);
  const data =useContext(contextAPI)
  console.log(data.users)
  const handleClickOpen = (id) => {
      setAbout(id)
      // alert(id)
      setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };

  let Navigate = useNavigate()

  const handleChangePage = (event, newPage) => {
      setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
  };
  return<>
  <SideBar/>
  <div className="p-4 sm:ml-64">
            <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
              <div className='Patient-container'>
                <p id='detail-title'>Patient details</p>
                <div className='Search-bar'>
                    <div className='search-box'>
                        <SearchOutlined />
                        <input type="text" placeholder="Search" onChange={(e) => { setsearch(e.target.value) }} />

                    </div>
                </div>
                <TableContainer sx={{ maxHeight: 440 }} className='Table mt-5' >
                    <Table stickyHeader aria-label="sticky table" >
                        <TableHead>
                            <TableRow>

                                <TableCell className='Table-header'
                                    style={{ minWidth: "100px" }}

                                >
                                   Patient Name
                                </TableCell>
                                <TableCell className='Table-header'
                                    align={"center"}
                                    style={{ minWidth: "100px" }}

                                >
                                    Email
                                </TableCell>
                                <TableCell className='Table-header'
                                    align={"center"}
                                    style={{ minWidth: "100px" }}

                                >
                                  Phone 
                                </TableCell>
                                <TableCell className='Table-header'
                                    align={"center"}
                                    style={{ minWidth: "100px" }}

                                >
                                   Gender
                                </TableCell>
                                <TableCell className='Table-header'
                                    align={"center"}
                                    style={{ minWidth: "100px" }}

                                >
                                    More info
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {data.users
                                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).filter((s) => {
                                //     if (Search === "") {
                                //         return s;
                                //     }
                                //     else if (s.Data.patient_name.toLowerCase().includes(Search.toLowerCase())||s.Data.doctor_name.toLowerCase().includes(Search.toLowerCase())) {
                                //         return s;
                                //     }
                                // })
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>


                                            <TableCell >
                                                {row.PatientDetails.Name}
                                            </TableCell>
                                            <TableCell align={"center"}>
                                                {row.PatientDetails.Email}
                                            </TableCell>
                                            <TableCell align={"center"}>
                                                {row.PatientDetails.Phone}
                                            </TableCell>
                                           
                                            <TableCell align={"center"}>
                                                {row.PatientDetails.Gender}
                                            </TableCell>
                                           
                                            <TableCell align={"center"}>
                                                <Button variant="outlined" onClick={() =>Navigate(`/Patient/${row.Patient_id}`)}>
                                                    view
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                    <TableFooter align="right">
                        <TablePagination

                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={data.users}

                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableFooter>
                </TableContainer>
              </div>
              </div>
            </div>
  </>
}

export default Dashboard