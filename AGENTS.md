# 김지오 홈페이지 — Agent Instructions

이 파일은 어떤 에이전트든 이 프로젝트에서 작업할 때 반드시 먼저 읽어야 하는 전체 컨텍스트입니다.

---

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | 김지오 아기 홈페이지 |
| 목적 | 아기 지오의 성장 기록을 담은 정적 웹페이지 |
| 배포 URL | `https://dong789654.github.io/JiO/` (루트 직접 서빙) |
| GitHub | `https://github.com/dong789654/JiO` |
| 기술 스택 | HTML5 / CSS3 / Vanilla JS (빌드 도구 없음) |

---

## 아기 정보 (고정값 — 절대 변경 금지)

```
이름: 김지오
생일: 2025년 11월 20일
성별: 남자
부모: 동운 & 희주
100일: 2026년 2월 28일
돌:   2026년 11월 20일
```

---

## 폴더 구조 및 역할

```
ji-oh/
│
├── data/                          ← 아기 사진 저장소 (읽기 전용)
│   └── *.jpeg / *.jpg / *.png     파일 수정·삭제 절대 금지
│
├── reference/                     ← 디자인 레퍼런스 (읽기 전용)
│   ├── 디자인.md                  핵심 디자인 가이드 (색상·폰트·레이아웃)
│   └── *.png                      레퍼런스 이미지
│
├── index.html                     ← 메인 페이지 (유일한 HTML)
├── style.css                      전체 스타일 (CSS 변수 기반)
├── script.js                      인터랙션 (fade-up, nav 전환, hero 이미지)
│
└── .github/
    ├── agents/
    │   └── baby-homepage.agent.md 지오 홈페이지 전담 에이전트 정의
    ├── skills/
    │   └── baby-homepage/
    │       └── SKILL.md           홈페이지 생성·업데이트 스킬
    └── notes/
        └── git-config.md          Git 계정 설정 복구 가이드
```

---

## 디자인 원칙 (reference/디자인.md 요약)

작업 전 `reference/디자인.md` 를 반드시 읽을 것. 핵심만 요약:

```css
--color-bg:      #F7F5F2;   /* 따뜻한 오프화이트 */
--color-primary: #1C2B4A;   /* 네이비 */
--color-accent:  #C9A99A;   /* 소프트 로즈 */
--font-en:       'Cormorant Garamond'
--font-ko:       'Nanum Myeongjo'
--font-sans:     'Noto Sans KR'
```

**분위기**: 미니멀 스칸디나비안. 여백을 아끼지 않는다.  
**금지**: 원색 사용, 과도한 그림자, 자동 슬라이드, 빌드 도구 도입.

---

## 코딩 규칙

### HTML
- 시맨틱 태그 사용 (`<section>`, `<figure>`, `<blockquote>`, `<time>`)
- 이미지 경로: `../data/파일명` (공백 → `%20` 인코딩)
- 이미지 필수 속성: `loading="lazy"`, `alt="지오 사진"`

### CSS
- 모든 색상·폰트는 `:root` CSS 변수로 관리
- 새 색상 추가 시 `style.css` 상단 `:root` 에 변수 추가 후 사용
- 반응형: 900px / 720px / 480px 브레이크포인트

### JS
- 바닐라 JS만 사용 (프레임워크·번들러 금지)
- Intersection Observer로 fade-up 처리
- 외부 라이브러리 추가 금지

---

## 사진 자동 업데이트 규칙

> "사진 추가했어" / "사진 넣었어" 메시지가 오면 아래 절차 실행

1. `data/` 폴더 이미지 파일 목록 조회 (`.gitkeep` 제외)
2. `src/index.html` 갤러리 섹션 `<img>` 목록과 비교
3. 추가된 파일 → 갤러리에 `<figure>` + `<img>` 태그 삽입 (`home/index.html`)
4. 삭제된 파일 → 해당 태그 제거
5. CSS는 건드리지 않음

---

## Git / 배포 설정

> 상세 내용: `.github/notes/git-config.md` 참조

```bash
# 이 레포는 로컬 개인 계정으로 설정됨 (전역 회사 계정과 별도)
user.name  = dong789654
user.email = dong789654@gmail.com
remote     = https://github.com/dong789654/JiO.git

# 사진 파일이 크므로 버퍼 필수
http.postBuffer = 524288000
```

### 배포 루틴
```bash
git add .
git commit -m "변경 내용"
git push
# → GitHub Actions 1~2분 후 https://dong789654.github.io/JiO/ 반영
```

---

## 에이전트 / 스킬 역할 분담

| 파일 | 역할 | 호출 조건 |
|------|------|----------|
| `AGENTS.md` (이 파일) | 전체 프로젝트 컨텍스트 | 항상 자동 로드 |
| `.github/agents/baby-homepage.agent.md` | 홈페이지 전담 에이전트 | "지오 홈페이지", "사진 추가", "홈페이지 수정" |
| `.github/skills/baby-homepage/SKILL.md` | 생성·업데이트 절차 | 위 에이전트가 참조 |
| `reference/디자인.md` | 디자인 가이드 | 스타일 관련 작업 시 |
| `.github/notes/git-config.md` | Git 설정 복구 | 환경 재설정 필요 시 |

---

## 주의사항 요약

- `data/` 폴더 파일 절대 수정·삭제 금지
- `reference/` 폴더 파일 절대 수정 금지 (읽기 전용)
- 빌드 도구(npm, webpack, vite 등) 도입 금지
- 외부 API 연결 금지 (정적 페이지 원칙)
- 개인정보(전화번호, 주소 등) 코드에 하드코딩 금지
