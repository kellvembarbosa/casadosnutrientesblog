import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { prisma } from '@/lib/prisma'
import loadPosts from '../../lib/loadPosts'
import Post from '@/components/Post';
import { author } from '@prisma/client';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

interface Data {
  post: {
    title: string
    created_at: string
    content: string
    ig_url: string
    kawai_url: string
    tiktok_url: string
    yt_url: string
    author: author
    image: string
    post_has_tag: PostHasTag[],
    category: {
      name: string,
      slug: string
    }
  }
}
interface PostHasTag {
  tag: Tag
}
interface Tag {
  tag: string
  slug: string
}

type PropsPost = {
  resPostPage: Data,
  relatedPosts: {
    title: string;
    content: string;
    slug: string;
    image: string;
  }[] | undefined
}

// const PostPage: NextPage<PropsPost> = ({resPostPage}) 
const PostPage: NextPage<PropsPost> = ({ resPostPage, relatedPosts }) => {
  const router = useRouter();

  if (router.isFallback) {
    // Esta página está em modo fallback e ainda está sendo gerada.
    return <Loader />;
  }
  const { post } = resPostPage
  const { title, author, created_at, content, ig_url, kawai_url, tiktok_url, yt_url, post_has_tag, image, category, } = post
 
  return (
    <Post
      title={title}
      content={content}
      imagesSTR={image}
      ig_url={ig_url ?? '#'}
      kawai_url={kawai_url ?? '#'}
      tiktok_url={tiktok_url}
      yt_url={yt_url ?? '#'}
      created_at={new Date(created_at ?? '').toLocaleDateString()}
      post_has_tag={post_has_tag}
      category={category}
      author={author}
      relatedPosts={relatedPosts}
    />
  );
};

interface MyGetStaticProps extends GetStaticProps {
  post: string
}

export const getStaticProps = async ({ params }: { params: MyGetStaticProps }) => {
  try {
    const { post } = params
    const resPostPage = await loadPosts(post)
    console.log(resPostPage); 
    const { category } = resPostPage.post
    const getRelatedPosts = async () => {
      try {
        const relatedPosts = await prisma.post.findMany({
          select: {
            title: true,
            content: true,
            slug: true,
            image: true
          },
          take: 3,
          where: {
            category: {
              name: {
                equals: category.name
              }
            }
          },
          orderBy: {
             created_at: 'desc'
          }
        })
        return relatedPosts
      } catch (error) {
        console.log(error)
      }
    }
    const relatedPosts = await getRelatedPosts()

    return {
      props: {
        resPostPage,
        relatedPosts
      }
    };
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getPaths = await prisma.post.findMany({
    select: {
      slug: true,
    },
    take: 5
  })


  const paths = getPaths.map(path => {
    let pathSlug
    if (process.env.NODE_ENV !== 'production') {
      pathSlug = path.slug
    } else {
      pathSlug = encodeURIComponent(path.slug)
    }
    return ({
      params: { post: pathSlug }
    })
  })

  return { paths, fallback: true };
}

export default PostPage;