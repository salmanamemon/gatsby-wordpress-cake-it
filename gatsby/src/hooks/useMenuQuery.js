import {useStaticQuery, graphql} from 'gatsby';

export const useMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query headerQuery{
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
            menu: wpMenu(name: {eq: "mainMenu"}) {
                menuItems {
                    nodes {
                    id
                    parentId
                    url
                    label
                    childItems {
                        nodes {
                        url
                        label
                        id
                        }
                    }
                    }
                }
            }
        }

    `)
    return data
}
