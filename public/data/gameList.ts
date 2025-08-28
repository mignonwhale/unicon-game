const gameList = [
  {
    id: '1',
    image: "/images/games/temp.png",
    title: 'MODULE:BERSERK',
    genre: ['아케이드', '액션'],
    platform: ['Android', 'Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://jokw1228.itch.io/slay-the-circle',
    members: ['정영준'],
    boothNo: 'A1',
    team: '챌린저'
  } as Game,
  {
    id: '2',
    image: "/images/games/game1.jpg",
    title: 'PUZZLE MASTER',
    genre: ['전략'],
    platform: ['Windows'],
    description: "창의적인 사고력과 논리적 추론 능력을 기를 수 있는 퍼즐 게임입니다. 다양한 난이도와 독특한 게임 메커니즘을 제공합니다.",
    downloadUrl: 'https://hena02.itch.io/soul-chess',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'A2',
    team: '루키'
  } as Game,
  {
    id: '3',
    image: "/images/games/game2.jpg",
    title: 'VR 체험 게임',
    genre: ['슈팅'],
    platform: ['Android', 'Windows'],
    description: "광활한 우주를 배경으로 한 탐험 게임입니다. 미지의 행성을 발견하고 외계 생명체와 만나보세요.",
    downloadUrl: 'https://joyyoj1.itch.io/block-and-ball',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'A3',
    team: '루키'
  } as Game,
  {
    id: '4',
    image: "/images/games/game3.jpg",
    title: '액션 히어로',
    genre: ['플랫포머'],
    platform: ['Windows'],
    description: "가상현실을 통해 새로운 세계를 탐험하는 몰입형 VR 게임입니다. 현실감 넘치는 그래픽과 혁신적인 인터랙션을 제공합니다.",
    downloadUrl: 'https://bacon8282.itch.io/doubleboot',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'A4',
    team: '챌린저'
  } as Game,
  {
    id: '5',
    image: "/images/games/game5.jpg",
    title: '모바일 어드벤처',
    genre: ['파티게임'],
    platform: ['Android'],
    description: "",
    downloadUrl: '',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'A5',
    team: '챌린저'
  } as Game,
  {
    id: '6',
    image: "/images/games/game4.jpg",
    title: 'MODULE NETWORK',
    genre: ['매트로배니아', '액션'],
    platform: ['Windows'],
    description: "박진감 넘치는 액션과 화려한 전투 시스템이 특징인 게임입니다. 다양한 캐릭터와 무기로 적들을 물리치세요.",
    downloadUrl: 'https://g-pos.itch.io/to-the-star',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'A6',
    team: '챌린저'
  } as Game,
  {
    id: '7',
    image: "/images/games/game6.jpg",
    title: 'G********************************',
    genre: ['FPS', '디펜스'],
    platform: ['VR (Open XR 지원)'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://g-pos.itch.io/gear-defenders',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'A7',
    team: '챌린저'
  } as Game,
  {
    id: '8',
    image: "/images/games/game7.jpg",
    title: 'F********************************',
    genre: ['시뮬레이션'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://g-pos.itch.io/fish-factory',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'A8',
    team: '챌린저'
  } as Game,
  {
    id: '9',
    image: "/images/games/temp.png",
    title: 'C********************************',
    genre: ['CCG', '덱빌딩', '로그라이크'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://fancycube.itch.io/catale',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'B1',
    team: '챌린저'
  } as Game,
  {
    id: '10',
    image: "/images/games/temp.png",
    title: '테********************************',
    genre: ['리듬', '테트리스'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://dasoya.itch.io/tetrhythm',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'B2',
    team: '챌린저'
  } as Game,
  {
    id: '11',
    image: "/images/games/temp.png",
    title: 'T********************************',
    genre: ['로그라이크', '시간정지', '탄막'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://pulleybun.itch.io/time-snatcher-handy-demo',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'B3',
    team: '챌린저'
  } as Game,
  {
    id: '12',
    image: "/images/games/temp.png",
    title: 'B********************************',
    genre: ['서바이벌'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://9um4.itch.io/bonfire-adventure',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'B4',
    team: '챌린저'
  } as Game,
  {
    id: '13',
    image: "/images/games/temp.png",
    title: 'S********************************',
    genre: ['액션', '어드벤처'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://joonsooan.itch.io/sunken-ruins',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'B5',
    team: '챌린저'

  } as Game,
  {
    id: '14',
    image: "/images/games/temp.png",
    title: 'M********************************',
    genre: ['플랫포머', '액션'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://kevinkevinp.itch.io/moduleberserk',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'B6',
    team: '챌린저'

  } as Game,
  {
    id: '15',
    image: "/images/games/temp.png",
    title: 'P********************************',
    genre: ['그래픽', '로그라이트'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://urbanoasisgame.itch.io/project-hellpunk',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'B7',
    team: '챌린저'

  } as Game,
  {
    id: '16',
    image: "/images/games/temp.png",
    title: '서********************************',
    genre: ['덱빌딩', '로그라이크'],
    platform: ['Android', 'iOS'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://visitor101.itch.io/seoul-tower-hunters',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'B8',
    team: '챌린저'

  } as Game,
  {
    id: '17',
    image: "/images/games/temp.png",
    title: 'H********************************',
    genre: ['타이쿤'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://tasel220.itch.io/happyfurryrestaurant',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'B9',
    team: '챌린저'

  } as Game,
  {
    id: '18',
    image: "/images/games/temp.png",
    title: '마********************************',
    genre: ['경영', '스토리'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://leeseoyoung-snu.itch.io/last-slice-labs',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'C1',
    team: '챌린저'

  } as Game,
  {
    id: '19',
    image: "/images/games/temp.png",
    title: 'S********************************',
    genre: ['탄막', '플랫포머'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://sedalharu.itch.io/starless',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'C2',
    team: '챌린저'

  } as Game,
  {
    id: '20',
    image: "/images/games/temp.png",
    title: '도********************************',
    genre: ['사이드뷰', '액션', '전략'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://sson41541241.itch.io/graverobber',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'C3',
    team: '챌린저'

  } as Game,
  {
    id: '21',
    image: "/images/games/temp.png",
    title: '달********************************',
    genre: ['플랫포머', '액션'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://silverplating.itch.io/moonnight-underground',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'C4',
    team: '챌린저'

  } as Game,
  {
    id: '22',
    image: "/images/games/temp.png",
    title: '래********************************',
    genre: ['액션', '어드벤처', '캐주얼'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://kwakgyu.itch.io/rabbit-in-d',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'C5',
    team: '챌린저'

  } as Game,
  {
    id: '23',
    image: "/images/games/temp.png",
    title: 'S********************************',
    genre: ['전투', '서바이벌', '포인트 앤 클릭'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://centipedeman.itch.io/survival-8',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'C6',
    team: '챌린저'

  } as Game,
  {
    id: '24',
    image: "/images/games/temp.png",
    title: '얼********************************',
    genre: ['퍼즐'],
    platform: ['Android', 'Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://cay8207.itch.io/iceisland',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'C7',
    team: '챌린저'

  } as Game,
  {
    id: '25',
    image: "/images/games/temp.png",
    title: 'A********************************',
    genre: ['디펜스'],
    platform: ['Android'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://aayumin.itch.io/alchemy-battle',
    members: ['조강우', '이진웅', '강근호'],
    boothNo: 'C8',
    team: '챌린저'

  } as Game,
  {
    id: '26',
    image: "/images/games/temp.png",
    title: 'P********************************',
    genre: ['2D', '액션', '어드벤처'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://gunwoo0704.itch.io/project-null',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '배세강', '홍석희'],
    boothNo: 'C9',
    team: '챌린저'

  } as Game,
  {
    id: '27',
    image: "/images/games/temp.png",
    title: '하********************************',
    genre: ['JRPG'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://shin-minki.itch.io/hatzuka',
    members: ['조강우', '이진웅', '강근호', '박주영', '정성현', '김기용', '김진현', '박재용', '배세강', '홍석희'],
    boothNo: 'D1',
    team: '챌린저'

  } as Game,
  {
    id: '28',
    image: "/images/games/temp.png",
    title: 'R********************************',
    genre: ['어드벤처'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://solkim0210.itch.io/return',
    members: ['조강우', '이진웅'],
    boothNo: 'D2',
    team: '챌린저'

  } as Game,
  {
    id: '29',
    image: "/images/games/temp.png",
    title: 'B********************************',
    genre: ['어드벤처', '추리'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://musong-choi.itch.io/blunder',
    members: ['조강우', '이진웅'],
    boothNo: 'D3',
    team: '챌린저'

  } as Game,
  {
    id: '30',
    image: "/images/games/temp.png",
    title: '이********************************',
    genre: ['추리', '텍스트 어드벤처'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://aven0310.itch.io/ideares',
    members: ['조강우', '이진웅'],
    boothNo: 'D4',
    team: '챌린저'

  } as Game,
  {
    id: '31',
    image: "/images/games/temp.png",
    title: 'C********************************',
    genre: ['시뮬레이션'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://likeamovie.itch.io/chained-co',
    members: ['조강우', '이진웅'],
    boothNo: 'D5',
    team: '챌린저'

  } as Game,
  {
    id: '32',
    image: "/images/games/temp.png",
    title: '데********************************',
    genre: ['플랫포머', '로그라이크', '액션'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://maswang.itch.io/devilake',
    members: ['조강우', '이진웅'],
    boothNo: 'D5',
    team: '챌린저'

  } as Game,
  {
    id: '33',
    image: "/images/games/temp.png",
    title: '가********************************',
    genre: ['어드벤처', '호러'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://garasani.itch.io/garasani',
    members: ['조강우', '이진웅'],
    boothNo: 'D7',
    team: '챌린저'

  } as Game,
  {
    id: '34',
    image: "/images/games/temp.png",
    title: 'T********************************',
    genre: ['노벨', '카페 시뮬레이션'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://endiez.itch.io/travel-around-the-world',
    members: ['조강우', '이진웅'],
    boothNo: 'D8',
    team: '챌린저'

  } as Game,
  {
    id: '35',
    image: "/images/games/temp.png",
    title: '버********************************',
    genre: ['러닝액션'],
    platform: ['Android'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://givememandu.itch.io/bunnyrun',
    members: ['조강우', '이진웅'],
    boothNo: 'X1',
    team: '챌린저'

  } as Game,
  {
    id: '36',
    image: "/images/games/temp.png",
    title: 'C********************************',
    genre: ['아케이드', '클리커'],
    platform: ['Android'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://ji-soo-lee.itch.io/color-factory',
    members: ['조강우', '이진웅'],
    boothNo: 'X2',
    team: '챌린저'

  } as Game,
  {
    id: '37',
    image: "/images/games/temp.png",
    title: '아********************************',
    genre: ['노벨', '시뮬레이션', '어드벤처'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://minarrii.itch.io/abraham-test',
    members: ['조강우', '이진웅'],
    boothNo: 'X3',
    team: '챌린저'

  } as Game,
  {
    id: '38',
    image: "/images/games/temp.png",
    title: 'B********************************',
    genre: ['슈팅', '어드벤처'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://gatojih.itch.io/biohunt',
    members: ['조강우', '이진웅'],
    boothNo: 'X4',
    team: '챌린저'

  } as Game,
  {
    id: '39',
    image: "/images/games/temp.png",
    title: 'N********************************',
    genre: ['탑뷰', '액션'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://sson41541241.itch.io/noarm',
    members: ['조강우', '이진웅'],
    boothNo: 'Y1',
    team: '챌린저'

  } as Game,
  {
    id: '40',
    image: "/images/games/temp.png",
    title: 'N********************************',
    genre: ['인칭청소시뮬레이터', '3D', '어드벤처'],
    platform: ['Windows', 'macOS'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://nameofbutterfly.itch.io/nameofbutterfly',
    members: ['조강우', '이진웅'],
    boothNo: 'Y2',
    team: '챌린저'

  } as Game,
  {
    id: '41',
    image: "/images/games/temp.png",
    title: '알********************************',
    genre: ['자동화'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://mirdin11.itch.io/al-kamia',
    members: ['조강우', '이진웅'],
    boothNo: 'Y3',
    team: '챌린저'

  } as Game,
  {
    id: '42',
    image: "/images/games/temp.png",
    title: 'H********************************',
    genre: ['플랫포머', '액션', '어드벤처'],
    platform: [],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://odigostudio.itch.io/herma',
    members: ['조강우', '이진웅'],
    boothNo: 'Y4',
    team: '챌린저'

  } as Game,
  {
    id: '43',
    image: "/images/games/temp.png",
    title: 'L********************************',
    genre: ['플랫포머'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://paulgh625.itch.io/lost-and-found',
    members: ['조강우', '이진웅'],
    boothNo: 'Y5',
    team: '챌린저'

  } as Game,
  {
    id: '44',
    image: "/images/games/temp.png",
    title: '히********************************',
    genre: ['액션', '캐주얼'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'http://me-lonbread.itch.io/hit-and-run',
    members: ['조강우', '이진웅'],
    boothNo: 'Z1',
    team: '챌린저'

  } as Game,
  {
    id: '45',
    image: "/images/games/temp.png",
    title: '히********************************',
    genre: ['3D', '디펜스'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://wjh9330.itch.io/herorandomdefence',
    members: ['조강우', '이진웅'],
    boothNo: 'Z2',
    team: '챌린저'

  } as Game,
  {
    id: '46',
    image: "/images/games/temp.png",
    title: '롤********************************',
    genre: ['캐주얼'],
    platform: ['Windows'],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: '',
    members: ['조강우', '이진웅'],
    boothNo: 'Z3',
    team: '챌린저'

  } as Game,
  {
    id: '47',
    image: "/images/games/temp.png",
    title: '인********************************',
    genre: [],
    platform: [],
    description: "MODULE:BERSERK는 스팀펑크 세계 속 집사 로봇이 되어 섬기는 아가씨를 지키고 그녀의 가문에 벌어진 사건의 배후를 추적하는 게임입니다. 각종 의뢰를 수행하여 재화를 벌어 은신처를 발전시키고 동료들을 모아나가세요! 각 신체 부위마다 원하는 모듈을 장착하여 나만의 빌드를 완성해 전투로 나아가세요!",
    downloadUrl: 'https://moon15salt.itch.io/interactivemovie',
    members: ['조강우', '이진웅'],
    boothNo: 'Z4',
    team: '챌린저'

  } as Game,
  {
    id: '48',
    image: "/images/games/temp.png",
    title: '장********************************',
    genre: ['플랫포머', '액션', '어드벤처'],
    platform: ['Windows'],
    description: "가문에 벌어진 사건의 배후를 추적하는 게임입니다. ",
    downloadUrl: 'https://emilyminkyounglee.itch.io/jangpoong',
    members: ['조강우', '이진웅'],
    boothNo: 'Z5',
    team: '챌린저'
  } as Game
]

export default gameList;


