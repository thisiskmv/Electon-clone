import { Link } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <ul className='headerList'>
        <div className='headerList1'>
          <Link href="/productPage" color="white" underline="none">Browse categories
            <ExpandMoreIcon />
          </Link>
        </div>
        <div className='headerList2'>
          <Link href="/" color="black" underline="none">Home</Link>
          <ExpandMoreIcon />
        </div>
        <div className='headerList3'>
          <Link href="#" color="black" underline="none">Catalog</Link>
          <ExpandMoreIcon />
        </div>
        <div className='headerList4'>
          <Link href="#" color="black" underline="none">Blog</Link>
          <ExpandMoreIcon />
        </div>
        <div className='headerList5'>
          <Link href="#" color="black" underline="none">Pages</Link>
          <ExpandMoreIcon />
        </div>
        <div className='headerList6'>
          <Link href="#" color="black" underline="none">About us</Link>
        </div>






      </ul>
    </div>
  )
}

export default Navbar
