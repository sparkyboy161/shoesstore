import { storage } from "../../Firebase";

async function saveImage(file, id) {
  const metadata = {
    contentType: "image/jpg",
  };
  let base64image = file.split(";base64,").pop();
  const storageRef = storage.child(`shoes/${id}/${new Date().getTime()}.jpg`);
  const uploadTask = storageRef.putString(base64image, "base64", metadata);
  console.log("uploadTask: ", uploadTask);
}

export { saveImage };
