// ============================================
// 메뉴/카테고리 데이터
// ============================================

const CATEGORIES = [
  { id: 'coffee', name: '커피' },
  { id: 'non-coffee', name: '논커피' },
  { id: 'tea', name: '티' },
  { id: 'smoothie', name: '스무디/프라페' },
  { id: 'ade', name: '에이드/주스' },
  { id: 'bakery', name: '베이커리' },
  { id: 'dessert', name: '디저트' }
];

// [name, category, price, description] — 메뉴 원본 목록
const RAW_MENU_ITEMS = [
  // 커피
  ['아메리카노', 'coffee', 1800, '진한 에스프레소에 물을 더한 깔끔한 커피'],
  ['카페라떼', 'coffee', 2900, '부드러운 우유와 에스프레소의 조화'],
  ['바닐라라떼', 'coffee', 3300, '달콤한 바닐라 시럽을 더한 부드러운 라떼'],
  ['헤이즐넛라떼', 'coffee', 3300, '고소한 헤이즐넛 향이 매력적인 라떼'],
  ['카푸치노', 'coffee', 2900, '풍성한 우유 거품이 올라간 진한 커피'],
  ['카라멜마끼아또', 'coffee', 3300, '달콤한 카라멜 시럽과 커피의 조화'],
  ['카페모카', 'coffee', 3500, '초콜릿과 커피가 어우러진 달콤한 한 잔'],
  ['돌체라떼', 'coffee', 3800, '달콤하고 진한 시럽이 더해진 라떼'],
  ['콜드브루', 'coffee', 3300, '저온에서 장시간 우려낸 깔끔한 커피'],
  ['콜드브루 라떼', 'coffee', 3800, '콜드브루에 부드러운 우유를 더한 한 잔'],
  ['아인슈페너', 'coffee', 4000, '진한 커피 위에 부드러운 크림을 올린 비엔나 커피'],
  ['아인슈페너라떼', 'coffee', 4200, '부드러운 라떼 위에 크림을 올린 한 잔'],
  ['흑당 카페라떼', 'coffee', 3800, '달콤한 흑당 시럽과 라떼의 조화'],
  ['흑당 버블 카페라떼', 'coffee', 4500, '쫄깃한 버블과 흑당이 어우러진 라떼'],
  ['달고나라떼', 'coffee', 4000, '달콤 쌉싸름한 달고나 향의 라떼'],
  ['아샷추', 'coffee', 3500, '아이스티에 에스프레소 샷을 더한 시원한 한 잔'],
  // 논커피
  ['생초콜릿라떼', 'non-coffee', 4500, '진한 초콜릿이 듬뿍 담긴 라떼'],
  ['곡물라떼', 'non-coffee', 3300, '고소한 다양한 곡물이 어우러진 라떼'],
  ['더블초코라떼', 'non-coffee', 3500, '진한 초콜릿을 두 배로 즐기는 라떼'],
  ['쿠키초코라떼', 'non-coffee', 3500, '쿠키 조각이 들어간 달콤한 초코 라떼'],
  ['고구마라떼', 'non-coffee', 3500, '자색고구마의 은은한 단맛이 느껴지는 라떼'],
  ['밀크티', 'non-coffee', 3800, '향긋한 홍차와 우유의 클래식한 조화'],
  ['흑당라떼', 'non-coffee', 4200, '진한 흑당 시럽이 매력적인 라떼'],
  ['그린티라떼', 'non-coffee', 3500, '은은한 녹차 향과 우유의 조화'],
  ['망고라떼', 'non-coffee', 3500, '상큼한 망고 향이 가득한 라떼'],
  ['블루베리라떼', 'non-coffee', 3800, '새콤달콤한 블루베리가 어우러진 라떼'],
  ['딸기라떼', 'non-coffee', 3800, '달콤한 딸기 향이 가득한 라떼'],
  // 티
  ['청귤생강차', 'tea', 3500, '상큼한 청귤과 알싸한 생강의 조화'],
  ['대추차', 'tea', 2900, '은은하고 달콤한 대추 향의 전통차'],
  ['쌍화차', 'tea', 2900, '한약재를 우려낸 깊고 진한 전통차'],
  ['매실차', 'tea', 2900, '새콤달콤한 매실 향이 상쾌한 차'],
  ['허브티 페퍼민트', 'tea', 2500, '상쾌한 민트 향이 가득한 허브티'],
  ['허브티 캐모마일', 'tea', 2500, '은은하고 부드러운 캐모마일 향의 허브티'],
  ['홍차 얼그레이', 'tea', 2500, '베르가못 향이 은은한 클래식 홍차'],
  ['아이스티', 'tea', 3000, '상큼하고 깔끔한 복숭아 향 홍차'],
  ['허니레몬티', 'tea', 3500, '새콤달콤한 레몬과 꿀의 조화'],
  ['허니유자티', 'tea', 3500, '향긋한 유자와 꿀이 어우러진 차'],
  ['허니자몽티', 'tea', 3500, '상큼한 자몽과 꿀의 달콤한 조화'],
  ['블랙퍼스트', 'tea', 2500, '깊고 진한 풍미의 아침용 홍차'],
  ['히비스커스', 'tea', 2500, '새콤하고 붉은빛이 매력적인 허브티'],
  ['자몽허니블랙티', 'tea', 3800, '자몽과 꿀이 어우러진 향긋한 홍차'],
  // 스무디/프라페
  ['제주 한라봉 스무디', 'smoothie', 4200, '상큼한 제주 한라봉으로 만든 스무디'],
  ['복숭아 스무디', 'smoothie', 4200, '달콤한 복숭아 과육이 가득한 스무디'],
  ['딸기치즈케이크스무디', 'smoothie', 4900, '딸기와 치즈케이크가 어우러진 진한 스무디'],
  ['리얼초코자바칩프라페', 'smoothie', 4000, '진한 초콜릿과 초코칩이 씹히는 프라페'],
  ['쿠키초코프라페', 'smoothie', 4000, '쿠키 조각이 가득한 달콤한 초코 프라페'],
  ['모카자바칩프라페', 'smoothie', 4500, '커피와 초코칩이 어우러진 진한 프라페'],
  ['그린티프라페', 'smoothie', 4000, '진한 녹차 향이 가득한 부드러운 프라페'],
  ['딸기스무디', 'smoothie', 3800, '상큼달콤한 딸기로 만든 스무디'],
  ['블루베리스무디', 'smoothie', 3800, '새콤달콤한 블루베리로 만든 스무디'],
  ['망고스무디', 'smoothie', 3800, '진한 망고 과육이 가득한 스무디'],
  ['플레인요거트스무디', 'smoothie', 4000, '새콤한 요거트로 만든 깔끔한 스무디'],
  ['딸기요거트스무디', 'smoothie', 4000, '딸기와 요거트의 새콤달콤한 조화'],
  ['블루베리요거트스무디', 'smoothie', 4000, '블루베리와 요거트가 어우러진 스무디'],
  ['망고요거트스무디', 'smoothie', 4000, '망고와 요거트의 부드러운 조화'],
  // 에이드/주스
  ['꿀 토마토 주스', 'ade', 3800, '달콤한 꿀과 토마토의 건강한 조화'],
  ['그레인 바나나 주스', 'ade', 3800, '고소한 곡물과 바나나가 어우러진 주스'],
  ['수박주스', 'ade', 3900, '시원하고 달콤한 수박으로 만든 주스'],
  ['레몬에이드', 'ade', 3500, '상큼한 레몬이 톡 쏘는 에이드'],
  ['자몽에이드', 'ade', 3500, '쌉싸름하고 상큼한 자몽 에이드'],
  ['망고에이드', 'ade', 3500, '달콤한 망고 향이 가득한 에이드'],
  ['유자에이드', 'ade', 3500, '향긋한 유자 향이 매력적인 에이드'],
  ['청포도에이드', 'ade', 3500, '상큼달콤한 청포도로 만든 에이드'],
  ['블루레몬에이드', 'ade', 3500, '상큼한 레몬에 블루베리 향을 더한 에이드'],
  ['키위주스', 'ade', 3800, '새콤달콤한 키위 과육이 가득한 주스'],
  ['오렌지당근주스', 'ade', 3800, '오렌지와 당근의 건강한 조화'],
  ['딸기주스', 'ade', 4300, '달콤한 딸기 과육이 가득한 주스'],
  // 베이커리
  ['블루베리 크림치즈 베이글', 'bakery', 4800, '블루베리와 크림치즈가 어우러진 베이글'],
  ['무화과 크림치즈 베이글', 'bakery', 4800, '달콤한 무화과와 크림치즈의 조화'],
  ['대파베이컨 크림치즈 베이글', 'bakery', 4800, '고소한 대파와 베이컨이 들어간 베이글'],
  ['플레인 베이글', 'bakery', 3000, '담백하고 쫄깃한 기본 베이글'],
  ['버터 팬케이크', 'bakery', 4500, '폭신하고 버터 향 가득한 팬케이크'],
  ['크루아상', 'bakery', 3500, '겹겹이 바삭한 프랑스식 페이스트리'],
  ['허니 카라멜 브레드', 'bakery', 5600, '달콤한 꿀과 카라멜이 어우러진 빵'],
  ['소금빵', 'bakery', 3300, '짭짤한 소금과 버터가 조화로운 빵'],
  ['모카번', 'bakery', 3200, '진한 커피 향이 은은한 폭신한 빵'],
  ['플레인 와플', 'bakery', 3000, '바삭하고 담백한 기본 와플'],
  ['크림치즈 와플', 'bakery', 3900, '부드러운 크림치즈를 올린 와플'],
  ['생크림 와플', 'bakery', 3200, '폭신한 생크림을 듬뿍 올린 와플'],
  ['프레즐', 'bakery', 3000, '쫄깃하고 짭짤한 매듭 모양의 빵'],
  ['잉글리쉬 머핀', 'bakery', 4000, '담백하고 쫄깃한 식감의 머핀'],
  ['플레인 크로플', 'bakery', 3300, '크루아상 반죽을 와플로 구운 바삭한 디저트'],
  ['크로크무슈', 'bakery', 4800, '햄과 치즈, 베샤멜 소스가 올라간 프랑스식 샌드위치'],
  // 디저트
  ['바스크 치즈케이크', 'dessert', 3600, '겉은 진하게 탄 듯, 속은 부드러운 스페인식 치즈케이크'],
  ['버터떡', 'dessert', 2500, '쫄깃한 떡에 달콤한 연유를 올린 디저트'],
  ['티라미수', 'dessert', 5200, '커피와 마스카포네 치즈가 어우러진 이탈리아 디저트'],
  ['초콜릿 청크쿠키', 'dessert', 2500, '초콜릿 덩어리가 듬뿍 들어간 쿠키'],
  ['화이트초코 마카다미아 쿠키', 'dessert', 2500, '화이트초콜릿과 마카다미아가 어우러진 쿠키'],
  ['초코 치즈스틱케이크', 'dessert', 2600, '진한 초콜릿과 크림치즈가 어우러진 스틱케이크'],
  ['플레인 치즈스틱케이크', 'dessert', 2600, '담백한 크림치즈로 만든 스틱케이크'],
  ['초코생크림 조각케이크', 'dessert', 5000, '진한 초콜릿과 부드러운 생크림 케이크'],
  ['우유생크림 조각케이크', 'dessert', 5000, '담백한 우유와 부드러운 생크림 케이크'],
  ['초코 티라미수 조각케이크', 'dessert', 5000, '초콜릿과 티라미수가 만난 조각 케이크'],
  ['수플레 치즈 조각케이크', 'dessert', 5000, '부드럽고 폭신한 수플레 치즈케이크'],
  ['데블스 초코 조각케이크', 'dessert', 5000, '진하고 묵직한 초콜릿 조각 케이크']
];

