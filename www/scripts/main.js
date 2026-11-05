    // ===== 言語設定・翻訳 =====
    const LANG_KEY = 'number-fall-lang';
    let currentLang = localStorage.getItem(LANG_KEY) || 'ja';

    const TRANSLATIONS = {
      ja: {
        title_subtitle: '数字パズルゲーム',
        rules_heading: '🎮 ルール',
        rule_1: '数字を落として積み上げよう',
        rule_2: '縦列の合計が 10, 20, 30, 40, 50 で消去',
        rule_3: 'スマホ: スワイプで移動、下スワイプで即落下、長押し+スワイプ対応',
        rule_4: '特殊ピース「S」で列を調整',
        diff_heading: '🎯 難易度選択',
        diff_easy: '初級', diff_easy_desc: '一番上のみ',
        diff_normal: '中級', diff_normal_desc: '合計表示',
        diff_hard: '上級', diff_hard_desc: '合計なし',
        diff_extreme: '最上級', diff_extreme_desc: '合計なし+×蓄積',
        start_btn: 'ゲームスタート',
        help_btn: '❓ ゲーム説明',
        help_modal_title: 'ゲーム説明',
        help_page_0: '<h3>ゲーム概要</h3><p>3Sー0は、落ちてくる数字を操作して縦列の合計を調整するパズルゲームです。</p><h4>目標</h4><ul><li>各縦列の合計が 10, 20, 30, 40, 50 のいずれかになるように配置</li><li>条件を満たすと、その列は消去され、スコアを獲得できます</li><li>できるだけ長く、高いスコアを目指してプレイしましょう</li></ul>',
        help_page_1: '<h3>基本操作</h3><h4>キーボード操作</h4><ul><li><strong>← / →</strong> キー：ピースを左右に移動</li><li><strong>↓</strong> キー：ピースを1マス下に移動</li><li><strong>スペース</strong> キー：ピースを一気に落下</li></ul><h4>スマホ操作</h4><ul><li><strong>左右スワイプ</strong>：ピースを左右に移動</li><li><strong>長押し＋左右スワイプ</strong>：指を離さず連続で左右移動</li><li><strong>下スワイプ</strong>：一気に落下</li><li><strong>タップ</strong>：1マス下に移動</li></ul>',
        help_page_2: '<h3>難易度別特徴</h3><h4>初級 ⭐</h4><ul><li>3列のシンプルなボードで遊べます</li><li>数字は1～9のみ（マイナスなし）</li><li>特殊ピース「S」は出現しません</li><li>初心者向けの難易度です</li></ul><h4>中級 🎯</h4><ul><li>5列の標準的なボードです</li><li>数字は1～9とマイナス数字が出現</li><li>特殊ピース「S」が時々出現します</li><li>バランスの取れた難易度です</li></ul><h4>上級 🔥</h4><ul><li>5列で難易度が高いです</li><li>列の合計表示がなく、自分で計算必須</li><li>すべての数字と「S」が出現します</li><li>計算力が必要な高難易度です</li></ul><h4>最上級 ☠️</h4><ul><li>上級ルールに加えて、Sで消した列に破壊不可の「×」が追加されます</li><li>同じ列でSを使うほど「×」が下から積み上がります</li><li>列合計が <strong>11/21/31/41/51</strong> または <strong>17/27/37/47/57</strong> になると×ブロックも一緒に消えます</li><li>盤面がどんどん狭くなる超高難易度です</li></ul>',
        help_page_3: '<h3>スコア・特殊ピース</h3><h4>スコア計算</h4><ul><li>各列を消去すると、消したピースの数がスコアになります</li><li>複数列を同時に消すことで、さらに高いスコアが狙えます</li><li>長時間プレイするほど、スコアを稼げます</li></ul><h4>特殊ピース「S」</h4><ul><li>列の合計を自動的に最も近い「10, 20, 30, 40, 50」に調整します</li><li>詰まった状況を切り抜ける強い武器です</li><li>中級・上級・最上級でのみ出現します</li><li>特殊ピースSで消した場合は0ポイントです</li></ul>',
        help_prev: '← 前へ',
        help_next: '次へ →',
        settings_heading: '⚙️ 設定',
        bgm_label: '🎵 BGM音量',
        sfx_label: '🔊 効果音音量',
        lang_label: '🌐 言語',
        sns_notice: '📢 <strong>SNS投稿OK！</strong><br>動画や画像の投稿は大歓迎です🎉<br>ぜひいろんな方々とスコアを競い合ってください！',
        mobile_menu_heading: 'メニュー',
        mobile_restart_btn: '🔄 リスタート',
        mobile_quit_btn: '🏠 タイトルへ',
        mobile_close_btn: '✖️ 閉じる',
        pause_heading: '⏸️ ポーズ',
        pause_settings_btn: '⚙️ 設定',
        resume_btn: '再開',
        quit_btn: 'タイトルへ',
        gameover_score_label: 'スコア',
        duration_label: '継続時間',
        difficulty_label: '難易度',
        highscore_label: 'ハイスコア',
        play_again_btn: '🔄 もう一回遊ぶ',
        to_title_btn: '🏠 タイトルへ',
        restart_btn: 'リスタート',
        drop_btn: '即落下',
        pause_btn_label: 'ポーズ',
        touch_drop_btn: '落下',
        ctrl_1: 'スマホ操作: 左右スワイプで横移動',
        ctrl_2: 'スマホ操作: 長押し+左右スワイプで連続移動',
        ctrl_3: 'スマホ操作: 下スワイプで即落下（タップで1マス）',
        ctrl_4: '縦列の合計が10/20/30/40/50で消去',
        ctrl_5: 'Sは1/20で出現し、列合計を10/20/30/40/50へ強制調整',
        ctrl_mode_label: '🎮 操作方法',
        ctrl_mode_swipe: 'スワイプ',
        ctrl_mode_btn_label: 'ボタン',
        diff_easy_label: '初級',
        diff_normal_label: '中級',
        diff_hard_label: '上級',
        diff_extreme_label: '最上級',
        msg_joker: (target) => `S発動: 列合計を ${target} に調整!`,
        msg_joker_clear: 'S発動で列消去!',
        msg_joker_block_added: 'S発動で列消去! 最下段に×ブロック追加',
        msg_x_destroy: (sum, base, xCount, xBonus) => `列合計 ${sum}！×${xCount}個破壊！ +${base}${xBonus > 0 ? `+${xBonus}` : ''}点`,
        msg_clear: (sum, pts) => `列合計 ${sum} で消去! +${pts}点`,
        msg_building: (sum) => `列合計 ${sum}。一の位0になるまで積み上げ中`,
        msg_gameover: '上まで積み上がりました',
        countdown_start: 'START!',
      },
      en: {
        title_subtitle: 'Number Puzzle Game',
        rules_heading: '🎮 Rules',
        rule_1: 'Drop numbers and stack them up!',
        rule_2: 'Column total of 10, 20, 30, 40, or 50 clears it',
        rule_3: 'Phone: swipe to move, swipe down to hard drop, supports long-press + swipe',
        rule_4: 'Special piece "S" adjusts the column',
        diff_heading: '🎯 Difficulty',
        diff_easy: 'Easy', diff_easy_desc: 'Top row only',
        diff_normal: 'Normal', diff_normal_desc: 'Show totals',
        diff_hard: 'Hard', diff_hard_desc: 'No totals',
        diff_extreme: 'Extreme', diff_extreme_desc: 'No totals + X stack',
        start_btn: 'Start Game',
        help_btn: '❓ How to Play',
        help_modal_title: 'How to Play',
        help_page_0: '<h3>Overview</h3><p>3S-0 is a puzzle game where you control falling numbers to adjust column totals.</p><h4>Goal</h4><ul><li>Arrange numbers so each column totals 10, 20, 30, 40, or 50</li><li>When the condition is met, the column clears and you earn points</li><li>Play as long as possible and aim for the highest score!</li></ul>',
        help_page_1: '<h3>Controls</h3><h4>Keyboard</h4><ul><li><strong>← / →</strong> keys: Move piece left/right</li><li><strong>↓</strong> key: Move piece one step down</li><li><strong>Space</strong> key: Hard drop</li></ul><h4>Mobile</h4><ul><li><strong>Swipe left/right</strong>: Move piece left/right</li><li><strong>Long press + swipe left/right</strong>: Continuous side movement without lifting your finger</li><li><strong>Swipe down</strong>: Hard drop</li><li><strong>Tap</strong>: Move one step down</li></ul>',
        help_page_2: '<h3>Difficulty</h3><h4>Easy ⭐</h4><ul><li>Simple 3-column board</li><li>Numbers 1–9 only (no negatives)</li><li>No special "S" piece</li><li>Perfect for beginners</li></ul><h4>Normal 🎯</h4><ul><li>Standard 5-column board</li><li>Numbers 1–9 and negative numbers appear</li><li>Special "S" piece appears occasionally</li><li>Well-balanced difficulty</li></ul><h4>Hard 🔥</h4><ul><li>5-column high-difficulty board</li><li>No column total shown — calculate yourself!</li><li>All numbers and "S" pieces appear</li><li>Requires strong mental math</li></ul><h4>Extreme ☠️</h4><ul><li>Includes all Hard rules plus unbreakable "×" blocks</li><li>When S clears a column, an unbreakable "×" is added at the bottom</li><li>Using S on the same column keeps stacking "×" upward</li><li>Hit a column total of <strong>11/21/31/41/51</strong> or <strong>17/27/37/47/57</strong> to destroy "×" blocks too</li></ul>',
        help_page_3: '<h3>Score & Special Piece</h3><h4>Scoring</h4><ul><li>Clearing a column scores based on pieces in the column</li><li>Clear multiple columns at once for a higher combo score</li><li>The longer you play, the more points you can earn</li></ul><h4>Special Piece "S"</h4><ul><li>Automatically adjusts column total to nearest target (10, 20, 30, 40, 50)</li><li>A powerful tool to escape tight situations</li><li>Only appears in Normal, Hard, and Extreme modes</li><li>Clearing with "S" gives 0 points</li></ul>',
        help_prev: '← Prev',
        help_next: 'Next →',
        settings_heading: '⚙️ Settings',
        bgm_label: '🎵 BGM Volume',
        sfx_label: '🔊 SFX Volume',
        lang_label: '🌐 Language',
        sns_notice: '📢 <strong>Share on Social Media!</strong><br>Feel free to post videos or screenshots 🎉<br>Compete with players worldwide for the best score!',
        mobile_menu_heading: 'Menu',
        mobile_restart_btn: '🔄 Restart',
        mobile_quit_btn: '🏠 Title',
        mobile_close_btn: '✖️ Close',
        pause_heading: '⏸️ Paused',
        pause_settings_btn: '⚙️ Settings',
        resume_btn: 'Resume',
        quit_btn: 'To Title',
        gameover_score_label: 'Score',
        duration_label: 'Time',
        difficulty_label: 'Difficulty',
        highscore_label: 'Best Score',
        play_again_btn: '🔄 Play Again',
        to_title_btn: '🏠 Title',
        restart_btn: 'Restart',
        drop_btn: 'Drop',
        pause_btn_label: 'Pause',
        touch_drop_btn: 'Drop',
        ctrl_1: 'Mobile: swipe left/right to move',
        ctrl_2: 'Mobile: long press + swipe for continuous movement',
        ctrl_3: 'Mobile: swipe down to hard drop (tap for one step)',
        ctrl_4: 'Column total of 10/20/30/40/50 clears it',
        ctrl_5: '"S" appears 1/20 chance, forces column to nearest target',
        ctrl_mode_label: '🎮 Controls',
        ctrl_mode_swipe: 'Swipe',
        ctrl_mode_btn_label: 'Button',
        diff_easy_label: 'Easy',
        diff_normal_label: 'Normal',
        diff_hard_label: 'Hard',
        diff_extreme_label: 'Extreme',
        msg_joker: (target) => `S activated: column adjusted to ${target}!`,
        msg_joker_clear: 'S activated: column cleared!',
        msg_joker_block_added: 'S activated: column cleared! Added an X block at the bottom',
        msg_x_destroy: (sum, base, xCount, xBonus) => `Total ${sum}! ×${xCount} destroyed! +${base}${xBonus > 0 ? `+${xBonus}` : ''} pts`,
        msg_clear: (sum, pts) => `Column total ${sum} cleared! +${pts} pts`,
        msg_building: (sum) => `Column total: ${sum}. Keep stacking until last digit is 0`,
        msg_gameover: 'Stacked to the top!',
        countdown_start: 'START!',
      }
    };

    function t(key, ...args) {
      const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.ja;
      const val = dict[key] !== undefined ? dict[key] : (TRANSLATIONS.ja[key] ?? key);
      return typeof val === 'function' ? val(...args) : val;
    }

    function applyLanguage() {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = t(key);
        if (typeof val === 'string') el.textContent = val;
      });
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const val = t(key);
        if (typeof val === 'string') el.innerHTML = val;
      });
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
      });
      document.documentElement.lang = currentLang;
    }

