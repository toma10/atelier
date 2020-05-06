import Layout from "@components/layout"
import PageTitle from "@components/page-title"
import React from "react"
import Section from "@components/section"
import { Swipeable } from "react-swipeable"
import { navigate } from "gatsby"
import useKeyPress from "@hooks/use-key-press"

export default function Simple({
  pageContext: { item, title, prevItemLink, nextItemLink },
}) {
  useKeyPress("ArrowLeft", () => navigate(prevItemLink))
  useKeyPress("ArrowRight", () => navigate(nextItemLink))

  return (
    <Layout title={title} hideFooter>
      <Section>
        <PageTitle>{item.title}</PageTitle>
        <Swipeable
          onSwipedLeft={() => navigate(prevItemLink)}
          onSwipedRight={() => navigate(nextItemLink)}
        >
          <div className="flex flex-col items-center mt-8 space-y-10">
            {item.images.map((image, index) => (
              <img key={index} src={image} alt={item.title} />
            ))}
          </div>
        </Swipeable>
      </Section>
    </Layout>
  )
}
