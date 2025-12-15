import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const About = () => {
  return (
    <section className="relative max-w-4xl mx-auto px-6 py-20">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />

      {/* Hero Card */}
      <Card className="relative overflow-hidden border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 text-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-4xl md:text-5xl font-extrabold text-center tracking-tight">
            About DSA Visualizer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg md:text-xl text-center text-white/90 max-w-2xl mx-auto">
            An interactive platform to understand Data Structures and Algorithms
            through real-time visualizations, comparisons, and step-by-step
            execution.
          </p>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Features */}
      <Card className="border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            Key Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-3 text-slate-700 dark:text-slate-300">
            <li>✔ Interactive Sorting, Searching, Graph & DP visualizations</li>
            <li>✔ Step-by-step animations for deep conceptual clarity</li>
            <li>✔ Play, pause, reset & compare algorithms live</li>
            <li>✔ Fully responsive with Dark Mode support</li>
            <li>✔ Clean UI built with ShadCN components</li>
          </ul>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Future Enhancements */}
      <Card className="border-l-4 border-purple-500 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-purple-600 dark:text-purple-400">
            ✨ Future Enhancements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>🚀 AI-powered learning recommendations</li>
            <li>🎨 Theme & visualization customization</li>
            <li>📊 Advanced algorithms (Trie, AVL, Segment Tree)</li>
            <li>🌍 Multiplayer race & competitive coding modes</li>
          </ul>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Developer */}
      <Card className="border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            👨‍💻 About the Developer
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Built by <span className="font-semibold">Aman Kumar Singh</span>, a Full
            Stack Developer passionate about Web Development, AI,  and
         
          </p>

          <div className="mt-8 flex justify-center gap-5 text-2xl">
            <Button variant="ghost" asChild>
              <a href="" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-slate-800 dark:text-white hover:scale-110 transition"
                />
              </a>
            </Button>

            <Button variant="ghost" asChild>
              <a
                href=""
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-blue-600 hover:scale-110 transition"
                />
              </a>
            </Button>

            <Button variant="ghost" asChild>
              <a href="" target="_blank">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-slate-500 hover:scale-110 transition"
                />
              </a>
            </Button>

            <Button variant="ghost" asChild>
              <a
                href=""
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-pink-500 hover:scale-110 transition"
                />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default About
