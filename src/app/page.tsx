"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts"
import {
  Droplet,
  Beaker,
  Thermometer,
  Eye,
  RefreshCw,
  Bell,
} from "lucide-react"

// Datos de muestra exactos
const evolutionData = [
  { date: "01/09", cloro: 1.1, ph: 7.2, temperatura: 21, turbidez: 0.9 },
  { date: "02/09", cloro: 1.3, ph: 7.4, temperatura: 23, turbidez: 0.7 },
  { date: "03/09", cloro: 1.2, ph: 7.3, temperatura: 22, turbidez: 0.8 },
  { date: "04/09", cloro: 1.4, ph: 7.5, temperatura: 24, turbidez: 0.6 },
  { date: "05/09", cloro: 1.2, ph: 7.4, temperatura: 22, turbidez: 0.8 },
  { date: "06/09", cloro: 1.1, ph: 7.3, temperatura: 21, turbidez: 0.9 },
  { date: "07/09", cloro: 1.2, ph: 7.4, temperatura: 22, turbidez: 0.8 },
]

const distributionData = [
  { ubicacion: "Quirófano 1", cloro: 1.2 },
  { ubicacion: "Quirófano 2", cloro: 1.4 },
  { ubicacion: "UCI", cloro: 1.1 },
  { ubicacion: "Urgencias", cloro: 1.3 },
  { ubicacion: "Planta 3", cloro: 1.2 },
]

const lineChartConfig: ChartConfig = {
  cloro: { label: "Cloro (mg/L)", color: "#10b981" },
  ph: { label: "pH", color: "#3b82f6" },
  temperatura: { label: "Temperatura (°C)", color: "#f97316" },
}

const barChartConfig: ChartConfig = {
  cloro: { label: "Cloro (mg/L)", color: "#10b981" },
}

export default function Home() {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const handleRefresh = () => {
    // En una integración real, aquí podrías disparar un refetch.
    setLastUpdated(new Date())
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <h1 className="text-lg font-semibold tracking-tight">Dashboard de Calidad del Agua</h1>
        <div className="ml-auto flex items-center gap-2">
          <Badge variant="secondary" className="hidden sm:inline-flex">Actualizado: {lastUpdated.toLocaleTimeString()}</Badge>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm" variant="default" onClick={handleRefresh} className="bg-emerald-600 hover:bg-emerald-700">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Actualizar
                </Button>
              </TooltipTrigger>
              <TooltipContent>Refrescar datos</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 p-4 md:p-6">
        {/* Tarjetas de métricas */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            title="Cloro Residual"
            value="1.2 mg/L"
            icon={<Droplet className="h-5 w-5 text-blue-500" />}
            accentClass="border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-900/20 dark:text-emerald-300"
          />
          <MetricCard
            title="pH"
            value="7.4"
            icon={<Beaker className="h-5 w-5 text-emerald-600" />}
            accentClass="border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-900/40 dark:bg-sky-900/20 dark:text-sky-300"
          />
          <MetricCard
            title="Temperatura"
            value="22°C"
            icon={<Thermometer className="h-5 w-5 text-orange-500" />}
            accentClass="border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-900/40 dark:bg-orange-900/20 dark:text-orange-300"
          />
          <MetricCard
            title="Turbidez"
            value="0.8 NTU"
            icon={<Eye className="h-5 w-5 text-yellow-500" />}
            accentClass="border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-900/40 dark:bg-yellow-900/20 dark:text-yellow-300"
          />
        </section>

        {/* Gráficos */}
        <section className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle>Evolución de Parámetros - Últimos 7 días</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={lineChartConfig} className="min-h-[300px] h-[340px] w-full">
                <LineChart data={evolutionData} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="cloro" stroke="var(--color-cloro)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="ph" stroke="var(--color-ph)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="temperatura" stroke="var(--color-temperatura)" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distribución por Ubicación</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={barChartConfig} className="min-h-[300px] h-[340px] w-full">
                <BarChart data={distributionData} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="ubicacion" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <Bar dataKey="cloro" fill="var(--color-cloro)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </section>

        {/* Panel de alertas */}
        <section className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
          <Card className="xl:col-span-3">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-emerald-600" /> Alertas Recientes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <AlertItem
                  colorClass="border-red-500/70 bg-red-50 dark:bg-red-950/20"
                  badgeClass="bg-red-500/15 text-red-700 dark:text-red-300"
                  text="Temperatura alta en Quirófano 2 - 25°C"
                  icon={<Thermometer className="h-4 w-4 text-red-500" />}
                />
                <AlertItem
                  colorClass="border-yellow-500/70 bg-yellow-50 dark:bg-yellow-950/10"
                  badgeClass="bg-yellow-500/15 text-yellow-700 dark:text-yellow-300"
                  text="pH fuera de rango en UCI - 6.8"
                  icon={<Beaker className="h-4 w-4 text-yellow-500" />}
                />
                <AlertItem
                  colorClass="border-orange-500/70 bg-orange-50 dark:bg-orange-950/10"
                  badgeClass="bg-orange-500/15 text-orange-700 dark:text-orange-300"
                  text="Cloro bajo en Planta 3 - 0.9 mg/L"
                  icon={<Droplet className="h-4 w-4 text-orange-500" />}
                />
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

function MetricCard({
  title,
  value,
  icon,
  accentClass,
}: {
  title: string
  value: string
  icon: React.ReactNode
  accentClass?: string
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className={`rounded-md border px-2 py-1 text-xs ${accentClass}`}>{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight">{value}</div>
      </CardContent>
    </Card>
  )
}

function AlertItem({
  text,
  badgeClass,
  colorClass,
  icon,
}: {
  text: string
  badgeClass: string
  colorClass: string
  icon: React.ReactNode
}) {
  return (
    <li className={`flex items-center justify-between rounded-md border-l-4 p-3 ${colorClass}`}>
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm">{text}</span>
      </div>
      <Badge variant="outline" className={badgeClass}>Atención</Badge>
    </li>
  )
}
