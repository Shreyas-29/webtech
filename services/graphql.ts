import { gql, request } from "graphql-request";

const graphqlAPI: any = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// ********* Posts *********
export const getPosts = async () => {
    const query = gql`
        query Categories {
            postsConnection {
                edges {
                    cursor
                    node {
                        description
                        createdAt
                        id
                        slug
                        title
                        like
                        tag
                        featuredImage {
                            url
                            height
                            width
                        }
                        categories {
                            slug
                            title
                            featuredImage {
                                url
                            }
                            color{
                                hex
                            }
                        }
                        author {
                            bio
                            id
                            name
                            photo {
                                url
                            }
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
}

export const getPostDetails = async (slug: string) => {
    const query = gql`
        query GetPostDetails($slug : String!) {
            post(where: {slug: $slug}) {
                author{
                    name
                    slug
                    bio
                    photo {
                        url
                    }
                }
                createdAt
                slug
                title 
                tag
                like
                description
                featuredImage {
                    url
                }
                content {
                    raw
                }
                categories {
                    slug
                    title
                    featuredImage {
                        url
                    }
                    color{
                        hex
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug });
    return result.post;
}

// ********* Blogs *********
export const getBlogs = async () => {
    const query = gql`
        query Blogs {
            blogsConnection {
                edges {
                    cursor
                    node {
                        description
                        createdAt
                        id
                        slug
                        title
                        like
                        tag
                        state
                        featuredImage {
                            url
                            height
                            width
                        }
                        categories {
                            slug
                            title
                            featuredImage {
                                url
                            }
                            color{
                                hex
                            }
                        }
                        author {
                            bio
                            id
                            name
                            photo {
                                url
                            }
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.blogsConnection.edges;
}

export const getBlogDetails = async (slug: string) => {
    const query = gql`
        query GetBlogDetails($slug : String!) {
            blog(where: {slug: $slug}) {
                author{
                    name
                    slug
                    bio
                    photo {
                        url
                    }
                }
                createdAt
                slug
                title 
                tag
                like
                description
                featuredImage {
                    url
                }
                content {
                    raw
                }
                categories {
                    slug
                    title
                    featuredImage {
                        url
                    }
                    color{
                        hex
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug });
    return result.blog;
}

// ********* Gallery *********
export const getGallery = async () => {
    const query = gql`
        query Galleries {
            galleriesConnection {
                edges {
                    cursor
                    node {
                        description
                        createdAt
                        id
                        slug
                        title
                        like
                        tag
                        featuredImage {
                            url
                            height
                            width
                        }
                        categories {
                            slug
                            title
                            featuredImage {
                                url
                            }
                            color{
                                hex
                            }
                        }
                        author {
                            bio
                            id
                            name
                            photo {
                                url
                            }
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.galleriesConnection.edges;
}

export const getGalleryDetails = async (slug: string) => {
    const query = gql`
        query GetGalleryDetails($slug : String!) {
            gallery(where: {slug: $slug}) {
                author{
                    name
                    slug
                    bio
                    photo {
                        url
                    }
                }
                createdAt
                slug
                title 
                tag
                like
                description
                featuredImage {
                    url
                }
                content {
                    raw
                }
                categories {
                    slug
                    title
                    featuredImage {
                        url
                    }
                    color{
                        hex
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug });
    return result.gallery;
}

// ********* Sidepost *********
export const getSidePost = async () => {
    const query = gql`
        query Sideposts {
            sidepostsConnection {
                edges {
                    cursor
                    node {
                        description
                        createdAt
                        id
                        slug
                        title
                        like
                        tag
                        featuredImage {
                            url
                            height
                            width
                        }
                        categories {
                            slug
                            title
                            featuredImage {
                                url
                            }
                            color{
                                hex
                            }
                        }
                        author {
                            bio
                            id
                            name
                            photo {
                                url
                            }
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.sidepostsConnection.edges;
}

export const getSidePostDetails = async (slug: string) => {
    const query = gql`
        query GetSidePostDetails($slug : String!) {
            sidepost(where: {slug: $slug}) {
                author{
                    name
                    bio
                    photo {
                        url
                    }
                }
                createdAt
                slug
                title 
                description
                tag
                featuredImage {
                    url
                    height
                    width
                }
                content {
                    raw
                }
                categories {
                    slug
                    title
                    color{
                        hex
                        css
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug });
    return result.sidepost;
}

// ********* VideoGallery *********
export const getvideoGallery = async () => {
    const query = gql`
        query Videos {
            videosConnection {
                edges {
                    cursor
                    node {
                        id
                        youtubeid
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.videosConnection.edges;
}

// ********* Report *********
export const getReports = async () => {
    const query = gql`
        query Categories {
            reportsConnection {
                edges {
                    cursor
                    node {
                        description
                        createdAt
                        id
                        slug
                        title
                        like
                        tag
                        featuredImage {
                            url
                            height
                            width
                        }
                        categories {
                            slug
                            title
                            featuredImage {
                                url
                            }
                            color{
                                hex
                            }
                        }
                        author {
                            bio
                            id
                            name
                            photo {
                                url
                            }
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.reportsConnection.edges;
}

export const getReportDetails = async (slug: string) => {
    const query = gql`
        query GetPostDetails($slug : String!) {
            report(where: {slug: $slug}) {
                author{
                    name
                    slug
                    bio
                    photo {
                        url
                    }
                }
                createdAt
                slug
                title 
                tag
                like
                description
                featuredImage {
                    url
                }
                content {
                    raw
                }
                categories {
                    slug
                    title
                    featuredImage {
                        url
                    }
                    color{
                        hex
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug });
    return result.report;
}

// ********* Journal *********
export const getJournals = async () => {
    const query = gql`
        query Categories {
            journalsConnection {
                edges {
                    cursor
                    node {
                        description
                        createdAt
                        id
                        slug
                        title
                        like
                        tag
                        featuredImage {
                            url
                            height
                            width
                        }
                        categories {
                            slug
                            title
                            featuredImage {
                                url
                            }
                            color{
                                hex
                            }
                        }
                        author {
                            bio
                            id
                            name
                            photo {
                                url
                            }
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.journalsConnection.edges;
}

export const getJournalDetails = async (slug: string) => {
    const query = gql`
        query GetJournalDetails($slug : String!) {
            journal(where: {slug: $slug}) {
                author{
                    name
                    slug
                    bio
                    photo {
                        url
                    }
                }
                createdAt
                slug
                title 
                tag
                like
                description
                featuredImage {
                    url
                }
                content {
                    raw
                }
                categories {
                    slug
                    title
                    featuredImage {
                        url
                    }
                    color{
                        hex
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug });
    return result.journal;
}

// ********* Products *********
export const getProducts = async () => {
    const query = gql`
        query Products {
            productsConnection {
                edges {
                    cursor
                    node {
                        featuredImage {
                            url
                        }
                        id
                        description
                        slug
                        title
                        price
                        review
                        discount
                        pCategory{
                            title 
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.productsConnection.edges;
}

export const getProductDetails = async (slug: any) => {
    const query = gql`
        query GetProductsDetails($slug : String!) {
            product(where: {slug: $slug}){
                featuredImage {
                    url
                }
                id
                description
                slug
                title
                price
                review
                pCategory {
                    slug
                    title
                }
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug });
    return result.product;
}

// Get Author
export const getAuthor = async () => {
    const query = gql`
        query GetAuthor{
            authors {
                bio
                id
                name
                slug
                photo {
                    url
                }
            }
        }
  `
    const result = await request(graphqlAPI, query);

    return result.authors;
}

// Get Categories
export const getCategories = async () => {
    const query = gql`
        query GetCategories{
            categories{
                title 
                slug
                metaDesc
                id
                color {
                    hex
                    css
                }
                featuredImage{
                    url
                    height
                    width
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.categories;
}

// Get PCategories
export const getPCategories = async () => {
    const query = gql`
        query GetPCategories{
            pCategories{
                title 
                slug
                metaDesc
                id
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.pCategories;
}

// Get Tags
export const getTags = async () => {
    const query = gql`
        query GetTags{
            tags {
                id
                title
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.tags;
}

// For Comments
export const submitComment = async (obj: any) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });

    return result.json();
};

// Post
export const getComments = async (slug: any) => {
    const query = gql`
      query GetComments($slug:String!) {
        comments(where: {post: {slug: $slug}}){
          name
          createdAt
          comment
        }
      }
    `;

    const result = await request(graphqlAPI, query, { slug });
    return result.comments;
};
