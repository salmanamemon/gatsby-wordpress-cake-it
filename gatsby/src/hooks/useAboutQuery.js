import { useStaticQuery, graphql } from "gatsby";

export const useAboutQuery = () => {
    const data = useStaticQuery(graphql `
        query AboutQuery {
            wpPage(databaseId: {eq: 47}) {
            content
                featuredImage {
                        node {
                        localFile {
                            publicURL
                        }
                    }
                }
            }
        }
      
    `)
    return data
}
