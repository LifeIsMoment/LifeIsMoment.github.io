export const person = {
 name:'윤재성', english:'Jaeseong Yun',
 title:'Applied AI Research & Software Systems',
 description:'AI·소프트웨어 개발과 연구 실험의 결과를 검증하며 산업 현장의 문제를 탐색합니다.',
 github:'https://github.com/LifeIsMoment',
 portrait:'/assets/images/jaeseong-profile.webp'
};
export const nav=[
 {name:'소개',url:'/about.html'},
 {name:'연구',url:'/research.html'},
 {name:'논문·저서',url:'/publications.html'},
 {name:'프로젝트',url:'/projects.html'},
 {name:'연구 노트',url:'/notes.html'},
 {name:'자료실',url:'/resources.html'},
 {name:'Open Problems',url:'/open-problems.html'},
 {name:'CV',url:'/cv.html'}
];
export const areas=[
 {n:'01',english:'Reliable AI systems',name:'AI 시스템 신뢰성',description:'산출물의 무결성과 실행조건 일치 여부, 장애 후 결과 보존을 구분해 평가합니다.',method:'장애 주입 · 체크포인트 검증 · 처리 비용 비교',href:'/notes/checkpoint-integrity.html'},
 {n:'02',english:'Industrial visual inspection',name:'산업용 비전과 이상탐지',description:'정상 표본 보정·다중 모델 결합이 실제 결함 판정과 오탐에 미치는 영향을 분석합니다.',method:'MVTec LOCO AD · PatchCore · ComAD · 점수 결합',href:'/notes/anomaly-calibration.html'},
 {n:'03',english:'Empirical software engineering',name:'LLM 생성 코드 검증',description:'테스트 선택 기준이 포화된 후 추가 테스트 전략과 정답 검증의 한계를 연구합니다.',method:'Test selection · Test oracle · Program failures',href:'/notes/llm-test-selection.html'},
 {n:'04',english:'Evidence-grounded AI',name:'근거 기반 AI와 에이전트',description:'RAG와 도구 실행의 근거·권한·검증 절차를 연결하고 신뢰성을 평가합니다.',method:'Citation fidelity · Tool execution · Verification',href:'/notes/evidence-grounded-rag.html'}
];
export const papers=[
 {id:'p-conference',kind:'conference',year:'2026',status:'학술대회 발표',title:'건설 기업을 위한 엣지 AI 기반 보안형 온프레미스 회의 인텔리전스 파이프라인',english:'A Secure On-Premises Meeting Intelligence Pipeline Using Edge AI for Construction Enterprises',authors:'김재환 · 윤재성 · 이종석 · 김경민',venue:'한국컴퓨터정보학회 하계학술대회 논문집 · 제34권 제2호',summary:'음성인식·화자분리·요약을 내부 환경에 통합한 보안형 회의 처리 PoC를 제안합니다.',links:[['학술대회','https://conference.ksci.re.kr/2026-02/'],['첫 페이지','https://kimjaehwan.com/assets/publications/secure-on-premises-meeting-intelligence-first-page.png'],['BibTeX','/assets/bib/ksci-summer-2026.bib']]},
 {id:'p-journal',kind:'journal',year:'2026',status:'게재 가능 결정',title:'건설기업을 위한 보안형 온프레미스 회의 인텔리전스 파이프라인의 설계 및 개념검증(PoC)',english:'Design and PoC Validation of a Secure On-Premises Meeting Intelligence Pipeline for Construction Enterprises',authors:'김재환 · 윤재성 · 이종석 · 김경민',venue:'한국컴퓨터정보학회논문지 · 게재 가능 결정(제공된 심사 상태)',summary:'전사 결과의 무결성 및 체크포인트 재사용 정책이 장애 후 결과 보존에 미치는 영향을 검증합니다.',links:[['연구 노트','/notes/checkpoint-integrity.html']]},
 {id:'p-vision',kind:'working',year:'2026',status:'공동연구 · 진행 중',title:'Decision changes after normal-only threshold calibration of complementary anomaly detectors',english:'정상 표본 임계값 보정과 이상탐지 모델의 판정 변화',authors:'Jaehwan Kim · Jaeseong Yun',venue:'Working manuscript · 출판 전 원고',summary:'산업용 논리적·구조적 이상의 검출 결과가 점수 결합 및 임계값 보정으로 어떻게 달라지는지 탐색합니다.',links:[['연구 노트','/notes/anomaly-calibration.html']]},
 {id:'p-review',kind:'working',year:'2026',status:'공동연구 · 진행 중',title:'Interpreting Manufacturing AI Results for Quality Decisions: A Critical Integrative Review',english:'제조 AI의 품질 의사결정과 근거 평가',authors:'Jaehwan Kim · Jaeseong Yun 외 공동연구자',venue:'Working manuscript · 출판 전 원고',summary:'제조 AI 연구의 성능 지표와 실제 품질 판단을 연결하는 근거·조건을 검토합니다.',links:[['연구 노트','/notes/manufacturing-evidence.html']]},
 {id:'p-testing',kind:'working',year:'2026',status:'공동연구 · 진행 중',title:'Completing Test Suites after Early Selection Saturation: An Exploratory Study of 540 LLM Generation Attempts',english:'LLM 생성 코드 테스트 선택 포화 이후의 추가 검증',authors:'Jaehwan Kim · Jaeseong Yun',venue:'Working manuscript · 출판 전 원고',summary:'선택 기준이 포화된 이후의 입력 선택 정책과 테스트 오라클의 차이가 오류 발견에 미치는 영향을 분석합니다.',links:[['연구 노트','/notes/llm-test-selection.html']]},
 {id:'p-book',kind:'book',year:'2026',status:'전자책 출간',title:'Agent Harness Engineering — 에이전트 하네스 엔지니어링 공개 실습 핸드북',english:'AI agent harness engineering',authors:'김재환 · 윤재성',venue:'작가와 · 2026.08.18 · ISBN 9791143821027',summary:'에이전트의 지침·도구·권한·검증을 결합하는 실습형 기술서를 공동 집필하였습니다.',links:[['출판 소개','https://kimjaehwan.com/pages/publications.html'],['BibTeX','/assets/bib/agent-harness-2026.bib']]}
];
export const projects=[
 {title:'호반건설 관련 온프레미스 회의 인텔리전스 PoC',kind:'산업체 PoC',period:'2026',role:'개발·실증 참여',summary:'기업 내부의 음성인식·화자분리·요약을 연결한 AI 파이프라인을 실증했습니다.',tags:['STT','On-premises','PoC'],href:'/publications.html#p-journal'},
 {title:'PCB 자동광학검사(AOI)',kind:'산업용 비전',period:'2025–2026',role:'영상 검사 개발',summary:'PCB 부품 탐지·영상 정합·결함 판정을 연결하는 실험과 검증을 수행했습니다.',tags:['YOLO','Image alignment','Visual inspection'],href:'/research.html'},
 {title:'TAXiA',kind:'문서 기반 AI',period:'진행 중',role:'개발 및 기능 검증',summary:'세법·규정 관련 질의응답의 검색 근거와 문서 처리 과정을 검토했습니다.',tags:['RAG','Evidence','Document AI'],href:'https://xaikorea.github.io/taxia/'},
 {title:'MARKSCOPE',kind:'소프트웨어 개발',period:'진행 중',role:'웹서비스 개발·QA',summary:'상표 출원 지원 서비스의 사용자 흐름·추천 및 품질검증 업무에 참여했습니다.',tags:['Web','UX','QA'],href:'https://www.markscope.co.kr/'},
 {title:'엣지 AI·임베디드 시스템',kind:'장치 연계 실험',period:'2025–2026',role:'추론·센서 연계 실습',summary:'Raspberry Pi 및 Jetson 기반 추론 환경을 다루고 센서·장치 연계 가능성을 실험했습니다.',tags:['Edge AI','Embedded','Inference'],href:'/research.html'}
];
export const questions=[
 {id:'OP-01',topic:'Industrial vision',title:'다중 탐지 모델을 결합한 뒤에도 개별 검출 결과가 유지되는가?',method:'같은 이미지의 추가 검출과 손실을 정상 표본 보정 후 비교합니다.',href:'/notes/anomaly-calibration.html'},
 {id:'OP-02',topic:'Reliable systems',title:'저장된 AI 산출물은 어떤 조건에서 안전하게 재사용할 수 있는가?',method:'구문·내용 무결성·실행조건 일치를 분리해 검증합니다.',href:'/notes/checkpoint-integrity.html'},
 {id:'OP-03',topic:'Software testing',title:'테스트 선택이 포화된 뒤 남은 실행 예산을 어떻게 활용할 것인가?',method:'무작위·입력 다양성·greedy 계열 선택 정책을 비교합니다.',href:'/notes/llm-test-selection.html'},
 {id:'OP-04',topic:'Evidence-grounded AI',title:'RAG 답변의 인용 문서가 실제 결론을 뒷받침하는가?',method:'검색된 문서와 응답 주장 사이의 근거 적합성을 평가합니다.',href:'/notes/evidence-grounded-rag.html'},
 {id:'OP-05',topic:'AI agents',title:'AI 에이전트의 실행 과정에 필요한 검증 경계는 무엇인가?',method:'권한·역할·실행 기록·검토 절차를 분리해 분석합니다.',href:'/resources.html'},
 {id:'OP-06',topic:'Edge AI',title:'자원 제약이 있는 엣지 장치에서 신뢰성을 어떻게 평가할 것인가?',method:'지연·오류·재계산·복구 시나리오를 함께 측정합니다.',href:'/projects.html'}
];
export const resources=[
 {kind:'데이터셋',name:'MVTec LOCO AD',description:'구조적·논리적 이상을 평가할 수 있는 산업용 비전 데이터셋',href:'https://www.mvtec.com/research-teaching/datasets/mvtec-loco-ad'},
 {kind:'오픈소스',name:'PatchCore',description:'산업용 이상탐지 실험의 공개 구현체',href:'https://github.com/amazon-science/patchcore-inspection'},
 {kind:'데이터셋',name:'AMI Meeting Corpus',description:'회의 음성·전사 및 관련 연구 자료',href:'https://www.idiap.ch/webarchives/sites/www.amiproject.org/ami-scientific-portal/meeting-corpus/'},
 {kind:'오픈소스',name:'WhisperX',description:'음성 전사·시간정렬·화자분리 연구 참고 구현',href:'https://github.com/m-bain/whisperX'},
 {kind:'참고 사이트',name:'TAXiA',description:'문서·세법 도메인 AI 시스템의 공개 기술 자료',href:'https://xaikorea.github.io/taxia/'}
];
export const timeline=[
 ['2026.10','특허 출원','「엣지 기반 보안형 회의 음성 처리 시스템 및 방법」 공동발명자'],
 ['2026.08','기술서 공동 출간','『Agent Harness Engineering』, 작가와'],
 ['2026.07','학술대회 공동저자 참여','한국컴퓨터정보학회 하계학술대회'],
 ['2026.06','호반건설 관련 AI PoC 참여','온프레미스 회의 인텔리전스 개발·검증'],
 ['2025–2026','산업용 AI 개발·연구','PCB AOI 및 산업용 비전, 엣지 AI, AI 시스템 실험'],
 ['전문기술교육','AI와 빅데이터 기술교육','한국폴리텍 AI 소프트웨어 하이테크, K-DT 빅데이터 분석']
];
