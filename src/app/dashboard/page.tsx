import { DashboardSectionCards } from '@/components/generals/dashboard/dashboard-card-sections'
import { DashboardChartAreaSection } from '@/components/generals/dashboard/dashboard-chart-section'
import { DashboardDataTable } from '@/components/generals/dashboard/dashboard-user-table'
// import { dashboardData } from '@/constants/dashboard-table'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
      <DashboardSectionCards/>
      <DashboardChartAreaSection/>
      {/* <DashboardDataTable data={dashboardData}/> */}
        
      
    </div>
  )
}

export default DashboardPage
