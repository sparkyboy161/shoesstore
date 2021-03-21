import { Firestore } from "./";
import { db } from "../../Firebase";

const shoesRef = db.collection("shoes");

async function createShoes(shoes) {
  const snapshotByName = await shoesRef.where("name", "==", shoes.name).get();
  const snapshotByModel = await shoesRef
    .where("model", "==", shoes.model)
    .get();

  if (!snapshotByName.empty) {
    return {
      status: "error",
      message: `Tên ${shoes.name} đã tồn tại`,
    };
  } else if (!snapshotByModel.empty) {
    return {
      status: "error",
      message: `Model ${shoes.model} đã tồn tại`,
    };
  } else {
    const { id } = await Firestore.create('shoes', shoes)
    return {
      status: "success",
      message: "Tạo thành công",
      id,
    };
  }
}

async function getShoesList(pageSize) {
  const shoesList = await Firestore.getData("shoes", "createdAt", pageSize);
  return shoesList;
}

export { createShoes, getShoesList };
