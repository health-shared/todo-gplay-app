"use client";

import useFcmRegistration from "@/hooks/useFcmRegistration";

export function RequestPermission() {
  const token = useFcmRegistration();
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-lg mb-4 text-2xl"
        onClick={async () => {
          if ("Notification" in window) {
            Notification.requestPermission().then((perm) => {
              console.log(perm);
            });
          }
        }}
      >
        Request Permission
      </button>
      <div>Token:</div>
      <div className="text-base w-[350px] text-wrap leading-5 text-red-900">
        {token}
      </div>
    </>
  );
}
