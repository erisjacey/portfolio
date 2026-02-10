import Sidebar from '@/components/Sidebar'
import MobileHeader from '@/components/MobileHeader'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Spotlight from '@/components/Spotlight'
import NeuralMesh from '@/components/NeuralMesh'
import LightRays from '@/components/LightRays'
import { fetchStats } from '@/lib/fetchStats'

const Home = async () => {
  const stats = await fetchStats()

  return (
    <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <LightRays />
      <NeuralMesh />
      <Spotlight />

      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left Column - Fixed Sidebar (Desktop only) */}
        <header className="hidden lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <Sidebar stats={stats} />
        </header>

        {/* Right Column - Scrolling Content */}
        <main className="pt-0 lg:w-[52%] lg:py-24">
          <MobileHeader />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Home
