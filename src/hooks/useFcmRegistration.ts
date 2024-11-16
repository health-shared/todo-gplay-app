"use client";
import { getToken, isSupported } from "@firebase/messaging";
import { useEffect, useState } from "react";
import useNotificationPermission from "./useNotificationPermission";
import { messaging } from "@/firebase/firebaseconfig";

const useFcmRegistration = () => {
  const permission = useNotificationPermission();
  const [currentFcmToken, setCurrentFcmToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (
        typeof window !== "undefined" &&
        "serviceWorker" in navigator &&
        "Notification" in window
      ) {
        if (permission === "granted") {
          const reg = await navigator.serviceWorker.register(
            /* webpackChunkName: "firebase-messaging-sw" */
            new URL("../../firebase-messaging-sw.js", import.meta.url)
          );
          const isFCMSupported = await isSupported();
          if (!isFCMSupported) return;

          const fcmToken = await getToken(messaging(), {
            serviceWorkerRegistration: reg,
            vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
          });
          setCurrentFcmToken(fcmToken);
          console.log(fcmToken);
          alert(fcmToken);
        }
      }
    })();
  }, [permission]);

  return currentFcmToken;
};

export default useFcmRegistration;
