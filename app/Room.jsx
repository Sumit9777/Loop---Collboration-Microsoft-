"use client";

import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { collection, getDoc, query, where } from "firebase/firestore";

export function Room({ children,params }) {
  return (
    <LiveblocksProvider authEndpoint={"/api/liveblocks-auth?roomId="+params?.documentid}
    resolveUsers={async ({ userIds }) => {
    const q= query(collection(db,'LoopUsers'),where('email','in',userIds));
    const querySnapshot=await getDoc(q);
    const userList=[];
    querySnapshot.forEach((docs)=>{
      console.log(doc.data())
      userList.push(doc.data())
    })
    return userList
  }}
  resolveMentionSuggestions={async ({ text, roomId }) => {
    const q= query(collection(db,'LoopUsers'),where('email','!=',null));
    const querySnapshot=await getDoc(q);
    let userList=[];
    querySnapshot.forEach((docs)=>{
      userList.push(doc.data())
    })
    if (text) {
      // Filter any way you'd like, e.g. checking if the name matches
      userList = userList.filter((user) => user.name.includes(text));
    }

    // Return a list of user IDs that match the query
    return userList.map((user) => user.id);
  }}
  >
      <RoomProvider id={params?.documentid}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}