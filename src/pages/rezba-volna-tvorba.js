import ImageGrid from "@components/image-grid"
import Layout from "@components/layout"
import { Link } from "gatsby"
import PageTitle from "@components/page-title"
import React from "react"
import Section from "@components/section"
import data from "@data/rezba-volna-tvorba.json"
import { sortByOrder } from "@src/helpers"

export default function Home() {
  return (
    <Layout title="Řezba volná tvorba">
      <Section>
        <PageTitle>Řezba volná tvorba</PageTitle>
        <div className="mt-8 ">
          <ImageGrid>
            {sortByOrder(data.data).map(item => (
              <Link
                to={`/rezba-volna-tvorba/${item.id}`}
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
