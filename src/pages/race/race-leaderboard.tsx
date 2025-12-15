import { Trophy, Clock, ArrowUpDownIcon as ArrowsUpDown, Search } from "lucide-react"

interface Algorithm {
  name: string
  progress: number
  comparisons: number
  swaps: number
  timeElapsed: number
  completed: boolean
}

interface RaceLeaderboardProps {
  algorithms: Algorithm[]
  type: "sorting" | "searching"
}

export default function RaceLeaderboard({ algorithms, type }: RaceLeaderboardProps) {
  const sortedAlgorithms = [...algorithms].sort((a, b) => {
    if (a.completed && !b.completed) return -1
    if (!a.completed && b.completed) return 1
    if (a.completed && b.completed) return a.timeElapsed - b.timeElapsed
    return b.progress - a.progress
  })

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg">
      {/* Header */}
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Race Leaderboard
        </h3>
        <span className="text-sm text-slate-500 dark:text-slate-400 capitalize">
          {type} mode
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300">
              <th className="px-5 py-3 text-left">Rank</th>
              <th className="px-5 py-3 text-left">Algorithm</th>
              <th className="px-5 py-3 text-left">Status</th>
              <th className="px-5 py-3 text-left flex items-center gap-1">
                <Clock className="h-4 w-4" /> Time
              </th>
              <th className="px-5 py-3 text-left">
                <div className="flex items-center gap-1">
                  {type === "sorting" ? (
                    <ArrowsUpDown className="h-4 w-4" />
                  ) : (
                    <Search className="h-4 w-4" />
                  )}
                  {type === "sorting" ? "Swaps" : "Operations"}
                </div>
              </th>
              <th className="px-5 py-3 text-left">Comparisons</th>
            </tr>
          </thead>

          <tbody>
            {sortedAlgorithms.map((algo, index) => {
              const isWinner = index === 0 && algo.completed

              return (
                <tr
                  key={algo.name}
                  className={`border-t border-slate-200 dark:border-slate-800 transition-colors
                    ${isWinner ? "bg-gradient-to-r from-green-50 to-transparent dark:from-green-900/20" : "hover:bg-slate-50 dark:hover:bg-slate-800/40"}
                  `}
                >
                  <td className="px-5 py-3 font-medium text-slate-900 dark:text-white">
                    {isWinner ? (
                      <span className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400 font-bold">
                        <Trophy className="h-4 w-4" /> 1st
                      </span>
                    ) : (
                      index + 1
                    )}
                  </td>

                  <td className="px-5 py-3 font-semibold text-slate-900 dark:text-white">
                    {algo.name}
                  </td>

                  <td className="px-5 py-3">
                    {algo.completed ? (
                      <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 text-xs font-medium text-emerald-800 dark:text-emerald-400">
                        Completed
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-400">
                        {Math.round(algo.progress)}% Running
                      </span>
                    )}
                  </td>

                  <td className="px-5 py-3 font-mono text-slate-900 dark:text-white">
                    {(algo.timeElapsed / 1000).toFixed(2)}s
                  </td>

                  <td className="px-5 py-3 font-mono text-slate-900 dark:text-white">
                    {type === "sorting" ? algo.swaps : algo.comparisons}
                  </td>

                  <td className="px-5 py-3 font-mono text-slate-900 dark:text-white">
                    {algo.comparisons}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
