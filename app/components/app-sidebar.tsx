import { Sidebar, SidebarContent, SidebarGroup, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
export default function AppSidebar(){


    return <>
        <Sidebar/>
            <SidebarHeader/>
                <SidebarContent/>
                    <SidebarGroup/>
                    <SidebarGroup/>
                <SidebarContent />
            <SidebarFooter/>
        <Sidebar/></>;

        
}