type BlogPostListTypes = {
    title:string,
    desc:string,
    date:string
}

export default function BlogPostList({title,desc,date} : BlogPostListTypes)  {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p>{desc}</p>
                </div>
                <span className="text-gray-400 pt-2">{date}</span>
            </div>

        </div>
    )
}