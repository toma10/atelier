import CloseLink from "@components/close-link"
import Container from "@components/container"
import Page from "@components/page"
import PageTitle from "@components/page-title"
import React from "react"
import { Swipeable } from "react-swipeable"
import { navigate } from "gatsby"
import useKeyPress from "@hooks/use-key-press"

export default function Simple({
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
          <div className="flex flex-col items-center mt-8 space-y-10">
            {item.images.map((image, index) => (
              <img
                className="w-auto max-h-image"
                width={image.width}
                height={image.height}
                key={index}
                src={image.src}
                alt={item.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </Page>
  )
}
