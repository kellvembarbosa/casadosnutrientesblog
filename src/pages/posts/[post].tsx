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


type Data = {
  post: {
    category: {
        name: string;
        slug: string;
    };
    post_has_tag: {
        tag: {
            tag: string | null;
            slug: string | null;
        };
    }[];
    title: string;
    content: string;
    ig_url: string | null;
    kawai_url: string | null;
    tiktok_url: string;
    yt_url: string | null;
    created_at: Date | null;
},
  imagesSTR: string
  //   category: category,
  //   tags: tag[]
}

type PropsPost = {
  resPostPage: Data
}

// const PostPage: NextPage<PropsPost> = ({resPostPage}) 
const PostPage: NextPage<PropsPost> = ({ resPostPage }) => {
  const { post, imagesSTR } = resPostPage
  return (
    <div>
      <Post
        title={post.title}
        content={post.content}
        imageUrl={imagesSTR}
        instagramLink={post.ig_url ?? '#'}
        kawaiLink={post.kawai_url ?? '#'}
        tiktokLink={post.tiktok_url}
        youtubeLink={post.yt_url ?? '#'}
        createdAt={new Date(post.created_at ?? '').toLocaleDateString()}
        category={{
          name: post.category.name,
          slug: post.category.slug
        }}
        post_has_tag={post.post_has_tag} />
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