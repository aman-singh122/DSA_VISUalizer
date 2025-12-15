import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap } from "lucide-react";

export default function Hero() {
  const scrollToSection = () => {
    const target = document.getElementById("algorithms");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background blobs */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />

      <div className="container mx-auto px-6 py-28 relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-200 backdrop-blur-md mb-8">
            <Zap className="h-4 w-4 text-purple-400" />
            Learn by Visual Experience
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
            Master{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Data Structures
            </span>{" "}
            & Algorithms
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-slate-300 mb-12">
            Learn complex algorithms visually, understand their inner workings,
            and compare performance in real time with interactive simulations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6 text-base font-semibold text-white shadow-lg hover:scale-[1.03] transition-all"
            >
              <Link to="/race" className="flex items-center gap-2">
                <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Start Race Mode
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 px-8 py-6 text-base text-white backdrop-blur-md hover:bg-white/10"
            >
              <div
                onClick={scrollToSection}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Code2 className="h-5 w-5 text-purple-400" />
                Browse Algorithms
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold text-white">25+</h3>
              <p className="text-slate-400">Algorithms Visualized</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold text-white">Real-Time</h3>
              <p className="text-slate-400">Performance Comparison</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold text-white">Beginner-Friendly</h3>
              <p className="text-slate-400">Concept-First Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
