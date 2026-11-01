# 最后一道红线 · 一通没挂断的电话

写实电影风格的中文互动故事。凌晨 02:17，一条语音让你发现：今天要交付的飞机，有两份不同说法的记录。你接电话、见人、看文件，决定接下来怎样行动。

**新版入口与完整源码在 [cinematic-web](cinematic-web/)。** 序章与六章、单路线 15 个场景、13 次决定、7 个结局。无需航空或管理知识，支持自动续玩、手机触控、课堂大字、全屏及减少动态。

![故事界面](cinematic-web/docs/preview.webp)

## 游玩与剧本

- 在线地址预期为 `https://huijinya520.github.io/game/`。只有 GitHub Pages 部署成功后才可用；仓库页面本身不运行游戏。
- [单文件备用版](cinematic-web/play-offline.html)：在 GitHub 文件页使用 **Download raw file** 保存 HTML，再用 Chrome、Edge、Firefox 或 Safari 打开。人物、场景和程序全部内嵌，打开文件后不需要联网。
- [阅读新版完整剧本](cinematic-web/docs/故事剧本.md) / [Word 版剧本](cinematic-web/docs/最后一道红线-故事交互版剧本.docx)。含结局，注意剧透。
- [课堂展示与发布说明](cinematic-web/README.md)。

## 开发

Node.js 20+，没有第三方运行依赖，无需 `npm install`。

```sh
npm start
npm test
npm run build
```

默认服务端口 3000，可用 `PORT` 修改。构建输出位于 `cinematic-web/dist/`；工作流将这个目录发布到 GitHub Pages。

## 制作边界

基于用户提供的完整开发稿和 Faury 人物资料重新改编。内部事件、对白、其他人物及结局为虚构创作，未经独立核实的奖金与补贴比例未写成史实。采用六组电影风格背景和统一人物素材，通过分层透视、景深与交互视差呈现 3D 感；不是自由行走的三维地图。环境音为合成氛围，语音以文字呈现。

早期版本保留于 `classroom-publish/site/`。本次发布不包含原始上传文件或其他课程作业。
