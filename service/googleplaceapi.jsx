export const GetPhotoRef=async()=>{
    const resp=await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json'+
  '?query='+['Hotel image Url']+
  '&key=' +'AIzaSyDzvorTAgAgLb4pFh2EaE8uKznApZQgMiI')

  const result=await resp.json();
  console.log(result);

  return result;
    }