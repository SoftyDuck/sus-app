const { app, BrowserWindow } = require("electron");

app.whenReady().then(()=>{
  const window = new BrowserWindow({
  width: 1000,
  height: 850,
  icon: __dirname+"/Images/icon.ico",
  autoHideMenuBar: true
  });
  window.loadFile("html/load.html");
})
