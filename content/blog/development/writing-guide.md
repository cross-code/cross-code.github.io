---
title: '함께 만들어가는 기술 블로그'
date: 2019-03-29 16:21:13
category: 'guide'
thumbnail: './images/hello.png'
draft: false
author: 'codeJS'
github: 'https://google.com'
profileImage: 'https://avatars2.githubusercontent.com/u/1393664?s=200&v=4'
introduction: 'simple is best'
---

글을 작성하고 공유함으로부터 배우는 것이 분명히 있다고 생각합니다.
관심 있고 공부하고 싶은 내용이나 알고 있는 내용을 하나씩 담아 보았으면 합니다.

작성하신 내용은 물론 개인 블로그에 올리셔도 됩니다.
개인 블로그에 작성하신 내용을 반대로 이곳에 작성해주셔도 좋습니다.
여러 사람이 함께 사용하는 블로그이니 문서 하단에 꼭 작성자를 남겨주세요.

# Hexo CLI 설치

```
$ npm install -g hexo-cli
```

# 블로그 서버 실행

```
$ npm run start
```

More info: Server

새로운 포스트 생성
// 일반적인 포스트 작성
$ hexo new "My New Post"

// draft 포스트 작성 (배포해도 remote 서버에 반영되지 않는 문서)
$ hexo new draft "My New Post"

// draft 포스트 배포에 포함시키기
$ hexo publish post "Post Name"
More info: Writing

빌드와 배포를 한번에 (cross-code.github.io에 배포됩니다)
$ npm run deploy
