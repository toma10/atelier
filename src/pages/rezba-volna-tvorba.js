import ImageGrid from "@components/image-grid"
import Page from "@components/page"
import { Link } from "gatsby"
import PageTitle from "@components/page-title"
import React from "react"
import Section from "@components/section"
import data from "@data/rezba-volna-tvorba.json"
import { sortByOrder } from "@src/helpers"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Page title="Řezba volná tvorba">
      <Layout>
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
                    className="mx-auto bg-gray-100"
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
