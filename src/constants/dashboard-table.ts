import { schema } from "@/components/generals/dashboard/dashboard-user-table"
import { z } from "zod"

// Sample mock data (matching the zod schema)
export const dashboardData: z.infer<typeof schema>[] = [
  {
    id: 1,
    header: "Executive Summary",
    type: "Summary",
    status: "Done",
    target: "1200",
    limit: "1500",
    reviewer: "Eddie Lake",
  },
  {
    id: 2,
    header: "Technical Approach",
    type: "Document",
    status: "In Progress",
    target: "800",
    limit: "1000",
    reviewer: "Assign reviewer",
  },
  {
    id: 3,
    header: "Design Overview",
    type: "Design",
    status: "Not Started",
    target: "0",
    limit: "500",
    reviewer: "Assign reviewer",
  },
  {
    id: 4,
    header: "Capabilities Report",
    type: "Analysis",
    status: "Done",
    target: "600",
    limit: "700",
    reviewer: "Jamik Tashpulatov",
  },
  {
    id: 5,
    header: "Focus Documents",
    type: "Documents",
    status: "In Progress",
    target: "300",
    limit: "400",
    reviewer: "Emily Whalen",
  },
]
