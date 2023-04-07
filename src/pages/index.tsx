import { NextPage } from 'next'
import Link from 'next/link'

const posts = [
    {
        title: 'Meu primeiro post',
        date: '01/01/2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante vel velit pharetra pretium nec at enim. Pellentesque tincidunt sapien nec enim lobortis, eu sollicitudin leo venenatis. Fusce maximus neque sed euismod tristique. Vestibulum ut diam ac turpis malesuada volutpat. Sed interdum, felis eu tempus posuere, lorem dolor facilisis velit, quis dignissim ipsum turpis a enim.'
    },
    {
        title: 'Meu segundo post',
        date: '02/01/2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante vel velit pharetra pretium nec at enim. Pellentesque tincidunt sapien nec enim lobortis, eu sollicitudin leo venenatis. Fusce maximus neque sed euismod tristique. Vestibulum ut diam ac turpis malesuada volutpat. Sed interdum, felis eu tempus posuere, lorem dolor facilisis velit, quis dignissim ipsum turpis a enim.'
    },
    {
        title: 'Meu terceiro post',
        date: '03/01/2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante vel velit pharetra pretium nec at enim. Pellentesque tincidunt sapien nec enim lobortis, eu sollicitudin leo venenatis. Fusce maximus neque sed euismod tristique. Vestibulum ut diam ac turpis malesuada volutpat. Sed interdum, felis eu tempus posuere, lorem dolor facilisis velit, quis dignissim ipsum turpis a enim.'
    },
    {
        title: 'Meu quarto post',
        date: '04/01/2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante vel velit pharetra pretium nec at enim. Pellentesque tincidunt sapien nec enim lobortis, eu sollicitudin leo venenatis. Fusce maximus neque sed euismod tristique. Vestibulum ut diam ac turpis malesuada volutpat. Sed interdum, felis eu tempus posuere, lorem dolor facilisis velit, quis dignissim ipsum turpis a enim.'
    }
]

const Blog: NextPage = () => {
    return (
        <div className="bg-gray-800 min-h-screen">
            <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-white">Blog Casa dos Nutrientes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('/images/post${index + 1}.jpg')` }}>
                            </div>
                            <div className="px-6 py-4">
                                <Link href={`/posts/${index + 1}`} className='block text-xl font-semibold text-white hover:text-gray-300'>
                                {post.title}
                                </Link>
                                <p className="text-gray-400 mt-2">{post.date}</p>
                                <p className="text-gray-400 mt-2">{post.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog
