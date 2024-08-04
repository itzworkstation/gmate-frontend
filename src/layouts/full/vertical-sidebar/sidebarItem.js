import {
  DashboardIcon,
  BrandChromeIcon,
  ReportIcon,
  BuildingStoreIcon,
  CirclePlusIcon
} from "vue-tabler-icons"

const sidebarItem = [
  { header: "Dashboard" },
  {
    title: "Home",
    icon: DashboardIcon,
    to: "/dashboard"
  },
  { divider: true },
  { header: "Manage Stores" },
  { divider: true },
  
  {
    title: "Create Store",
    icon: CirclePlusIcon,
    to: "/stores/new"
  },
  {
    title: "Stores",
    icon: BuildingStoreIcon,
    to: "/stores"
  },
  {
    title: "Reports",
    icon: ReportIcon,
    to: "/analytics"
  },
  { divider: true },
  {
    title: "Sample Page",
    icon: BrandChromeIcon,
    to: "/starter"
  }
]

export default sidebarItem
