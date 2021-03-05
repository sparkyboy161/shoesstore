import { db } from "../../Firebase";

const shoesRef = db.collection("shoes");

async function createShoes(shoes) {
    const snapshotByName = await shoesRef.where('name', '==', shoes.name).get();
    const snapshotByModel = await shoesRef.where('model','==', shoes.model).get();
    if(snapshotByName.empty && snapshotByModel.empty) {
        shoesRef.doc().set(shoes);
        return {
            status: 'success',
            message: 'Tạo thành công'
        }
    } else {
        return {
            status: 'error',
            message: `Sản phẩm ${shoes.name} đã tồn tại`
        }
    }  
  
}

export { createShoes };
