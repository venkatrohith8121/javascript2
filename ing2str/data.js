var reader;
let img2str=()=>{

    let imagefile=document.getElementById('img_file').files[0];
    reader=new FileReader();
    reader.readAsDataURL(imagefile)
    reader.addEventListener("load",()=>{
        document.getElementById('str_tag').innerHTML=reader.result;
        });
};
let str2img=()=>{
    console.log(reader.result)
    document.getElementById('img_tag').src=reader.result;
}