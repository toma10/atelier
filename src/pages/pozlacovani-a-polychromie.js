import ImageGrid from "@components/image-grid"
import Layout from "@components/layout"
import { Link } from "gatsby"
import PageTitle from "@components/page-title"
import React from "react"
import Section from "@components/section"
import data from "@data/pozlacovani-a-polychromie.json"
import { sortByOrder } from "@src/helpers"

export default function Home() {
  return (
    <Layout title="Pozlacování a polychromie">
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
                  className="mx-auto"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </Link>
            ))}
          </ImageGrid>
        </div>
      </Section>
    </Layout>
  )
}
