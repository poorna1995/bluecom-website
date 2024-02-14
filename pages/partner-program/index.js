import BaseLayout from 'layouts'
import React from 'react'
import PartnerProgramPageSection from 'sections/PartnerProgramPageSection'

export default function PartnerProgramPage() {
  return (
    <BaseLayout pageTitle={`Partner With Us`} hideJourneyCard>
        <PartnerProgramPageSection />
    </BaseLayout>
  )
}
