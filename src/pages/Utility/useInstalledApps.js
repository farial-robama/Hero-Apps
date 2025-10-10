import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useInstalledApps = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(stored);
  }, []);

  // install an app
  const installApp = (app) => {
    const isInstalled = installedApps.find((a) => a.id === app.id);
    if (!isInstalled) {
      const newInstalled = [...installedApps, app];
      setInstalledApps(newInstalled);
      localStorage.setItem("installedApps", JSON.stringify(newInstalled));
      toast.success(`${app.title} installed successfully!`);
    }
  };

  // uninstall an app
  const uninstallApp = (appId) => {
    const updated = installedApps.filter((a) => a.id !== appId);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.success("App uninstalled successfully!");
  };

  //  check app is installed
  const isAppInstalled = (appId) => {
    return installedApps.map((a) => a.id).includes(appId);
  };

  return { installedApps, installApp, uninstallApp, isAppInstalled };
};

export default useInstalledApps;
