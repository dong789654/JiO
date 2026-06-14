# 김지오 홈페이지 — Claude Instructions

> 전체 컨텍스트는 `AGENTS.md` 를 참조할 것.

---

## 핵심 규칙 요약

- **아기 정보 변경 금지**: 이름(김지오), 생일(2025.11.20), 부모(동운 & 희주)
- **data/ 폴더 파일 수정·삭제 금지** (사진 저장소)
- **reference/ 폴더 수정 금지** (읽기 전용 디자인 가이드)
- **빌드 도구 도입 금지** — HTML/CSS/JS 정적 파일만 사용
- **외부 API 연결 금지**

## 작업 전 필독 파일

1. `AGENTS.md` — 전체 프로젝트 컨텍스트
2. `reference/디자인.md` — 색상·폰트·레이아웃 가이드
3. `.github/notes/git-config.md` — Git 계정 설정

## 사진 추가 요청 시

1. `data/` 폴더 이미지 목록 조회
2. `src/index.html` 갤러리 `<img>` 태그와 비교
3. 차이만 HTML 수정 (CSS 건드리지 않음)

## 배포

```bash
git add . && git commit -m "변경 내용" && git push
```
→ `https://dong789654.github.io/JiO/`
