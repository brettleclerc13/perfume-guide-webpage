# A Perfume Guide React App

#### A React.js coded web-page integrated in an existing Wordpress website.

Welcome to the React app for Atelier des Ors' [Perfume Guide](https://atelierdesors.com/perfume-guide/). This _web-page_ application is designed to enhance the user's experience by providing explanatory videos for each fragrance, presented by founder Jean-Philippe and perfumer Marie Salamagne.


## Overview

This is a simple React coded web-page with no backend. It is loaded on an existing WordPress site (built with a site builder). The application utilizes the YouTube API to display videos related to the perfumes featured on the page.


## Features

- **Mobile-Optimized:** Designed primarily for mobile use.
- **YouTube Integration:** Displays explanatory videos via the YouTube API.
- **Easy Integration:** Can be added to any WordPress site without complex backend modifications.


## Getting Started

Assuming that your application is ready to be built and publicized, please note the following steps

### 1. Update `package.json`
Add the below line to your package.json file:

```"homepage": "/xyz"```

`/xyz` is a new directory to be created in your website's remote repository (replace xyz with the name of your app). This directory can be stored at the root of the website's repo (/www or /public), or anywhere else as long as you mention the correct path to the concerned directory.

### 2. Build the React App
```npm run build```

### 3. Upload the Build Files
Upload the contents of the build directory to your WordPress site. You can do this using FTP/SFTP by placing the files in the newly created directory (e.g., /xyz). Please make sure to only upload the files and folders present in the build directory.

### 4. Embed in WordPress
To display the React app on your WordPress site:

- **Create a New WordPress Page:** Go to the WordPress admin panel and create a new page.
- **Add HTML and Script:** In the page content editor, add the following HTML and script tags:

  ```<div id="root"></div><script src="/xyz/static/js/main.aa48d75a.js"></script>```


## Notes
- **Responsivity:** The app is optimized for mobile viewing. Desktop responsiveness is minimal.
- **File Paths:** Make sure the paths to your static files are accurate and match the directory where you uploaded your build files.


Feel free to reach out if you have any questions or need further assistance!
