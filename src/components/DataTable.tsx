import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function carData(
    make: string,
    model: string,
    year: number,
    category: string,
){
    return { make, model, year, category}
}

const rows = [
    carData('Chevrolet', "Silverado", 2013, 'Truck'),
    carData('Honda','Civic', 2012, 'Coupe'),
    carData('Dodge', 'Charger', 2020, 'Coupe'),
    carData('GMC','Denali', 2021, 'SUV'),
    carData('Ford','Mustang',2023,'Coupe'),
  ];


function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className='border'>
        <TableHead className='bg-gray-600'>
          <TableRow>
            <TableCell >Vehicle Make</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.make}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className='hover:bg-gray-400'
            >
              <TableCell component="th" scope="row">
                {row.make}
              </TableCell>
              <TableCell align="right">{row.model}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable

