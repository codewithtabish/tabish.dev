import { DashboardDataTable } from '@/components/generals/dashboard/dashboard-user-table'
import { dashboardData } from '@/constants/dashboard-table'
import { Edit } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const DashboardBlogs = () => {
  return (
    <div>
      <div>
        <h2 className='font-bold text-2xl'>All Blogs</h2>
        
      </div>
      <div className='flex justify-between items-center '>
        <p></p>
        <Link href={'/dashboard/blogs/create-blog'} className='flex items-center gap-2 text-blue-600 hover:underline max-w-fit mb-4'>
        <Edit className='text-2xl'/>
        </Link> 
      </div>
          <DashboardDataTable data={dashboardData}/>
      
      
    </div>
  )
}

export default DashboardBlogs
