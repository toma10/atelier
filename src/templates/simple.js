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
      <Swipeable
        onSwipedLeft={() => navigate(prevItemLink)}
        onSwipedRight={() => navigate(nextItemLink)}
      >
        <Section>
          <PageTitle>{item.title}</PageTitle>
          <div className="flex flex-col items-center mt-8 space-y-10">
            {item.images.map((image, index) => (
              <img
                width={image.width}
                height={image.height}
                key={index}
                src={image.src}
                alt={item.title}
              />
            ))}
          </div>
        </Section>
      </Swipeable>
    </Layout>
  )
}
