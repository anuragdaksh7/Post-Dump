

export default function convertBase64(event: any) {
  var reader = new FileReader();
  
  var data: any;
  reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = () => {
    data = reader.result;
  }
  return data
}