// ============================================
// 영양/알레르기 정보 산출
// (실제 매장 데이터가 아닌, 데모용 추정치입니다)
// ============================================

// 제조시설 공통 취급 알레르기 유발물질 (모든 메뉴 공통 고지)
const FACILITY_ALLERGENS = ['우유', '대두', '밀', '계란', '땅콩', '호두', '오징어'];

function hashSeed(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

// name/field 조합으로 늘 같은 값이 나오는 결정론적 난수 (0~1)
function seededRatio(seed) {
  return (hashSeed(seed) % 1000) / 1000;
}

function seededRange(seed, min, max) {
  return Math.round(min + seededRatio(seed) * (max - min));
}

// 커피/차/스무디 등 음료의 실제 성격(블랙/우유베이스/카페인 유무)을 이름으로 분류
function classifyStyle(name, category) {
  if (category === 'coffee') {
    return /^아메리카노$|^콜드브루$/.test(name) ? 'coffee-black' : 'coffee-milk';
  }
  if (category === 'tea') {
    if (/허브티|히비스커스|대추차|쌍화차|매실차|청귤생강차/.test(name)) return 'tea-herbal';
    return 'tea-lowcaf';
  }
  if (category === 'smoothie') {
    return /초코|자바칩|모카|그린티/.test(name) ? 'smoothie-coffee' : 'smoothie-fruit';
  }
  if (category === 'dessert' && /티라미수/.test(name)) return 'dessert-coffee';
  return category;
}

const NUTRITION_PROFILES = {
  'coffee-black':   { caffeine: [150, 220], calories: [5, 15],    sodium: [5, 15],    carbs: [0, 3],   sugar: [0, 1],   fat: [0, 0.3], satFat: [0, 0],   protein: [0.3, 1] },
  'coffee-milk':    { caffeine: [130, 200], calories: [180, 320], sodium: [60, 120],  carbs: [20, 34], sugar: [16, 30], fat: [5, 11],  satFat: [3, 7],   protein: [6, 11] },
  'non-coffee':     { caffeine: [0, 30],    calories: [200, 380], sodium: [80, 160],  carbs: [30, 50], sugar: [22, 38], fat: [6, 13],  satFat: [4, 8],   protein: [5, 10] },
  'tea-herbal':     { caffeine: [0, 0],     calories: [0, 10],    sodium: [0, 10],    carbs: [0, 3],   sugar: [0, 2],   fat: [0, 0],   satFat: [0, 0],   protein: [0, 0] },
  'tea-lowcaf':     { caffeine: [15, 40],   calories: [5, 90],    sodium: [0, 15],    carbs: [2, 22],  sugar: [2, 20],  fat: [0, 0],   satFat: [0, 0],   protein: [0, 0] },
  'smoothie-coffee':{ caffeine: [60, 140],  calories: [280, 420], sodium: [80, 150],  carbs: [45, 65], sugar: [34, 52], fat: [8, 16],  satFat: [5, 10],  protein: [4, 8] },
  'smoothie-fruit': { caffeine: [0, 0],     calories: [220, 380], sodium: [40, 100],  carbs: [40, 70], sugar: [30, 55], fat: [2, 9],   satFat: [1, 5],   protein: [2, 7] },
  ade:              { caffeine: [0, 0],     calories: [120, 220], sodium: [0, 20],    carbs: [28, 52], sugar: [24, 46], fat: [0, 1],   satFat: [0, 0],   protein: [0, 1] },
  bakery:           { caffeine: [0, 0],     calories: [250, 480], sodium: [250, 500], carbs: [30, 55], sugar: [6, 20],  fat: [8, 22],  satFat: [4, 12],  protein: [6, 13] },
  dessert:          { caffeine: [0, 0],     calories: [320, 520], sodium: [120, 260], carbs: [30, 55], sugar: [20, 38], fat: [14, 28], satFat: [8, 18],  protein: [4, 9] },
  'dessert-coffee': { caffeine: [10, 20],   calories: [320, 520], sodium: [120, 260], carbs: [30, 55], sugar: [20, 38], fat: [14, 28], satFat: [8, 18],  protein: [4, 9] }
};

function gramsFor(name) {
  if (/쿠키|스틱케이크/.test(name)) return 45;
  if (/조각케이크|치즈케이크|티라미수/.test(name)) return 120;
  if (/베이글|소금빵|모카번|머핀/.test(name)) return 100;
  if (/와플|브레드|크로플|크로크무슈/.test(name)) return 150;
  if (/프레즐/.test(name)) return 80;
  if (/떡/.test(name)) return 70;
  return 100;
}

function mlFor(price) {
  if (price < 3000) return 355;
  if (price < 4000) return 473;
  return 591;
}

function buildNutrition(item) {
  const style = classifyStyle(item.name, item.category);
  const profile = NUTRITION_PROFILES[style] || NUTRITION_PROFILES[item.category] || NUTRITION_PROFILES.dessert;
  const isSolid = item.category === 'bakery' || item.category === 'dessert';

  const caffeine = seededRange(item.name + 'caffeine', profile.caffeine[0], profile.caffeine[1]);

  return {
    caffeineLevel: caffeine === 0 ? '카페인 없음' : caffeine < 100 ? '저카페인' : '고카페인',
    servingSize: isSolid ? gramsFor(item.name) : mlFor(item.price),
    servingUnit: isSolid ? 'g' : 'mL',
    caffeine,
    calories: seededRange(item.name + 'calories', profile.calories[0], profile.calories[1]),
    sodium: seededRange(item.name + 'sodium', profile.sodium[0], profile.sodium[1]),
    carbs: seededRange(item.name + 'carbs', profile.carbs[0], profile.carbs[1]),
    sugar: seededRange(item.name + 'sugar', profile.sugar[0], profile.sugar[1]),
    fat: Math.round((profile.fat[0] + seededRatio(item.name + 'fat') * (profile.fat[1] - profile.fat[0])) * 10) / 10,
    saturatedFat: Math.round((profile.satFat[0] + seededRatio(item.name + 'satfat') * (profile.satFat[1] - profile.satFat[0])) * 10) / 10,
    protein: Math.round((profile.protein[0] + seededRatio(item.name + 'protein') * (profile.protein[1] - profile.protein[0])) * 10) / 10
  };
}

function buildAllergenTriggers(item) {
  const { name, category } = item;
  const triggers = new Set();

  if (category === 'non-coffee' || /라떼|카푸치노|모카|스페너|크림|치즈|우유|버터|요거트|와플/.test(name)) {
    triggers.add('우유');
  }
  if (category === 'bakery' || category === 'dessert') {
    triggers.add('밀');
    triggers.add('계란');
    triggers.add('대두');
  }
  if (/복숭아/.test(name)) triggers.add('복숭아');
  if (/토마토/.test(name)) triggers.add('토마토');
  if (/마카다미아/.test(name)) triggers.add('호두');
  if (category === 'ade') triggers.add('아황산류');

  return [...triggers];
}

function buildOrigin(item) {
  const { name, category } = item;
  const origin = [];

  if (category === 'coffee' || /초코자바칩|모카자바칩/.test(name)) {
    origin.push('커피원두(콜롬비아, 브라질 외)');
  }
  if (category === 'tea') {
    if (/허브티|히비스커스/.test(name)) origin.push('허브(수입)');
    else if (/홍차|아이스티|블랙퍼스트|블랙티/.test(name)) origin.push('찻잎(스리랑카, 인도 외)');
    else origin.push('국내산 농산물');
  }
  if (category === 'ade') origin.push('과일농축액(수입 또는 국산)');
  if (category === 'bakery') origin.push('밀가루(미국산 외)');
  if (category === 'dessert') origin.push('설탕(국산), 우유(국산)');
  if ((category === 'non-coffee' || category === 'smoothie') && !origin.includes('우유(국산)')) {
    origin.push('우유(국산)');
  }

  return origin.length ? origin : ['정보 없음'];
}

// 실제 매장 영양성분표를 확인해 반영한 값 (메뉴명 기준으로 자동 추정치를 덮어씀)
const REAL_NUTRITION_OVERRIDES = {
  '아메리카노': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 185.8, calories: 11.6, sodium: 6.3, carbs: 2.0, sugar: 0.0, fat: 0.1, saturatedFat: 0.1, protein: 0.8 },
    allergens: { triggers: ['복숭아', '아황산류'], facility: ['우유', '땅콩', '대두', '밀', '알류', '호두', '오징어'] },
    origin: ['커피원두(브라질, 콜롬비아 외)']
  },
  '카페라떼': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 247.7, calories: 155.5, sodium: 108.4, carbs: 12.6, sugar: 10.0, fat: 8.1, saturatedFat: 5.3, protein: 7.1 },
    allergens: { triggers: ['우유'], facility: ['대두', '땅콩', '호두', '복숭아', '밀'] },
    origin: ['우유(국산)', '커피원두(브라질, 콜롬비아 외)']
  },
  '바닐라라떼': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 247.7, calories: 198.4, sodium: 93.4, carbs: 30.8, sugar: 15.2, fat: 6.9, saturatedFat: 4.5, protein: 6.2 },
    allergens: { triggers: ['우유'], facility: ['우유', '땅콩', '대두', '복숭아', '토마토', '호두', '아황산류', '밀'] },
    origin: ['우유(국산)', '커피원두(브라질, 콜롬비아 외)', '말티톨', '자일리톨', '감미료(수크랄로스)']
  },
  '헤이즐넛라떼': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 247.7, calories: 195.2, sodium: 93.4, carbs: 31.6, sugar: 15.2, fat: 6.9, saturatedFat: 4.5, protein: 6.2 },
    allergens: { triggers: ['밀', '대두', '우유', '달걀', '돼지고기', '조개류(굴)', '토마토'], facility: ['계란', '우유', '메밀', '땅콩', '대두', '밀', '게', '새우', '돼지고기', '복숭아', '토마토', '호두', '닭고기', '쇠고기', '오징어', '조개류(굴, 전복, 홍합 포함)', '잣'] },
    origin: ['우유(국산)', '커피원두(브라질, 콜롬비아 외)', '말티톨', '자일리톨', '감미료(수크랄로스)']
  },
  '카푸치노': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 247.7, calories: 194.3, sodium: 133.5, carbs: 16.0, sugar: 13.2, fat: 10.1, saturatedFat: 6.6, protein: 8.6 },
    allergens: { triggers: ['우유', '대두'], facility: ['우유', '밀', '대두', '메밀', '난류', '호두', '땅콩', '토마토', '복숭아'] },
    origin: ['우유(국산)', '커피원두(브라질, 콜롬비아 외)']
  },
  '카라멜마끼아또': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 247.7, calories: 304.0, sodium: 130.2, carbs: 52.3, sugar: 39.4, fat: 7.8, saturatedFat: 5.1, protein: 6.6 },
    allergens: { triggers: ['우유'], facility: ['밀', '달걀', '땅콩', '대두', '소고기', '복숭아', '호두'] },
    origin: ['우유(국산)', '커피원두(브라질, 콜롬비아 외)', '유크림(호주산)100%', '탈지분유(탈지유(국산))100%', '정제소금(국산)', '말티톨', '자일리톨', '감미료(수크랄로스)']
  },
  '카페모카': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 253.6, calories: 409.4, sodium: 137.2, carbs: 54.5, sugar: 49.7, fat: 17.5, saturatedFat: 13.5, protein: 7.6 },
    allergens: { triggers: ['우유', '대두'], facility: ['밀', '달걀', '땅콩', '쇠고기', '복숭아', '호두', '메밀', '게', '새우', '돼지고기', '토마토', '아황산류', '닭고기', '오징어', '조개류(굴, 전복, 홍합 포함)'] },
    origin: ['우유(국산)', '커피원두(브라질, 콜롬비아 외)', '디다크[팜핵에스테르화유(말레이시아)]', '팜스테아린[팜핵에스테르화유(말레이시아 등)]', '코코아분말2(말레이시아)', '혼합분유(벨기에산)', '코코아분말2(싱가포르산)', '팜핵경화유(인도네시아산)', '정제소금(국내산)', '코코아분말(네덜란드산)']
  },
  '돌체라떼': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 247.7, calories: 265.4, sodium: 132.2, carbs: 32.7, sugar: 30.0, fat: 10.3, saturatedFat: 6.6, protein: 9.7 },
    allergens: { triggers: ['우유', '대두'], facility: ['대두', '달걀', '토마토', '복숭아', '밀', '땅콩', '호두'] },
    origin: ['우유(국산)', '커피원두(브라질, 콜롬비아 외)', '원유(국산, 표준화우유지방 3.6%) 85.4%', '유당(미국산)']
  },
  '콜드브루': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 181.0, calories: 17.7, sodium: 0.0, carbs: 3.0, sugar: 0.0, fat: 0.0, saturatedFat: 0.0, protein: 1.0 },
    allergens: { triggers: [], facility: [] },
    origin: ['더치커피추출액(고형분 3% 이상/생두원산지: 에디오피아, 인도) 100%']
  },
  '콜드브루 라떼': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 181.0, calories: 122.7, sodium: 75.0, carbs: 10.5, sugar: 7.5, fat: 6.0, saturatedFat: 3.9, protein: 5.5 },
    allergens: { triggers: ['우유'], facility: ['대두', '땅콩', '호두', '복숭아', '밀'] },
    origin: ['우유(국산)', '더치커피추출액(고형분 3% 이상/생두원산지: 에디오피아, 인도) 100%']
  },
  '아인슈페너': {
    nutrition: { caffeineLevel: '커피', servingSize: 591, servingUnit: 'mL', caffeine: 185.91, calories: 231.8, sodium: 78.84, carbs: 28.24, sugar: 21.99, fat: 13.43, saturatedFat: 11.93, protein: 4.54 },
    allergens: { triggers: ['대두', '우유'], facility: ['땅콩', '대두', '복숭아', '토마토', '호두', '아황산류', '달걀', '밀', '난류'] },
    origin: ['커피원두(브라질, 콜롬비아 외)', '팜핵경화유(인도네시아)', '가공유크림(스페인)', '혼합분유(네덜란드)', '유청(독일)', '우유(국산)', '원유(국산, 표준화우유지방 3.6%) 85.4%', '유당(미국산)', '말티톨', '자일리톨', '감미료(수크랄로스)', '코코아분말(네덜란드산)']
  },
  '아인슈페너라떼': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 247.8, calories: 340.7, sodium: 155.9, carbs: 36.4, sugar: 29.5, fat: 19.5, saturatedFat: 15.8, protein: 9.3 },
    allergens: { triggers: ['대두', '우유'], facility: ['우유', '땅콩', '대두', '복숭아', '토마토', '호두', '아황산류', '달걀', '밀', '난류'] },
    origin: ['우유(국산)', '커피원두(브라질, 콜롬비아 외)', '가공유크림(스페인)', '혼합분유(네덜란드)', '유청(독일)', '원유(국산, 표준화우유지방 3.6%) 85.4%', '유당(미국산)', '말티톨', '자일리톨', '감미료(수크랄로스)', '코코아분말(네덜란드산)']
  },
  '흑당 카페라떼': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 123.9, calories: 284.6, sodium: 115.0, carbs: 45.5, sugar: 44.2, fat: 8.0, saturatedFat: 5.2, protein: 6.6 },
    allergens: { triggers: ['대두', '우유'], facility: ['밀', '대두', '메밀', '새우', '돼지고기', '토마토', '계란', '고등어', '닭고기', '쇠고기', '조개류(굴, 홍합, 전복 포함)', '오징어', '땅콩', '복숭아', '아황산류', '호두'] },
    origin: ['우유(국산)', '커피원두(브라질, 콜롬비아 외)', '다크 머스코바도 비정제사탕수수당(모리셔스산: 사탕수수원당 100%) 30%', '라이트 머스코바도 비정제사탕수수당(모리셔스산: 사탕수수원당 100%) 30%']
  },
  '흑당 버블 카페라떼': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 124, calories: 352, sodium: 118.0, carbs: 62, sugar: 43.7, fat: 8, saturatedFat: 5.2, protein: 6.6 },
    allergens: { triggers: ['우유'], facility: ['알류', '우유', '메밀', '땅콩', '대두', '밀', '고등어', '게', '새우', '돼지고기', '복숭아', '토마토', '아황산류', '호두', '닭고기', '쇠고기', '오징어', '조개류(굴, 전복, 홍합 포함)', '잣'] },
    origin: ['우유(국산)', '커피원두(브라질, 콜롬비아 외)', '다크 머스코바도 비정제사탕수수당 30%', '라이트 머스코바도 비정제사탕수수당 30%', '타피오카펄(중국)']
  },
  '달고나라떼': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 185.8, calories: 337.1, sodium: 158.5, carbs: 60.1, sugar: 45.8, fat: 8.1, saturatedFat: 5.3, protein: 6.9 },
    allergens: { triggers: ['우유'], facility: ['우유', '대두', '밀', '메밀', '게', '새우', '돼지고기', '토마토', '계란', '고등어', '닭고기', '쇠고기', '조개류(굴, 전복, 홍합 포함)', '오징어', '땅콩', '복숭아', '아황산류', '잣', '알류'] },
    origin: ['우유(국산)', '커피원두(브라질, 콜롬비아 외)', '말티톨', '자일리톨', '감미료(수크랄로스)', '다크 머스코바도 비정제사탕수수당(모리셔스산: 사탕수수원당 100%) 30%', '라이트 머스코바도 비정제사탕수수당(모리셔스산: 사탕수수원당 100%) 30%']
  },
  '아샷추': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 201.4, calories: 201.6, sodium: 6.3, carbs: 49.5, sugar: 44.5, fat: 0.1, saturatedFat: 0.1, protein: 0.8 },
    allergens: { triggers: ['복숭아', '아황산류'], facility: ['우유', '땅콩', '대두', '밀', '알류', '호두', '오징어'] },
    origin: ['홍차추출분말(중국산)', '복숭아과즙분말[복숭아과즙농축액(국산)]', '커피원두(브라질, 콜롬비아 외)']
  },
  '생초콜릿라떼': {
    nutrition: { caffeineLevel: '저카페인', servingSize: 591, servingUnit: 'mL', caffeine: 15.5, calories: 547.4, sodium: 162.8, carbs: 53.0, sugar: 40.9, fat: 32.3, saturatedFat: 25.6, protein: 8.9 },
    allergens: { triggers: ['대두', '우유'], facility: ['게', '계란', '고등어', '닭고기', '돼지고기', '땅콩', '밀', '복숭아', '아황산류', '조개류', '토마토', '잣', '메밀'] },
    origin: ['우유(국산)', '식물성크림[팜핵경화유(인도네시아산, 말레이시아산)]', '쇼트닝[대두경화유(프랑스산)]', '가공유지[팜핵유(말레이시아산)]', '코코아분말(네덜란드산)', '디다크[팜핵에스테르화유(말레이시아산)]', '팜스테아린에스테르화유(말레이시아산)', '코코아분말(말레이시아산)', '야자유(국외산: 말레이시아, 필리핀, 인도네시아 등)', '혼합분유(벨기에산)', '코코아분말2(싱가포르산)']
  },
  '곡물라떼': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 470.1, sodium: 125.0, carbs: 69.4, sugar: 45.4, fat: 14.2, saturatedFat: 7.0, protein: 15.3 },
    allergens: { triggers: ['대두', '밀', '땅콩', '호두', '메밀'], facility: ['알류(계란)', '우유', '고등어', '게', '새우', '돼지고기', '복숭아', '토마토', '닭고기', '쇠고기', '오징어', '조개류(굴, 전복, 홍합 포함)', '잣'] },
    origin: ['우유(국산)', '17곡 분말[대두(외국산: 중국, 미국, 캐나다 등), 현미, 흑임자, 통밀(미국산), 찹쌀, 검정깨, 흑미, 아몬드(미국산), 검정콩, 수수, 호두(미국산), 해바라기씨, 호박씨, 메밀, 핀콩무]']
  },
  '더블초코라떼': {
    nutrition: { caffeineLevel: '저카페인', servingSize: 591, servingUnit: 'mL', caffeine: 9.1, calories: 512.0, sodium: 190.3, carbs: 67.8, sugar: 58.4, fat: 22.2, saturatedFat: 16.1, protein: 9.6 },
    allergens: { triggers: ['우유', '대두'], facility: ['대두', '땅콩', '밀', '복숭아', '아황산류', '돼지고기', '게', '고등어', '새우', '닭고기', '오징어', '조개류(굴, 전복, 홍합 포함)', '잣'] },
    origin: ['우유(국산)', '디다크[팜핵에스테르화유(말레이시아산)]', '팜스테아린에스테르화유(말레이시아산)', '코코아분말(말레이시아산)', '야자유(국외산: 말레이시아, 필리핀, 인도네시아 등)', '혼합분유2(싱가포르산)', '코코아분말(네덜란드산)', '팜핵경화유(인도네시아산)', '정제소금(국내산)', '코코아엑스(스페인산)', '유당(프랑스산)']
  },
  '쿠키초코라떼': {
    nutrition: { caffeineLevel: '저카페인', servingSize: 591, servingUnit: 'mL', caffeine: 0.8, calories: 631.5, sodium: 459.5, carbs: 83.6, sugar: 73.0, fat: 27.7, saturatedFat: 15.7, protein: 11.2 },
    allergens: { triggers: ['우유', '대두', '밀'], facility: ['난류', '땅콩', '고등어', '게', '새우', '돼지고기', '복숭아', '토마토', '아황산류', '호두', '닭고기', '쇠고기', '오징어', '조개류(굴, 전복, 홍합 포함)', '잣'] },
    origin: ['우유(국산)', '오레오쿠키[쿠키가루[밀가루(밀, 미국, 호주)], 식물성유지[팜유(말레이시아)]]', '식물성크림[식물성크림분말M[팜유(말레이시아)]]', '가공유크림(이태리)', '유당(미국산)', '흑맥주쿠키[밀가루(밀: 호주산, 미국산)]', '식물성유지[팜유(말레이시아산)]', '코코아분말(네덜란드산)', '디다크[팜핵에스테르화유(말레이시아산)]', '팜스테아린에스테르화유(말레이시아산)', '야자유(외국산: 말레이시아, 필리핀, 인도네시아 등)']
  },
  '고구마라떼': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 384.1, sodium: 113.0, carbs: 68.1, sugar: 42.1, fat: 8.8, saturatedFat: 5.7, protein: 7.0 },
    allergens: { triggers: ['우유'], facility: ['대두', '땅콩', '난류', '밀', '메밀', '토마토', '아황산류'] },
    origin: ['우유(국산)', '자색고구마(인도네시아산)', '블랙캐롯농축액(영국산)']
  },
  '밀크티': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 123.5, calories: 270.0, sodium: 100.0, carbs: 39.9, sugar: 31.8, fat: 9.5, saturatedFat: 5.2, protein: 6.8 },
    allergens: { triggers: ['우유'], facility: ['땅콩', '대두', '복숭아', '토마토', '호두', '아황산류', '잣', '난류', '밀', '고등어', '게', '새우', '돼지고기', '닭고기', '쇠고기', '오징어', '조개류(굴, 전복, 홍합 포함)'] },
    origin: ['우유(국산)', '실론티파우더[홍차 100%(스리랑카)]', '혼합분유(네덜란드)', '말티톨', '자일리톨', '감미료(수크랄로스)', '첨출차(외국산: 스리랑카)']
  },
  '흑당라떼': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 327.0, sodium: 137.0, carbs: 50.5, sugar: 50.5, fat: 10.0, saturatedFat: 6.5, protein: 7.5 },
    allergens: { triggers: ['대두', '우유'], facility: ['우유', '대두', '밀', '메밀', '게', '새우', '돼지고기', '토마토', '계란', '고등어', '쇠고기', '조개류(굴, 홍합, 전복 포함)', '오징어', '땅콩', '복숭아', '아황산류', '잣'] },
    origin: ['우유(국산)', '다크 머스코바도 비정제사탕수수당(모리셔스산: 사탕수수원당 100%) 30%', '라이트 머스코바도 비정제사탕수수당(모리셔스산: 사탕수수원당 100%) 30%']
  },
  '그린티라떼': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 112.7, calories: 323.8, sodium: 137.3, carbs: 43.0, sugar: 43.7, fat: 12.1, saturatedFat: 7.2, protein: 9.3 },
    allergens: { triggers: ['우유'], facility: ['난류', '땅콩', '대두', '밀', '복숭아', '아황산류', '호두', '토마토'] },
    origin: ['우유(국산)', '유기농가루녹차(국산)', '식물성크림[식물성크림분말M(말레이시아)]', '버터유분말[버터유(우유(국산))]']
  },
  '망고라떼': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 443.4, sodium: 124.3, carbs: 73.3, sugar: 66.8, fat: 14.2, saturatedFat: 11.1, protein: 5.1 },
    allergens: { triggers: ['우유', '대두'], facility: ['대두', '호두', '복숭아', '우유', '계란', '밀', '토마토'] },
    origin: ['우유(국산)', '망고퓌레[망고(인도산)]', '냉동망고(베트남)', '팜핵경화유(인도네시아산)', '정제소금(국산)']
  },
  '블루베리라떼': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 468.4, sodium: 131.8, carbs: 79.6, sugar: 70.5, fat: 14.2, saturatedFat: 11.1, protein: 5.1 },
    allergens: { triggers: ['아황산류', '대두', '우유'], facility: ['대두', '호두', '복숭아', '우유', '계란', '밀', '토마토', '쇠고기'] },
    origin: ['우유(국산)', '블루베리퓌레[블루베리(칠레산)]', '포도농축액(칠레산)', '딸기퓌레[딸기(국산)]', '냉동블루베리(미국)', '팜핵경화유(인도네시아산)', '정제소금(국산)']
  },
  '딸기라떼': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 459.6, sodium: 131.8, carbs: 77.1, sugar: 69.3, fat: 14.2, saturatedFat: 11.1, protein: 5.1 },
    allergens: { triggers: ['우유', '대두'], facility: ['대두', '호두', '복숭아', '우유', '계란', '밀', '토마토'] },
    origin: ['우유(국산)', '딸기퓌레[딸기(국산)]', '딸기농축액(이스라엘산)', '냉동딸기(중국)', '팜핵경화유(인도네시아산)', '정제소금(국산)']
  },
  '청귤생강차': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 191.2, sodium: 8.7, carbs: 47.5, sugar: 45.8, fat: 0.1, saturatedFat: 0.1, protein: 0.1 },
    allergens: { triggers: [], facility: ['달걀', '우유', '메밀', '땅콩', '대두', '밀', '고등어', '게', '새우', '돼지고기', '복숭아', '토마토', '아황산류', '호두', '닭고기', '쇠고기', '오징어', '조개류(굴, 전복, 홍합 포함)', '잣'] },
    origin: ['청귤레몬청 6%[청귤 50%(국산)]', '생강청 5.5%[생강 50%(국산)]', '생강농축액 1.5%[생강 60%(국산)]']
  },
  '대추차': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 197.9, sodium: 8.3, carbs: 49.2, sugar: 41.1, fat: 0.0, saturatedFat: 0.0, protein: 0.2 },
    allergens: { triggers: [], facility: ['우유', '대두', '복숭아', '토마토', '아황산류'] },
    origin: ['대추농축액[대추추출액(국산)]', '당절임대추(중국산, 대추)']
  },
  '쌍화차': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 231.2, sodium: 13.8, carbs: 57.0, sugar: 54.0, fat: 0.1, saturatedFat: 0.0, protein: 0.7 },
    allergens: { triggers: [], facility: [] },
    origin: ['쌍화농축액[고형분 60% 이상(작약, 숙지황, 황기, 대추, 천궁, 당귀 중국산), 계피, 감초 3.6%]', '건대추(대추 100%/중국)']
  },
  '매실차': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 242.3, sodium: 26.1, carbs: 59.8, sugar: 44.2, fat: 0.2, saturatedFat: 0.0, protein: 0.3 },
    allergens: { triggers: [], facility: ['우유', '대두', '밀', '복숭아'] },
    origin: ['사과농축액 2.86%(칠레산)', '매실농축액A 1.3%(고형분 63% 이상: 국산)', '매실농축액 0.5%(고형분 66% 이상/매실 90%, 저감미당 10%/국산)']
  },
  '허브티 페퍼민트': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 5.0, sodium: 3.6, carbs: 1.0, sugar: 0.1, fat: 0.0, saturatedFat: 0.0, protein: 0.2 },
    allergens: { triggers: [], facility: ['메밀', '복숭아', '대두'] },
    origin: ['유기농 페퍼민트(외국산: 미국, 독일, 이집트 등)']
  },
  '허브티 캐모마일': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 5.0, sodium: 7.9, carbs: 0.9, sugar: 0.1, fat: 0.0, saturatedFat: 0.0, protein: 0.2 },
    allergens: { triggers: ['우유', '대두'], facility: ['메밀', '복숭아', '대두'] },
    origin: ['유기농 캐모마일꽃(외국산: 크로아티아)']
  },
  '홍차 얼그레이': {
    nutrition: { caffeineLevel: '저카페인', servingSize: 591, servingUnit: 'mL', caffeine: 26.9, calories: 5.1, sodium: 0.0, carbs: 0.9, sugar: 0.0, fat: 0.0, saturatedFat: 0.0, protein: 0.3 },
    allergens: { triggers: ['우유'], facility: ['메밀', '복숭아', '대두'] },
    origin: ['침출차(외국산: 스리랑카)']
  },
  '아이스티': {
    nutrition: { caffeineLevel: '디카페인', servingSize: 591, servingUnit: 'mL', caffeine: 0.1, calories: 2.3, sodium: 14.4, carbs: 12.3, sugar: 0.1, fat: 0.0, saturatedFat: 0.0, protein: 0.0 },
    allergens: { triggers: ['우유', '달걀', '메밀', '땅콩', '대두', '밀', '고등어', '게', '새우', '돼지고기', '토마토', '아황산류', '호두', '닭고기', '쇠고기', '오징어', '조개류'], facility: ['잣'] },
    origin: ['복숭아농축액(이스라엘산)', '홍차추출분말(인도산)']
  },
  '허니레몬티': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 276.6, sodium: 81.7, carbs: 68.8, sugar: 54.6, fat: 0.0, saturatedFat: 0.0, protein: 0.2 },
    allergens: { triggers: ['밀', '대두', '우유', '달걀', '돼지고기', '조개류(굴)', '토마토'], facility: ['복숭아', '토마토', '우유', '대두', '견과류', '잣', '호두', '땅콩'] },
    origin: ['당침레몬[레몬(미국산)]', '사양벌꿀(국산)', '레몬농축주스베이스[레몬농축액(이스라엘)]', '레몬과즙(이스라엘)', '레몬농축액(스페인산)', '라임농축액(스페인산)']
  },
  '허니유자티': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 272.2, sodium: 62.1, carbs: 67.5, sugar: 49.0, fat: 0.0, saturatedFat: 0.0, protein: 0.0 },
    allergens: { triggers: ['밀', '대두', '우유', '달걀', '돼지고기', '조개류(굴)', '토마토'], facility: ['복숭아', '토마토', '우유', '메밀', '대두', '견과류', '잣', '호두', '땅콩'] },
    origin: ['당침유자[유자(국산)]', '사양벌꿀(국산)', '레몬농축액(스페인산)', '라임농축액(스페인산)']
  },
  '허니자몽티': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 288.1, sodium: 64.7, carbs: 71.1, sugar: 55.9, fat: 0.2, saturatedFat: 0.0, protein: 0.4 },
    allergens: { triggers: ['밀', '대두', '우유', '달걀', '돼지고기', '조개류(굴)', '토마토'], facility: ['계란', '우유', '메밀', '땅콩', '대두', '밀', '게', '새우', '돼지고기', '복숭아', '토마토', '호두', '닭고기', '쇠고기', '오징어', '조개류(굴, 전복, 홍합 포함)', '잣'] },
    origin: ['당침자몽[자몽(미국산)]', '사양벌꿀(국산)', '자몽셀[남아프리카공화국]', '레드자몽농축액(이스라엘산)', '자몽농축액베이스[자몽농축액(베트남산)]', '레몬농축액(스페인산)', '라임농축액(스페인산)']
  },
  '블랙퍼스트': {
    nutrition: { caffeineLevel: '저카페인', servingSize: 591, servingUnit: 'mL', caffeine: 28.1, calories: 5.0, sodium: 0.1, carbs: 0.9, sugar: 0.1, fat: 0.0, saturatedFat: 0.0, protein: 0.3 },
    allergens: { triggers: ['아황산류', '우유', '대두', '쇠고기'], facility: ['메밀', '복숭아', '대두'] },
    origin: ['홍차잎(스리랑카산)']
  },
  '히비스커스': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 4.8, sodium: 0.0, carbs: 1.0, sugar: 0.1, fat: 0.0, saturatedFat: 0.0, protein: 0.1 },
    allergens: { triggers: ['대두', '우유'], facility: ['메밀', '복숭아', '대두'] },
    origin: ['유기농 히비스커스꽃잎(이집트산)']
  },
  '자몽허니블랙티': {
    nutrition: { caffeineLevel: '저카페인', servingSize: 591, servingUnit: 'mL', caffeine: 28.1, calories: 243.5, sodium: 27.1, carbs: 57.6, sugar: 55.9, fat: 0.9, saturatedFat: 0.0, protein: 0.3 },
    allergens: { triggers: ['잣', '대두', '밀', '메밀', '호두', '땅콩', '우유', '알류', '복숭아', '토마토', '닭고기', '소고기', '돼지고기', '게', '새우', '고등어', '오징어', '조개류(굴, 홍합, 바지락)', '아황산류'], facility: [] },
    origin: ['사양벌꿀(국산)', '자몽당절임[자몽(미국산)]', '레드자몽농축액(이스라엘산)', '홍차잎(스리랑카산)']
  },
  '제주 한라봉 스무디': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 407.771, sodium: 18.55, carbs: 100.5043, sugar: 84.388, fat: 0.2081, saturatedFat: 0.102855, protein: 0.6974 },
    allergens: { triggers: [], facility: ['우유', '대두', '밀', '토마토', '메밀', '땅콩', '호두', '복숭아', '쇠고기', '난류', '고등어', '게', '새우', '돼지고기', '닭고기', '오징어', '조개류(굴, 전복, 홍합 포함)', '잣'] },
    origin: ['한라봉퓨레[한라봉(국산)]', '감귤농축과즙액(국산)', '나타데코코(베트남)', '만다린오렌지(중국)', '딸기건과육(베트남)']
  },
  '복숭아 스무디': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 413.371, sodium: 20.55, carbs: 101.9043, sugar: 83.988, fat: 0.2081, saturatedFat: 0.102855, protein: 0.6974 },
    allergens: { triggers: [], facility: ['달걀', '우유', '메밀', '땅콩', '대두', '밀', '고등어', '게', '새우', '돼지고기', '복숭아', '토마토', '아황산류', '호두', '닭고기', '쇠고기', '오징어', '조개류(굴, 전복, 홍합 포함)', '잣'] },
    origin: ['냉동백도다이스(중국산)', '복숭아농축액(이스라엘산)', '사양벌꿀(국산)', '정제소금(국산)']
  },
  '딸기치즈케이크스무디': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 590.0, sodium: 318.8, carbs: 103.2, sugar: 91.2, fat: 16.2, saturatedFat: 9.8, protein: 6.9 },
    allergens: { triggers: ['우유', '계란', '돼지고기'], facility: ['달걀', '우유', '밀', '메밀', '땅콩', '게', '새우', '쇠고기', '닭고기', '복숭아', '토마토', '아황산류', '호두', '오징어', '조개류(굴, 전복, 홍합 포함)', '잣'] },
    origin: ['우유(국산)', '식물성크림[팜유(말레이시아)]', '유청분말(프랑스)', '유청분말[외국산(미국, 체코 등)]', '마스카포네치즈(호주)', '크림치즈(호주)', '살균전란액(국산)', '딸기(국산)', '딸기퓨레(국산)', '딸기농축액(칠레산)', '블루베리퓨레[블루베리(칠레산)]', '포도농축액(포도(칠레산))', '딸기퓌레(딸기(국산))']
  },
  '리얼초코자바칩프라페': {
    nutrition: { caffeineLevel: '저카페인', servingSize: 591, servingUnit: 'mL', caffeine: 14.4, calories: 616.3, sodium: 188.0, carbs: 81.2, sugar: 70.8, fat: 28.2, saturatedFat: 13.2, protein: 8.2 },
    allergens: { triggers: ['우유', '대두'], facility: ['호두', '잣', '복숭아', '밀', '쇠고기', '계란', '메밀', '닭고기', '게', '새우', '돼지고기', '토마토', '아황산류'] },
    origin: ['우유(국산)', '다크컴파운드(싱가포르)', '식물성크림[식물성크림분말M[팜(말레이시아)]]', '코코아분말(네덜란드)', '가공유크림[유크림(이태리)]', '유청(미국)', '팜핵경화유(인도네시아산)', '정제소금(국내산)', '디다크[팜핵에스테르화유(말레이시아산)]', '팜스테아린에스테르화유(말레이시아산)', '코코아분말(말레이시아산)', '야자유(외국산: 말레이시아, 필리핀, 인도네시아 등)', '혼합분유(벨기에)', '코코아분말(말레이시아산)', '코코아에스(스페인산)', '코코아버터(싱가포르산)', '유당(프랑스산)']
  },
  '쿠키초코프라페': {
    nutrition: { caffeineLevel: '저카페인', servingSize: 591, servingUnit: 'mL', caffeine: 0.8, calories: 550.6, sodium: 484.0, carbs: 69.8, sugar: 59.2, fat: 26.2, saturatedFat: 14.1, protein: 8.8 },
    allergens: { triggers: ['우유', '대두', '밀'], facility: ['난류', '땅콩', '게', '고등어', '새우', '돼지고기', '복숭아', '토마토', '아황산류', '호두', '닭고기', '쇠고기', '오징어', '조개류(굴, 전복, 홍합 포함)', '잣'] },
    origin: ['우유(국산)', '오레오분쇄쿠키[쿠키가루[밀가루(밀: 미국, 호주)], 식물성유지[팜유(말레이시아)]]', '식물성유지[팜유(말레이시아)]', '블랙컵[밀가루(밀: 호주)]', '가공유크림[유크림(이태리)]', '유당(미국)', '훌쿠키[밀가루(밀: 호주, 미국산)]', '식물성유지[식물성크림분말M[팜유(말레이시아)]]', '코코아분말(네덜란드산)', '디다크[팜핵에스테르화유(말레이시아산)]', '팜스테아린에스테르화유(말레이시아산)', '코코아분말(말레이시아산)', '혼합분유(벨기에산)', '야자유(외국산: 말레이시아, 필리핀, 인도네시아 등)']
  },
  '모카자바칩프라페': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 200.2, calories: 592.9, sodium: 169.3, carbs: 80.6, sugar: 68.3, fat: 26.3, saturatedFat: 12.0, protein: 7.5 },
    allergens: { triggers: ['우유', '대두'], facility: ['호두', '잣', '복숭아', '밀', '쇠고기', '계란', '메밀', '닭고기', '게', '새우', '돼지고기', '토마토', '아황산류'] },
    origin: ['우유(국산)', '커피원두(브라질, 콜롬비아 외)', '다크컴파운드(싱가포르산)', '식물성크림[식물성크림분말M[팜유(말레이시아)]]', '코코아분말(네덜란드산)', '가공유크림[유크림(이태리)]', '유당(미국)', '팜핵경화유(인도네시아산)', '정제소금(국내산)', '디다크[팜핵에스테르화유(말레이시아산)]', '팜스테아린에스테르화유(말레이시아산)', '코코아분말(말레이시아산, 필리핀, 인도네시아 등)', '혼합분유(벨기에산)', '코코아분말2(싱가포르산)', '코코아에스(스페인산)', '코코아버터(싱가포르산)', '유당(프랑스산)']
  },
  '그린티프라페': {
    nutrition: { caffeineLevel: '고카페인', servingSize: 591, servingUnit: 'mL', caffeine: 196.4, calories: 547.0, sodium: 121.9, carbs: 88.5, sugar: 89.4, fat: 17.5, saturatedFat: 12.1, protein: 7.9 },
    allergens: { triggers: ['우유', '대두'], facility: ['난류', '땅콩', '밀', '복숭아', '아황산류', '호두', '잣', '쇠고기'] },
    origin: ['우유(국산)', '유기농가루녹차(국산)', '식물성크림[식물성크림분말M[팜유(말레이시아)]]', '버터유분말[버터유(우유(국산))]', '팜핵경화유(인도네시아산)', '정제소금(국내산)']
  },
  '딸기스무디': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 594.0, sodium: 150.0, carbs: 130.2, sugar: 106.2, fat: 5.6, saturatedFat: 3.8, protein: 4.2 },
    allergens: { triggers: ['우유'], facility: ['대두', '땅콩', '토마토', '복숭아', '밀'] },
    origin: ['우유(국산)', '딸기퓨레[딸기(국산)]', '딸기농축액(이스라엘산)', '냉동딸기(중국)']
  },
  '블루베리스무디': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 532.2, sodium: 134.0, carbs: 114.8, sugar: 93.4, fat: 5.6, saturatedFat: 3.6, protein: 4.3 },
    allergens: { triggers: ['아황산류', '우유', '대두', '쇠고기'], facility: ['대두', '호두', '복숭아', '우유', '계란', '밀', '토마토'] },
    origin: ['우유(국산)', '블루베리퓨레[블루베리(칠레산)]', '포도농축액(칠레산)', '딸기퓨레[딸기(국산)]', '냉동블루베리(미국)']
  },
  '망고스무디': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 546.0, sodium: 126.0, carbs: 119.0, sugar: 98.2, fat: 5.6, saturatedFat: 3.6, protein: 4.2 },
    allergens: { triggers: ['우유', '대두'], facility: ['대두', '호두', '복숭아', '우유', '계란', '밀', '토마토'] },
    origin: ['우유(국산)', '망고퓨레[망고(인도산)]', '냉동망고(베트남)']
  },
  '플레인요거트스무디': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 351.6, sodium: 142.0, carbs: 60.7, sugar: 60.0, fat: 18.5, saturatedFat: 5.2, protein: 6.0 },
    allergens: { triggers: ['우유', '대두'], facility: ['대두', '땅콩', '호두', '토마토', '계란', '복숭아', '밀', '아황산류'] },
    origin: ['우유(국산)', '유청분말[유청분말(외국산)]', '유당(미국산)', '요거트혼합분말(이탈리아산)']
  },
  '딸기요거트스무디': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 371.1, sodium: 129.4, carbs: 69.6, sugar: 66.6, fat: 15.8, saturatedFat: 4.4, protein: 5.1 },
    allergens: { triggers: ['우유'], facility: ['대두', '땅콩', '토마토', '계란', '복숭아', '밀', '아황산류'] },
    origin: ['우유(국산)', '유청분말[유청분말(외국산)]', '유당(미국산)', '요거트혼합분말(이탈리아산)', '딸기퓌레[딸기(국산)]', '딸기농축액(이스라엘산)', '냉동딸기(중국)']
  },
  '블루베리요거트스무디': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 373.9, sodium: 129.4, carbs: 70.4, sugar: 67.0, fat: 15.8, saturatedFat: 4.4, protein: 5.1 },
    allergens: { triggers: ['아황산류', '우유', '대두', '쇠고기'], facility: ['대두', '호두', '토마토', '계란', '복숭아', '밀'] },
    origin: ['우유(국산)', '유청분말[유청분말(외국산)]', '유당(미국산)', '요거트혼합분말(이탈리아산)', '블루베리퓨레(블루베리 99.9%, 칠레산)', '포도농축액(칠레산)', '딸기퓌레(딸기 국산)', '냉동블루베리(미국)']
  },
  '망고요거트스무디': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 365.9, sodium: 127.0, carbs: 68.4, sugar: 65.8, fat: 15.8, saturatedFat: 4.4, protein: 5.1 },
    allergens: { triggers: [], facility: ['대두', '땅콩', '호두', '토마토', '계란', '복숭아', '밀', '아황산류'] },
    origin: ['우유(국산)', '유청분말[유청분말(외국산)]', '유당(미국산)', '요거트혼합분말(이탈리아산)', '망고퓨레[망고(인도산)]', '냉동망고(베트남)']
  },
  '꿀 토마토 주스': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 210, sodium: 10, carbs: 51, sugar: 44, fat: 0, saturatedFat: 0, protein: 0.77 },
    allergens: { triggers: ['토마토'], facility: ['알류(가금류)', '우유', '복숭아', '메밀', '땅콩', '대두', '밀', '고등어', '게', '새우', '돼지고기', '아황산류', '호두', '닭고기', '쇠고기', '오징어', '조개류(굴, 전복, 홍합 포함)', '잣'] },
    origin: ['토마토(국내산)', '사양벌꿀(국내산)', '레몬농축액(이스라엘산)']
  },
  '그레인 바나나 주스': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 328.4, sodium: 157.2, carbs: 67.2, sugar: 41.4, fat: 5.2, saturatedFat: 4, protein: 3.2 },
    allergens: { triggers: ['우유', '대두', '땅콩'], facility: ['계란', '메밀', '밀', '복숭아', '토마토', '호두'] },
    origin: ['바나나(베트남산)', '바나나퓨레(코스타리카산)', '미숫가루{보리(국산), 쌀(국산)}', '가당연유{원유(국산), 유당(미국산)}']
  },
  '수박주스': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 218.7, sodium: 5.0, carbs: 53.7, sugar: 51.7, fat: 0.0, saturatedFat: 0.0, protein: 1.0 },
    allergens: { triggers: [], facility: ['복숭아', '토마토'] },
    origin: ['수박(국내산)', '설탕(국산)']
  },
  '레몬에이드': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 185.6, sodium: 40.5, carbs: 46.6, sugar: 44.2, fat: 0.0, saturatedFat: 0.0, protein: 0.1 },
    allergens: { triggers: ['우유', '계란', '돼지고기'], facility: ['유제품(우유)', '메밀', '땅콩', '대두', '밀', '복숭아', '토마토', '아황산류', '호두', '잣'] },
    origin: ['레몬농축주스베이스[레몬농축액(이스라엘)]', '레몬과육(이스라엘)']
  },
  '자몽에이드': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 200.0, sodium: 28.7, carbs: 49.4, sugar: 48.5, fat: 0.2, saturatedFat: 0.0, protein: 0.4 },
    allergens: { triggers: ['우유', '달걀', '대두', '밀', '땅콩', '호두', '메밀'], facility: ['계란', '우유', '밀', '땅콩', '대두', '새우', '게', '돼지고기', '복숭아', '토마토', '호두', '닭고기', '쇠고기', '오징어', '조개류(굴, 전복, 홍합 포함)', '잣'] },
    origin: ['자몽셀(남아프리카공화국)', '레드자몽농축액(이스라엘산)', '자몽농축베이스D[자몽농축액(베트남산)]']
  },
  '망고에이드': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 183.2, sodium: 12.5, carbs: 45.9, sugar: 43.4, fat: 0.0, saturatedFat: 0.0, protein: 0.0 },
    allergens: { triggers: [], facility: ['대두', '땅콩', '잣', '복숭아', '우유', '메밀', '밀', '토마토', '아황산류'] },
    origin: ['망고퓨레[망고(인도산)]', '냉동망고(베트남)']
  },
  '유자에이드': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 332.8, sodium: 46.9, carbs: 83.0, sugar: 66.6, fat: 0.0, saturatedFat: 0.0, protein: 0.1 },
    allergens: { triggers: [], facility: ['복숭아', '토마토', '우유', '메밀', '대두', '견과류', '땅콩', '밀', '아황산류', '호두', '잣'] },
    origin: ['당침유자[유자(국산)]', '사양벌꿀(국산)']
  },
  '청포도에이드': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 220.0, sodium: 19.0, carbs: 54.5, sugar: 52.0, fat: 0.0, saturatedFat: 0.0, protein: 0.5 },
    allergens: { triggers: ['아황산류'], facility: ['메밀', '땅콩', '대두', '밀', '복숭아', '토마토', '호두', '잣'] },
    origin: ['백포도농축액(칠레산)', '사과퓨레[사과(국산)]']
  },
  '블루레몬에이드': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 222.4, sodium: 43.1, carbs: 55.7, sugar: 50.8, fat: 0.0, saturatedFat: 0.0, protein: 0.1 },
    allergens: { triggers: ['아황산류', '우유', '대두', '쇠고기'], facility: ['우유', '메밀', '땅콩', '대두', '밀', '복숭아', '토마토', '호두', '잣'] },
    origin: ['레몬농축주스베이스[레몬농축액(이스라엘)]', '레몬과육(이스라엘)', '클리어오렌지농축액(이스라엘산)']
  },
  '키위주스': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 227.0, sodium: 0.0, carbs: 54.0, sugar: 43.0, fat: 0.9, saturatedFat: 0.0, protein: 1.0 },
    allergens: { triggers: ['우유', '대두'], facility: ['난류', '땅콩', '우유', '대두', '밀', '복숭아', '아황산류', '호두', '달걀', '토마토'] },
    origin: ['키위퓌레[그린키위(뉴질랜드)]', '사과착즙액[사과(국산)]', '음료베이스[키위농축퓨레(칠레산)]']
  },
  '오렌지당근주스': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 189.0, sodium: 35.0, carbs: 46.0, sugar: 37.0, fat: 0.0, saturatedFat: 0.0, protein: 1.0 },
    allergens: { triggers: [], facility: ['토마토', '복숭아'] },
    origin: ['사과착즙액[사과(국산)]', '당근착즙액[당근(국산)]', '오렌지농축액[오렌지(스페인산)]', '오렌지필퓨레[오렌지(스페인산)]']
  },
  '딸기주스': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 591, servingUnit: 'mL', caffeine: 0, calories: 214.1, sodium: 3.3, carbs: 58.0, sugar: 49.9, fat: 0.4, saturatedFat: 0.0, protein: 1.3 },
    allergens: { triggers: ['대두', '밀', '땅콩', '호두', '메밀'], facility: ['알류(가금류)', '우유', '고등어', '게', '새우', '돼지고기', '복숭아', '토마토', '닭고기', '쇠고기', '오징어', '조개류(굴, 전복, 홍합 포함)', '잣'] },
    origin: ['딸기(국내산)']
  },
  '블루베리 크림치즈 베이글': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 160, servingUnit: 'g', caffeine: 0, calories: 442.0, sodium: 550.0, carbs: 83.4, sugar: 11.0, fat: 6.7, saturatedFat: 3.0, protein: 12.0 },
    allergens: { triggers: ['대두', '밀', '우유'], facility: [] },
    origin: []
  },
  '무화과 크림치즈 베이글': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 160, servingUnit: 'g', caffeine: 0, calories: 452.0, sodium: 590.0, carbs: 81.0, sugar: 13.0, fat: 8.9, saturatedFat: 4.0, protein: 12.0 },
    allergens: { triggers: ['대두', '밀', '우유'], facility: [] },
    origin: []
  },
  '대파베이컨 크림치즈 베이글': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 160, servingUnit: 'g', caffeine: 0, calories: 445.0, sodium: 731.0, carbs: 54.9, sugar: 7.0, fat: 18.4, saturatedFat: 8.3, protein: 15.0 },
    allergens: { triggers: ['밀', '우유', '계란', '대두', '닭고기', '돼지고기'], facility: [] },
    origin: []
  },
  '플레인 베이글': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 110, servingUnit: 'g', caffeine: 0, calories: 283.0, sodium: 290.0, carbs: 57.3, sugar: 6.0, fat: 1.1, saturatedFat: 0.5, protein: 11.0 },
    allergens: { triggers: ['밀'], facility: [] },
    origin: []
  },
  '버터 팬케이크': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 130, servingUnit: 'g', caffeine: 0, calories: 412.0, sodium: 225.0, carbs: 67.1, sugar: 42.0, fat: 13.3, saturatedFat: 6.0, protein: 6.0 },
    allergens: { triggers: ['밀', '대두', '달걀', '우유'], facility: [] },
    origin: []
  },
  '크루아상': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 60, servingUnit: 'g', caffeine: 0, calories: 260.0, sodium: 190.0, carbs: 36.9, sugar: 3.0, fat: 10.7, saturatedFat: 4.8, protein: 4.0 },
    allergens: { triggers: ['대두', '우유', '밀', '달걀'], facility: [] },
    origin: []
  },
  '허니 카라멜 브레드': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 224, servingUnit: 'g', caffeine: 0, calories: 746.0, sodium: 824.0, carbs: 42.5, sugar: 39.0, fat: 60.0, saturatedFat: 27.0, protein: 9.0 },
    allergens: { triggers: ['우유', '대두', '밀'], facility: [] },
    origin: []
  },
  '소금빵': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 70, servingUnit: 'g', caffeine: 0, calories: 227.8, sodium: 293.0, carbs: 25.7, sugar: 2.0, fat: 10.9, saturatedFat: 4.9, protein: 6.7 },
    allergens: { triggers: ['밀', '우유'], facility: [] },
    origin: []
  },
  '모카번': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 60, servingUnit: 'g', caffeine: 0, calories: 240.0, sodium: 190.0, carbs: 45.4, sugar: 4.0, fat: 4.7, saturatedFat: 2.1, protein: 4.0 },
    allergens: { triggers: ['밀', '대두', '우유', '계란', '땅콩'], facility: [] },
    origin: []
  },
  '플레인 와플': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 73, servingUnit: 'g', caffeine: 0, calories: 327.0, sodium: 300.0, carbs: 33.8, sugar: 21.0, fat: 20.0, saturatedFat: 9.0, protein: 3.0 },
    allergens: { triggers: ['밀', '우유', '계란', '대두'], facility: [] },
    origin: []
  },
  '크림치즈 와플': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 113, servingUnit: 'g', caffeine: 0, calories: 415.0, sodium: 390.0, carbs: 18.8, sugar: 22.0, fat: 35.6, saturatedFat: 16.0, protein: 5.0 },
    allergens: { triggers: ['밀', '우유', '계란', '대두'], facility: [] },
    origin: []
  },
  '생크림 와플': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 91, servingUnit: 'g', caffeine: 0, calories: 397.0, sodium: 314.0, carbs: 20.3, sugar: 25.0, fat: 33.3, saturatedFat: 15.0, protein: 4.0 },
    allergens: { triggers: ['밀', '우유', '계란', '대두'], facility: [] },
    origin: []
  },
  '프레즐': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 99, servingUnit: 'g', caffeine: 0, calories: 250.0, sodium: 310.0, carbs: 40.4, sugar: 5.0, fat: 6.7, saturatedFat: 3.0, protein: 7.0 },
    allergens: { triggers: ['밀', '대두', '우유'], facility: [] },
    origin: []
  },
  '잉글리쉬 머핀': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 140, servingUnit: 'g', caffeine: 0, calories: 278.0, sodium: 770.0, carbs: 35.6, sugar: 2.0, fat: 9.3, saturatedFat: 4.2, protein: 13.0 },
    allergens: { triggers: ['밀', '우유', '계란', '돼지고기', '대두', '쇠고기', '조개류(굴)'], facility: [] },
    origin: []
  },
  '플레인 크로플': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 64, servingUnit: 'g', caffeine: 0, calories: 265.0, sodium: 220.0, carbs: 31.3, sugar: 8.0, fat: 13.3, saturatedFat: 6.0, protein: 5.0 },
    allergens: { triggers: ['밀', '우유', '대두'], facility: [] },
    origin: []
  },
  '크로크무슈': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 170, servingUnit: 'g', caffeine: 0, calories: 457.0, sodium: 1020.0, carbs: 71.2, sugar: 5.0, fat: 10.7, saturatedFat: 4.8, protein: 19.0 },
    allergens: { triggers: ['밀', '대두', '우유', '돼지고기', '계란'], facility: [] },
    origin: []
  },
  '바스크 치즈케이크': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 90, servingUnit: 'g', caffeine: 0, calories: 306.0, sodium: 170.0, carbs: 5.5, sugar: 13.0, fat: 28.9, saturatedFat: 13.0, protein: 6.0 },
    allergens: { triggers: ['달걀', '우유', '아황산류'], facility: [] },
    origin: []
  },
  '버터떡': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 55, servingUnit: 'g', caffeine: 0, calories: 149.0, sodium: 174.0, carbs: 24.3, sugar: 13.0, fat: 4.4, saturatedFat: 2.0, protein: 3.0 },
    allergens: { triggers: ['우유', '계란', '대두'], facility: [] },
    origin: []
  },
  '티라미수': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 100, servingUnit: 'g', caffeine: 0, calories: 296.0, sodium: 103.0, carbs: 21.0, sugar: 14.0, fat: 22.2, saturatedFat: 10.0, protein: 3.0 },
    allergens: { triggers: ['대두', '우유', '밀', '달걀', '아황산류', '쇠고기', '돼지고기'], facility: [] },
    origin: []
  },
  '초콜릿 청크쿠키': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 75, servingUnit: 'g', caffeine: 0, calories: 340.0, sodium: 320.0, carbs: 55.0, sugar: 22.0, fat: 12.0, saturatedFat: 9.0, protein: 3.0 },
    allergens: { triggers: ['밀', '대두', '우유', '계란'], facility: [] },
    origin: []
  },
  '화이트초코 마카다미아 쿠키': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 75, servingUnit: 'g', caffeine: 0, calories: 370.0, sodium: 440.0, carbs: 48.0, sugar: 20.0, fat: 18.0, saturatedFat: 9.0, protein: 4.0 },
    allergens: { triggers: ['밀', '대두', '우유', '계란'], facility: [] },
    origin: []
  },
  '초코 치즈스틱케이크': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 45, servingUnit: 'g', caffeine: 0, calories: 199.0, sodium: 85.0, carbs: 23.0, sugar: 15.0, fat: 11.0, saturatedFat: 7.0, protein: 2.0 },
    allergens: { triggers: ['달걀', '우유', '대두', '밀'], facility: [] },
    origin: []
  },
  '플레인 치즈스틱케이크': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 45, servingUnit: 'g', caffeine: 0, calories: 166.0, sodium: 75.0, carbs: 16.0, sugar: 9.0, fat: 10.0, saturatedFat: 6.0, protein: 3.0 },
    allergens: { triggers: ['달걀', '우유', '대두', '밀'], facility: [] },
    origin: []
  },
  '초코생크림 조각케이크': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 70, servingUnit: 'g', caffeine: 0, calories: 242.0, sodium: 75.0, carbs: 7.5, sugar: 16.0, fat: 22.2, saturatedFat: 10.0, protein: 3.0 },
    allergens: { triggers: ['대두', '계란', '우유', '밀', '돼지고기'], facility: [] },
    origin: []
  },
  '우유생크림 조각케이크': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 80, servingUnit: 'g', caffeine: 0, calories: 248.0, sodium: 85.0, carbs: 4.0, sugar: 13.0, fat: 24.4, saturatedFat: 11.0, protein: 3.0 },
    allergens: { triggers: ['알류(달걀)', '우유', '대두', '밀'], facility: [] },
    origin: []
  },
  '초코 티라미수 조각케이크': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 95, servingUnit: 'g', caffeine: 0, calories: 340.0, sodium: 103.0, carbs: 0.0, sugar: 21.0, fat: 35.6, saturatedFat: 16.0, protein: 5.0 },
    allergens: { triggers: ['우유', '달걀', '밀', '대두', '돼지고기', '아황산류'], facility: [] },
    origin: []
  },
  '수플레 치즈 조각케이크': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 110, servingUnit: 'g', caffeine: 0, calories: 370.0, sodium: 280.0, carbs: 4.5, sugar: 20.0, fat: 35.6, saturatedFat: 16.0, protein: 8.0 },
    allergens: { triggers: ['우유', '달걀', '밀', '대두', '이산화황(아황산류)'], facility: [] },
    origin: []
  },
  '데블스 초코 조각케이크': {
    nutrition: { caffeineLevel: '카페인 없음', servingSize: 100, servingUnit: 'g', caffeine: 0, calories: 426.0, sodium: 110.0, carbs: 16.5, sugar: 27.0, fat: 37.8, saturatedFat: 17.0, protein: 5.0 },
    allergens: { triggers: ['우유', '달걀', '밀', '대두', '아황산류'], facility: [] },
    origin: []
  }
};

