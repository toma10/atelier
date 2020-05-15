import Layout from "@components/layout"
import PageTitle from "@components/page-title"
import React from "react"
import Section from "@components/section"
import { Swipeable } from "react-swipeable"
import { navigate } from "gatsby"
import useKeyPress from "@hooks/use-key-press"

export default function BeforeAfter({
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
          <div className="grid items-center gap-12 mt-8 lg:grid-cols-2">
            <div>
              <div className="flex flex-col items-center space-y-10">
                {item.before.map((image, index) => (
                  <img
                    key={index}
                    width={image.width}
                    height={image.height}
                    src={image.src}
                    alt={item.title}
                  />
                ))}
              </div>
              <span className="inline-block w-full mt-2 text-center text-gray-800">
                Před
              </span>
            </div>
            <div>
              <div className="flex flex-col items-center space-y-10">
                {item.after.map((image, index) => (
                  <img
                    key={index}
                    width={image.width}
                    height={image.height}
                    src={image.src}
                    alt={item.title}
                  />
                ))}
              </div>
              <span className="inline-block w-full mt-2 text-center text-gray-800">
                Po
              </span>
            </div>
          </div>
        </Section>
      </Swipeable>
    </Layout>
  )
}
