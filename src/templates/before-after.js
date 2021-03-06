import CloseLink from "@components/close-link"
import Container from "@components/container"
import Page from "@components/page"
import PageTitle from "@components/page-title"
import React from "react"
import { Swipeable } from "react-swipeable"
import { navigate } from "gatsby"
import useKeyPress from "@hooks/use-key-press"

export default function BeforeAfter({
  pageContext: { item, title, prevItemLink, nextItemLink, returnLink },
}) {
  useKeyPress("ArrowLeft", () => navigate(prevItemLink))
  useKeyPress("ArrowRight", () => navigate(nextItemLink))
  useKeyPress("Escape", () => navigate(returnLink))

  return (
    <Page title={title} hideFooter>
      <Swipeable
        onSwipedLeft={() => navigate(prevItemLink)}
        onSwipedRight={() => navigate(nextItemLink)}
        className="fixed inset-0"
      />
      <Container>
        <div className="py-12 lg:py-20">
          <CloseLink to={returnLink} />
          <PageTitle>{item.title}</PageTitle>
          <div className="grid items-center gap-6 mt-8 md:gap-12 lg:grid-cols-2">
            <div>
              <div className="flex flex-col items-center space-y-10">
                {item.before.map((image, index) => (
                  <img
                    className="w-auto max-h-image"
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
                    className="w-auto max-h-image"
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
        </div>
      </Container>
    </Page>
  )
}