// ============================================
// HOT/ICE 옵션
// (베이커리·디저트는 옵션 없음 = null)
// ============================================

const HOT_ONLY_MENUS = new Set(['카푸치노', '청귤생강차', '대추차', '쌍화차']);

const ICE_ONLY_MENUS = new Set([
  '생초콜릿라떼', '흑당라떼', '망고라떼', '블루베리라떼', '딸기라떼',
  '제주 한라봉 스무디', '복숭아 스무디', '딸기치즈케이크스무디', '리얼초코자바칩프라페',
  '쿠키초코프라페', '모카자바칩프라페', '그린티프라페', '딸기스무디', '블루베리스무디',
  '망고스무디', '플레인요거트스무디', '딸기요거트스무디', '블루베리요거트스무디', '망고요거트스무디',
  '꿀 토마토 주스', '그레인 바나나 주스', '수박주스', '레몬에이드', '자몽에이드', '망고에이드',
  '유자에이드', '청포도에이드', '블루레몬에이드', '키위주스', '오렌지당근주스', '딸기주스',
  '아인슈페너', '아인슈페너라떼'
]);

function resolveTemperature(item) {
  if (item.category === 'bakery' || item.category === 'dessert') return null;
  if (HOT_ONLY_MENUS.has(item.name)) return 'hot';
  if (ICE_ONLY_MENUS.has(item.name)) return 'ice';
  return 'both';
}

