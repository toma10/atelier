import ImageGrid from "@components/image-grid"
import { Link } from "gatsby"
import Layout from "@components/layout"
import Page from "@components/page"
import PageTitle from "@components/page-title"
import React from "react"
import Section from "@components/section"
import data from "@data/pozlacovani-a-polychromie.json"
import { sortByOrder } from "@src/helpers"

export default function Home() {
  return (
    <Page title="Pozlacování a polychromie">
      <Layout>
        <Section>
          <PageTitle>Pozlacování a polychromie</PageTitle>
          <div className="mt-8 ">
            <ImageGrid>
              {sortByOrder(data.data).map(item => (
                <Link
                  to={`/pozlacovani-a-polychromie/${item.id}`}
                  className="block mx-auto md:mx-auto"
                  key={item.id}
                >
                  <img
                    width={item.thumbnail.width}
                    height={item.thumbnail.height}
                    src={item.thumbnail.src}
                    alt={item.title}
                    className="mx-auto"
                    loading="lazy"
                  />
                </Link>
              ))}
            </ImageGrid>
          </div>
        </Section>
      </Layout>
    </Page>
  )
}
