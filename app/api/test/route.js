import { NextResponse } from "next/server";

export const GET = async (req) => {

    try {
        return NextResponse.json({ message: "Hello World", status: 200 });
    } catch (err) {

        return NextResponse.json({ message: "An error occurred", status: 500 });
    }

}