const MENU_ITEMS = RAW_MENU_ITEMS.map(([name, category, price, description], index) => {
  const item = { id: index + 1, name, category, price, description, image: '' };
  const real = REAL_NUTRITION_OVERRIDES[name];
  const temperature = resolveTemperature(item);

  if (real) {
    return { ...item, temperature, nutrition: real.nutrition, allergens: real.allergens, origin: real.origin };
  }

  return {
    ...item,
    temperature,
    nutrition: buildNutrition(item),
    allergens: {
      triggers: buildAllergenTriggers(item),
      facility: FACILITY_ALLERGENS
    },
    origin: buildOrigin(item)
  };
});

// ============================================
// 주문 상태
// ============================================

const ORDER_STATUS = {
  PENDING:    { value: 'pending',   label: '대기중' },
  CONFIRMED:  { value: 'confirmed', label: '확인됨' },
  PREPARING:  { value: 'preparing', label: '조리중' },
  READY:      { value: 'ready',     label: '준비완료' },
  COMPLETED:  { value: 'completed', label: '완료' },
  CANCELLED:  { value: 'cancelled', label: '취소' }
};

// 메뉴 데이터 스키마가 바뀔 때마다 값을 올리면, 브라우저에 저장된 기존 메뉴가
// 자동으로 최신 MENU_ITEMS로 초기화됩니다.
const MENU_DATA_VERSION = '12';

