import { storage } from "../../Firebase";
// import { getBase64 } from "../../utils";

async function saveImage(file, id, name) {
  const metadata = {
    contentType: "image/jpeg",
  };
  const uploadfile = storage.child(`shoes/${id}/${name}`).put(file,metadata);
  console.log(uploadfile);
}

export { saveImage };