const ROWS = 8;
    let COLS = 5;  // デフォルト5列（中級・上級用）。初級は3列に変更される
    const CELL = 60;
    const FALL_INTERVAL = 660;
    const NEGATIVE_CHANCE_DENOM = 10;
    const JOKER_CHANCE_DENOM = 20;
    const UNBREAKABLE_BLOCK = '×';
    let difficulty = 'normal'; // 'easy', 'normal', 'hard', 'extreme'

    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");
    let minSwipeDistance = 30;

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function getViewportSize() {
      const vv = window.visualViewport;
      return {
        width: Math.round(vv ? vv.width : window.innerWidth),
        height: Math.round(vv ? vv.height : window.innerHeight),
      };
    }

    function applyEnvironmentProfile() {
      const root = document.documentElement;
      const { width, height } = getViewportSize();
      const shortSide = Math.min(width, height);
      const isLandscape = width > height;
      const isTouch = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
      const isCompact = height < 680 || shortSide < 380;
      const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const widthPadding = width < 768 ? 20 : (isTouch ? 56 : 96);
      const canvasByWidth = clamp(width - widthPadding, 160, 300);
      const reservedHeight = isLandscape ? (isTouch ? 170 : 210) : (isTouch ? 250 : 300);
      const canvasByHeight = clamp((height - reservedHeight) * (5 / 8), 160, 300);
      const canvasFit = Math.round(Math.min(canvasByWidth, canvasByHeight));

      const uiScale = clamp(shortSide / 390, 0.82, 1.1);
      const touchTarget = Math.round(clamp(shortSide * 0.12, 46, 74));
      minSwipeDistance = Math.round(clamp(shortSide * 0.08, 24, 56));

      root.style.setProperty("--canvas-fit-width", `${canvasFit}px`);
      root.style.setProperty("--ui-scale", uiScale.toFixed(3));
      root.style.setProperty("--touch-target", `${touchTarget}px`);
      root.style.setProperty("--vh", `${height * 0.01}px`);

      root.classList.toggle("env-touch", isTouch);
      root.classList.toggle("env-landscape", isLandscape);
      root.classList.toggle("env-compact", isCompact);
      root.classList.toggle("env-reduced-motion", isReducedMotion);
    }

    let environmentProfileRaf = null;
    function scheduleEnvironmentProfile() {
      if (environmentProfileRaf) return;
      environmentProfileRaf = requestAnimationFrame(() => {
        environmentProfileRaf = null;
        applyEnvironmentProfile();
      });
    }

    const scoreEl = document.getElementById("score");
    const nextEl = document.getElementById("next");
    const statusEl = document.getElementById("status");
    const totalsEl = document.getElementById("totals");
    const msgEl = document.getElementById("message");
    const restartBtn = document.getElementById("restart");
    const dropBtn = document.getElementById("drop");

    const mobileScoreEl = document.getElementById("mobile-score");
    const mobileNextEl = document.getElementById("mobile-next");
    const mobileTotalsContainer = document.getElementById("mobile-totals");

    let board;
    let piece;
    let nextValue;
    let score;
    let gameOver;
    let lastTick = 0;
    const CLEAR_TARGETS = new Set([10, 20, 30, 40, 50]);
    const X_CLEAR_TARGETS = new Set([11,21,31,41,51,17,27,37,47,57]);
    let restartCount = 0;
    let isPaused = false;
    let gameplayStartedAt = null;
    let gameLoopRafId = null;
    let isGameLoopRunning = false;
    let gameStartCountdownTimer = null;

    // パーティクル効果用の配列
    let particles = [];
    let xDestroyFx = {
      active: false,
      life: 0,
      maxLife: 0,
      columnX: 0,
      xCount: 0
    };

    // ローカルストレージキー
    const HIGH_SCORE_KEY = (diff) => `number-fall-highscore-${diff}`;

    // ハイスコア管理
    function saveScore(currentScore, difficultyLevel) {
      const key = HIGH_SCORE_KEY(difficultyLevel);
      const highScore = parseInt(localStorage.getItem(key) || "0", 10);
      if (currentScore > highScore) {
        localStorage.setItem(key, currentScore.toString());
        return true; // 新記録
      }
      return false;
    }

    function getHighScore(difficultyLevel) {
      const key = HIGH_SCORE_KEY(difficultyLevel);
      return parseInt(localStorage.getItem(key) || "0", 10);
    }

    // オンライン判定
    function isOnline() {
      return navigator.onLine;
    }

    // 操作モード設定
    const CONTROL_MODE_KEY = 'number-fall-control-mode';
    let controlMode = localStorage.getItem(CONTROL_MODE_KEY) || 'swipe';

    function applyControlMode(mode) {
      controlMode = mode;
      localStorage.setItem(CONTROL_MODE_KEY, mode);
      document.body.classList.toggle('control-mode-button', mode === 'button');
      document.querySelectorAll('.ctrl-mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
      });
    }

    // 音量設定キー
    const VOLUME_SETTINGS_KEY = 'number-fall-volume-settings';

    // 音量管理
    function saveVolumeSettings(bgmVolume, sfxVolume) {
      const settings = {
        bgm: bgmVolume,
        sfx: sfxVolume
      };
      localStorage.setItem(VOLUME_SETTINGS_KEY, JSON.stringify(settings));
    }

    function loadVolumeSettings() {
      const stored = localStorage.getItem(VOLUME_SETTINGS_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          console.error('Failed to parse volume settings:', e);
        }
      }
      return { bgm: 40, sfx: 100 }; // デフォルト値
    }

    function applyVolumeSettings(bgmVolume, sfxVolume) {
      const bgmEl = document.getElementById('bgm');
      if (bgmEl) {
        bgmEl.volume = bgmVolume / 100;
      }
      // 効果音は各エレメントに適用（現在は参照のみ）
      for (let i = 1; i <= 5; i++) {
        const sfxEl = document.getElementById(`sound-${i}`);
        if (sfxEl) {
          sfxEl.volume = sfxVolume / 100;
        }
      }
    }

    // Google AdMob API
    function getAdMobPlugin() {
      // Support both Capacitor plugin access and Cordova plugin access.
      return window.Capacitor?.Plugins?.AdMob || window.cordova?.plugins?.AdMob || null;
    }

    function isNativeRuntime() {
      const isCapacitorNative = typeof window.Capacitor?.isNativePlatform === "function"
        ? window.Capacitor.isNativePlatform()
        : false;
      return isCapacitorNative || !!window.cordova;
    }
    const AD_UNIT_ID = "ca-app-pub-3971025355366226/6697623179";
    const REWARDED_AD_UNIT_ID = "ca-app-pub-3971025355366226/3799863640";
    const PLAY_STORE_MODE = true;
    const ADS_TEST_MODE = !PLAY_STORE_MODE;
    const ENABLE_FULL_SCREEN_AD_TAP = !PLAY_STORE_MODE;
    const AD_MANDATORY_SECONDS = PLAY_STORE_MODE ? 5 : 30;
    const COMPANY_AD_RATIO = 0.2; // 自社広告の表示割合（0.2 = 20%）

    // 自社広告データ
    const companyAds = [
      { videoUrl: "videos/ad1.mp4", title: "ゲーム1", url: "https://example.com" },
      { videoUrl: "videos/ad2.mp4", title: "アプリ", url: "https://example.com" },
    ];
    let activeAdUrl = "";
    let adCountdownLeft = 0;
    let adCountdownTimer = null;
    let adAfterCloseAction = null;
    let pendingNativeAdClose = false;

    function invokeAdAfterCloseAction() {
      const afterClose = adAfterCloseAction;
      adAfterCloseAction = null;
      if (typeof afterClose === "function") {
        afterClose();
      }
    }

    function getCompanyAd() {
      return companyAds[Math.floor(Math.random() * companyAds.length)];
    }

    function updateAdCloseButton() {
      const closeBtn = document.getElementById("ad-close");
      const adType = document.getElementById("ad-type");
      if (!closeBtn || !adType) return;

      if (adCountdownLeft > 0) {
        closeBtn.disabled = true;
        closeBtn.textContent = `× ${adCountdownLeft}`;
        adType.textContent = `リワード広告: あと${adCountdownLeft}秒でスキップ可`;
      } else {
        closeBtn.disabled = false;
        closeBtn.textContent = "×";
        adType.textContent = "リワード広告: スキップ可能";
      }

      const tapHint = document.querySelector(".ad-tap-hint");
      if (tapHint) {
        tapHint.textContent = ENABLE_FULL_SCREEN_AD_TAP
          ? "画面のどこでもタップでリンクを開きます"
          : "リンク先へ移動ボタンから遷移できます";
      }
    }

    function startAdCountdown(seconds = AD_MANDATORY_SECONDS) {
      clearInterval(adCountdownTimer);
      adCountdownLeft = seconds;
      updateAdCloseButton();

      adCountdownTimer = setInterval(() => {
        adCountdownLeft--;
        updateAdCloseButton();
        if (adCountdownLeft <= 0) {
          clearInterval(adCountdownTimer);
          adCountdownTimer = null;
        }
      }, 1000);
    }

    function openAdLink() {
      if (!activeAdUrl) return;
      window.open(activeAdUrl, "_blank");
      closeAd(true);
    }

    function showCompanyAd({ onClosed = null } = {}) {
      const ad = getCompanyAd();
      activeAdUrl = ad.url;
      adAfterCloseAction = onClosed;
      pendingNativeAdClose = false;
      document.getElementById("ad-title").textContent = ad.title;
      
      const videoElement = document.getElementById("ad-video");
      videoElement.src = ad.videoUrl;
      videoElement.currentTime = 0;
      
      const modal = document.getElementById("ad-modal");
      modal.classList.add("show");
      
      // 動画再生開始
      videoElement.play().catch(err => {
        console.error("Video playback failed:", err);
      });
      
      // 動画終了後にカウントダウン開始
      videoElement.onended = () => {
        startAdCountdown();
      };
      
      // 動画が5秒より短い場合もあるので、再生開始時にもカウントダウン設定
      if (videoElement.duration && videoElement.duration < AD_MANDATORY_SECONDS) {
        startAdCountdown(Math.max(1, AD_MANDATORY_SECONDS - Math.floor(videoElement.duration)));
      }
    }

    function closeAd(force = false) {
      if (!force && adCountdownLeft > 0) return;
      
      const videoElement = document.getElementById("ad-video");
      if (videoElement) {
        videoElement.pause();
        videoElement.src = "";
        videoElement.onended = null;
      }
      
      const modal = document.getElementById("ad-modal");
      modal.classList.remove("show");
      clearInterval(adCountdownTimer);
      adCountdownTimer = null;
      adCountdownLeft = 0;
      activeAdUrl = "";
      updateAdCloseButton();

      invokeAdAfterCloseAction();
    }

    function randNumberValue() {
      const value = Math.floor(Math.random() * 9) + 1;
      if (difficulty === 'easy') {
        return value;
      }
      return Math.floor(Math.random() * NEGATIVE_CHANCE_DENOM) === 0 ? -value : value;
    }

    function randPieceValue() {
      if (difficulty === 'easy') {
        return randNumberValue();
      }
      const chanceDenom = difficulty === 'extreme' ? 15 : difficulty === 'hard' ? 30 : 20;
      if (Math.floor(Math.random() * chanceDenom) === 0) {
        return "S";
      }
      return randNumberValue();
    }

    // Google AdMob 初期化
    function initAdMob() {
      if (!isNativeRuntime()) return; // ネイティブ環境のみ

      const adMob = getAdMobPlugin();
      if (!adMob || typeof adMob.initialize !== "function") {
        console.warn("AdMob plugin is not available. Native ads are disabled.");
        return;
      }

      Promise.resolve(adMob.initialize({
        requestTrackingAuthorization: true,
        initializeForTesting: ADS_TEST_MODE
      })).catch(err => {
        console.warn("AdMob initialize failed:", err);
      });
    }

    function showInterstitialAd({ onClosed = null } = {}) {
      // オフライン時は広告を表示しない
      if (!isOnline()) {
        if (typeof onClosed === "function") {
          onClosed();
        }
        return;
      }

      // 20%の確率で自社広告を表示（2割:8割の割合）
      if (Math.random() < COMPANY_AD_RATIO) {
        showCompanyAd({ onClosed });
        return;
      }

      const adMob = getAdMobPlugin();
      if (!isNativeRuntime() || !adMob) {
        showCompanyAd({ onClosed });
        return;
      }

      const hasRewarded =
        typeof adMob.prepareRewardVideoAd === "function" &&
        typeof adMob.showRewardVideoAd === "function";

      const hasInterstitial =
        typeof adMob.prepareInterstitial === "function" &&
        typeof adMob.showInterstitial === "function";

      if (hasRewarded) {
        Promise.resolve(adMob.prepareRewardVideoAd({
          adId: REWARDED_AD_UNIT_ID,
          isTesting: ADS_TEST_MODE
        })).then(() => {
          adAfterCloseAction = onClosed;
          pendingNativeAdClose = true;
          return Promise.resolve(adMob.showRewardVideoAd());
        }).catch(err => {
          console.log("Rewarded ad load failed:", err);
          if (!hasInterstitial) {
            pendingNativeAdClose = false;
            showCompanyAd({ onClosed });
            return;
          }
          Promise.resolve(adMob.prepareInterstitial({
            adId: AD_UNIT_ID,
            isTesting: ADS_TEST_MODE
          })).then(() => {
            adAfterCloseAction = onClosed;
            pendingNativeAdClose = true;
            return Promise.resolve(adMob.showInterstitial());
          }).catch(err2 => {
            console.log("Interstitial load failed:", err2);
            pendingNativeAdClose = false;
            showCompanyAd({ onClosed });
          });
        });
        return;
      }

      if (!hasInterstitial) {
        showCompanyAd({ onClosed });
        return;
      }

      Promise.resolve(adMob.prepareInterstitial({
        adId: AD_UNIT_ID,
        isTesting: ADS_TEST_MODE
      })).then(() => {
        adAfterCloseAction = onClosed;
        pendingNativeAdClose = true;
        return Promise.resolve(adMob.showInterstitial());
      }).catch(err => {
        console.log("Interstitial load failed:", err);
        pendingNativeAdClose = false;
        showCompanyAd({ onClosed });
      });
    }

    function resolveNativeAdCloseIfPending() {
      if (!pendingNativeAdClose) return;
      pendingNativeAdClose = false;
      invokeAdAfterCloseAction();
    }

    function pauseAllMediaPlayback() {
      document.querySelectorAll("audio, video").forEach(media => {
        if (!media.paused) {
          media.pause();
        }
      });
    }

    function resumeBgmForCurrentState() {
      const bgm = document.getElementById("bgm");
      if (!bgm) return;

      const titleScreen = document.getElementById("title-screen");
      const isPlaying = titleScreen && titleScreen.classList.contains("hidden");
      const shouldPlayBgm = (!isPlaying) || (isPlaying && !gameOver && !isPaused);

      if (!shouldPlayBgm) return;

      bgm.play().catch(e => console.log('BGM resume failed:', e));
    }

    function handleAppBackgrounded() {
      pauseAllMediaPlayback();

      const titleScreen = document.getElementById("title-screen");
      const isPlaying = titleScreen && titleScreen.classList.contains("hidden");
      if (isPlaying && !gameOver && !isPaused) {
        isPaused = true;
        document.getElementById("pause-modal").classList.add("show");
      }
    }

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        resolveNativeAdCloseIfPending();
        resumeBgmForCurrentState();
      } else {
        handleAppBackgrounded();
      }
    });

    window.addEventListener("blur", () => {
      handleAppBackgrounded();
    });

    window.addEventListener("pagehide", () => {
      handleAppBackgrounded();
    });

    document.addEventListener("pause", () => {
      handleAppBackgrounded();
    }, false);

    const capacitorApp = window.Capacitor?.Plugins?.App;
    if (capacitorApp && typeof capacitorApp.addListener === "function") {
      capacitorApp.addListener("appStateChange", ({ isActive }) => {
        if (isActive) {
          resolveNativeAdCloseIfPending();
          resumeBgmForCurrentState();
        } else {
          handleAppBackgrounded();
        }
      });
    }

    window.addEventListener("focus", () => {
      resolveNativeAdCloseIfPending();
    });

    function colorForValue(v) {
      if (v === "S") {
        return "#245b9b";
      }
      if (v === UNBREAKABLE_BLOCK) {
        return "#5a6475";
      }
      if (typeof v !== "number" || !Number.isFinite(v)) {
        return "#4a5568";
      }
      const hue = 10 + v * 28;
      return `hsl(${hue} 85% 58%)`;
    }

    // パーティクル効果
    class Particle {
      constructor(x, y, color, intensity = 1) {
        this.x = x;
        this.y = y;
        const speedBoost = 1 + (intensity - 1) * 0.25;
        this.vx = (Math.random() - 0.5) * 8 * speedBoost;
        this.vy = ((Math.random() - 0.5) * 8 - 2) * speedBoost;
        this.life = 1.0;
        this.decay = Math.max(0.008, (0.015 + Math.random() * 0.015) - intensity * 0.0012);
        this.size = 3 + Math.random() * (4 + intensity * 0.8);
        this.color = color;
        this.gravity = 0.3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.life -= this.decay;
        return this.life > 0;
      }

      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function createParticlesForCell(x, y, value, intensity = 1) {
      const cellX = x * CELL + CELL / 2;
      const cellY = y * CELL + CELL / 2;
      const color = colorForValue(value);
      const particleCount = 10 + intensity * 3;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(cellX, cellY, color, intensity));
      }
    }

    function createColumnBurst(x, sum) {
      const intensity = Math.min(5, Math.max(1, Math.floor(sum / 10)));
      const centerX = x * CELL + CELL / 2;
      const centerY = ROWS * CELL * 0.55;
      const burstCount = intensity * 8;

      for (let i = 0; i < burstCount; i++) {
        particles.push(new Particle(centerX, centerY, "#ffd166", intensity + 1));
      }
    }

    function createXDestroyBurst(x, sum, xCount) {
      const baseIntensity = Math.min(6, Math.max(2, Math.floor(sum / 10) + 1));
      const centerX = x * CELL + CELL / 2;
      const topY = ROWS * CELL * 0.2;
      const middleY = ROWS * CELL * 0.5;
      const bottomY = ROWS * CELL * 0.82;
      const extra = Math.max(1, xCount);
      const burstCount = baseIntensity * (18 + extra * 3);
      const colors = ["#ffd166", "#ff7b7b", "#7bdff2", "#ffffff"];

      for (let i = 0; i < burstCount; i++) {
        const color = colors[i % colors.length];
        const yAnchor = i % 3 === 0 ? topY : (i % 3 === 1 ? middleY : bottomY);
        particles.push(new Particle(centerX, yAnchor, color, baseIntensity + 1));
      }
    }

    function triggerXDestroyEffect(x, xCount, sum) {
      const baseLife = 28 + Math.min(20, xCount * 2 + Math.floor(sum / 10));
      xDestroyFx = {
        active: true,
        life: baseLife,
        maxLife: baseLife,
        columnX: x,
        xCount
      };
    }

    function updateAndDrawXDestroyEffect() {
      if (!xDestroyFx.active) return;

      const totalWidth = COLS * CELL;
      const offsetX = COLS === 3 ? (canvas.width - totalWidth) / 2 : 0;
      const progress = 1 - xDestroyFx.life / xDestroyFx.maxLife;
      const fade = Math.max(0, xDestroyFx.life / xDestroyFx.maxLife);
      const centerX = offsetX + xDestroyFx.columnX * CELL + CELL / 2;
      const centerY = ROWS * CELL * 0.52;
      const ringRadius = CELL * (0.9 + progress * 7.2);
      const laserCount = 4 + Math.min(8, xDestroyFx.xCount * 2);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      const flash = ctx.createRadialGradient(centerX, centerY, CELL * 0.5, centerX, centerY, ringRadius * 1.25);
      flash.addColorStop(0, `rgba(255,255,255,${0.40 * fade})`);
      flash.addColorStop(0.4, `rgba(255,196,102,${0.30 * fade})`);
      flash.addColorStop(1, "rgba(255,120,120,0)");
      ctx.fillStyle = flash;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = Math.max(2, 10 * fade);
      ctx.strokeStyle = `rgba(255,255,255,${0.85 * fade})`;
      ctx.beginPath();
      ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.lineWidth = Math.max(1, 5 * fade);
      for (let i = 0; i < laserCount; i++) {
        const phase = progress * 18 + i * 0.9;
        const sway = Math.sin(phase) * (CELL * 0.55);
        const startX = centerX + sway;
        const endX = centerX - sway * 0.35;
        ctx.strokeStyle = `rgba(${255 - i * 12},${190 + i * 6},255,${0.55 * fade})`;
        ctx.beginPath();
        ctx.moveTo(startX, 0);
        ctx.lineTo(endX, ROWS * CELL);
        ctx.stroke();
      }

      ctx.restore();

      xDestroyFx.life--;
      if (xDestroyFx.life <= 0) {
        xDestroyFx.active = false;
      }
    }

    function updateAndDrawParticles() {
      particles = particles.filter(p => p.update());
      particles.forEach(p => p.draw(ctx));
    }

    function initBoard() {
      return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    }

    function newPiece(value) {
      return { x: Math.floor(COLS / 2), y: 0, value };
    }

    function canMove(nx, ny) {
      if (nx < 0 || nx >= COLS) return false;
      if (ny >= ROWS) return false;
      return board[ny][nx] === 0;
    }

    function spawnPiece() {
      piece = newPiece(nextValue);
      nextValue = randPieceValue();
      nextEl.textContent = nextValue;
      if (mobileNextEl) mobileNextEl.textContent = nextValue;
      if (!canMove(piece.x, piece.y)) {
        gameOver = true;
        statusEl.textContent = "GAME OVER";
        msgEl.textContent = t('msg_gameover');
        
        // BGM を停止
        const bgm = document.getElementById("bgm");
        if (bgm) {
          bgm.pause();
        }
        
        showGameOverScreen();
      }
    }

    function getDifficultyLabel() {
      if (difficulty === 'easy') return t('diff_easy_label');
      if (difficulty === 'hard') return t('diff_hard_label');
      if (difficulty === 'extreme') return t('diff_extreme_label');
      return t('diff_normal_label');
    }

    function formatDuration(ms) {
      const totalSec = Math.max(0, Math.floor(ms / 1000));
      const min = Math.floor(totalSec / 60);
      const sec = totalSec % 60;
      return `${min}分${String(sec).padStart(2, '0')}秒`;
    }

    function showGameOverScreen() {
      const gameoverOverlay = document.getElementById("gameover-overlay");
      const finalScoreEl = document.getElementById("final-score");
      const finalDurationEl = document.getElementById("final-duration");
      const finalDifficultyEl = document.getElementById("final-difficulty");
      const finalHighScoreEl = document.getElementById("final-high-score");
      finalScoreEl.textContent = score;
      const elapsedMs = gameplayStartedAt ? (Date.now() - gameplayStartedAt) : 0;
      if (finalDurationEl) finalDurationEl.textContent = formatDuration(elapsedMs);
      if (finalDifficultyEl) finalDifficultyEl.textContent = getDifficultyLabel();
      
      // ハイスコアを保存して表示
      saveScore(score, difficulty);
      if (finalHighScoreEl) finalHighScoreEl.textContent = getHighScore(difficulty);
      
      gameoverOverlay.classList.add("show");
    }

    function closeGameOverScreen() {
      const gameoverOverlay = document.getElementById("gameover-overlay");
      gameoverOverlay.classList.remove("show");
    }

    function nearestTarget(sum) {
      const targets = Array.from(CLEAR_TARGETS);
      let best = targets[0];
      let bestDist = Math.abs(sum - best);
      for (let i = 1; i < targets.length; i++) {
        const dist = Math.abs(sum - targets[i]);
        if (dist < bestDist) {
          best = targets[i];
          bestDist = dist;
        }
      }
      return best;
    }

    function applyJokerToColumn(x, y) {
      const current = columnSum(x);
      const target = nearestTarget(current);
      const adjust = target - current;
      board[y][x] = adjust;
      msgEl.textContent = t('msg_joker', target);
    }

    function lockPiece() {
      const isJoker = (piece.value === "S");
      if (isJoker) {
        applyJokerToColumn(piece.x, piece.y);
      } else {
        board[piece.y][piece.x] = piece.value;
      }
      const cleared = resolveColumn(piece.x, isJoker);
      if (isJoker && difficulty === 'extreme' && cleared) {
        const added = addUnbreakableBlockToColumn(piece.x);
        if (added) {
          msgEl.textContent = t('msg_joker_block_added');
        }
      }
      updateColumnTotals();
      spawnPiece();
    }

    function addUnbreakableBlockToColumn(x) {
      for (let y = ROWS - 1; y >= 0; y--) {
        if (board[y][x] === 0) {
          board[y][x] = UNBREAKABLE_BLOCK;
          return true;
        }
      }
      return false;
    }
    
    function columnSum(x) {
      let sum = 0;
      for (let y = 0; y < ROWS; y++) {
        const value = board[y][x];
        if (typeof value === 'number' && Number.isFinite(value)) {
          sum += value;
        }
      }
      return sum;
    }

    function updateColumnTotals() {
      const columnTotalsStat = document.getElementById('column-totals-stat');
      
      // 上級・最上級では合計表示欄を非表示
      if (difficulty === 'hard' || difficulty === 'extreme') {
        if (mobileTotalsContainer) {
          mobileTotalsContainer.style.display = 'none';
        }
        if (columnTotalsStat) {
          columnTotalsStat.style.display = 'none';
        }
        return;
      }
      
      // 初級と中級では表示
      if (mobileTotalsContainer) {
        mobileTotalsContainer.style.display = 'flex';
      }
      if (columnTotalsStat) {
        columnTotalsStat.style.display = 'block';
      }
      
      const totals = [];
      for (let x = 0; x < COLS; x++) {
        totals.push(columnSum(x));
      }
      
      // 全COLS列を表示
      totalsEl.textContent = totals.join(" ");
      
      // モバイル用：表示する列のみ表示
      if (mobileTotalsContainer) {
        const columns = mobileTotalsContainer.querySelectorAll('.column-total');
        totals.forEach((total, index) => {
          if (columns[index]) {
            columns[index].textContent = total;
            // 初級時は3列のみ表示、それ以外は5列全部
            if (difficulty === 'easy' && index >= 3) {
              columns[index].style.display = 'none';
            } else {
              columns[index].style.display = 'block';
            }
          }
        });
        // 隠れている要素の表示も調整
        for (let i = totals.length; i < columns.length; i++) {
          if (difficulty === 'easy' && i >= 3) {
            columns[i].style.display = 'none';
          } else {
            columns[i].style.display = 'block';
          }
        }
      }
    }

    function playSoundEffect(scoreValue) {
      const milestones = [10, 20, 30, 40, 50];
      if (milestones.includes(scoreValue)) {
        const soundIndex = milestones.indexOf(scoreValue) + 1;
        const audio = document.getElementById(`sound-${soundIndex}`);
        if (audio) {
          audio.volume = 0.7;
          audio.currentTime = 0;
          audio.play().catch(e => console.log('Audio play failed:', e));
          console.log(`Playing sound-${soundIndex} at sum ${scoreValue}`);
        }
      }
    }

    function resolveColumn(x, isJoker = false) {
      let count = 0;
      for (let y = ROWS - 1; y >= 0; y--) {
        const v = board[y][x];
        if (v !== 0 && v !== UNBREAKABLE_BLOCK) count++;
      }
      const sum = columnSum(x);
      const effectIntensity = Math.min(5, Math.max(1, Math.floor(sum / 10)));

      if (CLEAR_TARGETS.has(sum)) {
        for (let y = 0; y < ROWS; y++) {
          if (board[y][x] !== 0 && board[y][x] !== UNBREAKABLE_BLOCK) {
            createParticlesForCell(x, y, board[y][x], effectIntensity);
            board[y][x] = 0;
          }
        }
        createColumnBurst(x, sum);
        // Sで消した場合0点、通常は合計×10点
        if (!isJoker) {
          score += sum * 10;
          scoreEl.textContent = score;
          if (mobileScoreEl) mobileScoreEl.textContent = score;
          playSoundEffect(sum);
        }
        msgEl.textContent = isJoker ? t('msg_joker_clear') : t('msg_clear', sum, sum * 10);
        setTimeout(() => {
          if (!gameOver) msgEl.textContent = "";
        }, 800);
        return true;
      } else if (difficulty === 'extreme' && X_CLEAR_TARGETS.has(sum)) {
        // 最上級: 11/21/31/41/51 または 17/27/37/47/57 で×ブロックも含めて全消去
        let xCount = 0;
        for (let y = 0; y < ROWS; y++) {
          if (board[y][x] === UNBREAKABLE_BLOCK) xCount++;
        }
        if (xCount === 0) {
          msgEl.textContent = t('msg_building', sum);
          return false;
        }
        for (let y = 0; y < ROWS; y++) {
          if (board[y][x] !== 0) {
            createParticlesForCell(x, y, board[y][x], effectIntensity);
            board[y][x] = 0;
          }
        }
        createXDestroyBurst(x, sum, xCount);
        triggerXDestroyEffect(x, xCount, sum);
        const baseScore = Math.floor(sum / 10) * 100;
        const xBonus = xCount * 200;
        score += baseScore + xBonus;
        scoreEl.textContent = score;
        if (mobileScoreEl) mobileScoreEl.textContent = score;
        msgEl.textContent = t('msg_x_destroy', sum, baseScore, xCount, xBonus);
        setTimeout(() => {
          if (!gameOver) msgEl.textContent = "";
        }, 1200);
        return true;
      } else {
        msgEl.textContent = t('msg_building', sum);
        return false;
      }
    }

    function dropOne() {
      if (gameOver) return;
      if (canMove(piece.x, piece.y + 1)) {
        piece.y++;
      } else {
        lockPiece();
      }
    }

    function hardDrop() {
      if (gameOver) return;
      while (canMove(piece.x, piece.y + 1)) {
        piece.y++;
      }
      lockPiece();
    }

    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 初級のみ中央揃え、中級・上級は左寄せ
      const totalWidth = COLS * CELL;
      const offsetX = COLS === 3 ? (canvas.width - totalWidth) / 2 : 0;

      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          const px = offsetX + x * CELL;
          const py = y * CELL;
          ctx.fillStyle = "rgba(255,255,255,0.68)";
          ctx.fillRect(px, py, CELL, CELL);
          ctx.strokeStyle = "rgba(31,36,48,0.12)";
          ctx.strokeRect(px, py, CELL, CELL);

          const v = board?.[y]?.[x] ?? 0;
          if (v === "S" || v === UNBREAKABLE_BLOCK || (typeof v === "number" && Number.isFinite(v) && v !== 0)) {
            drawCell(px, py, v, false);
          }
        }
      }

      if (!gameOver && piece) {
        drawCell(offsetX + piece.x * CELL, piece.y * CELL, piece.value, true);
      }
    }

    function drawCell(px, py, value, active) {
      const grad = ctx.createLinearGradient(px, py, px, py + CELL);
      const base = colorForValue(value);
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.18, base);
      grad.addColorStop(1, "#182128");

      ctx.fillStyle = grad;
      ctx.fillRect(px + 4, py + 4, CELL - 8, CELL - 8);

      if (active) {
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.strokeRect(px + 4, py + 4, CELL - 8, CELL - 8);
      }

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 26px 'Trebuchet MS', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(String(value), px + CELL / 2, py + CELL / 2 + 1);
      ctx.lineWidth = 1;
    }

    function tick(ts) {
      if (!isPaused) {
        if (!lastTick) lastTick = ts;
        if (ts - lastTick >= FALL_INTERVAL) {
          dropOne();
          lastTick = ts;
        }
      } else {
        lastTick = ts;
      }

      drawGrid();
      updateAndDrawParticles();
      updateAndDrawXDestroyEffect();
      gameLoopRafId = requestAnimationFrame(tick);
    }

    function startGameLoop() {
      if (isGameLoopRunning) return;
      isGameLoopRunning = true;
      gameLoopRafId = requestAnimationFrame(tick);
    }

    function clearGameStartCountdown() {
      if (gameStartCountdownTimer) {
        clearInterval(gameStartCountdownTimer);
        gameStartCountdownTimer = null;
      }
      const countdownOverlay = document.getElementById("countdown-overlay");
      const countdownDisplay = document.getElementById("countdown-display");
      if (countdownOverlay) {
        countdownOverlay.classList.remove("show");
      }
      if (countdownDisplay) {
        countdownDisplay.style.fontSize = "120px";
      }
    }

    function togglePause() {
      if (gameOver) return;
      isPaused = !isPaused;
      document.getElementById("pause-modal").classList.toggle("show", isPaused);
      
      // BGM のポーズ制御
      const bgm = document.getElementById("bgm");
      if (bgm) {
        if (isPaused) {
          bgm.pause();
        } else {
          bgm.play().catch(e => console.log('BGM resume failed:', e));
        }
      }
    }

    function toggleMobileMenu() {
      const menu = document.getElementById("mobile-menu");
      const isOpening = !menu.classList.contains("show");
      
      if (isOpening) {
        // メニューを開く時はポーズ
        if (!gameOver && !isPaused) {
          isPaused = true;
        }
        menu.classList.add("show");
      } else {
        // メニューを閉じる時は再開
        menu.classList.remove("show");
        if (!gameOver && isPaused) {
          isPaused = false;
          resumeBgmForCurrentState();
        }
      }
    }

    function closeMobileMenu() {
      const menu = document.getElementById("mobile-menu");
      menu.classList.remove("show");
      // メニューを閉じたら再開
      if (!gameOver && isPaused) {
        isPaused = false;
        resumeBgmForCurrentState();
      }
    }

    function resumeGame() {
      isPaused = false;
      document.getElementById("pause-modal").classList.remove("show");
      resumeBgmForCurrentState();
    }

    function handleGameStart() {
      clearGameStartCountdown();
      // 3秒間のカウントダウン（大きく表示）
      const countdownOverlay = document.getElementById("countdown-overlay");
      const countdownDisplay = document.getElementById("countdown-display");
      countdownOverlay.classList.add("show");
      
      let countdown = 3;
      countdownDisplay.textContent = countdown;
      gameStartCountdownTimer = setInterval(() => {
        countdown--;
        if (countdown > 0) {
          countdownDisplay.textContent = countdown;
        } else if (countdown === 0) {
          countdownDisplay.textContent = t('countdown_start');
          countdownDisplay.style.fontSize = "80px";
        } else {
          clearInterval(gameStartCountdownTimer);
          gameStartCountdownTimer = null;
          countdownOverlay.classList.remove("show");
          countdownDisplay.style.fontSize = "120px"; // リセット
          // カウントダウン終了後、ゲーム開始
          gameplayStartedAt = Date.now();
          isPaused = false;
          lastTick = null;
          resumeBgmForCurrentState();
          startGameLoop();
        }
      }, 1000);
    }

    function quitToTitle() {
      clearGameStartCountdown();
      isPaused = false;
      document.getElementById("pause-modal").classList.remove("show");
      document.getElementById("title-screen").classList.remove("hidden");
      gameOver = true;
      
      // 難易度ボタンの選択状態を更新
      document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('selected'));
      const selectedBtn = document.querySelector(`[data-difficulty="${difficulty}"]`);
      if (selectedBtn) {
        selectedBtn.classList.add('selected');
      }
      
      // BGM を再生開始（タイトル画面へ戻る時）
      const bgm = document.getElementById("bgm");
      if (bgm) {
        bgm.currentTime = 0;
        bgm.play().catch(e => console.log('BGM play failed:', e));
      }
    }

    function resetGame({ showRestartAd = false, onAdClosed = null } = {}) {
      clearGameStartCountdown();
      // ゲーム状態を完全にリセット
      // 広告表示中・カウントダウン中に盤面が進まないよう先に停止
      isPaused = true;
      gameOver = false;
      lastTick = null;
      piece = null;
      gameplayStartedAt = null;
      
      board = initBoard();
      score = 0;
      scoreEl.textContent = score;
      if (mobileScoreEl) mobileScoreEl.textContent = score;
      statusEl.textContent = "PLAYING";
      msgEl.textContent = "";
      
      nextValue = randPieceValue();
      spawnPiece();
      updateColumnTotals();
      
      // リスタート時のみ、2回に1回広告を表示
      if (showRestartAd) {
        restartCount++;
        if (restartCount % 2 === 0) {
          showInterstitialAd({ onClosed: onAdClosed });
          return true;
        }
      }
      
      // BGM を再生開始（既に再生中ならリスタート）
      const bgm = document.getElementById("bgm");
      if (bgm) {
        bgm.currentTime = 0;
        bgm.play().catch(e => console.log('BGM play failed:', e));
      }

      return false;
    }

    function restartWithCountdown() {
      const adShown = resetGame({ showRestartAd: true, onAdClosed: handleGameStart });
      if (!adShown) {
        handleGameStart();
      }
    }

    // スワイプ操作（スマホ用）
    const LONG_PRESS_MS = 180;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    let touchCurrentX = 0;
    let activeTouchId = null;
    let touchLongPressTimer = null;
    let longPressSwipeActive = false;
    let touchDeltaCarryX = 0;
    let consumeNextCanvasClick = false;

    function findTouchById(touchList, id) {
      for (let i = 0; i < touchList.length; i++) {
        if (touchList[i].identifier === id) {
          return touchList[i];
        }
      }
      return null;
    }

    function clearTouchGestureState() {
      if (touchLongPressTimer) {
        clearTimeout(touchLongPressTimer);
        touchLongPressTimer = null;
      }
      activeTouchId = null;
      longPressSwipeActive = false;
      touchDeltaCarryX = 0;
    }

    canvas.addEventListener("touchstart", (e) => {
      if (controlMode === 'button') return;
      if (gameOver || isPaused) return;
      const touch = e.changedTouches[0];
      if (!touch) return;

      touchStartX = touch.screenX;
      touchStartY = touch.screenY;
      touchCurrentX = touch.screenX;
      activeTouchId = touch.identifier;
      longPressSwipeActive = false;
      touchDeltaCarryX = 0;

      if (touchLongPressTimer) clearTimeout(touchLongPressTimer);
      touchLongPressTimer = setTimeout(() => {
        longPressSwipeActive = true;
      }, LONG_PRESS_MS);
    }, { passive: true });

    canvas.addEventListener("touchmove", (e) => {
      if (controlMode === 'button') return;
      if (gameOver || isPaused || activeTouchId === null) return;
      const touch = findTouchById(e.touches, activeTouchId);
      if (!touch) return;

      if (longPressSwipeActive) {
        e.preventDefault();
        touchDeltaCarryX += touch.screenX - touchCurrentX;

        while (touchDeltaCarryX >= minSwipeDistance) {
          if (canMove(piece.x + 1, piece.y)) {
            piece.x++;
          }
          touchDeltaCarryX -= minSwipeDistance;
        }

        while (touchDeltaCarryX <= -minSwipeDistance) {
          if (canMove(piece.x - 1, piece.y)) {
            piece.x--;
          }
          touchDeltaCarryX += minSwipeDistance;
        }
      }

      touchCurrentX = touch.screenX;
      touchEndX = touch.screenX;
      touchEndY = touch.screenY;
    }, { passive: false });

    canvas.addEventListener("touchend", (e) => {
      if (controlMode === 'button') return;
      if (gameOver || isPaused) {
        clearTouchGestureState();
        return;
      }

      const touch = activeTouchId === null
        ? e.changedTouches[0]
        : findTouchById(e.changedTouches, activeTouchId);
      if (touch) {
        touchEndX = touch.screenX;
        touchEndY = touch.screenY;
      }

      const handledByLongPressSwipe = longPressSwipeActive;
      if (!handledByLongPressSwipe) {
        handleSwipe();
      } else {
        consumeNextCanvasClick = true;
      }

      clearTouchGestureState();
    }, { passive: true });

    canvas.addEventListener("touchcancel", () => {
      clearTouchGestureState();
    }, { passive: true });

    function handleSwipe() {
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // 通常スワイプは「下方向の即落下」のみ有効
      if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > minSwipeDistance) {
        hardDrop(); // 下スワイプで即落下
      }
    }

    // タップで1マス落下
    canvas.addEventListener("click", (e) => {
      if (controlMode === 'button') return;
      if (gameOver || isPaused) return;
      if (consumeNextCanvasClick) {
        consumeNextCanvasClick = false;
        return;
      }
      dropOne();
    });

    document.addEventListener("keydown", (e) => {
      if (gameOver || isPaused) return;
      if (e.key === "ArrowLeft" && canMove(piece.x - 1, piece.y)) {
        piece.x--;
      } else if (e.key === "ArrowRight" && canMove(piece.x + 1, piece.y)) {
        piece.x++;
      } else if (e.key === "ArrowDown") {
        dropOne();
      } else if (e.code === "Space") {
        e.preventDefault();
        hardDrop();
      } else if (e.key === "Escape" || e.key === "p" || e.key === "P") {
        togglePause();
      }
    });

    restartBtn.addEventListener("click", restartWithCountdown);
    dropBtn.addEventListener("click", hardDrop);
    const touchLeftBtn = document.getElementById("touch-left");
    const touchRightBtn = document.getElementById("touch-right");
    const touchDownBtn = document.getElementById("touch-down");
    const touchDropBtn = document.getElementById("touch-drop");
    if (touchLeftBtn) {
      touchLeftBtn.addEventListener("click", () => {
        if (gameOver || isPaused) return;
        if (canMove(piece.x - 1, piece.y)) piece.x--;
      });
    }
    if (touchRightBtn) {
      touchRightBtn.addEventListener("click", () => {
        if (gameOver || isPaused) return;
        if (canMove(piece.x + 1, piece.y)) piece.x++;
      });
    }
    if (touchDownBtn) {
      touchDownBtn.addEventListener("click", () => {
        if (gameOver || isPaused) return;
        hardDrop();
      });
    }
    if (touchDropBtn) {
      touchDropBtn.addEventListener("click", () => {
        if (gameOver || isPaused) return;
        hardDrop();
      });
    }
    document.getElementById("ad-close").addEventListener("click", (e) => {
      e.stopPropagation();
      closeAd();
    });
    document.getElementById("ad-visit").addEventListener("click", (e) => {
      e.stopPropagation();
      openAdLink();
    });
    if (ENABLE_FULL_SCREEN_AD_TAP) {
      document.getElementById("ad-content").addEventListener("click", openAdLink);
    }
    document.getElementById("pause").addEventListener("click", togglePause);
    document.getElementById("resume").addEventListener("click", resumeGame);
    document.getElementById("quit").addEventListener("click", quitToTitle);
    
    // ゲームオーバー画面のボタン
    document.getElementById("gameover-restart").addEventListener("click", () => {
      closeGameOverScreen();
      restartWithCountdown();
      // AdMob初期化
      initAdMob();
    });
    document.getElementById("gameover-title").addEventListener("click", () => {
      closeGameOverScreen();
      quitToTitle();
    });

    // モバイルメニュー
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", toggleMobileMenu);
      document.getElementById("mobile-close").addEventListener("click", closeMobileMenu);
      document.getElementById("mobile-restart").addEventListener("click", () => {
        closeMobileMenu();
        // ポーズを解除してからリスタート
        isPaused = false;
        restartWithCountdown();
      });
      document.getElementById("mobile-quit").addEventListener("click", () => {
        closeMobileMenu();
        // ポーズを解除してからタイトルへ
        isPaused = false;
        quitToTitle();
      });
    }

    // 難易度選択ボタンのイベントリスナー
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        difficulty = this.getAttribute('data-difficulty');
        document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        
        // 難易度に応じてCOLSのみ変更（Canvas幅は常に260で固定）
        if (difficulty === 'easy') {
          COLS = 3;
          document.querySelector('.board-card').classList.add('easy-mode');
        } else {
          COLS = 5;
          document.querySelector('.board-card').classList.remove('easy-mode');
        }
      });
    });

    // 設定ボタンと設定モーダルの管理
    const settingsOpenButtons = document.querySelectorAll('[data-open-settings], #settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const settingsCloseBtn = document.getElementById('settings-close');
    const bgmVolumeSlider = document.getElementById('bgm-volume');
    const sfxVolumeSlider = document.getElementById('sfx-volume');
    const bgmVolumeDisplay = document.getElementById('bgm-volume-display');
    const sfxVolumeDisplay = document.getElementById('sfx-volume-display');
    const pauseModal = document.getElementById('pause-modal');
    let settingsUiInitialized = false;

    // 設定を読み込んで表示を接整し、音量を適用
    function initializeVolumeSettings() {
      const settings = loadVolumeSettings();
      bgmVolumeSlider.value = settings.bgm;
      sfxVolumeSlider.value = settings.sfx;
      updateVolumeDisplay();
      applyVolumeSettings(settings.bgm, settings.sfx);
    }

    function updateVolumeDisplay() {
      bgmVolumeDisplay.textContent = bgmVolumeSlider.value + '%';
      sfxVolumeDisplay.textContent = sfxVolumeSlider.value + '%';
    }

    function setupSettingsUi() {
      if (settingsUiInitialized) return;
      settingsUiInitialized = true;

      applyControlMode(controlMode);

      settingsOpenButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.id === 'pause-settings' && pauseModal) {
            pauseModal.style.display = 'none';
          }
          settingsModal.classList.add('show');
        });
      });

      document.querySelectorAll('.ctrl-mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          applyControlMode(btn.getAttribute('data-mode'));
        });
      });

      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          currentLang = btn.getAttribute('data-lang');
          localStorage.setItem(LANG_KEY, currentLang);
          applyLanguage();
        });
      });

      applyLanguage();
    }

    // 設定モーダルを閉じる
    settingsCloseBtn.addEventListener('click', () => {
      settingsModal.classList.remove('show');
    });

    // モーダルの外側をクリックして锥4
    settingsModal.addEventListener('click', (e) => {
      if (e.target === settingsModal) {
        settingsModal.classList.remove('show');
      }
    });

    // BGM音量スライダーの変更を監听
    bgmVolumeSlider.addEventListener('input', () => {
      updateVolumeDisplay();
      const bgm = parseInt(bgmVolumeSlider.value);
      const sfx = parseInt(sfxVolumeSlider.value);
      applyVolumeSettings(bgm, sfx);
      saveVolumeSettings(bgm, sfx);
    });

    // 効果音スライダーの変更を監听
    sfxVolumeSlider.addEventListener('input', () => {
      updateVolumeDisplay();
      const bgm = parseInt(bgmVolumeSlider.value);
      const sfx = parseInt(sfxVolumeSlider.value);
      applyVolumeSettings(bgm, sfx);
      saveVolumeSettings(bgm, sfx);
    });

    // 設定を初沈化して㢨ッグハンドラを接続
    document.addEventListener('DOMContentLoaded', () => {
      initializeVolumeSettings();
      setupSettingsUi();
    });
    // また、DOMが配置済みの場合は即懸実行
    if (document.readyState === 'loading') {
      // DOMContentLoaded 側で初期化
    } else {
      initializeVolumeSettings();
      setupSettingsUi();
    }

    // ゲーム説明：ページネーション機能
    const helpModal = document.getElementById('help-modal');
    const helpBtn = document.getElementById('help-btn');
    const helpCloseBtn = document.getElementById('help-close');
    const helpPrevBtn = document.getElementById('help-prev');
    const helpNextBtn = document.getElementById('help-next');
    const helpCurrentPageEl = document.getElementById('help-current-page');
    const helpPages = document.querySelectorAll('.help-page');
    const totalPages = helpPages.length;
    let currentHelpPage = 0;

    function showHelpPage(pageIndex) {
      // 前ページを隠す
      helpPages.forEach(page => page.style.display = 'none');
      
      // 新しいページを表示
      if (pageIndex >= 0 && pageIndex < totalPages) {
        helpPages[pageIndex].style.display = 'block';
        currentHelpPage = pageIndex;
        helpCurrentPageEl.textContent = (pageIndex + 1);
        
        // ボタンの有効・無効を切り替え
        helpPrevBtn.disabled = pageIndex === 0;
        helpNextBtn.disabled = pageIndex === totalPages - 1;
      }
    }

    // ヘルプボタンクリックでモーダルを開く
    helpBtn.addEventListener('click', () => {
      helpModal.classList.add('show');
      showHelpPage(0); // 最初のページを表示
    });

    // ヘルプモーダルを閉じる
    helpCloseBtn.addEventListener('click', () => {
      helpModal.classList.remove('show');
    });

    // モーダルの外側をクリックして閉じる
    helpModal.addEventListener('click', (e) => {
      if (e.target === helpModal) {
        helpModal.classList.remove('show');
      }
    });

    // 前ページボタン
    helpPrevBtn.addEventListener('click', () => {
      if (currentHelpPage > 0) {
        showHelpPage(currentHelpPage - 1);
      }
    });

    // 次ページボタン
    helpNextBtn.addEventListener('click', () => {
      if (currentHelpPage < totalPages - 1) {
        showHelpPage(currentHelpPage + 1);
      }
    });

    // タイトル画面からゲーム開始
    let gameStarted = false;
    document.getElementById("start-game").addEventListener("click", () => {
      document.getElementById("title-screen").classList.add("hidden");
      
      // 難易度に応じてCOLSのみ変更（Canvas幅は常に260で固定）
      if (difficulty === 'easy') {
        COLS = 3;
        document.querySelector('.board-card').classList.add('easy-mode');
      } else {
        COLS = 5;
        document.querySelector('.board-card').classList.remove('easy-mode');
      }
      
      resetGame();
      handleGameStart();
      // AdMob初期化
      initAdMob();
    });

    // ページロード時にBGMを再生試行（タイトル画面用）
    const bgm = document.getElementById("bgm");
    if (bgm) {
      bgm.volume = 0.4;
      bgm.play().catch(e => {
        console.log('BGM autoplay blocked, will start on user interaction');
        // Autoplay がブロックされた場合は、最初のクリックで再生
        document.addEventListener('click', function startBGM() {
          bgm.play().catch(e => console.log('BGM play failed:', e));
          document.removeEventListener('click', startBGM);
        }, { once: true });
      });
    }

    window.addEventListener('resize', scheduleEnvironmentProfile, { passive: true });
    window.addEventListener('orientationchange', scheduleEnvironmentProfile, { passive: true });
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', scheduleEnvironmentProfile, { passive: true });
      window.visualViewport.addEventListener('scroll', scheduleEnvironmentProfile, { passive: true });
    }

    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (typeof reducedMotionMedia.addEventListener === 'function') {
      reducedMotionMedia.addEventListener('change', scheduleEnvironmentProfile);
    } else if (typeof reducedMotionMedia.addListener === 'function') {
      reducedMotionMedia.addListener(scheduleEnvironmentProfile);
    }

    applyEnvironmentProfile();
