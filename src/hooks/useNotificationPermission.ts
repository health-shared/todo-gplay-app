'use client';
import { useEffect, useState } from 'react';

const useNotificationPermissionStatus = () => {
  const [permission, setPermission] = useState<NotificationPermission>('default');

  useEffect(() => {
    if ('Notification' in window) {
      const updatePermission = () => setPermission(Notification.permission);
      updatePermission();

      let permissionStatus: PermissionStatus;

      navigator.permissions.query({ name: 'notifications' }).then((notificationPerm) => {
        permissionStatus = notificationPerm;
        permissionStatus.onchange = updatePermission;
      });

      return () => {
        if (permissionStatus) {
          permissionStatus.onchange = null;
        }
      };
    }
  }, []);

  return permission;
};

export default useNotificationPermissionStatus;
