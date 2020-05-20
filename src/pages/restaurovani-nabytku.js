import ImageGrid from "@components/image-grid"
import Page from "@components/page"
import { Link } from "gatsby"
import PageTitle from "@components/page-title"
import React from "react"
import Section from "@components/section"
import data from "@data/restaurovani-nabytku.json"
import { sortByOrder } from "@src/helpers"
import Layout from "@components/layout"

export default function Home() {
  return (
    <Page title="Restaurování nábytku">
      <Layout>
        <Section>
          <PageTitle>Restaurování nábytku</PageTitle>
          <div className="mt-8 ">
            <ImageGrid>
              {sortByOrder(data.data).map(item => (
                <Link
                  to={`/restaurovani-nabytku/${item.id}`}
                  className="block"
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
