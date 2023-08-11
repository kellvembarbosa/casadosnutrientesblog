// pages/server-sitemap-index.xml/index.tsx
import { getServerSideSitemapIndexLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { prisma } from '@/lib/prisma'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // Method to source urls from cms
    // const urls = await fetch('https//example.com/api')
    const getPathsPosts = await prisma.post.findMany({
        select: {
            slug: true,
        }
    })
    const getPathsCategories = await prisma.category.findMany({
        select: {
            slug: true
        }
    })
    const getPathsTags = await prisma.tag.findMany({
        select: {
            slug: true
        }
    })

    // Mapear os resultados para obter apenas os slugs
    const postSlugs = getPathsPosts.map(post => post.slug);
    const categorySlugs = getPathsCategories.map(category => category.slug);
    const tagSlugs = getPathsTags.map(tag => tag.slug);

    // Combinar todos os slugs em um único array
    const allSlugs = [...postSlugs, ...categorySlugs, ...tagSlugs];

    const paths = allSlugs.map(path => {
        let pathSlug
        if (process.env.NODE_ENV !== 'production') {
            pathSlug = path
        } else {
            pathSlug = encodeURIComponent(path ?? `${process.env.NEXT_PUBLIC_BASE_API_URL}`)
        }
        return (`${process.env.NEXT_PUBLIC_BASE_API_URL}/${pathSlug}`)
    })

    paths.push(`${process.env.NEXT_PUBLIC_BASE_API_URL}`)
    paths.push(`${process.env.NEXT_PUBLIC_BASE_API_URL}/about_us`)
    paths.push(`${process.env.NEXT_PUBLIC_BASE_API_URL}/contact`)
    paths.push(`${process.env.NEXT_PUBLIC_BASE_API_URL}/history`)
    paths.push(`${process.env.NEXT_PUBLIC_BASE_API_URL}/privacy_policy`)
    paths.push(`${process.env.NEXT_PUBLIC_BASE_API_URL}/service_terms`)
    paths.push(`${process.env.NEXT_PUBLIC_BASE_API_URL}/team`)


    return getServerSideSitemapIndexLegacy(ctx, paths)
}

// Default export to prevent next.js errors
export default function SitemapIndex() { }