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
  )
}
