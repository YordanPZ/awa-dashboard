import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Activity, Beaker, LayoutDashboard, Settings, TriangleAlert } from "lucide-react"
import Link from "next/link"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Dashboard de Calidad del Agua",
  description: "Monitoreo de parámetros de calidad del agua en hospitales",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={cn(geistSans.variable, geistMono.variable, "antialiased")}>        
        <SidebarProvider>
          <Sidebar collapsible="offcanvas" variant="inset">
            <SidebarHeader>
              <div className="px-2 py-1.5">
                <div className="text-xl font-semibold">AquaCare</div>
                <div className="text-xs text-muted-foreground">Monitoreo hospitalario</div>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Navegación</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive>
                        <Link href="#" className="flex items-center gap-2">
                          <LayoutDashboard className="h-4 w-4" />
                          <span>Dashboard</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="#" className="flex items-center gap-2">
                          <Beaker className="h-4 w-4" />
                          <span>Parámetros</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="#" className="flex items-center gap-2">
                          <TriangleAlert className="h-4 w-4" />
                          <span>Alertas</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="#" className="flex items-center gap-2">
                          <Activity className="h-4 w-4" />
                          <span>Reportes</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="#" className="flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          <span>Configuración</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarSeparator />
            <SidebarFooter>
              <div className="px-2 text-xs text-muted-foreground">Estado del sistema</div>
              <div className="px-2">
                <Badge variant="secondary" className="w-fit">Normal</Badge>
              </div>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}
