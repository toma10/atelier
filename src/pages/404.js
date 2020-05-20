import Header from "@components/header"
import Main from "@components/main"
import Page from "@components/page"
import React from "react"
import Section from "@components/section"
import SectionTitle from "@components/section-title"

export default function NotFound() {
  return (
    <Page title="404">
      <Header />
      <Main>
        <Section>
          <SectionTitle>404</SectionTitle>
        </Section>
      </Main>
    </Page>
  )
}
