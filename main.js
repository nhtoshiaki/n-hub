const electron = require('electron');
const {app, BrowserWindow} = electron;

var mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        backgroundColor: '#fff',
        width: 1200,
        height: 600,
        show: false
    });
    // mainWindow.loadURL(`file://${__dirname}/html/welcome.html`);
    // Testando dashboard.html
    mainWindow.loadURL(`file://${__dirname}/html/welcome.html`);
    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
        mainWindow.focus();
    });
    // mainWindow.webContents.openDevTools();
});

app.on('window-all-closed', () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

exports.loadDashboard = () => {
    if (mainWindow != null) {
        mainWindow.loadURL(`file://${__dirname}/html/dashboard.html`);
    } else {
        console.log('Error: mainWindow not set.');
    }
};
