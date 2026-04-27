import HeroSection from '@/components/home/HeroSection'
import ProofSection from '@/components/home/ProofSection'
import SecondBrainSection from '@/components/home/SecondBrainSection'
import ConsultingSection from '@/components/home/ConsultingSection'
import OpportunitySection from '@/components/home/OpportunitySection'
import GhostTeamSection from '@/components/home/GhostTeamSection'
import EducationalContent from '@/components/home/EducationalContent'
import FinalCTA from '@/components/home/FinalCTA'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProofSection />
      <SecondBrainSection />
      <ConsultingSection />
      <OpportunitySection />
      <GhostTeamSection />
      <EducationalContent />
      <FinalCTA />
    </div>
  )
}
