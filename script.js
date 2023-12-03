async function getMemes(){
    var raw=await fetch("https://api.imgflip.com/get_memes")
    var result=await raw.json()
    console.log(result)
    console.log(result.data.memes)
    var index=Math.floor(Math.random()*100)
    var array=result.data.memes
    var image=document.querySelector(".img")
    var caption=document.querySelector(".caption")
    image.src=array[index].url
    caption.innerHTML=array[index].name
}

getMemes()