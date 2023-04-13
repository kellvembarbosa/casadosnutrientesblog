import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { prisma } from '@/lib/prisma'
import loadPosts from '../../lib/loadPosts'
import Post from '@/components/Post';

interface Data {
  post: {
    title: string
    created_at: string
    content: string
    ig_url: string
    kawai_url: string
    tiktok_url: string
    yt_url: string
    post_has_tag: PostHasTag[],
    category: {
      name: string,
      slug: string
    }
  }
  imagesSTR: string
}
interface PostHasTag {
  tag: Tag
}
interface Tag {
  tag: string
  slug: string
}

type PropsPost = {
  resPostPage: Data
}

// const PostPage: NextPage<PropsPost> = ({resPostPage}) 
const PostPage: NextPage<PropsPost> = ({ resPostPage }) => {
  const { post, imagesSTR } = resPostPage
  const { title, created_at, content, ig_url, kawai_url, tiktok_url, yt_url, post_has_tag, category } = post
  return (
    <div>
      <Post
        title={title}
        content={content}
        imagesSTR={imagesSTR}
        ig_url={ig_url ?? '#'}
        kawai_url={kawai_url ?? '#'}
        tiktok_url={tiktok_url}
        yt_url={yt_url ?? '#'}
        created_at={new Date(created_at ?? '').toLocaleDateString()}
        post_has_tag={post_has_tag}
        category={category}
      />
    </div>
  );
};

interface MyGetStaticProps extends GetStaticProps {
  post: string
}

export const getStaticProps = async ({ params }: { params: MyGetStaticProps }) => {
  try {
    const { post } = params
    const resPostPage = await loadPosts(post)
    return {
      props: {
        resPostPage
      }
    };
  } catch (error) {
    console.error(error)
    return {
      notFound: true
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getPaths = await prisma.post.findMany({
    select: {
      slug: true,
    }
  })
  const paths = getPaths.map(path => ({
    params: { post: path.slug }
  }))

  return { paths, fallback: false };
}

export default PostPage;