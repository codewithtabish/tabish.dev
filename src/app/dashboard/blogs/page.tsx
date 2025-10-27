import { getAllBlogsServerAction } from '@/actions/blog'
import { DashboardDataTable } from '@/components/generals/dashboard/dashboard-user-table'
// import { DashboardDataTable } from '@/components/generals/dashboard/dashboard-user-table'
// import { dashboardData } from '@/constants/dashboard-table'
import { Blog } from '@/types'
import { Edit } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const DashboardBlogs = async() => {
    let blogs: Blog[] = [];
  
    try {
      const response = await getAllBlogsServerAction();
      if (!response.success) {
        throw new Error(response.error || "Failed to load blogs.");
      }
      blogs = response.data;
    } catch (error: any) {
      console.error("❌ Error in BlogsListComp:", error);
      return (
        <div className="w-full flex flex-col items-center justify-center py-20 text-center">
          <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-3">
            Failed to load blogs
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {error.message || "Something went wrong. Please try again later."}
          </p>
        </div>
      );
    }
  
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
          <DashboardDataTable data={blogs}/>
      
      
    </div>
  )
}

export default DashboardBlogs
