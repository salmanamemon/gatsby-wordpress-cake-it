import { useStaticQuery, graphql } from "gatsby";

export const useQuoteQuery = () => {
    const data = useStaticQuery(graphql `
        query QuoteQuery {
            wpPage(databaseId: {eq: 47}) {
                ACF_HomePage {
                    citat1Text
                    citat1Author
                }
            }
        }
      
    `)
    return data
}
