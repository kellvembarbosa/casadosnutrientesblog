import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Post from '../components/Post';
import { API_POST } from '@/utils/globalvars';
import { prisma } from '@/lib/prisma'
import { category, post_has_tag } from '@prisma/client';


const fetcher = (url: string, options: {
  'slug': string
}) => fetch(url, {
  body: JSON.stringify(options),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}).then((res) => res.json());

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
  const {title, created_at, content, ig_url, kawai_url, tiktok_url, yt_url, post_has_tag} = post
 
  return (
    <div>
      {/* <Post
        title={title}
        content={content}
        imagesSTR={imagesSTR}
        ig_url={ig_url ?? '#'}
        kawai_url={kawai_url ?? '#'}
        tiktok_url={tiktok_url}
        yt_url={yt_url ?? '#'}
        created_at={new Date(created_at ?? '').toLocaleDateString()}
        post_has_tag={post_has_tag}
        // category={{
        //   name: post.category.name,
        //   slug: post.category.slug
        // }}
        
        /> */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context

  const resPostPage: Data = await fetcher(API_POST, {
    slug: params!.post as string
  });

  return {
    props: {
      resPostPage
    }
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getPaths = await prisma.post.findMany({
    select: {
      title: false,
      created_at: false,
      content: false,
      slug: true,
      idpost: false,
      image: false,
      ig_url: false,
      kawai_url: false,
      tiktok_url: false,
      yt_url: false
    }
  })
  const paths = getPaths.map(path => ({
    params: { post: path.slug }
  }))

  return { paths, fallback: false };
}

export default PostPage;