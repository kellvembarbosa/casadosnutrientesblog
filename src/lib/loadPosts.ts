const fetcher = (url: string, options: {
  'slug': string
}) => fetch(url, {
  body: JSON.stringify(options),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}).then((res) => res.json());

const loadPosts = (slug: string) => {
  try {
    const resPostPage = fetcher(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/post`, {
      slug: slug ?? ''
    })
    return resPostPage
  } catch (error) {
    console.log(error);
  }
}

export default loadPosts