export function getStoredMenus() {
  const storedVersion = localStorage.getItem('cafe_menus_version');
  const stored = localStorage.getItem('cafe_menus');

  if (!stored || storedVersion !== MENU_DATA_VERSION) {
    localStorage.setItem('cafe_menus', JSON.stringify(MENU_ITEMS));
    localStorage.setItem('cafe_menus_version', MENU_DATA_VERSION);
    return MENU_ITEMS;
  }
  return JSON.parse(stored);
}

export function saveStoredMenus(menus) {
  localStorage.setItem('cafe_menus', JSON.stringify(menus));
}

export function getMenuById(id) {
  const menus = getStoredMenus();
  return menus.find(menu => String(menu.id) === String(id));
}

export function deleteMenu(id) {
  const menus = getStoredMenus();
  const filtered = menus.filter(menu => String(menu.id) !== String(id));
  saveStoredMenus(filtered);
}

export function addMenu(menu) {
  const menus = getStoredMenus();
  menus.push(menu);
  saveStoredMenus(menus);
}

export function updateMenu(id, updatedFields) {
  const menus = getStoredMenus();
  const index = menus.findIndex(menu => String(menu.id) === String(id));
  if (index !== -1) {
    menus[index] = { ...menus[index], ...updatedFields };
    saveStoredMenus(menus);
    return true;
  }
  return false;
}

export { CATEGORIES, MENU_ITEMS, ORDER_STATUS };
