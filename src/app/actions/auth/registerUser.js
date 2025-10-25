"use server";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {

    const usersCollection = dbConnect(collectionNamesObj.usersCollection)
    const { email, password } = payload
    if (!email || !password) return { success: false }
    const user = await usersCollection.findOne({ email: payload.email })

    if (user) {
        return { success: false, message: "User already exists" }
    }
    const result = await usersCollection.insertOne(payload);

    return {
        success: true,
        acknowledged: result.acknowledged,
        insertedId: result.insertedId.toString(),
    };


}