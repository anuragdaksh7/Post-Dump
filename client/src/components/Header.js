export const HeadComp = () => {
    return (
        <div className="w-full py-2 bg-blue-500 rounded-b-lg">
            <div className="flex justify-between px-8 items-center">
                <h1 className="text-4xl text-white font-semibold mb-1">Dark Whispers</h1>
                <a href="/createpost"><button className="bg-white p-1 px-2 rounded-lg">Create Post</button></a>
            </div>
        </div>
    )
}