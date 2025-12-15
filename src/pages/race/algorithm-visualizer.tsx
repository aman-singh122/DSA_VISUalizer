import { useEffect, useRef, useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, BarChart3, Search, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface AlgorithmVisualizerProps {
  algorithm: {
    name: string
    description: string
    timeComplexity: {
      best: string
      average: string
      worst: string
    }
    spaceComplexity: string
  }
  array: number[]
  state: {
    progress: number
    comparisons: number
    swaps: number
    currentArray: number[]
    currentIndices: number[]
    completed: boolean
    timeElapsed: number
  }
  type: "sorting" | "searching"
  searchTarget: number | null
}

export default function AlgorithmVisualizer({
  algorithm,
  array,
  state,
  type,
  searchTarget,
}: AlgorithmVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [animationFrame, setAnimationFrame] = useState<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const currentArray = state.currentArray || array
    const currentIndices = state.currentIndices || []

    if (type === "sorting") {
      const barWidth = canvas.width / currentArray.length
      const maxValue = Math.max(...currentArray)

      currentArray.forEach((value, index) => {
        const barHeight = (value / maxValue) * (canvas.height - 20)
        const x = index * barWidth
        const y = canvas.height - barHeight

        let color = "rgb(124, 58, 237)"

        if (state.completed) color = "rgb(16, 185, 129)"
        else if (currentIndices.includes(index)) color = "rgb(239, 68, 68)"

        ctx.fillStyle = color
        ctx.fillRect(x, y, barWidth - 1, barHeight)

        if (barWidth > 20 && barHeight > 15) {
          ctx.fillStyle = document.documentElement.classList.contains("dark")
            ? "white"
            : "black"
          ctx.font = "10px Arial"
          ctx.textAlign = "center"
          ctx.fillText(value.toString(), x + barWidth / 2, y + 12)
        }
      })
    } else if (type === "searching") {
      const boxSize = Math.min(50, canvas.width / currentArray.length)
      const boxesPerRow = Math.floor(canvas.width / boxSize)

      currentArray.forEach((value, index) => {
        const row = Math.floor(index / boxesPerRow)
        const col = index % boxesPerRow

        const x = col * boxSize
        const y = row * boxSize

        let color = "rgb(59, 130, 246)"

        if (state.completed && currentIndices.includes(index))
          color = "rgb(16, 185, 129)"
        else if (currentIndices.includes(index))
          color = "rgb(239, 68, 68)"
        else if (value === searchTarget)
          color = "rgb(245, 158, 11)"

        ctx.fillStyle = color
        ctx.fillRect(x, y, boxSize - 2, boxSize - 2)

        ctx.fillStyle = document.documentElement.classList.contains("dark")
          ? "white"
          : "black"
        ctx.font = "12px Arial"
        ctx.textAlign = "center"
        ctx.fillText(value.toString(), x + boxSize / 2, y + boxSize / 2 + 4)
      })
    }

    return () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame)
        setAnimationFrame(animationFrame)
      }
    }
  }, [array, state, type, searchTarget, animationFrame])

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg">
      {/* Header */}
      <div className="p-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {algorithm.name}
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {algorithm.description}
            </p>
          </div>

          <div className="flex gap-2">
            <Badge className="gap-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {type === "sorting" ? (
                <BarChart3 className="h-3 w-3" />
              ) : (
                <Search className="h-3 w-3" />
              )}
              {type}
            </Badge>

            {state.completed && (
              <Badge className="gap-1 bg-emerald-600 text-white">
                <Clock className="h-3 w-3" />
                {(state.timeElapsed / 1000).toFixed(2)}s
              </Badge>
            )}
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-1">
            <span>Progress</span>
            <span>{Math.round(state.progress)}%</span>
          </div>
          <Progress value={state.progress} className="h-2" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm">
          <div>
            <span className="text-slate-500">Comparisons</span>
            <p className="font-mono text-lg text-slate-900 dark:text-white">
              {state.comparisons}
            </p>
          </div>

          {type === "sorting" && (
            <div>
              <span className="text-slate-500">Swaps</span>
              <p className="font-mono text-lg text-slate-900 dark:text-white">
                {state.swaps}
              </p>
            </div>
          )}

          <div>
            <span className="text-slate-500">Time</span>
            <p className="font-mono text-slate-900 dark:text-white">
              {algorithm.timeComplexity.best} /{" "}
              {algorithm.timeComplexity.average} /{" "}
              {algorithm.timeComplexity.worst}
            </p>
          </div>

          <div>
            <span className="text-slate-500">Space</span>
            <p className="font-mono text-slate-900 dark:text-white">
              {algorithm.spaceComplexity}
            </p>
          </div>
        </div>

        {type === "searching" && algorithm.name === "Binary Search" && (
          <Alert className="mt-4 border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800 dark:text-amber-400">
              Binary Search requires the array to be sorted.
            </AlertDescription>
          </Alert>
        )}
      </div>

      {/* Canvas */}
      <div className="bg-slate-50 dark:bg-slate-950">
        <canvas ref={canvasRef} className="w-full h-64" />
      </div>
    </div>
  )
}
