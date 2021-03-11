import { create } from "./";
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
    const { id } = await create('shoes', shoes)
    return {
      status: "success",
      message: "Tạo thành công",
      id,
    };
  }
}

async function getShoesList() {
  // const shoesData = await shoesRef.orderBy('create  ')
}

export { createShoes, getShoesList };
