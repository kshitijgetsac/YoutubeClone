import { VideoCard } from "./VideoCard"
const Videos = [{
    title:"how to code",
    author:"kshitij",
    views:"46m",
    timestamp:"7 days ago",
    image:"photo.jpg",
    thumbnail:"thumbnail.jpg"
},
{   
    title:"how to code 2",
    author:"taneja",
    views:"4m",
    timestamp:"8 days ago",
    image:"photo.jpg",
    thumbnail:"thumbnail.jpg"
},
{
    title:"how to code 3",
    author:"hi there",
    views:"0",
    timestamp:"1 hr ago",
    image:"photo.jpg",
    thumbnail:"thumbnail.jpg"
},
{
    title:"how to code 4",
    author:"hi theresfada",
    views:"233",
    timestamp:"11 hr ago",
    image:"photo.jpg",
    thumbnail:"thumbnail.jpg"
},{
    title:"how to code 4",
    author:"hi theresfada",
    views:"233",
    timestamp:"11 hr ago",
    image:"photo.jpg",
    thumbnail:"thumbnail.jpg"
},{
    title:"how to code 4",
    author:"hi theresfada",
    views:"233",
    timestamp:"11 hr ago",
    image:"photo.jpg",
    thumbnail:"thumbnail.jpg"
},{
    title:"how to code 4",
    author:"hi theresfada",
    views:"233",
    timestamp:"11 hr ago",
    image:"photo.jpg",
    thumbnail:"thumbnail.jpg"
},{
    title:"how to code 4",
    author:"hi theresfada",
    views:"233",
    timestamp:"11 hr ago",
    image:"photo.jpg",
    thumbnail:"thumbnail.jpg"
},
{
    title:"how to code 4",
    author:"hi theresfada",
    views:"233",
    timestamp:"11 hr ago",
    image:"photo.jpg",
    thumbnail:"thumbnail.jpg"
},
{
    title:"how to code 4",
    author:"hi theresfada",
    views:"233",
    timestamp:"11 hr ago",
    image:"photo.jpg",
    thumbnail:"thumbnail.jpg"
},
{
    title:"how to code 4",
    author:"hi theresfada",
    views:"233",
    timestamp:"11 hr ago",
    image:"photo.jpg",
    thumbnail:"thumbnail.jpg"
}]
export function VideoGrid(){
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Videos.map(video=><div>
            <VideoCard title = {video.title} image = {video.image} author = {video.author} views = {video.views} timestamp = {video.timestamp} thumbnail = {video.thumbnail}></VideoCard>

            </div>)}
    </div>
}