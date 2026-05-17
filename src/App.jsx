import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import EducationSection from './components/EducationSection'
import WorkExperienceSection from './components/WorkExperienceSection'
import AchievementsSection from './components/AchievementsSection'
import PortfolioSection from './components/PortfolioSection'
import Footer from './components/Footer'

function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <WorkExperienceSection />
      <AchievementsSection />
      <PortfolioSection />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
    </Routes>
  )
}

export default App
