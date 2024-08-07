
import { currentUser } from "@clerk/nextjs";
import { Liveblocks } from "@liveblocks/node";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCK_SK,
});

export async function POST(request) {
  // Get the current user from your database
  const user = await currentUser();

  // Start an auth session inside your endpoint
  const session = liveblocks.prepareSession(
    user.primaryEmailAddress?.emailAddress,
  );

  const {searchParams}= new URL(request?.url);
  const roomId=searchParams.get('roomId');
  session.allow("Vu78Rt:design:9Hdu73", session.FULL_ACCESS);
session.allow("Vu78Rt:product:*", session.READ_ACCESS);
  session.allow(roomId,session?.FULL_ACCESS);

  // Authorize the user and return the result
  const { status, body } = await session.authorize();
  return new Response(body, { status });
}