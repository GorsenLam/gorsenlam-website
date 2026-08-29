# BP-26-008 个人网页项目｜项目记忆

## 状态（2026-07-08 重生）
- **域名**: gorsenlam.com（Cloudflare DNS + Proxied 橙色云朵）
- **真实 GitHub 仓库**: `GorsenLam/gorsenlam-website`（不是 site / site2，已经被重命名/合并）
- **部署方式**: GitHub Pages
  - Source branch: `master`（默认分支）+ `gh-pages`（兜底双保险）
  - 必须含 `CNAME` 文件（内容 = `gorsenlam.com`）+ `.nojekyll` 文件
- **DNS 实际配置**（2026-07-08 现网）：
  - 4 条 A 记录 → 185.199.108/109/110/111.153（GitHub Pages 官方 IP）
  - 1 条 CNAME: `www.gorsenlam.com → gorsenlam.com` (Proxied)
  - SSL: Flexible
- **Zone ID**: `29f2d5cb66b3a1fa4950163c5456bed7`
- **Cloudflare Token**: 已 revoke 用完即弃（不要保存）
- **GitHub SSH 部署 key**: `~/.ssh/gh_deploy`（ed25519，无密码）
- **SSH config**: `~/.ssh/config` 已写，自动用 `gh_deploy` key

## 部署流程（已验证可复用）
```bash
cd '/data/projects/BP-26-008 个人网页项目/'
echo 'gorsenlam.com' > CNAME    # 必须有！
touch .nojekyll                 # 必须有！否则 Jekyll 会过滤 .webp
git add CNAME .nojekyll index.html images/
git commit -m "..."
GIT_SSH_COMMAND="ssh -i ~/.ssh/gh_deploy -o IdentitiesOnly=yes" \
  git push origin master
GIT_SSH_COMMAND="ssh -i ~/.ssh/gh_deploy -o IdentitiesOnly=yes" \
  git push origin master:gh-pages -f   # 同步到 gh-pages
```

## 当前风格
- **8️⃣ Apple Soft Premium**（林成事选定，2026-07-08）
- 设计语言:白底 + SF Pro 字体 + 圆角 + 灰底块 + 极致留白 + Apple 系统感
- 简历版内容:10年技术 × 4年AI / 5.7万+社群 / 广州 OPC 夜校 / Agent + OPC + 企业AI+ 三大课程
- 4 张图:photo.webp（头像）+ scene1/2/3.webp（授课现场）

## 当前状态（2026-07-19 v2 上线）
- v2 深红冲击风已部署上线，commit ab4080f
- 对标必火 4980.bihuoai.com 转化结构
- 清理了208行旧Apple风格死CSS + 修复@media花括号错位bug
- 等Boss验收反馈

## 已归档备查（不要删）
- `/tmp/style_swiss/` - 1️⃣ Swiss International
- `/tmp/style_magazine/` - 2️⃣ Magazine Editorial
- `/tmp/style_brutalist/` - 3️⃣ Brutalist Tech
- `/tmp/style_glass/` - 4️⃣ Glassmorphism Premium
- `/tmp/style_neobrutal/` - 5️⃣ Neo-brutalism Pop
- `/tmp/style_darkacademic/` - 6️⃣ Dark Academic
- `/tmp/style_terminal/` - 7️⃣ Terminal IDE
- `/tmp/style_applesoft/` - 8️⃣ Apple Soft Premium ← 当前选中

## 历史教训（避免重复踩）
- memory.md 之前写「gorsenlam-site2 main」是错的。真实仓库是 `gorsenlam-website`。
- GitHub Pages 必须有 `CNAME` 文件才会识别自定义域名，Cloudflare DNS 配对了没用。
- GitHub Pages 部署必须 `git push` 到 master（或 gh-pages），**两者都要**（双保险）。
- Token 模式：Cloudflare API Token 必须勾选「Zone: DNS: Edit」+「Zone: SSL: Edit」，纯 Read 权限的 Token 改不了任何东西。
- 本地预览 server 端口：避开 8765（feishu-streaming-card 占用）、8888-9000。已用过：18888, 18891-18894, 18901-18904。

## 联系方式
- **Boss 微信 open_id**: ou_d467e57a99894cc159faa6645297a6de
- **BP-26-008 项目群 ID**: oc_d5f9120d9c5ffa6d58cbe7e556810a76
- **GitHub 账号**: GorsenLam（不是 GorsenLam-personal 之类的变体）