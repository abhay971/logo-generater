import React from 'react'
import { Button } from './button'
import { Download } from 'lucide-react'

function Header({DownloadIcon}) {
  return (
    <div className='p-2 shadow-sm border flex justify-between items-center'>
        <img className='h-10 pl-2' src='/logo.svg'/>
       <Button className='flex gap-2 items-center rounded-2xl' onClick={() => DownloadIcon(Date.now())}> 
       <Download className='h-4 w-4'/> Download</Button>
    </div>
  )
}

export default Header;

