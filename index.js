const { app, BrowserWindow } = require("electron");

app.whenReady().then(()=>{
  const window = new BrowserWindow({
  width: 800,
  height: 600,
  icon: __dirname+"/Images/icon.ico",
  autoHideMenuBar: true
  });
  window.loadFile("html/main.html");
})