import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
    const data = useStaticQuery(graphql `
        query HeroQuery {
            wpPage(databaseId: {eq: 47}) {
                id
                ACF_HomePage {
                    heroText
                    heroImage {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, width: 1920)
                            }
                        }
                    }
                }
            }
        }
      
    `)

    return data
}
