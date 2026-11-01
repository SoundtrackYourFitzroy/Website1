# Soundtrack Your Fitzroy — 主网站源文件

这是主 campaign website 的完整静态源文件，可直接在 GitHub Pages 发布。包含当前网页文案、滚动照片、耳机图标、最新三位组员照片、TikTok入口，以及通向互动网站的按钮。

不需要安装软件、运行构建命令、申请 API key 或使用 ChatGPT 服务。

## 一、下载和解压

1. 下载 ZIP 文件到电脑；如果浏览器只是显示文件预览，请点击下载。
2. Mac 上双击 ZIP 解压，打开解压后的文件夹。
3. 里面应直接看到 index.html、style.css、script.js、site-content.js、assets 文件夹等。
4. 双击 index.html 可以在浏览器查看；离线可看文字、照片和动画，外部网站入口需要联网。

## 二、新建 GitHub 仓库

建议新建一个仓库，例如 SoundtrackYourFitzroyWebsite，专门存放主网站。
你们已有的 SoundtrackYourFitzroyInteractive 是互动网站，请保留原仓库，避免覆盖现有互动体验和二维码地址。

1. 登录 GitHub，点击 New repository。
2. 输入仓库名称（例如 SoundtrackYourFitzroyWebsite）。
3. 选择 Public，创建仓库。普通免费账号用公开仓库可开启 Pages。
4. 打开上传文件页面（uploading an existing file，或 Add file → Upload files）。
5. 把解压后文件夹里面的文件和 assets 文件夹一起拖入上传区域，保留 assets 这一层。
6. 点击 Commit changes。

重要：上传的是解压后的内容，不是 ZIP，也不要把最外层文件夹整体作为额外一层上传。
在仓库首页应该直接看到 index.html 和 assets。assets 内照片不能平铺到仓库首页。
.nojekyll 是隐藏文件；若上传时没显示，可在 GitHub 使用 Add file → Create new file，新建名为 .nojekyll 的文件并提交。

## 三、开启 GitHub Pages

1. 仓库中点击 Settings → Pages。
2. 在 Build and deployment 下，把 Source 设为 Deploy from a branch。
3. Branch 选 main，文件夹选 /(root)。如果实际默认分支名不同，则选择上传文件所在分支。
4. 点击 Save，等待 GitHub 完成发布。
5. 在 Pages 页面查看 GitHub 给出的实际网站地址。

例如，在 soundtrackyourfitzroy 账号下使用 SoundtrackYourFitzroyWebsite 作为仓库名，预计地址格式是：
https://soundtrackyourfitzroy.github.io/SoundtrackYourFitzroyWebsite/
这只是账号和仓库名称对应的示例，文件包本身尚未替你创建或发布该地址。

官方说明：
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 四、两个网站如何连接

这个文件包是主网站。Find your rhythm 按钮已经指向现有互动网站：
https://soundtrackyourfitzroy.github.io/SoundtrackYourFitzroyInteractive/

互动网站继续独立运行，不需要复制到主网站文件夹。
TikTok 已指向 https://www.tiktok.com/@soundtrackyourfitzroy_ 。
发布主网站的新 GitHub Pages 地址以后，如需宣传主网站，请使用新的地址制作二维码。原互动网站二维码仍通向原互动网站。

## 五、以后怎么修改

- index.html：主要页面文字和各区块。
- style.css：字体、颜色、大小、布局和照片动画。
- site-content.js：成员姓名、职责、简介、照片、裁切位置和 TikTok 账号。
- script.js：照片滚动和成员介绍的显示逻辑。
- assets/：网页照片、头像和图标，上传时保持文件名和路径不变。

修改后把更新的文件提交到 GitHub 的发布分支，Pages 会重新发布。GitHub 版本与原网站是独立副本；两边后续修改不会自动同步。

若网页只有文字没有图片或样式，请先确认 assets 文件夹、style.css 和两个 JS 文件已上传且位置正确。
若出现 404，请先确认 Pages 选择的分支及根目录，检查 index.html 是否在仓库首页，并在 Actions 查看发布结果。
